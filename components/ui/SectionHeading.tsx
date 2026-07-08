import RevealOnScroll from "./RevealOnScroll";
import { cn } from "@/lib/utils";

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  tone = "light",
  className,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <RevealOnScroll
      className={cn(
        "mx-auto max-w-3xl",
        align === "center" ? "text-center" : "text-left mx-0",
        className
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            "mb-3 inline-block rounded-full px-4 py-1.5 font-heading text-xs font-semibold uppercase tracking-widest",
            tone === "light" ? "bg-coral/10 text-coral" : "bg-cream/10 text-gold"
          )}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "text-balance font-heading text-3xl font-bold leading-tight md:text-4xl lg:text-5xl",
          tone === "light" ? "text-indigo-dark" : "text-cream"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-balance text-base leading-relaxed md:text-lg",
            tone === "light" ? "text-indigo-dark/70" : "text-cream/75"
          )}
        >
          {subtitle}
        </p>
      )}
    </RevealOnScroll>
  );
}
