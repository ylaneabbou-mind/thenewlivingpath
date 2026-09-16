import { useLanguage } from "@/i18n/LanguageContext";
import Reveal from "@/components/Reveal";
import { useReveal } from "@/hooks/useReveal";

// Split a paragraph into a strong lead phrase (pull quote) + the remainder.
// Splits on an em dash if present, otherwise after the first sentence.
const splitLead = (text: string): [string, string] => {
  const dash = text.indexOf(" — ");
  if (dash !== -1) return [text.slice(0, dash).trim(), text.slice(dash + 3).trim()];
  const m = text.match(/^([\s\S]*?[.!?])\s+([\s\S]+)$/);
  if (m) return [m[1].trim(), m[2].trim()];
  return [text.trim(), ""];
};

const Mission = () => {
  const { t } = useLanguage();
  const { ref: quoteRef, inView: quoteInView } = useReveal<HTMLParagraphElement>({ threshold: 0.3 });
  const words = t.mission.quote.split(" ");

  const paragraphs = [
    t.mission.description1,
    t.mission.description2,
    t.mission.description3,
    t.mission.description4,
  ].filter(Boolean);

  return (
    <section className="relative py-36 md:py-40 px-6 overflow-hidden">
      {/* Explicit grounded earth background - matches Offerings */}
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
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center space-y-10 animate-fade-in">
          {/* Eyebrow label */}
          <p className="text-sm font-cormorant text-sable-chaud tracking-[0.25em] uppercase">
            {t.mission.subtitle}
          </p>

          {/* Main headline */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold leading-tight text-brun-racine">
            {t.mission.title_line1}
            <span className="block mt-2 text-gradient-solar">
              {t.mission.title_line2}
            </span>
          </h2>
          
          <div className="space-y-6 text-lg md:text-xl leading-relaxed font-light max-w-3xl mx-auto">
            {/* Quote text — revealed word by word for a slowed, immersive read */}
            <p
              ref={quoteRef}
              className="font-cormorant text-2xl italic"
              style={{ color: 'rgba(42, 22, 12, 0.85)' }}
            >
              {words.map((word, i) => (
                <span
                  key={i}
                  className="inline-block motion-safe:transition-all motion-safe:duration-500 motion-safe:ease-out"
                  style={{
                    opacity: quoteInView ? 1 : 0,
                    transform: quoteInView ? "translateY(0)" : "translateY(0.4em)",
                    transitionDelay: quoteInView ? `${i * 90}ms` : "0ms",
                  }}
                >
                  {word}
                  {i < words.length - 1 ? " " : ""}
                </span>
              ))}
            </p>
          </div>
        </div>

        {/* Pull-quote paragraphs — scannable lead + quieter body, left-aligned */}
        <div className="mt-14 md:mt-16 max-w-[42rem] mx-auto space-y-10 md:space-y-12 text-left">
          {paragraphs.map((para, i) => {
            const [lead, rest] = splitLead(para);
            return (
              <Reveal key={i} delay={i * 80}>
                <p className="font-serif text-xl md:text-2xl leading-[1.4] text-ocre-solaire">
                  {lead}
                </p>
                {rest && (
                  <p className="mt-3 text-base md:text-lg leading-relaxed font-light" style={{ color: 'rgba(42, 22, 12, 0.78)' }}>
                    {rest}
                  </p>
                )}
              </Reveal>
            );
          })}
        </div>
      </div>
      
    </section>
  );
};

export default Mission;
