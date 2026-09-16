import { ReactNode, useRef } from "react";
import { cn } from "@/lib/utils";
import { prefersReducedMotion } from "@/hooks/useReveal";

type TiltCardProps = {
  children: ReactNode;
  className?: string;
  /** Max rotation in degrees on each axis. */
  max?: number;
};

/**
 * Subtle 3D tilt that follows the cursor. Adds a `data-tilt-hover`
 * attribute while hovered (children can react, e.g. to spin an icon)
 * and disables itself under prefers-reduced-motion.
 */
const TiltCard = ({ children, className, max = 6 }: TiltCardProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(900px) rotateX(${(-py * max).toFixed(2)}deg) rotateY(${(px * max).toFixed(2)}deg)`;
  };

  const reset = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "";
  };

  return (
    <div
      ref={ref}
      onPointerMove={handleMove}
      onPointerLeave={reset}
      className={cn("motion-safe:transition-transform motion-safe:duration-300 [transform-style:preserve-3d]", className)}
    >
      {children}
    </div>
  );
};

export default TiltCard;
