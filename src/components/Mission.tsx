import { useLanguage } from "@/i18n/LanguageContext";

const Mission = () => {
  const { t } = useLanguage();

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
            {/* Quote text */}
            <p 
              className="font-cormorant text-2xl italic"
              style={{ color: 'rgba(42, 22, 12, 0.85)' }}
            >
              {t.mission.quote}
            </p>
            {/* Body paragraph */}
            <p style={{ color: 'rgba(42, 22, 12, 0.88)' }}>
              {t.mission.description1}
            </p>
            {/* Accent sentence - deepened */}
            <p className="font-medium" style={{ color: '#8A3F1E' }}>
              {t.mission.description2}
            </p>
            {t.mission.description3 && (
              <p style={{ color: 'rgba(42, 22, 12, 0.88)' }}>
                {t.mission.description3}
              </p>
            )}
            {t.mission.description4 && (
              <p style={{ color: 'rgba(42, 22, 12, 0.88)' }}>
                {t.mission.description4}
              </p>
            )}
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default Mission;
