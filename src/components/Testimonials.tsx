import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { cn } from "@/lib/utils";
import arthurAvatar from "@/assets/testimonial-arthur.png";
import soleneAvatar from "@/assets/testimonial-solene.png";

type Item = { quote: string; author: string; title: string };

const avatarMap: Record<string, string> = {
  Arthur: arthurAvatar,
  "Solène": soleneAvatar,
};

const TestimonialCard = ({ testimonial }: { testimonial: Item }) => {
  const { t } = useLanguage();
  const [expanded, setExpanded] = useState(false);
  const [isClamped, setIsClamped] = useState(false);
  const quoteRef = useRef<HTMLQuoteElement>(null);

  useLayoutEffect(() => {
    const el = quoteRef.current;
    if (!el) return;
    // Only meaningful while collapsed (clamped)
    if (!expanded) {
      setIsClamped(el.scrollHeight > el.clientHeight + 1);
    }
  }, [expanded, testimonial.quote]);

  return (
    <div className="h-full flex flex-col p-8 rounded-2xl bg-ivoire-cosmique/10 backdrop-blur-md border border-ivoire-cosmique/20 transition-all duration-500">
      <Quote className="w-10 h-10 text-ocre-clair/60 mb-6 shrink-0" />

      <blockquote
        ref={quoteRef}
        className={cn(
          "text-ivoire-cosmique leading-relaxed font-light",
          expanded ? "" : "line-clamp-6"
        )}
      >
        "{testimonial.quote}"
      </blockquote>

      {(isClamped || expanded) && (
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
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
          <p className="text-sm text-ivoire-cosmique/60">{testimonial.title}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const { t } = useLanguage();
  const items = t.testimonials.items;

  const [perView, setPerView] = useState(1);
  const [page, setPage] = useState(0);

  // Responsive per-view: 1 on mobile, 3 on desktop
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const update = () => setPerView(mq.matches ? 3 : 1);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const pageCount = Math.max(1, Math.ceil(items.length / perView));

  // Keep page in range when perView changes
  useEffect(() => {
    setPage((p) => Math.min(p, pageCount - 1));
  }, [pageCount]);

  const goTo = (p: number) => setPage(((p % pageCount) + pageCount) % pageCount);

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

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16 space-y-4">
          <p className="text-sm font-cormorant text-ocre-clair tracking-[0.25em] uppercase">
            {t.testimonials.subtitle}
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-ivoire-cosmique">
            {t.testimonials.title_line1}
            <span className="text-ocre-clair"> {t.testimonials.title_line2}</span>
          </h2>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${page * 100}%)` }}
            >
              {items.map((testimonial) => (
                <div
                  key={testimonial.author}
                  className="shrink-0 px-3"
                  style={{ flexBasis: `${100 / perView}%`, maxWidth: `${100 / perView}%` }}
                >
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </div>
          </div>

          {/* Arrows (shown when more than one page) */}
          {pageCount > 1 && (
            <>
              <button
                type="button"
                aria-label="Previous"
                onClick={() => goTo(page - 1)}
                className="absolute -left-4 md:-left-16 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-ivoire-cosmique/10 backdrop-blur-md border border-ivoire-cosmique/20 flex items-center justify-center text-ivoire-cosmique hover:bg-ivoire-cosmique/20 transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                aria-label="Next"
                onClick={() => goTo(page + 1)}
                className="absolute -right-4 md:-right-16 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-ivoire-cosmique/10 backdrop-blur-md border border-ivoire-cosmique/20 flex items-center justify-center text-ivoire-cosmique hover:bg-ivoire-cosmique/20 transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}
        </div>

        {/* Dots */}
        {pageCount > 1 && (
          <div className="flex items-center justify-center gap-2 mt-10">
            {Array.from({ length: pageCount }).map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to page ${i + 1}`}
                onClick={() => goTo(i)}
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
