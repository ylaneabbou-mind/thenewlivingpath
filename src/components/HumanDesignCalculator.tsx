import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import {
  Sparkles,
  Compass,
  Anchor,
  Layers,
  User,
  Mail,
  Calendar,
  Clock,
  MapPin,
  Globe,
  AlertCircle,
  ArrowRight,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import { useLanguage } from "@/i18n/LanguageContext";
import treeOfLife from "@/assets/tree-of-life.png";

type Chart = {
  type: string | null;
  strategy: string | null;
  authority: string | null;
  profile: string | null;
  definition: string | null;
  incarnationCross: string | null;
  notSelfTheme: string | null;
  signature: string | null;
  centers: string[];
  gates: string[];
  channels: string[];
};

type Status = "idle" | "loading" | "result" | "error";

/** Look up a plain-language explanation by the API's (English) value. */
function explain(dict: Record<string, string>, value: string | null, fallback: string) {
  if (!value) return fallback;
  if (dict[value]) return dict[value];
  const key = Object.keys(dict).find((k) => k.toLowerCase() === value.toLowerCase());
  return key ? dict[key] : fallback;
}

const HumanDesignCalculator = () => {
  const { t, language } = useLanguage();
  const hd = t.resourcesPage.humanDesign;

  const [form, setForm] = useState({
    firstName: "",
    email: "",
    birthDate: "",
    birthTime: "",
    city: "",
    country: "",
  });
  const [status, setStatus] = useState<Status>("idle");
  const [chart, setChart] = useState<Chart | null>(null);
  const [location, setLocation] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const update = (field: keyof typeof form) => (e: { target: { value: string } }) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));

  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim());
  const formValid =
    form.firstName.trim() &&
    emailValid &&
    form.birthDate &&
    form.birthTime &&
    form.city.trim() &&
    form.country.trim();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formValid) {
      setErrorMsg(hd.form.validationError);
      setStatus("error");
      return;
    }
    setStatus("loading");
    setErrorMsg("");
    try {
      const res = await fetch("/api/human-design-chart", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, language }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        const code = (data?.code as keyof typeof hd.errors) || "generic";
        setErrorMsg(hd.errors[code] || hd.errors.generic);
        setStatus("error");
        return;
      }
      setChart(data.chart as Chart);
      setLocation((data.location as string) || "");
      setStatus("result");
    } catch {
      setErrorMsg(hd.errors.generic);
      setStatus("error");
    }
  };

  const reset = () => {
    setStatus("idle");
    setChart(null);
    setErrorMsg("");
  };

  // The four key cards, matched to the site's icon + title + explanation style.
  const cards = chart
    ? [
        {
          icon: Sparkles,
          label: hd.result.typeLabel,
          value: chart.type,
          text: explain(hd.explanations.type, chart.type, hd.explanations.typeFallback),
        },
        {
          icon: Compass,
          label: hd.result.strategyLabel,
          value: chart.strategy,
          text: explain(hd.explanations.strategy, chart.strategy, hd.explanations.strategyFallback),
        },
        {
          icon: Anchor,
          label: hd.result.authorityLabel,
          value: chart.authority,
          text: explain(
            hd.explanations.authority,
            chart.authority,
            hd.explanations.authorityFallback
          ),
        },
        {
          icon: Layers,
          label: hd.result.profileLabel,
          value: chart.profile,
          text: hd.explanations.profileFallback,
        },
      ]
    : [];

  return (
    <div className="container mx-auto max-w-3xl relative z-10">
      {/* Intro */}
      <div className="text-center mb-10 md:mb-14">
        <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-ocre-solaire/10 border border-ocre-solaire/25 text-brun-racine mb-6 md:mb-8">
          <Sparkles className="w-3.5 h-3.5 md:w-4 md:h-4 text-ocre-solaire" />
          <span className="text-xs md:text-sm font-cormorant tracking-wide">{hd.badge}</span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-semibold text-brun-racine mb-3 md:mb-4 leading-[1.25]">
          {hd.title}
        </h2>
        <p className="text-base md:text-lg text-foreground/70 max-w-2xl mx-auto font-light leading-[1.7]">
          {hd.description}
        </p>
      </div>

      {/* FORM */}
      {status !== "loading" && status !== "result" && (
        <Reveal>
          <form
            onSubmit={handleSubmit}
            noValidate
            className="rounded-3xl bg-ivoire-cosmique/70 border border-gris-lune/40 backdrop-blur-sm p-6 md:p-10 shadow-sm"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
              <Field icon={User} label={hd.form.firstName}>
                <input
                  type="text"
                  value={form.firstName}
                  onChange={update("firstName")}
                  placeholder={hd.form.firstNamePlaceholder}
                  className={inputCls}
                  autoComplete="given-name"
                />
              </Field>
              <Field icon={Mail} label={hd.form.email}>
                <input
                  type="email"
                  value={form.email}
                  onChange={update("email")}
                  placeholder={hd.form.emailPlaceholder}
                  className={inputCls}
                  autoComplete="email"
                />
              </Field>
              <Field icon={Calendar} label={hd.form.birthDate}>
                <input
                  type="date"
                  value={form.birthDate}
                  onChange={update("birthDate")}
                  className={inputCls}
                />
              </Field>
              <Field icon={Clock} label={hd.form.birthTime}>
                <input
                  type="time"
                  value={form.birthTime}
                  onChange={update("birthTime")}
                  className={inputCls}
                />
              </Field>
              <Field icon={MapPin} label={hd.form.city}>
                <input
                  type="text"
                  value={form.city}
                  onChange={update("city")}
                  placeholder={hd.form.cityPlaceholder}
                  className={inputCls}
                  autoComplete="off"
                />
              </Field>
              <Field icon={Globe} label={hd.form.country}>
                <input
                  type="text"
                  value={form.country}
                  onChange={update("country")}
                  placeholder={hd.form.countryPlaceholder}
                  className={inputCls}
                  autoComplete="off"
                />
              </Field>
            </div>

            {/* Exact-time note */}
            <p className="mt-4 flex items-start gap-2 text-xs md:text-sm text-bleu-cosmique/90 font-cormorant italic leading-[1.5]">
              <Clock className="w-3.5 h-3.5 md:w-4 md:h-4 mt-0.5 flex-shrink-0" />
              <span>{hd.form.birthTimeNote}</span>
            </p>

            {status === "error" && (
              <p className="mt-4 flex items-start gap-2 text-sm text-terre-claire leading-[1.5]">
                <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>{errorMsg}</span>
              </p>
            )}

            <button
              type="submit"
              className="group mt-7 md:mt-8 w-full md:w-auto md:mx-auto flex items-center justify-center gap-2 px-7 md:px-9 py-3.5 rounded-full bg-gradient-to-r from-brun-racine to-ocre-solaire text-ivoire-cosmique font-medium tracking-wide transition-all duration-300 hover:shadow-glow-gold hover:-translate-y-0.5 active:scale-[0.98]"
            >
              <Sparkles className="w-4 h-4 transition-transform group-hover:rotate-12" />
              {hd.form.submit}
            </button>

            {/* RGPD / privacy note */}
            <p className="mt-6 text-center text-xs text-foreground/50 max-w-xl mx-auto font-light leading-[1.6]">
              {hd.privacy}
            </p>
          </form>
        </Reveal>
      )}

      {/* LOADING — thematic (stars aligning, tree pulsing faster) */}
      {status === "loading" && (
        <div className="flex flex-col items-center justify-center py-16 md:py-24 text-center">
          <div className="relative w-28 h-28 md:w-36 md:h-36 flex items-center justify-center">
            {/* Pulsing rings */}
            <span className="absolute inset-0 rounded-full border border-ocre-solaire/30 animate-ping" />
            <span
              className="absolute inset-2 rounded-full border border-bleu-cosmique/25 animate-ping"
              style={{ animationDelay: "0.4s" }}
            />
            <span className="absolute inset-0 rounded-full bg-ocre-solaire/10 blur-2xl animate-glow-pulse" />
            {/* Orbiting star */}
            <span className="absolute inset-0 animate-spin" style={{ animationDuration: "4s" }}>
              <Sparkles className="w-4 h-4 text-ocre-solaire absolute -top-1 left-1/2 -translate-x-1/2" />
            </span>
            <img
              src={treeOfLife}
              alt=""
              aria-hidden
              className="w-16 h-16 md:w-20 md:h-20 object-contain animate-breathe"
              style={{ animationDuration: "1.8s" }}
            />
          </div>
          <p className="mt-8 text-xl md:text-2xl font-serif text-brun-racine">{hd.loadingTitle}</p>
          <p className="mt-2 text-sm md:text-base font-cormorant italic text-ocre-clair/90">
            {hd.loadingSubtitle}
          </p>
        </div>
      )}

      {/* RESULT — cascade of cards */}
      {status === "result" && chart && (
        <div>
          <Reveal className="text-center mb-8 md:mb-12">
            <p className="text-xs md:text-sm font-cormorant text-ocre-clair tracking-[0.2em] uppercase mb-3">
              {hd.result.eyebrow}
            </p>
            <h3 className="text-2xl md:text-4xl font-serif font-semibold text-brun-racine leading-[1.2]">
              {hd.result.greeting.replace("{name}", form.firstName.trim())}
            </h3>
            {location && (
              <p className="mt-3 text-sm md:text-base text-foreground/60 font-light">
                {hd.result.locationPrefix} {location}
              </p>
            )}
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {cards.map((card, i) => (
              <Reveal key={card.label} delay={i * 140}>
                <article className="group h-full p-5 md:p-7 rounded-2xl bg-ivoire-cosmique/70 border border-gris-lune/40 transition-all duration-300 md:hover:-translate-y-1 md:hover:border-ocre-solaire/40 md:hover:shadow-glow-gold">
                  <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                    <div className="w-11 h-11 md:w-12 md:h-12 rounded-xl bg-ocre-solaire/15 text-ocre-solaire flex items-center justify-center flex-shrink-0 transition-transform duration-500 group-hover:scale-110">
                      <card.icon className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs md:text-sm font-cormorant uppercase tracking-wide text-bleu-cosmique/80">
                        {card.label}
                      </p>
                      <p className="text-lg md:text-xl font-serif font-semibold text-brun-racine truncate">
                        {card.value || "—"}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm md:text-base text-foreground/70 font-light leading-[1.7]">
                    {card.text}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>

          {/* Extra chart details as pills */}
          {(chart.centers.length > 0 || chart.channels.length > 0) && (
            <Reveal delay={560} className="mt-8 md:mt-10 flex flex-wrap items-center justify-center gap-2 md:gap-2.5">
              {chart.definition && <Pill>{chart.definition}</Pill>}
              {chart.centers.map((c) => (
                <Pill key={`center-${c}`}>{c}</Pill>
              ))}
              {chart.channels.map((c) => (
                <Pill key={`channel-${c}`} tone="blue">
                  {c}
                </Pill>
              ))}
            </Reveal>
          )}

          <Reveal delay={640} className="text-center">
            <p className="mt-8 md:mt-10 text-sm md:text-base font-cormorant italic text-ocre-clair/90 max-w-xl mx-auto leading-[1.6]">
              {hd.result.disclaimer}
            </p>

            {/* CTA into the 4-Week Transformational Journey offer */}
            <div className="mt-8 md:mt-10 p-6 md:p-8 rounded-3xl bg-gradient-to-r from-brun-racine/10 to-ocre-solaire/15 border border-ocre-solaire/25">
              <p className="text-base md:text-lg text-brun-racine font-light leading-[1.7] max-w-xl mx-auto mb-5">
                {hd.cta.text}
              </p>
              <Link
                to="/services/vision-alignment"
                className="group inline-flex items-center gap-2 px-7 md:px-9 py-3.5 rounded-full bg-gradient-to-r from-brun-racine to-ocre-solaire text-ivoire-cosmique font-medium tracking-wide transition-all duration-300 hover:shadow-glow-gold hover:-translate-y-0.5 active:scale-[0.98]"
              >
                {hd.cta.button}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            <button
              type="button"
              onClick={reset}
              className="mt-6 text-sm text-bleu-cosmique/80 hover:text-bleu-cosmique underline underline-offset-4 transition-colors"
            >
              {hd.result.recalc}
            </button>
          </Reveal>
        </div>
      )}
    </div>
  );
};

const inputCls =
  "w-full h-11 rounded-xl border border-gris-lune/50 bg-parchemin/60 px-4 text-base text-brun-racine placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-ocre-solaire/40 focus:border-ocre-solaire/50 transition-shadow";

const Field = ({
  icon: Icon,
  label,
  children,
}: {
  icon: typeof User;
  label: string;
  children: React.ReactNode;
}) => (
  <label className="block text-left">
    <span className="mb-1.5 flex items-center gap-1.5 text-sm font-cormorant text-brun-racine/80">
      <Icon className="w-3.5 h-3.5 text-ocre-solaire" />
      {label}
    </span>
    {children}
  </label>
);

const Pill = ({ children, tone = "gold" }: { children: React.ReactNode; tone?: "gold" | "blue" }) => (
  <span
    className={`px-3 py-1.5 rounded-full text-xs md:text-sm font-cormorant border ${
      tone === "blue"
        ? "bg-bleu-cosmique/10 border-bleu-cosmique/25 text-bleu-cosmique"
        : "bg-ocre-solaire/10 border-ocre-solaire/25 text-brun-racine"
    }`}
  >
    {children}
  </span>
);

export default HumanDesignCalculator;
