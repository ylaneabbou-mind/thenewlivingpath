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
    { key: "services" as const, href: "/#services" },
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
          ? "backdrop-blur-md shadow-warm"
          : ""
      )}
      style={{ backgroundColor: isScrolled ? 'rgba(182, 133, 97, 0.95)' : '#B68561' }}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo / Brand */}
          <Link
            to="/"
            className="group flex items-center gap-3"
            onClick={handleNavClick}
          >
            <span className="font-serif text-2xl lg:text-3xl font-semibold tracking-wide transition-colors duration-300 group-hover:text-bleu-cosmique" style={{ color: '#2F1B12' }}>
              Ylane
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            {navItems.map((item) => (
              <Link
                key={item.key}
                to={item.href}
                onClick={handleNavClick}
                className={cn(
                  "font-cormorant text-lg tracking-wide relative py-2 transition-colors duration-300",
                  isActive(item.href)
                    ? "text-bleu-cosmique"
                    : "hover:text-bleu-cosmique"
                )}
                style={{ color: isActive(item.href) ? undefined : '#2F1B12' }}
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
              className="p-2 rounded-md hover:text-bleu-cosmique hover:bg-bleu-cosmique/10 transition-colors duration-300"
              style={{ color: '#2F1B12' }}
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
          "lg:hidden overflow-hidden transition-all duration-500 ease-in-out backdrop-blur-md",
          isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
        style={{ backgroundColor: 'rgba(182, 133, 97, 0.98)' }}
      >
        <nav className="container mx-auto px-6 py-6 flex flex-col gap-4" style={{ background: 'linear-gradient(to bottom, #B68561, rgba(161, 118, 90, 0.5))' }}>
          {navItems.map((item, index) => (
            <Link
              key={item.key}
              to={item.href}
              onClick={handleNavClick}
              className={cn(
                "font-cormorant text-xl tracking-wide py-3 px-4 rounded-md transition-all duration-300",
                isActive(item.href)
                  ? "text-bleu-cosmique bg-bleu-cosmique/10"
                  : "hover:text-bleu-cosmique hover:bg-bleu-cosmique/10"
              )}
              style={{ color: isActive(item.href) ? undefined : '#2F1B12' }}
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
