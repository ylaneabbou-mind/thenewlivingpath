import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { prefersReducedMotion } from "@/hooks/useReveal";
import treeOfLife from "@/assets/tree-of-life.png";

const Hero = () => {
  const { t } = useLanguage();
  const parallaxRef = useRef<HTMLDivElement>(null);

  // Gentle parallax on the star field: reacts to scroll and, on desktop,
  // to pointer movement. Disabled entirely under reduced-motion.
  useEffect(() => {
    if (prefersReducedMotion()) return;
    const el = parallaxRef.current;
    if (!el) return;

    let scrollY = 0;
    let mx = 0;
    let my = 0;
    let frame = 0;

    const apply = () => {
      frame = 0;
      el.style.transform = `translate3d(${mx}px, ${scrollY + my}px, 0)`;
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(apply);
    };
    const onScroll = () => {
      scrollY = window.scrollY * 0.15;
      schedule();
    };
    const onMove = (e: PointerEvent) => {
      if (window.innerWidth < 768) return;
      mx = (e.clientX / window.innerWidth - 0.5) * 20;
      my = (e.clientY / window.innerHeight - 0.5) * 20;
      schedule();
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("pointermove", onMove);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Stellar Flow gradient background */}
      <div className="absolute inset-0 bg-gradient-stellar" />

      {/* Cosmic glow effects */}
      <div className="absolute top-20 right-1/4 w-[600px] h-[600px] bg-bleu-atmosphere/30 rounded-full blur-[200px] animate-glow-pulse" />
      <div className="absolute bottom-20 left-1/4 w-[500px] h-[500px] bg-ocre-solaire/20 rounded-full blur-[180px] animate-glow-pulse" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-bleu-profond/40 rounded-full blur-[250px]" />

      {/* Parallax star field */}
      <div
        ref={parallaxRef}
        className="absolute -inset-24 opacity-30 will-change-transform"
        style={{ backgroundImage: 'radial-gradient(circle at 20% 30%, rgba(255,255,255,0.1) 1px, transparent 1px), radial-gradient(circle at 80% 70%, rgba(255,255,255,0.08) 1px, transparent 1px), radial-gradient(circle at 40% 80%, rgba(255,255,255,0.06) 1px, transparent 1px)', backgroundSize: '100px 100px, 150px 150px, 200px 200px' }}
      />

      {/* Bottom edge fade for seamless transition */}
      <div className="absolute bottom-0 left-0 right-0 h-[100px] pointer-events-none" style={{ background: 'linear-gradient(to top, rgba(243,234,226,0.08) 0%, transparent 100%)' }} />

      <div className="container relative z-10 px-6 pt-40 md:pt-32 lg:pt-40 pb-20 mx-auto">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          {/* Tree of life — slow breathing (scale + glow) */}
          <div className="w-56 h-56 md:w-64 md:h-64 mx-auto mb-10 motion-safe:animate-breathe">
            <img src={treeOfLife} alt={t.hero.portrait_placeholder} className="w-full h-full object-contain" />
          </div>

          {/* Cascade entrance: label → title → subtitle → CTA */}
          <p className="text-lg md:text-xl font-cormorant text-ocre-clair tracking-[0.2em] uppercase motion-safe:opacity-0 motion-safe:animate-fade-in" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>{t.hero.tagline}</p>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold tracking-tight leading-tight motion-safe:opacity-0 motion-safe:animate-fade-in" style={{ animationDelay: "0.45s", animationFillMode: "forwards" }}>
            <span className="text-ivoire-cosmique">{t.hero.title_line1}</span><br />
            <span className="text-ocre-clair">{t.hero.title_line2}</span>
          </h1>

          <p className="text-xl md:text-2xl text-ivoire-cosmique/80 max-w-2xl mx-auto font-light leading-relaxed whitespace-pre-line motion-safe:opacity-0 motion-safe:animate-fade-in" style={{ animationDelay: "0.7s", animationFillMode: "forwards" }}>
            {t.hero.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8 motion-safe:opacity-0 motion-safe:animate-fade-in" style={{ animationDelay: "0.95s", animationFillMode: "forwards" }}>
            <Button asChild size="lg" className="cta-motion group text-lg px-8 py-6 bg-gradient-solar text-white shadow-glow-gold rounded-lg">
              <Link to="/contact">
                {t.hero.cta_primary}<ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="cta-motion text-lg px-8 py-6 bg-transparent border-ivoire-cosmique/50 text-ivoire-cosmique hover:bg-ivoire-cosmique/10 hover:border-ivoire-cosmique rounded-lg backdrop-blur-sm">
              <Link to="/services/vision-alignment">
                {t.hero.cta_secondary}
              </Link>
            </Button>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
