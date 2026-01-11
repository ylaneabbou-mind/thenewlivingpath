import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Stellar Flow gradient background */}
      <div className="absolute inset-0 bg-gradient-stellar" />
      
      {/* Cosmic glow effects */}
      <div className="absolute top-20 right-1/4 w-[600px] h-[600px] bg-bleu-atmosphere/30 rounded-full blur-[200px] animate-glow-pulse" />
      <div className="absolute bottom-20 left-1/4 w-[500px] h-[500px] bg-ocre-solaire/20 rounded-full blur-[180px] animate-glow-pulse" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-bleu-profond/40 rounded-full blur-[250px]" />
      
      {/* Subtle star-like particles effect */}
      <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(circle at 20% 30%, rgba(255,255,255,0.1) 1px, transparent 1px), radial-gradient(circle at 80% 70%, rgba(255,255,255,0.08) 1px, transparent 1px), radial-gradient(circle at 40% 80%, rgba(255,255,255,0.06) 1px, transparent 1px)', backgroundSize: '100px 100px, 150px 150px, 200px 200px' }} />
      
      <div className="container relative z-10 px-6 py-20 mx-auto">
        <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in">
          {/* Portrait placeholder */}
          <div className="w-44 h-44 mx-auto mb-10 rounded-full bg-gradient-to-br from-ivoire-cosmique/20 to-ocre-clair/30 border-2 border-ivoire-cosmique/30 shadow-glow-gold overflow-hidden animate-float backdrop-blur-sm">
            <div className="w-full h-full flex items-center justify-center text-ivoire-cosmique/60 text-sm font-cormorant">{t.hero.portrait_placeholder}</div>
          </div>
          
          <p className="text-lg md:text-xl font-cormorant text-ocre-clair tracking-[0.2em] uppercase">{t.hero.tagline}</p>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-semibold tracking-tight leading-tight">
            <span className="text-ivoire-cosmique">{t.hero.title_line1}</span><br />
            <span className="text-ocre-clair">{t.hero.title_line2}</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-ivoire-cosmique/80 max-w-2xl mx-auto font-light leading-relaxed">
            {t.hero.description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button size="lg" className="group text-lg px-8 py-6 bg-gradient-solar text-white shadow-glow-gold hover:shadow-lg hover:scale-105 transition-all duration-500 rounded-lg">
              {t.hero.cta_primary}<ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent border-ivoire-cosmique/50 text-ivoire-cosmique hover:bg-ivoire-cosmique/10 hover:border-ivoire-cosmique rounded-lg backdrop-blur-sm">
              {t.hero.cta_secondary}
            </Button>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default Hero;
