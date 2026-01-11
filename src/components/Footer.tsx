import { Instagram, Mail, Heart } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  const navigation = [
    { key: "about" as const, href: "#about" },
    { key: "offerings" as const, href: "#offerings" },
    { key: "writings" as const, href: "#blog" },
    { key: "contact" as const, href: "#contact" },
  ];

  const socialLinks = [
    { name: "Instagram", icon: Instagram, href: "#" },
    { name: "Email", icon: Mail, href: "mailto:hello@ylane.com" },
  ];

  return (
    <footer className="relative py-20 px-6 bg-brun-racine overflow-hidden">
      {/* Warm earth glow effects */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[200px] bg-ocre-solaire/15 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/3 w-[300px] h-[150px] bg-terre-claire/10 rounded-full blur-[100px]" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid md:grid-cols-3 gap-12 items-start">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-serif font-semibold text-ivoire-cosmique">
              Ylane
            </h3>
            <p className="text-ivoire-cosmique/70 font-light leading-relaxed">
              {t.footer.tagline}
            </p>
          </div>

          {/* Navigation */}
          <div className="flex justify-center">
            <nav className="flex flex-wrap gap-x-8 gap-y-3">
              {navigation.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  className="text-ivoire-cosmique/70 hover:text-ocre-clair transition-colors font-light"
                >
                  {t.footer.nav[item.key]}
                </a>
              ))}
            </nav>
          </div>

          {/* Social */}
          <div className="flex md:justify-end gap-4">
            {socialLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="w-10 h-10 rounded-full bg-ivoire-cosmique/10 flex items-center justify-center text-ivoire-cosmique/70 hover:bg-ocre-solaire hover:text-ivoire-cosmique transition-all duration-300"
                aria-label={item.name}
              >
                <item.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-ivoire-cosmique/15 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-ivoire-cosmique/60">
          <p>© {new Date().getFullYear()} Ylane. {t.footer.copyright}</p>
          <p className="flex items-center gap-1">
            {t.footer.made_with} <Heart className="w-4 h-4 text-ocre-solaire" /> {t.footer.and_intention}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
