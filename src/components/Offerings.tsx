import { Button } from "@/components/ui/button";
import { Compass, Sparkles, Users, Heart } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const icons = [Compass, Sparkles, Users, Heart];
const accents = ["cosmic", "earth", "cosmic", "earth"] as const;

const Offerings = () => {
  const { t } = useLanguage();

  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* CTA brown background with gradient */}
      <div className="absolute inset-0 bg-cta-brun" />
      <div className="absolute inset-0" style={{ background: 'linear-gradient(90deg, hsl(24 30% 49%) 0%, hsl(26 48% 60%) 100%)' }} />
      <div className="absolute inset-0 bg-gradient-to-br from-parchemin/15 via-transparent to-terre-douce/20" />
      
      {/* Top edge fade - blends with cosmic section above */}
      <div className="absolute top-0 left-0 right-0 h-[80px] pointer-events-none" style={{ background: 'linear-gradient(to bottom, rgba(0,53,115,0.06) 0%, transparent 100%)' }} />
      
      {/* Bottom edge fade - prepares for cosmic section below */}
      <div className="absolute bottom-0 left-0 right-0 h-[80px] pointer-events-none" style={{ background: 'linear-gradient(to top, rgba(0,53,115,0.05) 0%, transparent 100%)' }} />
      
      {/* Subtle warm glows */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-parchemin/15 rounded-full blur-[180px]" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-terre-douce/12 rounded-full blur-[150px]" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-20 space-y-4 animate-fade-in">
          {/* Small label */}
          <p className="text-sm font-cormorant tracking-[0.25em] uppercase" style={{ color: 'rgba(47, 27, 18, 0.70)' }}>
            {t.offerings.subtitle}
          </p>
          {/* Main heading */}
          <h2 className="text-4xl md:text-5xl font-serif font-semibold" style={{ color: '#2F1B12' }}>
            {t.offerings.title_line1}
            <span className="text-bleu-cosmique"> {t.offerings.title_line2}</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto font-light" style={{ color: 'rgba(47, 27, 18, 0.75)' }}>
            {t.offerings.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {t.offerings.items.map((offering, index) => {
            const Icon = icons[index];
            const accent = accents[index];
            
            return (
              <div
                key={offering.title}
                className={`group relative p-8 rounded-2xl border backdrop-blur-sm transition-all duration-500 hover:shadow-soft hover:-translate-y-1 ${
                  accent === "cosmic"
                    ? "bg-bleu-profond/15 border-bleu-cosmique/30 hover:border-bleu-cosmique/60 hover:shadow-glow-blue"
                    : "bg-terre-douce/20 border-terre-accent/30 hover:border-terre-accent/60 hover:shadow-glow-gold"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${
                  accent === "cosmic"
                    ? "bg-bleu-cosmique/20 text-bleu-cosmique"
                    : "bg-terre-accent/25 text-terre-accent"
                }`}>
                  <Icon className="w-7 h-7" />
                </div>

                {/* Content */}
                <p className={`text-sm font-cormorant tracking-wide uppercase mb-2 ${
                  accent === "cosmic" ? "text-bleu-cosmique" : "text-terre-accent"
                }`}>
                  {offering.subtitle}
                </p>
                
                <h3 className="text-2xl font-serif font-semibold mb-4" style={{ color: '#2F1B12' }}>
                  {offering.title}
                </h3>
                
                <p className="leading-relaxed mb-8" style={{ color: 'rgba(47, 27, 18, 0.80)' }}>
                  {offering.description}
                </p>

                <Button 
                  variant="ghost" 
                  className={`group/btn px-0 font-medium ${
                    accent === "cosmic" 
                      ? "text-bleu-cosmique hover:text-bleu-profond" 
                      : "text-terre-accent hover:text-ocre-profond"
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
