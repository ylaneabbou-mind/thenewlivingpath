import { Quote } from "lucide-react";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { cn } from "@/lib/utils";
import { useReveal, prefersReducedMotion } from "@/hooks/useReveal";
import arthurAvatar from "@/assets/testimonial-arthur.png";
import soleneAvatar from "@/assets/testimonial-solene.png";
import jordanAvatar from "@/assets/testimonial-jordan.png";

type Item = { quote: string; author: string; title: string };

const avatarMap: Record<string, string> = {
  Arthur: arthurAvatar,
  "Solène": soleneAvatar,
  Jordan: jordanAvatar,
};

const COLLAPSED_MAX = 88; // px ≈ 3 lines when collapsed

const TestimonialCard = ({ testimonial, active, onInteract }: { testimonial: Item; active: boolean; onInteract?: () => void }) => {
  const { t } = useLanguage();
  const [expanded, setExpanded] = useState(false);
  const [fullHeight, setFullHeight] = useState(0);
  const [isClamped, setIsClamped] = useState(false);
  const [mounted, setMounted] = useState(false);
  const quoteRef = useRef<HTMLQuoteElement>(null);

  // Flip on after mount so tag entrance transitions actually run.
  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);
  const show = active && mounted;

  // Tags parsed from the Human Design title (e.g. "Generator, 3/5, Sacral").
  const tags = testimonial.title.split(",").map((s) => s.trim()).filter(Boolean);

  useLayoutEffect(() => {
    const el = quoteRef.current;
    if (!el) return;
    setFullHeight(el.scrollHeight);
    setIsClamped(el.scrollHeight > COLLAPSED_MAX + 1);
  }, [testimonial.quote]);

  return (
    <div className="h-full flex flex-col p-6 md:p-8 rounded-2xl bg-ivoire-cosmique/10 backdrop-blur-md border border-ivoire-cosmique/20 transition-all duration-500">
      <Quote className="w-10 h-10 text-ocre-clair/60 mb-6 shrink-0" />

      {/* Quote with animated accordion expand (height only) */}
      <blockquote
        ref={quoteRef}
        className="text-ivoire-cosmique leading-relaxed font-light overflow-hidden motion-safe:transition-[max-height] motion-safe:duration-500 motion-safe:ease-in-out"
        style={{ maxHeight: expanded ? `${fullHeight}px` : `${COLLAPSED_MAX}px` }}
      >
        "{testimonial.quote}"
      </blockquote>

      {isClamped && (
        <button
          type="button"
          onClick={() => { setExpanded((v) => !v); onInteract?.(); }}
          className="self-start mt-3 text-sm font-medium text-ocre-clair hover:text-ocre-solaire transition-colors"
        >
          {expanded ? t.testimonials.view_less : t.testimonials.view_more}
        </button>
      )}

      <div className="flex items-center gap-3 mt-auto pt-8">
        {avatarMap[testimonial.author] ? (
          <img
            src={avatarMap[testimonial.author]}
            alt={testimonial.author}
            className="w-10 h-10 rounded-full object-cover shrink-0"
          />
        ) : (
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-ocre-clair/40 to-ocre-solaire/30 shrink-0" />
        )}
        <div>
          <p className="font-medium text-ivoire-cosmique">{testimonial.author}</p>
          {/* Human Design tags — appear one by one when the card is active */}
          <div className="mt-1 flex flex-wrap gap-1.5">
            {tags.map((tag, i) => (
              <span
                key={tag + i}
                className="inline-flex items-center rounded-full bg-ocre-solaire/15 px-2.5 py-0.5 text-xs text-ocre-clair border border-ocre-clair/25 motion-safe:transition-all motion-safe:duration-500 motion-safe:ease-out"
                style={{
                  opacity: show ? 1 : 0,
                  transform: show ? "scale(1)" : "scale(0.8)",
                  transitionDelay: show ? `${i * 150}ms` : "0ms",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const PageRow = ({ items, perView, active, onInteract }: { items: Item[]; perView: number; active: boolean; onInteract?: () => void }) => (
  <div className="flex">
    {items.map((testimonial) => (
      <div
        key={testimonial.author}
        className="shrink-0 px-0 md:px-3"
        style={{ flexBasis: `${100 / perView}%`, maxWidth: `${100 / perView}%` }}
      >
        <TestimonialCard testimonial={testimonial} active={active} onInteract={onInteract} />
      </div>
    ))}
  </div>
);

const Testimonials = () => {
  const { t } = useLanguage();
  const items = t.testimonials.items;

  const [perView, setPerView] = useState(1);
  const [page, setPage] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const [paused, setPaused] = useState(false);
  const [interacted, setInteracted] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const { ref: sectionRef, inView } = useReveal<HTMLDivElement>({ threshold: 0.2, once: false });

  // Responsive per-view: 1 on mobile, 3 on desktop
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const update = () => setPerView(mq.matches ? 3 : 1);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const pageCount = Math.max(1, Math.ceil(items.length / perView));

  // Split items into pages of `perView`.
  const pages: Item[][] = [];
  for (let i = 0; i < items.length; i += perView) pages.push(items.slice(i, i + perView));

  // Keep page in range when perView changes
  useEffect(() => {
    setPage((p) => Math.min(p, pageCount - 1));
  }, [pageCount]);

  const goTo = (p: number, fromUser = false) => {
    if (fromUser) setInteracted(true);
    const next = ((p % pageCount) + pageCount) % pageCount;
    setPage((current) => {
      if (next !== current) setPrev(current);
      return next;
    });
  };

  // Touch swipe (mobile): left/right past a threshold changes slide and
  // stops autoplay so it never interrupts reading again.
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(dx) < 40 || pageCount <= 1) return;
    goTo(page + (dx < 0 ? 1 : -1), true);
  };

  // Autoplay: advance pages. Stops permanently once the user interacts;
  // also paused on hover (desktop), off-screen, or reduced motion.
  useEffect(() => {
    if (interacted || paused || !inView || pageCount <= 1 || prefersReducedMotion()) return;
    const id = window.setInterval(() => {
      setPage((p) => {
        setPrev(p);
        return (p + 1) % pageCount;
      });
    }, 9000);
    return () => window.clearInterval(id);
  }, [interacted, paused, inView, pageCount]);

  // Clear the outgoing page once its crossfade finishes.
  useEffect(() => {
    if (prev === null) return;
    const id = window.setTimeout(() => setPrev(null), 650);
    return () => window.clearTimeout(id);
  }, [prev, page]);

  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Cosmic Stellar Flow background */}
      <div className="absolute inset-0 bg-gradient-stellar" />

      {/* Top edge fade - blends with earth section above */}
      <div className="absolute top-0 left-0 right-0 h-[90px] pointer-events-none" style={{ background: 'linear-gradient(to bottom, rgba(243,234,226,0.06) 0%, transparent 100%)' }} />

      {/* Bottom edge fade - prepares for earth section below */}
      <div className="absolute bottom-0 left-0 right-0 h-[90px] pointer-events-none" style={{ background: 'linear-gradient(to top, rgba(243,234,226,0.05) 0%, transparent 100%)' }} />

      {/* Cosmic glow effects */}
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-bleu-atmosphere/25 rounded-full blur-[180px] animate-glow-pulse" />
      <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-bleu-profond/30 rounded-full blur-[150px]" />
      <div className="absolute top-1/2 left-1/4 w-[300px] h-[300px] bg-ocre-solaire/10 rounded-full blur-[120px] animate-glow-pulse" style={{ animationDelay: "3s" }} />

      <div ref={sectionRef} className="container mx-auto max-w-6xl relative z-10 px-0 md:px-8">
        <div className="text-center mb-16 space-y-4">
          <p className="text-sm font-cormorant text-ocre-clair tracking-[0.25em] uppercase">
            {t.testimonials.subtitle}
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-ivoire-cosmique">
            {t.testimonials.title_line1}
            <span className="text-ocre-clair"> {t.testimonials.title_line2}</span>
          </h2>
        </div>

        {/* Crossfade carousel */}
        <div
          className="relative touch-pan-y"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <div className="relative">
            {/* Active page in normal flow — dictates height (incl. expansion) */}
            <div key={page} className="motion-safe:animate-card-in">
              <PageRow items={pages[page] ?? []} perView={perView} active={inView} onInteract={() => setInteracted(true)} />
            </div>

            {/* Outgoing page overlaid, crossfading out */}
            {prev !== null && prev !== page && pages[prev] && (
              <div key={`out-${prev}`} className="absolute inset-0 motion-safe:animate-card-out pointer-events-none">
                <PageRow items={pages[prev]} perView={perView} active={false} />
              </div>
            )}
          </div>
        </div>

        {/* Dots */}
        {pageCount > 1 && (
          <div className="flex items-center justify-center gap-2 mt-10">
            {Array.from({ length: pageCount }).map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to page ${i + 1}`}
                onClick={() => goTo(i, true)}
                className={cn(
                  "h-2 rounded-full transition-all duration-300",
                  i === page ? "w-6 bg-ocre-clair" : "w-2 bg-ivoire-cosmique/30 hover:bg-ivoire-cosmique/50"
                )}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;
