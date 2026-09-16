/**
 * Vercel serverless function: /api/human-design-chart
 *
 * Free Human Design chart calculator for the Resources page (lead magnet).
 * The Human Design Hub API key lives ONLY here, read from the server-side
 * env var HUMAN_DESIGN_API_KEY. The browser calls this internal route and
 * never sees the key or talks to the third-party API directly.
 *
 * Provider: Human Design Hub (https://humandesignhub.app) — free plan,
 * 100 credits/month, 5 req/min. Full flow per chart = 0.7 credit:
 *   1. GET  /v2/locations/search   (0.1 cr) — city -> IANA timezone + coords
 *   2. POST /v2/timezone/resolve   (0.1 cr) — local date/time -> offset ISO
 *   3. POST /v2/simple-bodygraph   (0.5 cr) — offset ISO -> chart
 */

const HD_BASE = "https://api.humandesignhub.app/v2";
const UPSTREAM_TIMEOUT_MS = 12_000;

// Minimal request/response typing so we don't need the @vercel/node package.
interface Req {
  method?: string;
  body?: unknown;
}
interface Res {
  status: (code: number) => Res;
  json: (body: unknown) => void;
  setHeader: (name: string, value: string) => void;
}

interface FormPayload {
  firstName?: string;
  email?: string;
  birthDate?: string; // YYYY-MM-DD
  birthTime?: string; // HH:MM
  city?: string;
  country?: string;
  language?: string; // "en" | "fr" — only used to tag the captured lead
}

// Error codes the front-end maps to friendly, localized copy.
type ErrorCode =
  | "invalid_input"
  | "location_not_found"
  | "quota"
  | "config"
  | "upstream";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;
const TIME_RE = /^\d{2}:\d{2}$/;

function fail(res: Res, httpStatus: number, code: ErrorCode, detail?: string) {
  res.status(httpStatus).json({ error: code, code, detail });
}

async function hdFetch(path: string, apiKey: string, init: RequestInit = {}) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), UPSTREAM_TIMEOUT_MS);
  try {
    return await fetch(`${HD_BASE}${path}`, {
      ...init,
      signal: controller.signal,
      headers: {
        "Content-Type": "application/json",
        "X-API-KEY": apiKey,
        ...(init.headers || {}),
      },
    });
  } finally {
    clearTimeout(timer);
  }
}

/** Map an upstream HTTP status to one of our friendly error codes. */
function codeForUpstream(status: number): ErrorCode {
  if (status === 429) return "quota"; // free quota / rate limit hit
  if (status === 401 || status === 403) return "config"; // bad/expired key
  return "upstream";
}

export default async function handler(req: Req, res: Res) {
  if (req.method !== "POST") {
    return fail(res, 405, "invalid_input", "Method not allowed");
  }

  const apiKey = process.env.HUMAN_DESIGN_API_KEY;
  if (!apiKey) {
    // Misconfiguration, not the visitor's fault — surface as "config".
    return fail(res, 500, "config", "Missing HUMAN_DESIGN_API_KEY");
  }

  // Body may arrive parsed (Vercel) or as a raw string (some runtimes).
  let payload: FormPayload;
  try {
    payload =
      typeof req.body === "string" ? JSON.parse(req.body) : ((req.body || {}) as FormPayload);
  } catch {
    return fail(res, 400, "invalid_input", "Malformed JSON body");
  }

  const firstName = (payload.firstName || "").trim();
  const email = (payload.email || "").trim();
  const birthDate = (payload.birthDate || "").trim();
  const birthTime = (payload.birthTime || "").trim();
  const city = (payload.city || "").trim();
  const country = (payload.country || "").trim();

  // --- Validation -----------------------------------------------------------
  if (
    !firstName ||
    !EMAIL_RE.test(email) ||
    !DATE_RE.test(birthDate) ||
    !TIME_RE.test(birthTime) ||
    !city
  ) {
    return fail(res, 400, "invalid_input", "Missing or malformed fields");
  }

  // --- Lead capture ---------------------------------------------------------
  // The email is the whole point of this free tool (lead magnet). For now we
  // just log it so it shows up in the Vercel function logs. Birth data is
  // deliberately NOT logged — it is used only for the calculation (RGPD).
  // TODO(Klaviyo): push { email, firstName, source: "human-design-calculator" }
  // to a Klaviyo list here once the marketing integration exists. Failure of
  // that push must never block returning the chart to the visitor.
  console.log(
    JSON.stringify({
      event: "human_design_lead",
      email,
      firstName,
      language: payload.language === "fr" ? "fr" : "en",
      at: new Date().toISOString(),
    })
  );

  try {
    // --- 1. Geocode the city to an IANA timezone (Human Design Hub geocoder).
    // Human Design Hub's own /locations/search already returns the IANA
    // timezone we need, so no separate geocoding service is required.
    const searchRes = await hdFetch(
      `/locations/search?query=${encodeURIComponent(city)}`,
      apiKey
    );
    if (!searchRes.ok) {
      return fail(res, 502, codeForUpstream(searchRes.status), "location lookup failed");
    }
    const searchJson = (await searchRes.json()) as {
      results?: Array<{ label?: string; country?: string; country_code?: string; timezone?: string }>;
    };
    const results = searchJson.results || [];
    if (results.length === 0) {
      return fail(res, 422, "location_not_found");
    }
    // Prefer a result whose country matches what the visitor typed; else first.
    const wantCountry = country.toLowerCase();
    const match =
      (wantCountry &&
        results.find(
          (r) =>
            (r.country || "").toLowerCase().includes(wantCountry) ||
            (r.country_code || "").toLowerCase() === wantCountry
        )) ||
      results[0];
    if (!match.timezone) {
      return fail(res, 422, "location_not_found", "no timezone for city");
    }

    // --- 2. Resolve local birth date/time -> offset-bearing ISO datetime.
    const resolveRes = await hdFetch(`/timezone/resolve`, apiKey, {
      method: "POST",
      body: JSON.stringify({ date: birthDate, time: birthTime, timezone: match.timezone }),
    });
    if (!resolveRes.ok) {
      return fail(res, 502, codeForUpstream(resolveRes.status), "timezone resolve failed");
    }
    const resolveJson = (await resolveRes.json()) as { datetime?: string };
    if (!resolveJson.datetime) {
      return fail(res, 502, "upstream", "no datetime returned");
    }

    // --- 3. Compute the simple bodygraph (free endpoint).
    const chartRes = await hdFetch(`/simple-bodygraph`, apiKey, {
      method: "POST",
      body: JSON.stringify({ datetime: resolveJson.datetime }),
    });
    if (!chartRes.ok) {
      return fail(res, 502, codeForUpstream(chartRes.status), "chart calculation failed");
    }
    const raw = (await chartRes.json()) as Record<string, unknown>;

    // Normalize to just the fields the front-end renders.
    const chart = {
      type: (raw.type as string) ?? null,
      strategy: (raw.strategy as string) ?? null,
      authority: (raw.authority as string) ?? null,
      profile: (raw.profile as string) ?? null,
      definition: (raw.definition as string) ?? null,
      incarnationCross: (raw.incarnation_cross as string) ?? null,
      notSelfTheme: (raw.not_self_theme as string) ?? null,
      signature: (raw.signature as string) ?? null,
      centers: (raw.centers as string[]) ?? [],
      gates: (raw.gates as string[]) ?? [],
      channels: (raw.channels_short as string[]) ?? [],
    };

    res.setHeader("Cache-Control", "no-store");
    return res.status(200).json({ chart, location: match.label ?? city });
  } catch (err) {
    const aborted = (err as { name?: string })?.name === "AbortError";
    return fail(res, 504, "upstream", aborted ? "upstream timeout" : "unexpected error");
  }
}
