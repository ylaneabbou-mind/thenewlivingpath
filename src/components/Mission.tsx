import { useLanguage } from "@/i18n/LanguageContext";

const Mission = () => {
  const { t } = useLanguage();

  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* CTA brown background with subtle gradient */}
      <div className="absolute inset-0 bg-cta-brun" />
      <div className="absolute inset-0" style={{ background: 'linear-gradient(90deg, hsl(24 30% 49%) 0%, hsl(26 48% 60%) 100%)' }} />
      <div className="absolute inset-0 bg-gradient-to-b from-parchemin/20 via-transparent to-terre-douce/15" />
      
      {/* Top edge fade - blends with cosmic section above */}
      <div className="absolute top-0 left-0 right-0 h-[80px] pointer-events-none" style={{ background: 'linear-gradient(to bottom, rgba(0,53,115,0.08) 0%, transparent 100%)' }} />
      
      {/* Bottom edge fade - prepares for cosmic section below */}
      <div className="absolute bottom-0 left-0 right-0 h-[80px] pointer-events-none" style={{ background: 'linear-gradient(to top, rgba(0,53,115,0.06) 0%, transparent 100%)' }} />
      
      {/* Warm glow accents - subtle on brown */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-parchemin/15 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-terre-douce/12 rounded-full blur-[120px]" />
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center space-y-10 animate-fade-in">
          {/* Small label - softer contrast */}
          <p className="text-sm font-cormorant tracking-[0.25em] uppercase" style={{ color: 'rgba(47, 27, 18, 0.70)' }}>{t.mission.subtitle}</p>
          
          {/* Main heading - deep espresso brown */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold leading-tight" style={{ color: '#2F1B12' }}>
            {t.mission.title_line1}<span className="block mt-2 text-bleu-cosmique">{t.mission.title_line2}</span>
          </h2>
          
          <div className="space-y-6 text-lg md:text-xl leading-relaxed font-light max-w-3xl mx-auto">
            {/* Quote - deep brown */}
            <p className="font-cormorant text-2xl italic" style={{ color: '#2F1B12' }}>{t.mission.quote}</p>
            {/* Body text - slightly softer */}
            <p style={{ color: 'rgba(47, 27, 18, 0.85)' }}>{t.mission.description1}</p>
            {/* Accent text - deepened orange */}
            <p className="font-medium" style={{ color: '#8A3F1E' }}>{t.mission.description2}</p>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default Mission;
