import { Instagram, Youtube, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative border-t border-border/50 py-16 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-serif font-bold bg-gradient-to-r from-primary to-gold bg-clip-text text-transparent">
              Your Name
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Guiding souls through transformation, alignment, and the remembrance of their infinite nature.
            </p>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Explore</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Offerings
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Connect</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-secondary/50 border border-primary/30 flex items-center justify-center hover:bg-primary/20 hover:border-primary transition-all duration-300"
              >
                <Instagram className="w-5 h-5 text-primary" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-secondary/50 border border-primary/30 flex items-center justify-center hover:bg-primary/20 hover:border-primary transition-all duration-300"
              >
                <Youtube className="w-5 h-5 text-primary" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-secondary/50 border border-primary/30 flex items-center justify-center hover:bg-primary/20 hover:border-primary transition-all duration-300"
              >
                <Mail className="w-5 h-5 text-primary" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border/30 text-center text-sm text-muted-foreground">
          <p>© 2024 All Rights Reserved. Created with love and cosmic intention.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
