import { useLanguage } from "@/i18n/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Sparkles, Eye, Users, Leaf } from "lucide-react";
import Reveal from "@/components/Reveal";
import TiltCard from "@/components/TiltCard";

const Services = () => {
  const { t } = useLanguage();

  const icons = [Sparkles, Eye, Users, Leaf];

  const services = t.servicesPage?.catalog || [];

  return (
    <div className="min-h-screen bg-sable-doux">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-24 pb-14 md:pt-32 md:pb-20 px-5 md:px-6 overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-stellar opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bleu-cosmique/20 to-bleu-profond/40" />

        {/* Subtle glow */}
        <div className="absolute top-1/4 left-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-bleu-atmosphere/15 rounded-full blur-[100px] md:blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-ocre-solaire/10 rounded-full blur-[80px] md:blur-[120px]" />

        <div className="container mx-auto max-w-4xl relative z-10 text-center">
          <p className="text-sm md:text-base font-cormorant text-ivoire-cosmique/70 tracking-[0.2em] md:tracking-[0.25em] uppercase mb-4 md:mb-6 animate-fade-in">
            {t.servicesPage?.hero.subtitle}
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-ivoire-cosmique leading-tight mb-5 md:mb-8 animate-fade-in">
            {t.servicesPage?.hero.title}
          </h1>

          <p className="text-base md:text-lg lg:text-xl text-ivoire-cosmique/85 leading-relaxed max-w-2xl mx-auto font-light animate-fade-in px-2">
            {t.servicesPage?.hero.description}
          </p>
        </div>
      </section>

      {/* Services Catalog */}
      <section className="relative py-16 md:py-24 px-5 md:px-6">
        {/* Grounded background */}
        <div className="absolute inset-0 bg-sable-doux" />
        <div className="absolute inset-0 bg-gradient-to-b from-parchemin/40 via-transparent to-argile-clair/30" />

        {/* Warm glow accents */}
        <div className="absolute top-0 left-1/4 w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-ocre-clair/10 rounded-full blur-[100px] md:blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[200px] md:w-[300px] h-[200px] md:h-[300px] bg-terre-claire/8 rounded-full blur-[80px] md:blur-[120px]" />

        <div className="container mx-auto max-w-6xl relative z-10">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16">
            <p className="text-sm font-cormorant text-sable-chaud tracking-[0.2em] md:tracking-[0.25em] uppercase mb-3 md:mb-4">
              {t.servicesPage?.catalog_section.subtitle}
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-semibold text-brun-racine leading-tight">
              {t.servicesPage?.catalog_section.title}
            </h2>
          </div>

          {/* Services Grid */}
          <div className={`grid grid-cols-1 ${services.length === 1 ? 'max-w-2xl mx-auto' : 'md:grid-cols-2'} gap-6 md:gap-8`}>
            {services.map((service, index) => {
              const IconComponent = icons[index % icons.length];
              return (
                <Reveal key={index} delay={index * 120}>
                <Link
                  to={`/services/${service.slug}`}
                  className="group block"
                >
                  <TiltCard className="h-full">
                  <Card className="h-full bg-ivoire-cosmique/60 backdrop-blur-sm border-gris-lune/30 shadow-soft hover:shadow-warm transition-all duration-500 hover:-translate-y-1 hover:bg-ivoire-cosmique/80">
                    <CardContent className="p-6 md:p-8 lg:p-10">
                      {/* Icon */}
                      <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-stellar flex items-center justify-center mb-5 md:mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                        <IconComponent className="w-5 h-5 md:w-6 md:h-6 text-ivoire-cosmique" />
                      </div>

                      {/* Subtitle */}
                      <p className="text-xs md:text-sm font-cormorant text-bleu-cosmique/70 tracking-[0.15em] uppercase mb-2 md:mb-3">
                        {service.subtitle}
                      </p>

                      {/* Title */}
                      <h3 className="text-xl md:text-2xl font-serif font-semibold text-brun-racine mb-3 md:mb-4 group-hover:text-bleu-cosmique transition-colors duration-300">
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm md:text-base text-foreground/75 leading-relaxed mb-5 md:mb-6">
                        {service.description}
                      </p>

                      {/* CTA */}
                      <span className="inline-flex items-center text-sm md:text-base font-cormorant text-bleu-cosmique group-hover:text-bleu-profond transition-colors duration-300">
                        {service.cta}
                        <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </span>
                    </CardContent>
                  </Card>
                  </TiltCard>
                </Link>
                </Reveal>
              );
            })}
          </div>

          {/* Note about more services */}
          <div className="text-center mt-12 md:mt-16">
            <p className="text-sm md:text-base text-foreground/60 font-light italic">
              {t.servicesPage?.catalog_section.note}
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 md:py-24 px-5 md:px-6 overflow-hidden">
        {/* Cosmic background */}
        <div className="absolute inset-0 bg-gradient-stellar opacity-95" />
        <div className="absolute inset-0 bg-gradient-to-t from-bleu-profond/50 via-transparent to-bleu-cosmique/30" />

        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-ocre-solaire/10 rounded-full blur-[120px] md:blur-[180px]" />

        <div className="container mx-auto max-w-3xl relative z-10 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-semibold text-ivoire-cosmique leading-tight mb-5 md:mb-6">
            {t.servicesPage?.cta.title}
          </h2>
          <p className="text-base md:text-lg text-ivoire-cosmique/80 leading-relaxed mb-8 md:mb-10 max-w-2xl mx-auto">
            {t.servicesPage?.cta.description}
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-ocre-solaire hover:bg-ocre-clair text-brun-racine font-cormorant text-lg tracking-wide rounded-full transition-all duration-300 shadow-warm hover:shadow-lg hover:-translate-y-0.5"
          >
            {t.servicesPage?.cta.button}
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
