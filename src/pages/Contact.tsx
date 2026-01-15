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
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-stellar" />
        <div className="absolute top-20 left-1/3 w-[500px] h-[500px] bg-bleu-atmosphere/25 rounded-full blur-[180px] animate-glow-pulse" />
        <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-ocre-solaire/15 rounded-full blur-[150px]" />
        
        {/* Bottom edge fade */}
        <div className="absolute bottom-0 left-0 right-0 h-[100px] pointer-events-none" style={{ background: 'linear-gradient(to top, rgba(211,167,141,0.08) 0%, transparent 100%)' }} />
        
        <div className="container mx-auto max-w-4xl relative z-10 text-center">
          <p className="text-sm font-cormorant text-ocre-clair tracking-[0.25em] uppercase mb-6 animate-fade-in">
            {t.contactPage.hero.subtitle}
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-semibold text-ivoire-cosmique leading-tight mb-8 animate-fade-in">
            {t.contactPage.hero.title}
          </h1>
          <p className="text-xl md:text-2xl text-ivoire-cosmique/80 max-w-2xl mx-auto font-light leading-relaxed animate-fade-in">
            {t.contactPage.hero.description}
          </p>
        </div>
      </section>

      {/* Contact Methods Section */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-sable-doux" />
        <div className="absolute inset-0 bg-gradient-to-b from-argile-clair/40 via-transparent to-parchemin/60" />
        
        {/* Top edge fade */}
        <div className="absolute top-0 left-0 right-0 h-[80px] pointer-events-none" style={{ background: 'linear-gradient(to bottom, rgba(0,53,115,0.05) 0%, transparent 100%)' }} />
        
        <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-ocre-clair/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/3 left-0 w-[350px] h-[350px] bg-terre-claire/8 rounded-full blur-[130px]" />
        
        <div className="container mx-auto max-w-3xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-brun-racine mb-4">
              {t.contactPage.methods.title}
            </h2>
            <p className="text-lg text-foreground/70 max-w-xl mx-auto font-light">
              {t.contactPage.methods.description}
            </p>
          </div>
          
          <div className="space-y-6">
            {contactMethods.map((method, index) => (
              <a
                key={method.label}
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex items-center gap-6 p-6 rounded-2xl border transition-all duration-500 hover:-translate-y-1 ${
                  method.primary
                    ? "bg-gradient-to-r from-brun-racine/10 to-ocre-solaire/15 border-ocre-solaire/30 hover:border-ocre-solaire/60 hover:shadow-glow-gold"
                    : "bg-bleu-profond/5 border-bleu-cosmique/20 hover:border-bleu-cosmique/50 hover:shadow-glow-blue"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 ${
                  method.primary
                    ? "bg-ocre-solaire/20 text-ocre-solaire"
                    : "bg-bleu-cosmique/15 text-bleu-cosmique"
                }`}>
                  <method.icon className="w-7 h-7" />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-serif font-semibold text-brun-racine group-hover:text-bleu-cosmique transition-colors">
                    {method.label}
                  </h3>
                  <p className="text-foreground/60 font-light">
                    {method.description}
                  </p>
                </div>
                
                <span className={`text-2xl transition-transform group-hover:translate-x-1 ${
                  method.primary ? "text-ocre-solaire" : "text-bleu-cosmique"
                }`}>
                  →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Message Section */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-stellar" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-bleu-atmosphere/25 rounded-full blur-[200px] animate-glow-pulse" />
        
        {/* Top edge fade */}
        <div className="absolute top-0 left-0 right-0 h-[80px] pointer-events-none" style={{ background: 'linear-gradient(to bottom, rgba(211,167,141,0.06) 0%, transparent 100%)' }} />
        {/* Bottom edge fade for footer */}
        <div className="absolute bottom-0 left-0 right-0 h-[100px] pointer-events-none" style={{ background: 'linear-gradient(to top, rgba(111,61,32,0.08) 0%, transparent 100%)' }} />
        
        <div className="container mx-auto max-w-3xl relative z-10 text-center">
          <p className="font-cormorant text-2xl italic text-ocre-clair/90 mb-6">
            "{t.contactPage.closing.quote}"
          </p>
          <p className="text-ivoire-cosmique/80 text-lg max-w-xl mx-auto font-light">
            {t.contactPage.closing.message}
          </p>
          
          <div className="mt-10 flex items-center justify-center gap-4">
            <div className="w-12 h-px bg-ocre-solaire/60" />
            <span className="text-ocre-clair font-cormorant italic">
              {t.contactPage.closing.signature}
            </span>
            <div className="w-12 h-px bg-ocre-solaire/60" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
