import { useLanguage } from "@/i18n/LanguageContext";
import { useParams, Link, Navigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Sparkles, Check, Heart, Coffee, Leaf } from "lucide-react";

const toolIcons = [Sparkles, Heart, Coffee, Leaf];

const ServiceDetail = () => {
  const { t } = useLanguage();
  const { slug } = useParams<{ slug: string }>();
  
  // Find the service based on slug
  const services = t.servicesPage?.catalog || [];
  const serviceIndex = services.findIndex(s => s.slug === slug);
  const service = services[serviceIndex];
  const details = t.servicesPage?.details?.[serviceIndex];
  
  // If service not found, redirect to services page
  if (!service || !details) {
    return <Navigate to="/services" replace />;
  }

  return (
    <div className="min-h-screen bg-sable-doux">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 px-5 md:px-6 overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-stellar opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bleu-cosmique/20 to-bleu-profond/40" />
        
        {/* Subtle glow */}
        <div className="absolute top-1/3 left-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-bleu-atmosphere/15 rounded-full blur-[100px] md:blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/3 w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-ocre-solaire/10 rounded-full blur-[80px] md:blur-[120px]" />
        
        <div className="container mx-auto max-w-4xl relative z-10">
          {/* Back link */}
          <Link 
            to="/services"
            className="inline-flex items-center text-ivoire-cosmique/70 hover:text-ivoire-cosmique text-sm md:text-base font-cormorant mb-8 md:mb-10 transition-colors duration-300"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            {t.servicesPage?.detail_page.back}
          </Link>
          
          <div className="text-center">
            {/* Icon */}
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-ivoire-cosmique/10 backdrop-blur-sm flex items-center justify-center mx-auto mb-6 md:mb-8">
              <Sparkles className="w-7 h-7 md:w-9 md:h-9 text-ocre-solaire" />
            </div>
            
            {/* Subtitle */}
            <p className="text-sm md:text-base font-cormorant text-ivoire-cosmique/70 tracking-[0.2em] md:tracking-[0.25em] uppercase mb-4 md:mb-5">
              {service.subtitle}
            </p>
            
            {/* Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-ivoire-cosmique leading-tight mb-6 md:mb-8">
              {service.title}
            </h1>
            
            {/* Tagline */}
            <p className="text-lg md:text-xl lg:text-2xl text-ivoire-cosmique/85 leading-relaxed max-w-2xl mx-auto font-light font-cormorant italic">
              {details.tagline}
            </p>
          </div>
        </div>
      </section>
      
      {/* What This Service Is */}
      <section className="relative py-16 md:py-24 px-5 md:px-6">
        {/* Grounded background */}
        <div className="absolute inset-0 bg-sable-doux" />
        <div className="absolute inset-0 bg-gradient-to-b from-parchemin/50 via-transparent to-argile-clair/30" />
        
        {/* Warm glow */}
        <div className="absolute top-0 right-1/4 w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-ocre-clair/10 rounded-full blur-[100px] md:blur-[150px]" />
        
        <div className="container mx-auto max-w-3xl relative z-10">
          <div className="space-y-8 md:space-y-10">
            <div>
              <p className="text-sm font-cormorant text-sable-chaud tracking-[0.2em] uppercase mb-3 md:mb-4">
                {t.servicesPage?.detail_page.sections.what}
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-semibold text-brun-racine leading-tight mb-5 md:mb-6">
                {details.what.title}
              </h2>
              <div className="space-y-4 md:space-y-5 text-base md:text-lg text-foreground/80 leading-relaxed text-left max-w-[42rem]">
                <p>{details.what.paragraph1}</p>
                <p>{details.what.paragraph2}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Who It's For */}
      <section className="relative py-16 md:py-24 px-5 md:px-6 overflow-hidden" style={{ backgroundColor: '#F4B57B' }}>
        {/* Transition edges */}
        <div className="absolute top-0 left-0 right-0 h-[60px] md:h-[80px] pointer-events-none" style={{ background: 'linear-gradient(to bottom, rgba(0,53,115,0.04) 0%, transparent 100%)' }} />
        <div className="absolute bottom-0 left-0 right-0 h-[60px] md:h-[80px] pointer-events-none" style={{ background: 'linear-gradient(to top, rgba(0,53,115,0.04) 0%, transparent 100%)' }} />
        
        <div className="container mx-auto max-w-3xl relative z-10">
          <p 
            className="text-sm font-cormorant tracking-[0.2em] uppercase mb-3 md:mb-4"
            style={{ color: 'rgba(42, 22, 12, 0.65)' }}
          >
            {t.servicesPage?.detail_page.sections.who}
          </p>
          <h2 
            className="text-2xl sm:text-3xl md:text-4xl font-serif font-semibold leading-tight mb-6 md:mb-8"
            style={{ color: '#2A160C' }}
          >
            {details.who.title}
          </h2>
          
          <ul className="space-y-4 md:space-y-5">
            {details.who.items.map((item: string, index: number) => (
              <li key={index} className="flex items-start gap-3 md:gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5" style={{ backgroundColor: 'rgba(8, 59, 115, 0.15)' }}>
                  <Check className="w-3.5 h-3.5" style={{ color: '#083B73' }} />
                </div>
                <span className="text-base md:text-lg leading-relaxed" style={{ color: 'rgba(42, 22, 12, 0.88)' }}>
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>
      
      {/* The Transformation */}
      <section className="relative py-16 md:py-24 px-5 md:px-6">
        {/* Grounded background */}
        <div className="absolute inset-0 bg-sable-doux" />
        <div className="absolute inset-0 bg-gradient-to-b from-argile-clair/30 via-transparent to-parchemin/40" />
        
        {/* Warm glow */}
        <div className="absolute bottom-0 left-1/3 w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-terre-claire/8 rounded-full blur-[100px] md:blur-[150px]" />
        
        <div className="container mx-auto max-w-3xl relative z-10">
          <p className="text-sm font-cormorant text-sable-chaud tracking-[0.2em] uppercase mb-3 md:mb-4">
            {t.servicesPage?.detail_page.sections.transformation}
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-semibold text-brun-racine leading-tight mb-5 md:mb-6">
            {details.transformation.title}
          </h2>
          
          {/* Quote */}
          <blockquote className="font-cormorant text-xl md:text-2xl italic text-bleu-cosmique/90 mb-6 md:mb-8 pl-5 border-l-2 border-bleu-cosmique/30">
            {details.transformation.quote}
          </blockquote>
          
          <div className="space-y-4 md:space-y-5 text-base md:text-lg text-foreground/80 leading-relaxed text-left max-w-[42rem]">
            <p>{details.transformation.paragraph1}</p>
            <p>{details.transformation.paragraph2}</p>
          </div>

          {/* Complementary tools as illustrated tags */}
          <div className="grid gap-4 sm:grid-cols-2 mt-8 max-w-[42rem]">
            {details.transformation.tools.map((tool, i) => {
              const Icon = toolIcons[i % toolIcons.length];
              return (
                <div
                  key={tool.label}
                  className="flex items-center gap-3 rounded-2xl border border-bleu-cosmique/20 bg-bleu-profond/5 px-4 py-3 transition-all duration-500 hover:border-bleu-cosmique/45 hover:-translate-y-0.5"
                >
                  <span className="w-10 h-10 rounded-xl bg-bleu-cosmique/15 text-bleu-cosmique flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5" />
                  </span>
                  <span className="text-sm md:text-base font-cormorant text-brun-racine">{tool.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="relative py-16 md:py-24 px-5 md:px-6 overflow-hidden">
        {/* Cosmic background */}
        <div className="absolute inset-0 bg-gradient-stellar opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-t from-bleu-profond/40 via-transparent to-bleu-cosmique/20" />
        
        {/* Glow */}
        <div className="absolute top-1/2 right-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-bleu-atmosphere/15 rounded-full blur-[100px] md:blur-[150px]" />
        
        <div className="container mx-auto max-w-3xl relative z-10">
          <p className="text-sm font-cormorant text-ivoire-cosmique/70 tracking-[0.2em] uppercase mb-3 md:mb-4">
            {t.servicesPage?.detail_page.sections.how}
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-semibold text-ivoire-cosmique leading-tight mb-6 md:mb-8">
            {details.how.title}
          </h2>
          
          <div className="space-y-6 md:space-y-8">
            {details.how.steps.map((step: { title: string; description: string }, index: number) => (
              <div key={index} className="flex gap-4 md:gap-6">
                <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-ivoire-cosmique/10 backdrop-blur-sm flex items-center justify-center">
                  <span className="text-lg md:text-xl font-serif font-semibold text-ocre-solaire">{index + 1}</span>
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-serif font-semibold text-ivoire-cosmique mb-2">
                    {step.title}
                  </h3>
                  <p className="text-base md:text-lg text-ivoire-cosmique/80 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="relative py-16 md:py-24 px-5 md:px-6">
        {/* Grounded background */}
        <div className="absolute inset-0 bg-sable-doux" />
        <div className="absolute inset-0 bg-gradient-to-b from-parchemin/40 via-transparent to-argile-clair/30" />
        
        {/* Warm glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-ocre-clair/12 rounded-full blur-[100px] md:blur-[150px]" />
        
        <div className="container mx-auto max-w-3xl relative z-10 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-semibold text-brun-racine leading-tight mb-5 md:mb-6">
            {details.cta.title}
          </h2>
          <p className="text-base md:text-lg text-foreground/75 leading-relaxed mb-8 md:mb-10 max-w-2xl mx-auto">
            {details.cta.description}
          </p>
          <Button asChild size="lg" className="rounded-full px-8 py-6 text-base md:text-lg bg-bleu-cosmique hover:bg-bleu-profond shadow-soft hover:shadow-warm transition-all duration-300">
            <Link to="/contact">
              {details.cta.button}
            </Link>
          </Button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ServiceDetail;
