import { Instagram, Mail, Heart, Youtube, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";
import treeOfLife from "@/assets/tree-of-life.png";

const Footer = () => {
  const { t } = useLanguage();

  const navigation = [
    { key: "about" as const, href: "/story" },
    { key: "offerings" as const, href: "/services" },
    { key: "writings" as const, href: "/resources" },
    { key: "contact" as const, href: "/contact" },
  ];

  const socialLinks = [
    { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/ylane_abbou?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" },
    { name: "YouTube", icon: Youtube, href: "https://www.youtube.com/@abbouylane" },
    { name: "WhatsApp", icon: MessageCircle, href: "https://wa.me/33669220082" },
    { name: "Email", icon: Mail, href: "mailto:ylaneabbou@gmail.com" },
  ];

  return (
    <footer className="relative py-20 px-6 bg-gradient-to-b from-terre-claire to-terre-accent overflow-hidden">
      {/* Top edge fade - blends with cosmic section above */}
      <div className="absolute top-0 left-0 right-0 h-[80px] pointer-events-none" style={{ background: 'linear-gradient(to bottom, rgba(0,53,115,0.06) 0%, transparent 100%)' }} />
      
      {/* Warm earth glow effects */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[200px] bg-ocre-solaire/12 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/3 w-[300px] h-[150px] bg-terre-claire/8 rounded-full blur-[100px]" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid md:grid-cols-3 gap-12 items-start">
          {/* Brand */}
          <div className="space-y-4 text-center md:text-left">
            <h3 className="text-2xl font-serif font-semibold text-ivoire-cosmique">
              The New Living Path
            </h3>
            <p className="text-ivoire-cosmique/70 font-light leading-relaxed">
              {t.footer.tagline}
            </p>
          </div>

          {/* Navigation */}
          <div className="flex justify-center">
            <nav className="flex flex-wrap justify-center gap-x-8 gap-y-3">
              {navigation.map((item) => (
                <Link
                  key={item.key}
                  to={item.href}
                  className="text-ivoire-cosmique/70 hover:text-ocre-clair transition-colors font-light"
                >
                  {t.footer.nav[item.key]}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social */}
          <div className="flex justify-center md:justify-end gap-4">
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
        <div className="mt-16 pt-8 border-t border-ivoire-cosmique/15 flex flex-col items-center gap-5 text-center text-sm text-ivoire-cosmique/60">
          <img
            src={treeOfLife}
            alt=""
            aria-hidden
            className="w-14 h-14 md:w-16 md:h-16 object-contain opacity-90"
          />
          <p>© {new Date().getFullYear()} The New Living Path. {t.footer.copyright}</p>
          <p className="flex items-center justify-center gap-1">
            {t.footer.made_with}
            {t.footer.and_intention && <Heart className="w-4 h-4 text-ocre-solaire" />}
            {t.footer.and_intention}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
