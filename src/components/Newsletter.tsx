import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";

const Newsletter = () => {
  const { t } = useLanguage();
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); console.log("Newsletter signup:", email); setSubmitted(true); };

  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Cosmic Stellar Flow background */}
      <div className="absolute inset-0 bg-gradient-stellar" />
      
      {/* Top edge fade - blends with earth section above */}
      <div className="absolute top-0 left-0 right-0 h-[90px] pointer-events-none" style={{ background: 'linear-gradient(to bottom, rgba(243,234,226,0.06) 0%, transparent 100%)' }} />
      
      {/* Bottom edge fade - prepares for dark footer below */}
      <div className="absolute bottom-0 left-0 right-0 h-[100px] pointer-events-none" style={{ background: 'linear-gradient(to top, rgba(111,61,32,0.08) 0%, transparent 100%)' }} />
      
      {/* Deep cosmic glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-bleu-atmosphere/30 rounded-full blur-[200px] animate-glow-pulse" />
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-bleu-profond/40 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/3 left-1/3 w-[350px] h-[350px] bg-ocre-solaire/15 rounded-full blur-[130px] animate-glow-pulse" style={{ animationDelay: "2s" }} />
      
      {/* Subtle star effect */}
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 30% 20%, rgba(255,255,255,0.1) 1px, transparent 1px), radial-gradient(circle at 70% 60%, rgba(255,255,255,0.08) 1px, transparent 1px)', backgroundSize: '120px 120px, 180px 180px' }} />
      
      <div className="container mx-auto max-w-3xl relative z-10">
        <div className="text-center space-y-8 animate-fade-in">
          <p className="text-sm font-cormorant text-ocre-clair tracking-[0.25em] uppercase">{t.newsletter.subtitle}</p>
          
          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-ivoire-cosmique leading-tight">
            {t.newsletter.title_line1}<span className="block mt-2 text-ocre-clair">{t.newsletter.title_line2}</span>
          </h2>
          
          <p className="text-xl text-ivoire-cosmique/80 max-w-xl mx-auto leading-relaxed font-light">
            {t.newsletter.description}
          </p>
          
          {submitted ? (
            <div className="max-w-md mx-auto mt-10 flex flex-col items-center gap-5" role="status" aria-live="polite">
              {/* Check that draws itself */}
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-ocre-solaire/15 border border-ocre-clair/40 shadow-glow-gold motion-safe:animate-fade-in">
                <svg viewBox="0 0 52 52" className="h-9 w-9" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path
                    d="M14 27 L23 36 L39 18"
                    stroke="hsl(var(--ocre-clair))"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ strokeDasharray: 48, strokeDashoffset: 48 }}
                    className="motion-safe:animate-draw-check motion-reduce:[stroke-dashoffset:0]"
                  />
                </svg>
              </span>
              <p className="text-xl md:text-2xl font-serif text-ocre-clair motion-safe:animate-fade-in [text-shadow:0_0_24px_hsl(var(--ocre-solaire)/0.5)]" style={{ animationDelay: "0.25s" }}>
                {t.newsletter.success}
              </p>
            </div>
          ) : (
            <>
              <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10 flex flex-col sm:flex-row gap-4">
                <Input
                  type="email"
                  placeholder={t.newsletter.placeholder}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-ivoire-cosmique/15 backdrop-blur-sm border-ivoire-cosmique/30 text-ivoire-cosmique placeholder:text-ivoire-cosmique/50 focus:border-ocre-clair focus:ring-ocre-clair/30 rounded-lg"
                  required
                />
                <Button type="submit" size="lg" className="cta-motion bg-gradient-solar text-white shadow-glow-gold rounded-lg px-8">
                  {t.newsletter.cta}
                </Button>
              </form>

              <p className="text-sm text-ivoire-cosmique/60 font-light">{t.newsletter.privacy}</p>
            </>
          )}
        </div>
      </div>
      
    </section>
  );
};

export default Newsletter;
