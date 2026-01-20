import { useLanguage } from "@/i18n/LanguageContext";

const Mission = () => {
  const { t } = useLanguage();

  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Explicit grounded brown background - warm clay/sand tone */}
      <div className="absolute inset-0 bg-sable-doux" />
      <div className="absolute inset-0 bg-gradient-to-b from-parchemin/60 via-transparent to-argile-clair/40" />
      <div className="absolute inset-0 bg-gradient-to-br from-terre-accent/[0.03] via-transparent to-ocre-profond/[0.02]" />
      
      {/* Top edge fade - blends with cosmic section above */}
      <div className="absolute top-0 left-0 right-0 h-[80px] pointer-events-none" style={{ background: 'linear-gradient(to bottom, rgba(0,53,115,0.06) 0%, transparent 100%)' }} />
      
      {/* Bottom edge fade - prepares for cosmic section below */}
      <div className="absolute bottom-0 left-0 right-0 h-[80px] pointer-events-none" style={{ background: 'linear-gradient(to top, rgba(0,53,115,0.05) 0%, transparent 100%)' }} />
      
      {/* Warm glow accents */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-ocre-clair/12 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-terre-claire/10 rounded-full blur-[120px]" />
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center space-y-10 animate-fade-in">
          <p className="text-sm font-cormorant text-sable-chaud tracking-[0.25em] uppercase">{t.mission.subtitle}</p>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-brun-racine leading-tight">
            {t.mission.title_line1}<span className="block mt-2 text-gradient-stellar">{t.mission.title_line2}</span>
          </h2>
          
          <div className="space-y-6 text-lg md:text-xl text-foreground/80 leading-relaxed font-light max-w-3xl mx-auto">
            <p className="font-cormorant text-2xl italic text-brun-racine">{t.mission.quote}</p>
            <p>{t.mission.description1}</p>
            <p className="text-ocre-solaire font-medium">{t.mission.description2}</p>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default Mission;
