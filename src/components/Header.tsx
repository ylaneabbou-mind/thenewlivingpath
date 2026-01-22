import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/i18n/LanguageContext";
import { Link, useLocation } from "react-router-dom";
import LanguageSelector from "./LanguageSelector";

const Header = () => {
  const { t } = useLanguage();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { key: "home" as const, href: "/" },
    { key: "histoire" as const, href: "/story" },
    { key: "services" as const, href: "/services" },
    { key: "ressources" as const, href: "/resources" },
    { key: "contact" as const, href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname === href || location.pathname.startsWith(href);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-sable-doux/95 backdrop-blur-md shadow-warm"
          : "bg-sable-doux"
      )}
    >
      <div className="container mx-auto px-5 lg:px-10">
        <div className="flex items-center justify-between h-14 md:h-16 lg:h-[72px]">
          {/* Logo / Brand */}
          <Link
            to="/"
            className="group flex items-center gap-2"
            onClick={handleNavClick}
          >
            <span className="font-serif text-xl md:text-2xl lg:text-[1.65rem] font-semibold tracking-wide text-brun-racine transition-colors duration-300 group-hover:text-bleu-cosmique">
              Ylane
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7 xl:gap-9">
            {navItems.map((item) => (
              <Link
                key={item.key}
                to={item.href}
                onClick={handleNavClick}
                className={cn(
                  "font-cormorant text-base lg:text-[1.05rem] tracking-wide relative py-1 transition-colors duration-300",
                  isActive(item.href)
                    ? "text-ocre-solaire"
                    : "text-brun-racine hover:text-bleu-cosmique"
                )}
              >
                {t.nav[item.key]}
                {/* Animated underline */}
                <span
                  className={cn(
                    "absolute bottom-0 left-0 h-[2px] bg-bleu-cosmique rounded-full transition-all duration-300",
                    isActive(item.href) ? "w-full" : "w-0 group-hover:w-full"
                  )}
                />
              </Link>
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
          "lg:hidden overflow-hidden transition-all duration-500 ease-in-out bg-sable-doux/98 backdrop-blur-md",
          isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <nav className="container mx-auto px-5 py-4 flex flex-col gap-2 bg-gradient-to-b from-sable-doux to-argile-clair/50">
          {navItems.map((item, index) => (
            <Link
              key={item.key}
              to={item.href}
              onClick={handleNavClick}
              className={cn(
                "font-cormorant text-lg tracking-wide py-2.5 px-4 rounded-md transition-all duration-300",
                isActive(item.href)
                  ? "text-ocre-solaire bg-ocre-solaire/5"
                  : "text-brun-racine hover:text-bleu-cosmique hover:bg-bleu-cosmique/5"
              )}
              style={{
                animationDelay: `${index * 50}ms`,
              }}
            >
              {t.nav[item.key]}
            </Link>
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
