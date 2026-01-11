import { useLanguage } from "@/i18n/LanguageContext";

const About = () => {
  const { t } = useLanguage();

  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Cosmic Stellar Flow background */}
      <div className="absolute inset-0 bg-gradient-stellar" />
      
      {/* Cosmic glow effects */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-bleu-atmosphere/25 rounded-full blur-[200px] animate-glow-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-bleu-profond/30 rounded-full blur-[150px]" />
      <div className="absolute top-1/2 right-1/3 w-[300px] h-[300px] bg-ocre-solaire/15 rounded-full blur-[120px] animate-glow-pulse" style={{ animationDelay: "2s" }} />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Photo placeholder - floating card effect */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl bg-ivoire-cosmique/10 backdrop-blur-md border border-ivoire-cosmique/20 shadow-glow-blue overflow-hidden">
              <div className="w-full h-full flex items-center justify-center text-ivoire-cosmique/50 font-cormorant text-lg">
                {t.about.image_placeholder}
              </div>
            </div>
            {/* Decorative glowing accent */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-ocre-solaire/40 blur-3xl animate-glow-pulse" />
            <div className="absolute -top-4 -left-4 w-24 h-24 rounded-full bg-bleu-atmosphere/30 blur-2xl" />
          </div>

          {/* Content */}
          <div className="space-y-8 text-ivoire-cosmique">
            <p className="text-sm font-cormorant tracking-[0.25em] uppercase text-ocre-clair">
              {t.about.subtitle}
            </p>
            
            <h2 className="text-4xl md:text-5xl font-serif font-semibold leading-tight">
              {t.about.title_line1}
              <span className="block text-ocre-clair">{t.about.title_line2}</span>
            </h2>
            
            <div className="space-y-5 text-ivoire-cosmique/85 leading-relaxed">
              <p className="font-cormorant text-xl italic text-ocre-clair/90">
                {t.about.quote}
              </p>
              
              <p>{t.about.paragraph1}</p>
              
              <p>{t.about.paragraph2}</p>
              
              <p>{t.about.paragraph3}</p>
            </div>

            <div className="pt-4 flex items-center gap-4">
              <div className="w-12 h-px bg-ocre-solaire/60" />
              <span className="text-ocre-clair font-cormorant italic">
                {t.about.signature}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
