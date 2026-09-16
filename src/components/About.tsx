import { useLanguage } from "@/i18n/LanguageContext";
import Reveal from "@/components/Reveal";
import { useReveal } from "@/hooks/useReveal";
import aboutYlane from "@/assets/about-ylane.jpg";

const About = () => {
  const { t } = useLanguage();
  const { ref: pillsRef, inView: pillsInView } = useReveal<HTMLDivElement>({ threshold: 0.4 });

  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Cosmic Stellar Flow background */}
      <div className="absolute inset-0 bg-gradient-stellar" />
      
      {/* Top edge fade - blends with earth section above */}
      <div className="absolute top-0 left-0 right-0 h-[90px] pointer-events-none" style={{ background: 'linear-gradient(to bottom, rgba(243,234,226,0.07) 0%, transparent 100%)' }} />
      
      {/* Bottom edge fade - prepares for earth section below */}
      <div className="absolute bottom-0 left-0 right-0 h-[90px] pointer-events-none" style={{ background: 'linear-gradient(to top, rgba(243,234,226,0.06) 0%, transparent 100%)' }} />
      
      {/* Cosmic glow effects */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-bleu-atmosphere/25 rounded-full blur-[200px] animate-glow-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-bleu-profond/30 rounded-full blur-[150px]" />
      <div className="absolute top-1/2 right-1/3 w-[300px] h-[300px] bg-ocre-solaire/15 rounded-full blur-[120px] animate-glow-pulse" style={{ animationDelay: "2s" }} />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Portrait — sticky on desktop; shown first on mobile (slides in from the right) */}
          <Reveal direction="right" className="relative order-1 lg:order-2 lg:sticky lg:top-24 self-start">
            <div className="aspect-[4/5] rounded-2xl border border-ivoire-cosmique/20 shadow-glow-blue overflow-hidden">
              <img src={aboutYlane} alt={t.about.image_placeholder} className="w-full h-full object-cover" />
            </div>
            {/* Decorative glowing accent */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-ocre-solaire/40 blur-3xl animate-glow-pulse" />
            <div className="absolute -top-4 -left-4 w-24 h-24 rounded-full bg-bleu-atmosphere/30 blur-2xl" />
          </Reveal>

          {/* Content — left column on desktop, left-aligned (slides in from the left) */}
          <Reveal direction="left" delay={120} className="space-y-8 text-ivoire-cosmique order-2 lg:order-1 text-left">
            <p className="text-sm font-cormorant tracking-[0.25em] uppercase text-ocre-clair">
              {t.about.subtitle}
            </p>
            
            <h2 className="text-4xl md:text-5xl font-serif font-semibold leading-tight">
              <span className="block whitespace-nowrap">{t.about.title_line1}</span>
              {/* Accent only the last word (e.g. "Mondes"/"Worlds"); any
                  leading words (e.g. FR "les") keep the base color. */}
              {(() => {
                const words = t.about.title_line2.trim().split(" ");
                const last = words.pop();
                const head = words.join(" ");
                return (
                  <span className="block whitespace-nowrap">
                    {head && <>{head} </>}
                    <span className="text-ocre-clair">{last}</span>
                  </span>
                );
              })()}
            </h2>
            
            <div className="space-y-5 text-ivoire-cosmique/85 leading-relaxed">
              <p className="font-serif text-xl italic text-ocre-clair/90">
                {t.about.quote}
              </p>
              
              <p>{t.about.paragraph1}</p>
              
              <p>{t.about.paragraph2}</p>
              
              <p>{t.about.paragraph3}</p>
            </div>

            {/* Key concepts — light up one by one on scroll */}
            <div ref={pillsRef} className="flex flex-wrap gap-3 pt-2">
              {t.about.pills.map((pill, i) => (
                <span
                  key={pill}
                  className="inline-flex items-center rounded-full border border-ocre-clair/40 bg-ocre-solaire/10 px-4 py-1.5 text-sm font-serif tracking-wide text-ocre-clair backdrop-blur-sm motion-safe:transition-all motion-safe:duration-500 motion-safe:ease-out"
                  style={{
                    opacity: pillsInView ? 1 : 0,
                    transform: pillsInView ? "scale(1)" : "scale(0.85)",
                    transitionDelay: pillsInView ? `${i * 160}ms` : "0ms",
                  }}
                >
                  {pill}
                </span>
              ))}
            </div>

            <div className="pt-4 flex items-center gap-4">
              <div className="w-12 h-px bg-ocre-solaire/60" />
              <span className="text-ocre-clair font-serif italic">
                {t.about.signature}
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default About;
