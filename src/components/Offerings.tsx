import { Button } from "@/components/ui/button";
import { Compass, Sparkles, Users, Heart } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const icons = [Compass, Sparkles, Users, Heart];
const accents = ["cosmic", "earth", "cosmic", "earth"] as const;

const Offerings = () => {
  const { t } = useLanguage();

  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Explicit grounded brown background - anchored earth tone */}
      <div className="absolute inset-0 bg-argile-clair" />
      <div className="absolute inset-0 bg-gradient-to-br from-sable-doux/70 via-transparent to-terre-douce/30" />
      <div className="absolute inset-0 bg-gradient-to-tl from-terre-accent/[0.04] via-transparent to-ocre-profond/[0.03]" />

      {/* Top edge fade - blends with cosmic section above */}
      <div className="absolute top-0 left-0 right-0 h-[80px] pointer-events-none" style={{ background: 'linear-gradient(to bottom, rgba(0,53,115,0.05) 0%, transparent 100%)' }} />

      {/* Bottom edge fade - prepares for cosmic section below */}
      <div className="absolute bottom-0 left-0 right-0 h-[80px] pointer-events-none" style={{ background: 'linear-gradient(to top, rgba(0,53,115,0.04) 0%, transparent 100%)' }} />

      {/* Subtle warm glows */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-ocre-clair/12 rounded-full blur-[180px]" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-terre-claire/10 rounded-full blur-[150px]" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-20 space-y-4 animate-fade-in">
          <p className="text-sm font-cormorant text-sable-chaud tracking-[0.25em] uppercase">
            {t.offerings.subtitle}
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-brun-racine">
            {t.offerings.title_line1}
            <span className="text-gradient-solar"> {t.offerings.title_line2}</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto font-light">
            {t.offerings.description}
          </p>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-2 ${t.offerings.items.length === 3 ? 'lg:grid-cols-3' : ''} gap-8`}>
          {t.offerings.items.map((offering, index) => {
            const Icon = icons[index];
            const accent = accents[index];

            return (
              <div
                key={offering.title}
                className={`group relative p-8 rounded-2xl border backdrop-blur-sm transition-all duration-500 hover:shadow-soft hover:-translate-y-1 ${accent === "cosmic"
                    ? "bg-bleu-profond/10 border-bleu-cosmique/25 hover:border-bleu-cosmique/50 hover:shadow-glow-blue"
                    : "bg-brun-racine/8 border-brun-racine/25 hover:border-ocre-solaire/50 hover:shadow-glow-gold"
                  }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${accent === "cosmic"
                    ? "bg-bleu-cosmique/15 text-bleu-cosmique"
                    : "bg-ocre-solaire/20 text-ocre-solaire"
                  }`}>
                  <Icon className="w-7 h-7" />
                </div>

                {/* Content */}
                <p className={`text-sm font-cormorant tracking-wide uppercase mb-2 ${accent === "cosmic" ? "text-bleu-atmosphere" : "text-sable-chaud"
                  }`}>
                  {offering.subtitle}
                </p>

                <h3 className="text-2xl font-serif font-semibold text-foreground mb-4">
                  {offering.title}
                </h3>

                <p className="text-foreground/70 leading-relaxed mb-8">
                  {offering.description}
                </p>

                <Button
                  variant="ghost"
                  className={`group/btn px-0 font-medium ${accent === "cosmic"
                      ? "text-bleu-cosmique hover:text-bleu-atmosphere"
                      : "text-ocre-solaire hover:text-ocre-clair"
                    } hover:bg-transparent`}
                >
                  {offering.cta}
                  <span className="ml-2 group-hover/btn:translate-x-1 transition-transform">→</span>
                </Button>
              </div>
            );
          })}
        </div>
      </div>

    </section>
  );
};

export default Offerings;
