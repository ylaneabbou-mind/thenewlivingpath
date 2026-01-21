import { useLanguage } from "@/i18n/LanguageContext";

const About = () => {
  const { t } = useLanguage();

  // Test colors for #F4B57B background - easily reversible
  const testColors = {
    heading: "#2A160C",
    body: "rgba(42, 22, 12, 0.88)",
    label: "rgba(42, 22, 12, 0.65)",
    accentBlue: "#083B73",
    accentOrange: "#8A3F1E",
  };

  return (
    <section 
      className="relative py-36 md:py-40 px-6 overflow-hidden"
      style={{ backgroundColor: "#F4B57B" }}
    >
      {/* Soft top transition */}
      <div className="absolute top-0 left-0 right-0 h-[40px] pointer-events-none" style={{ background: 'linear-gradient(to bottom, rgba(243,234,226,0.3) 0%, transparent 100%)' }} />
      
      {/* Soft bottom transition */}
      <div className="absolute bottom-0 left-0 right-0 h-[40px] pointer-events-none" style={{ background: 'linear-gradient(to top, rgba(243,234,226,0.3) 0%, transparent 100%)' }} />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Photo placeholder */}
          <div className="relative">
            <div 
              className="aspect-[4/5] rounded-2xl border overflow-hidden"
              style={{ 
                backgroundColor: "rgba(42, 22, 12, 0.08)",
                borderColor: "rgba(42, 22, 12, 0.15)"
              }}
            >
              <div 
                className="w-full h-full flex items-center justify-center font-cormorant text-lg"
                style={{ color: testColors.label }}
              >
                {t.about.image_placeholder}
              </div>
            </div>
            {/* Subtle decorative accent */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full blur-3xl" style={{ backgroundColor: "rgba(138, 63, 30, 0.2)" }} />
          </div>

          {/* Content with test typography */}
          <div className="space-y-8">
            <p 
              className="text-sm font-cormorant tracking-[0.25em] uppercase"
              style={{ color: testColors.label }}
            >
              {t.about.subtitle}
            </p>
            
            <h2 
              className="text-4xl md:text-5xl font-serif font-semibold leading-tight"
              style={{ color: testColors.heading }}
            >
              {t.about.title_line1}
              <span className="block" style={{ color: testColors.accentOrange }}>
                {t.about.title_line2}
              </span>
            </h2>
            
            <div className="space-y-5 leading-relaxed">
              <p 
                className="font-cormorant text-xl italic"
                style={{ color: testColors.accentOrange }}
              >
                {t.about.quote}
              </p>
              
              <p style={{ color: testColors.body }}>{t.about.paragraph1}</p>
              
              <p style={{ color: testColors.body }}>{t.about.paragraph2}</p>
              
              <p style={{ color: testColors.body }}>{t.about.paragraph3}</p>
            </div>

            <div className="pt-4 flex items-center gap-4">
              <div className="w-12 h-px" style={{ backgroundColor: testColors.accentOrange }} />
              <span 
                className="font-cormorant italic"
                style={{ color: testColors.accentOrange }}
              >
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
