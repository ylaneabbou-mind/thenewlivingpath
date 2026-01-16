import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/i18n/LanguageContext";
import { MessageCircle, Instagram, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const { t } = useLanguage();

  const contactMethods = [
    {
      icon: MessageCircle,
      label: t.contactPage.methods.whatsapp.label,
      description: t.contactPage.methods.whatsapp.description,
      href: "https://wa.me/yourphonenumber",
      primary: true,
    },
    {
      icon: Instagram,
      label: t.contactPage.methods.instagram.label,
      description: t.contactPage.methods.instagram.description,
      href: "https://instagram.com/ylane",
      primary: false,
    },
    {
      icon: Mail,
      label: t.contactPage.methods.email.label,
      description: t.contactPage.methods.email.description,
      href: "mailto:hello@ylane.com",
      primary: false,
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-14 md:pt-32 md:pb-20 px-5 md:px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-stellar" />
        <div className="absolute top-20 left-1/3 w-[280px] md:w-[500px] h-[280px] md:h-[500px] bg-bleu-atmosphere/25 rounded-full blur-[100px] md:blur-[180px]" />
        <div className="absolute bottom-10 right-1/4 w-[220px] md:w-[400px] h-[220px] md:h-[400px] bg-ocre-solaire/15 rounded-full blur-[80px] md:blur-[150px]" />
        
        {/* Bottom edge fade */}
        <div className="absolute bottom-0 left-0 right-0 h-[70px] md:h-[100px] pointer-events-none" style={{ background: 'linear-gradient(to top, rgba(211,167,141,0.08) 0%, transparent 100%)' }} />
        
        <div className="container mx-auto max-w-4xl relative z-10 text-center">
          <p className="text-xs md:text-sm font-cormorant text-ocre-clair tracking-[0.2em] md:tracking-[0.25em] uppercase mb-4 md:mb-6 animate-fade-in">
            {t.contactPage.hero.subtitle}
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-serif font-semibold text-ivoire-cosmique leading-[1.2] md:leading-tight mb-5 md:mb-8 animate-fade-in">
            {t.contactPage.hero.title}
          </h1>
          <p className="text-base md:text-xl lg:text-2xl text-ivoire-cosmique/80 max-w-2xl mx-auto font-light leading-[1.7] md:leading-relaxed animate-fade-in">
            {t.contactPage.hero.description}
          </p>
        </div>
      </section>

      {/* Contact Methods Section */}
      <section className="relative py-14 md:py-24 px-5 md:px-6 overflow-hidden">
        {/* CTA brown background */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(90deg, #A1765A 0%, #CB9368 100%)' }} />
        
        {/* Top edge fade */}
        <div className="absolute top-0 left-0 right-0 h-[60px] md:h-[80px] pointer-events-none" style={{ background: 'linear-gradient(to bottom, rgba(0,53,115,0.06) 0%, transparent 100%)' }} />
        
        <div className="absolute top-1/4 right-0 w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-parchemin/12 rounded-full blur-[100px] md:blur-[150px]" />
        <div className="absolute bottom-1/3 left-0 w-[200px] md:w-[350px] h-[200px] md:h-[350px] bg-terre-douce/10 rounded-full blur-[90px] md:blur-[130px]" />
        
        <div className="container mx-auto max-w-3xl relative z-10">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-semibold mb-3 md:mb-4 leading-[1.25]" style={{ color: '#2F1B12' }}>
              {t.contactPage.methods.title}
            </h2>
            <p className="text-base md:text-lg max-w-xl mx-auto font-light leading-[1.7]" style={{ color: 'rgba(47, 27, 18, 0.75)' }}>
              {t.contactPage.methods.description}
            </p>
          </div>
          
          <div className="space-y-4 md:space-y-6">
            {contactMethods.map((method, index) => (
              <a
                key={method.label}
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex items-center gap-4 md:gap-6 p-5 md:p-6 rounded-2xl border transition-all duration-300 active:scale-[0.98] md:hover:-translate-y-1 ${
                  method.primary
                    ? "border-terre-accent/40 md:hover:border-terre-accent/70 md:hover:shadow-glow-gold"
                    : "border-bleu-cosmique/30 md:hover:border-bleu-cosmique/60 md:hover:shadow-glow-blue"
                }`}
                style={{ 
                  background: method.primary 
                    ? 'rgba(47, 27, 18, 0.12)' 
                    : 'rgba(8, 59, 115, 0.10)',
                  animationDelay: `${index * 100}ms` 
                }}
              >
                <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center flex-shrink-0 ${
                  method.primary
                    ? "bg-terre-accent/25 text-terre-accent"
                    : "bg-bleu-cosmique/20 text-bleu-cosmique"
                }`}>
                  <method.icon className="w-6 h-6 md:w-7 md:h-7" />
                </div>
                
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg md:text-xl font-serif font-semibold group-hover:text-bleu-cosmique transition-colors" style={{ color: '#2F1B12' }}>
                    {method.label}
                  </h3>
                  <p className="text-sm md:text-base font-light leading-[1.6] truncate md:whitespace-normal" style={{ color: 'rgba(47, 27, 18, 0.70)' }}>
                    {method.description}
                  </p>
                </div>
                
                <span className={`text-xl md:text-2xl transition-transform group-hover:translate-x-1 flex-shrink-0 ${
                  method.primary ? "text-terre-accent" : "text-bleu-cosmique"
                }`}>
                  →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Message Section */}
      <section className="relative py-14 md:py-24 px-5 md:px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-stellar" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] md:w-[600px] h-[350px] md:h-[600px] bg-bleu-atmosphere/25 rounded-full blur-[120px] md:blur-[200px]" />
        
        {/* Top edge fade */}
        <div className="absolute top-0 left-0 right-0 h-[60px] md:h-[80px] pointer-events-none" style={{ background: 'linear-gradient(to bottom, rgba(211,167,141,0.06) 0%, transparent 100%)' }} />
        {/* Bottom edge fade for footer */}
        <div className="absolute bottom-0 left-0 right-0 h-[80px] md:h-[100px] pointer-events-none" style={{ background: 'linear-gradient(to top, rgba(111,61,32,0.08) 0%, transparent 100%)' }} />
        
        <div className="container mx-auto max-w-3xl relative z-10 text-center px-2">
          <p className="font-cormorant text-xl md:text-2xl italic text-ocre-clair/90 mb-5 md:mb-6 leading-[1.5]">
            "{t.contactPage.closing.quote}"
          </p>
          <p className="text-ivoire-cosmique/80 text-base md:text-lg max-w-xl mx-auto font-light leading-[1.7]">
            {t.contactPage.closing.message}
          </p>
          
          <div className="mt-8 md:mt-10 flex items-center justify-center gap-3 md:gap-4">
            <div className="w-8 md:w-12 h-px bg-ocre-solaire/60" />
            <span className="text-ocre-clair font-cormorant italic text-sm md:text-base">
              {t.contactPage.closing.signature}
            </span>
            <div className="w-8 md:w-12 h-px bg-ocre-solaire/60" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
