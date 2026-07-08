"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import Link from "next/link";
import type { ReactNode, MouseEvent } from "react";
import { cn } from "@/lib/utils";

type Variant = "coral" | "cream" | "outline" | "ghost";

const variantClasses: Record<Variant, string> = {
  coral: "bg-coral text-cream shadow-lg shadow-coral/30 hover:shadow-coral/50",
  cream: "bg-cream text-indigo shadow-lg shadow-black/10 hover:shadow-black/20",
  outline: "border-2 border-cream/70 text-cream hover:bg-cream hover:text-indigo",
  ghost: "border-2 border-indigo/20 text-indigo hover:border-coral hover:text-coral",
};

export default function MagneticButton({
  children,
  href,
  variant = "coral",
  className,
  external,
  onClick,
}: {
  children: ReactNode;
  href?: string;
  variant?: Variant;
  className?: string;
  external?: boolean;
  onClick?: () => void;
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 15, mass: 0.5 });
  const springY = useSpring(y, { stiffness: 200, damping: 15, mass: 0.5 });

  function handleMouseMove(e: MouseEvent<HTMLElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const relX = e.clientX - rect.left - rect.width / 2;
    const relY = e.clientY - rect.top - rect.height / 2;
    x.set(relX * 0.35);
    y.set(relY * 0.35);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  const classes = cn(
    "relative inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 font-heading text-sm font-semibold tracking-wide transition-shadow duration-300 whitespace-nowrap",
    variantClasses[variant],
    className
  );

  const content = (
    <motion.span
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileTap={{ scale: 0.95 }}
      className={classes}
      onClick={onClick}
    >
      {children}
    </motion.span>
  );

  if (!href) return content;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="inline-block">
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className="inline-block">
      {content}
    </Link>
  );
}
