import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/i18n/LanguageContext";
import LanguageSelector from "./LanguageSelector";

const Header = () => {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("home");

  const navItems = [
    { key: "home", href: "#home" },
    { key: "histoire", href: "#histoire" },
    { key: "services", href: "#services" },
    { key: "ressources", href: "#ressources" },
    { key: "contact", href: "#contact" },
  ] as const;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (key: string, href: string) => {
    setActiveItem(key);
    setIsMobileMenuOpen(false);
    
    // Smooth scroll to section
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-ivoire-cosmique/95 backdrop-blur-md shadow-soft"
          : "bg-ivoire-cosmique"
      )}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo / Brand */}
          <a
            href="#home"
            className="group flex items-center gap-3"
            onClick={() => setActiveItem("home")}
          >
            <span className="font-serif text-2xl lg:text-3xl font-semibold tracking-wide text-brun-racine transition-colors duration-300 group-hover:text-bleu-cosmique">
              Ylane
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.key, item.href);
                }}
                className={cn(
                  "font-cormorant text-lg tracking-wide relative py-2 transition-colors duration-300",
                  activeItem === item.key
                    ? "text-ocre-solaire"
                    : "text-brun-racine hover:text-bleu-cosmique"
                )}
              >
                {t.nav[item.key]}
                {/* Animated underline */}
                <span
                  className={cn(
                    "absolute bottom-0 left-0 h-[2px] bg-bleu-cosmique rounded-full transition-all duration-300",
                    activeItem === item.key ? "w-full" : "w-0 group-hover:w-full"
                  )}
                />
                {/* Hover underline effect */}
                <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-bleu-cosmique/50 rounded-full transition-all duration-300 hover:w-full" />
              </a>
            ))}
            
            {/* Language Selector */}
            <LanguageSelector />
          </nav>

          {/* Mobile: Language Selector + Menu Button */}
          <div className="lg:hidden flex items-center gap-4">
            <LanguageSelector />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md text-brun-racine hover:text-bleu-cosmique hover:bg-bleu-cosmique/5 transition-colors duration-300"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "lg:hidden overflow-hidden transition-all duration-500 ease-in-out bg-ivoire-cosmique/98 backdrop-blur-md",
          isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <nav className="container mx-auto px-6 py-6 flex flex-col gap-4">
          {navItems.map((item, index) => (
            <a
              key={item.key}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.key, item.href);
              }}
              className={cn(
                "font-cormorant text-xl tracking-wide py-3 px-4 rounded-md transition-all duration-300",
                activeItem === item.key
                  ? "text-ocre-solaire bg-ocre-solaire/5"
                  : "text-brun-racine hover:text-bleu-cosmique hover:bg-bleu-cosmique/5"
              )}
              style={{
                animationDelay: `${index * 50}ms`,
              }}
            >
              {t.nav[item.key]}
            </a>
          ))}
        </nav>
      </div>

      {/* Subtle bottom border when scrolled */}
      <div
        className={cn(
          "absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gris-lune to-transparent transition-opacity duration-500",
          isScrolled ? "opacity-100" : "opacity-0"
        )}
      />
    </header>
  );
};

export default Header;
