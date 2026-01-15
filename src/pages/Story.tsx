import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/i18n/LanguageContext";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Story = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-stellar" />
        <div className="absolute top-20 right-1/4 w-[500px] h-[500px] bg-bleu-atmosphere/25 rounded-full blur-[180px] animate-glow-pulse" />
        <div className="absolute bottom-10 left-1/3 w-[400px] h-[400px] bg-ocre-solaire/15 rounded-full blur-[150px]" />
        
        {/* Bottom edge fade */}
        <div className="absolute bottom-0 left-0 right-0 h-[100px] pointer-events-none" style={{ background: 'linear-gradient(to top, rgba(211,167,141,0.08) 0%, transparent 100%)' }} />
        
        <div className="container mx-auto max-w-4xl relative z-10 text-center">
          <p className="text-sm font-cormorant text-ocre-clair tracking-[0.25em] uppercase mb-6 animate-fade-in">
            {t.storyPage.hero.subtitle}
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-semibold text-ivoire-cosmique leading-tight mb-8 animate-fade-in">
            {t.storyPage.hero.title}
          </h1>
          <p className="text-xl md:text-2xl text-ivoire-cosmique/80 max-w-2xl mx-auto font-light leading-relaxed animate-fade-in">
            {t.storyPage.hero.description}
          </p>
        </div>
      </section>

      {/* Origins Section */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-sable-doux" />
        <div className="absolute inset-0 bg-gradient-to-b from-argile-clair/40 via-transparent to-parchemin/60" />
        
        {/* Top edge fade */}
        <div className="absolute top-0 left-0 right-0 h-[80px] pointer-events-none" style={{ background: 'linear-gradient(to bottom, rgba(0,53,115,0.05) 0%, transparent 100%)' }} />
        
        <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-ocre-clair/10 rounded-full blur-[150px]" />
        
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            {/* Image placeholder */}
            <div className="lg:col-span-2">
              <div className="aspect-[3/4] rounded-2xl bg-gradient-to-br from-brun-racine/10 to-ocre-solaire/15 border border-brun-racine/20 shadow-warm flex items-center justify-center">
                <span className="text-brun-racine/40 font-cormorant text-lg">{t.storyPage.origins.image_placeholder}</span>
              </div>
            </div>
            
            {/* Content */}
            <div className="lg:col-span-3 space-y-6">
              <p className="text-sm font-cormorant text-sable-chaud tracking-[0.25em] uppercase">
                {t.storyPage.origins.subtitle}
              </p>
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-brun-racine leading-tight">
                {t.storyPage.origins.title}
              </h2>
              <div className="space-y-5 text-foreground/80 leading-relaxed">
                <p>{t.storyPage.origins.paragraph1}</p>
                <p>{t.storyPage.origins.paragraph2}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transformation Section */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-stellar" />
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-bleu-atmosphere/20 rounded-full blur-[180px]" />
        <div className="absolute bottom-1/4 right-1/3 w-[350px] h-[350px] bg-ocre-solaire/12 rounded-full blur-[140px] animate-glow-pulse" />
        
        {/* Edge fades */}
        <div className="absolute top-0 left-0 right-0 h-[80px] pointer-events-none" style={{ background: 'linear-gradient(to bottom, rgba(211,167,141,0.06) 0%, transparent 100%)' }} />
        <div className="absolute bottom-0 left-0 right-0 h-[80px] pointer-events-none" style={{ background: 'linear-gradient(to top, rgba(211,167,141,0.06) 0%, transparent 100%)' }} />
        
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="text-center space-y-6 mb-16">
            <p className="text-sm font-cormorant text-ocre-clair tracking-[0.25em] uppercase">
              {t.storyPage.transformation.subtitle}
            </p>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-ivoire-cosmique leading-tight">
              {t.storyPage.transformation.title}
            </h2>
          </div>
          
          <div className="space-y-8 text-ivoire-cosmique/85 leading-relaxed max-w-3xl mx-auto">
            <p className="font-cormorant text-2xl italic text-ocre-clair/90 text-center">
              {t.storyPage.transformation.quote}
            </p>
            <p>{t.storyPage.transformation.paragraph1}</p>
            <p>{t.storyPage.transformation.paragraph2}</p>
            <p>{t.storyPage.transformation.paragraph3}</p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-argile-clair" />
        <div className="absolute inset-0 bg-gradient-to-br from-sable-doux/60 via-transparent to-terre-douce/30" />
        
        {/* Top edge fade */}
        <div className="absolute top-0 left-0 right-0 h-[80px] pointer-events-none" style={{ background: 'linear-gradient(to bottom, rgba(0,53,115,0.05) 0%, transparent 100%)' }} />
        
        <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-terre-claire/12 rounded-full blur-[150px]" />
        
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            {/* Content */}
            <div className="lg:col-span-3 space-y-6 order-2 lg:order-1">
              <p className="text-sm font-cormorant text-sable-chaud tracking-[0.25em] uppercase">
                {t.storyPage.mission.subtitle}
              </p>
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-brun-racine leading-tight">
                {t.storyPage.mission.title}
              </h2>
              <div className="space-y-5 text-foreground/80 leading-relaxed">
                <p>{t.storyPage.mission.paragraph1}</p>
                <p>{t.storyPage.mission.paragraph2}</p>
              </div>
              
              <div className="pt-4 flex items-center gap-4">
                <div className="w-12 h-px bg-ocre-solaire/60" />
                <span className="text-terre-accent font-cormorant italic">
                  {t.storyPage.mission.signature}
                </span>
              </div>
            </div>
            
            {/* Image placeholder */}
            <div className="lg:col-span-2 order-1 lg:order-2">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-bleu-profond/10 to-bleu-atmosphere/15 border border-bleu-cosmique/20 shadow-soft flex items-center justify-center">
                <span className="text-bleu-cosmique/40 font-cormorant text-lg">{t.storyPage.mission.image_placeholder}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-stellar" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-bleu-atmosphere/25 rounded-full blur-[200px] animate-glow-pulse" />
        
        {/* Top edge fade */}
        <div className="absolute top-0 left-0 right-0 h-[80px] pointer-events-none" style={{ background: 'linear-gradient(to bottom, rgba(211,167,141,0.06) 0%, transparent 100%)' }} />
        {/* Bottom edge fade for footer */}
        <div className="absolute bottom-0 left-0 right-0 h-[100px] pointer-events-none" style={{ background: 'linear-gradient(to top, rgba(111,61,32,0.08) 0%, transparent 100%)' }} />
        
        <div className="container mx-auto max-w-3xl relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-ivoire-cosmique mb-6">
            {t.storyPage.cta.title}
          </h2>
          <p className="text-xl text-ivoire-cosmique/80 mb-10 max-w-xl mx-auto font-light">
            {t.storyPage.cta.description}
          </p>
          <Link to="/contact">
            <Button size="lg" className="group text-lg px-8 py-6 bg-gradient-solar text-white shadow-glow-gold hover:shadow-lg hover:scale-105 transition-all duration-500 rounded-lg">
              {t.storyPage.cta.button}
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Story;
