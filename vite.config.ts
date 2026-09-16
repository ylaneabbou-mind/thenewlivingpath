import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

/**
 * Dev-only mock for the /api/human-design-chart serverless function.
 * `vite` cannot run Vercel functions, so this lets us exercise the full
 * front-end flow (loading + result cascade + errors) locally. In production
 * the real function in /api/human-design-chart.ts handles the route.
 * Trigger the error state locally by using "error" as the city.
 */
const humanDesignMock = (): Plugin => ({
  name: "human-design-mock",
  apply: "serve",
  configureServer(server) {
    server.middlewares.use("/api/human-design-chart", (req, res) => {
      let body = "";
      req.on("data", (chunk) => (body += chunk));
      req.on("end", () => {
        const payload = (() => {
          try {
            return JSON.parse(body || "{}");
          } catch {
            return {};
          }
        })();
        const send = (code: number, obj: unknown) => {
          res.statusCode = code;
          res.setHeader("Content-Type", "application/json");
          res.end(JSON.stringify(obj));
        };
        // Simulate the friendly error path.
        if ((payload.city || "").toLowerCase() === "error") {
          return setTimeout(() => send(429, { code: "quota", error: "quota" }), 1200);
        }
        setTimeout(
          () =>
            send(200, {
              chart: {
                type: "Generator",
                strategy: "Wait to Respond",
                authority: "Sacral",
                profile: "3/5",
                definition: "Single Definition",
                incarnationCross: "Right Angle Cross of Tension",
                notSelfTheme: "Frustration",
                signature: "Satisfaction",
                centers: ["Sacral", "Throat"],
                gates: ["20", "34", "38", "39"],
                channels: ["34-20"],
              },
              location: `${payload.city || "Paris"}, ${payload.country || "France"}`,
            }),
          1800
        );
      });
    });
  },
});

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: Number(process.env.PORT) || 8080,
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    mode === "development" && humanDesignMock(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
