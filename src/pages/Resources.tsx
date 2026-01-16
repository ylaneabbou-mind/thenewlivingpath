import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/i18n/LanguageContext";
import { BookOpen, Sparkles } from "lucide-react";

const Resources = () => {
  const { t } = useLanguage();

  // Placeholder articles for future content - show fewer on mobile
  const placeholderArticles = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-14 md:pt-32 md:pb-20 px-5 md:px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-stellar" />
        <div className="absolute top-20 right-1/3 w-[280px] md:w-[500px] h-[280px] md:h-[500px] bg-bleu-atmosphere/25 rounded-full blur-[100px] md:blur-[180px]" />
        <div className="absolute bottom-10 left-1/4 w-[220px] md:w-[400px] h-[220px] md:h-[400px] bg-ocre-solaire/15 rounded-full blur-[80px] md:blur-[150px]" />
        
        {/* Bottom edge fade */}
        <div className="absolute bottom-0 left-0 right-0 h-[70px] md:h-[100px] pointer-events-none" style={{ background: 'linear-gradient(to top, rgba(211,167,141,0.08) 0%, transparent 100%)' }} />
        
        <div className="container mx-auto max-w-4xl relative z-10 text-center">
          <p className="text-xs md:text-sm font-cormorant text-ocre-clair tracking-[0.2em] md:tracking-[0.25em] uppercase mb-4 md:mb-6 animate-fade-in">
            {t.resourcesPage.hero.subtitle}
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-serif font-semibold text-ivoire-cosmique leading-[1.2] md:leading-tight mb-5 md:mb-8 animate-fade-in">
            {t.resourcesPage.hero.title}
          </h1>
          <p className="text-base md:text-xl lg:text-2xl text-ivoire-cosmique/80 max-w-2xl mx-auto font-light leading-[1.7] md:leading-relaxed animate-fade-in">
            {t.resourcesPage.hero.description}
          </p>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="relative py-14 md:py-24 px-5 md:px-6 overflow-hidden">
        <div className="absolute inset-0 bg-sable-doux" />
        <div className="absolute inset-0 bg-gradient-to-b from-argile-clair/40 via-transparent to-parchemin/60" />
        
        {/* Top edge fade */}
        <div className="absolute top-0 left-0 right-0 h-[60px] md:h-[80px] pointer-events-none" style={{ background: 'linear-gradient(to bottom, rgba(0,53,115,0.05) 0%, transparent 100%)' }} />
        
        <div className="absolute top-1/4 left-0 w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-ocre-clair/10 rounded-full blur-[100px] md:blur-[150px]" />
        <div className="absolute bottom-1/3 right-0 w-[200px] md:w-[350px] h-[200px] md:h-[350px] bg-terre-claire/8 rounded-full blur-[90px] md:blur-[130px]" />
        
        <div className="container mx-auto max-w-6xl relative z-10">
          {/* Coming Soon Notice */}
          <div className="text-center mb-10 md:mb-16">
            <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-bleu-cosmique/10 border border-bleu-cosmique/20 text-bleu-cosmique mb-6 md:mb-8">
              <Sparkles className="w-3.5 h-3.5 md:w-4 md:h-4" />
              <span className="text-xs md:text-sm font-cormorant tracking-wide">{t.resourcesPage.coming_soon.badge}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-semibold text-brun-racine mb-3 md:mb-4 leading-[1.25]">
              {t.resourcesPage.coming_soon.title}
            </h2>
            <p className="text-base md:text-lg text-foreground/70 max-w-2xl mx-auto font-light leading-[1.7]">
              {t.resourcesPage.coming_soon.description}
            </p>
          </div>
          
          {/* Placeholder Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-8">
            {placeholderArticles.map((article, index) => (
              <article
                key={article.id}
                className="group relative p-4 md:p-6 rounded-2xl bg-ivoire-cosmique/60 border border-gris-lune/40 opacity-60"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Image placeholder */}
                <div className="aspect-[16/10] rounded-xl bg-gradient-to-br from-gris-lune/30 to-gris-lune/10 border border-gris-lune/20 mb-4 md:mb-6 flex items-center justify-center">
                  <BookOpen className="w-8 h-8 md:w-10 md:h-10 text-gris-lune" />
                </div>
                
                <div className="space-y-2.5 md:space-y-3">
                  <div className="flex items-center gap-2 md:gap-3 text-sm">
                    <span className="w-12 md:w-16 h-2.5 md:h-3 rounded bg-gris-lune/40" />
                    <span className="text-gris-lune">•</span>
                    <span className="w-10 md:w-12 h-2.5 md:h-3 rounded bg-gris-lune/30" />
                  </div>
                  
                  <div className="w-full h-4 md:h-5 rounded bg-gris-lune/40" />
                  <div className="w-3/4 h-4 md:h-5 rounded bg-gris-lune/30" />
                  
                  <div className="space-y-1.5 md:space-y-2 pt-1.5 md:pt-2">
                    <div className="w-full h-2.5 md:h-3 rounded bg-gris-lune/25" />
                    <div className="w-5/6 h-2.5 md:h-3 rounded bg-gris-lune/20" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="relative py-14 md:py-24 px-5 md:px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-stellar" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] md:w-[600px] h-[350px] md:h-[600px] bg-bleu-atmosphere/25 rounded-full blur-[120px] md:blur-[200px]" />
        
        {/* Top edge fade */}
        <div className="absolute top-0 left-0 right-0 h-[60px] md:h-[80px] pointer-events-none" style={{ background: 'linear-gradient(to bottom, rgba(211,167,141,0.06) 0%, transparent 100%)' }} />
        {/* Bottom edge fade for footer */}
        <div className="absolute bottom-0 left-0 right-0 h-[80px] md:h-[100px] pointer-events-none" style={{ background: 'linear-gradient(to top, rgba(111,61,32,0.08) 0%, transparent 100%)' }} />
        
        <div className="container mx-auto max-w-3xl relative z-10 text-center px-2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-semibold text-ivoire-cosmique mb-5 md:mb-6 leading-[1.25]">
            {t.resourcesPage.newsletter.title}
          </h2>
          <p className="text-base md:text-xl text-ivoire-cosmique/80 mb-6 md:mb-8 max-w-xl mx-auto font-light leading-[1.7]">
            {t.resourcesPage.newsletter.description}
          </p>
          
          <p className="font-cormorant text-base md:text-lg italic text-ocre-clair/90 leading-[1.5]">
            {t.resourcesPage.newsletter.note}
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Resources;
