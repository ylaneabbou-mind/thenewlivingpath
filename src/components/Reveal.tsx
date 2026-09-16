import { CSSProperties, ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useReveal } from "@/hooks/useReveal";

type Direction = "up" | "left" | "right" | "none";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Entrance delay in ms — use for staggered cascades. */
  delay?: number;
  /** Direction the element travels in from. */
  direction?: Direction;
  /** Render as a different element (e.g. "li", "section"). */
  as?: ElementType;
  /** IntersectionObserver threshold. */
  threshold?: number;
  /** Extra inline styles, merged with the transition delay. */
  style?: CSSProperties;
};

const hidden: Record<Direction, string> = {
  up: "opacity-0 translate-y-6",
  left: "opacity-0 -translate-x-10",
  right: "opacity-0 translate-x-10",
  none: "opacity-0",
};

/**
 * Fade + translate entrance on scroll. Honors prefers-reduced-motion
 * via useReveal (which reports in-view immediately) and the global
 * reduced-motion CSS guard that neutralizes transforms.
 */
const Reveal = ({
  children,
  className,
  delay = 0,
  direction = "up",
  as: Tag = "div",
  threshold,
  style,
}: RevealProps) => {
  const { ref, inView } = useReveal<HTMLElement>({ threshold });

  return (
    <Tag
      ref={ref}
      className={cn(
        "motion-safe:transition-all motion-safe:duration-700 motion-safe:ease-out will-change-transform",
        inView ? "opacity-100 translate-x-0 translate-y-0" : hidden[direction],
        className
      )}
      style={{ ...style, transitionDelay: inView ? `${delay}ms` : "0ms" }}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
