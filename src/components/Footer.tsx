import { Instagram, Mail, Heart } from "lucide-react";

const Footer = () => {
  const navigation = [
    { name: "About", href: "#about" },
    { name: "Offerings", href: "#offerings" },
    { name: "Writings", href: "#blog" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { name: "Instagram", icon: Instagram, href: "#" },
    { name: "Email", icon: Mail, href: "mailto:hello@ylane.com" },
  ];

  return (
    <footer className="relative py-20 px-6 bg-brun-racine/5 border-t border-gris-lune">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-12 items-start">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-serif font-semibold text-foreground">
              Ylane
            </h3>
            <p className="text-muted-foreground font-light leading-relaxed">
              Transformational guidance for those ready to remember their true nature.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex justify-center">
            <nav className="flex flex-wrap gap-x-8 gap-y-3">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-muted-foreground hover:text-brun-racine transition-colors font-light"
                >
                  {item.name}
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
                className="w-10 h-10 rounded-full bg-brun-racine/10 flex items-center justify-center text-brun-racine hover:bg-brun-racine hover:text-ivoire-cosmique transition-all duration-300"
                aria-label={item.name}
              >
                <item.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-gris-lune flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Ylane. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-ocre-solaire" /> and intention
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
