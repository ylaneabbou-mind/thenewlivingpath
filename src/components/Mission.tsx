import { useLanguage } from "@/i18n/LanguageContext";

const Mission = () => {
  const { t } = useLanguage();

  return (
    <section className="relative py-36 md:py-40 px-6 overflow-hidden" style={{ backgroundColor: '#F4B57B' }}>
      {/* Top edge fade - blends with cosmic section above */}
      <div className="absolute top-0 left-0 right-0 h-[80px] pointer-events-none" style={{ background: 'linear-gradient(to bottom, rgba(0,53,115,0.06) 0%, transparent 100%)' }} />
      
      {/* Bottom edge fade - prepares for cosmic section below */}
      <div className="absolute bottom-0 left-0 right-0 h-[80px] pointer-events-none" style={{ background: 'linear-gradient(to top, rgba(0,53,115,0.05) 0%, transparent 100%)' }} />
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center space-y-10 animate-fade-in">
          {/* Eyebrow label */}
          <p 
            className="text-sm font-cormorant tracking-[0.25em] uppercase"
            style={{ color: 'rgba(42, 22, 12, 0.65)' }}
          >
            {t.mission.subtitle}
          </p>
          
          {/* Main headline */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold leading-tight" style={{ color: '#2A160C' }}>
            {t.mission.title_line1}
            <span className="block mt-2" style={{ color: '#083B73' }}>
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
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default Mission;
