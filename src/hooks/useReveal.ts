import { useEffect, useRef, useState } from "react";

/** Returns true if the user asked for reduced motion. */
export function prefersReducedMotion() {
  if (typeof window === "undefined" || !window.matchMedia) return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

type Options = {
  /** Fraction of the element that must be visible to trigger. */
  threshold?: number;
  /** Margin around the root (e.g. "0px 0px -10% 0px" to trigger a bit early). */
  rootMargin?: string;
  /** Re-trigger every time the element enters the viewport. */
  once?: boolean;
};

/**
 * Reveal-on-scroll hook based on IntersectionObserver.
 * When the user prefers reduced motion, the element is considered
 * in-view immediately so no entrance animation runs.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>({
  threshold = 0.15,
  rootMargin = "0px 0px -10% 0px",
  once = true,
}: Options = {}) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (prefersReducedMotion() || typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setInView(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return { ref, inView };
}
