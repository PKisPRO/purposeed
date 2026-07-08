"use client";

import RevealOnScroll from "@/components/ui/RevealOnScroll";
import MagneticButton from "@/components/ui/MagneticButton";
import GradientBlobs from "@/components/ui/GradientBlobs";
import { CTA } from "@/lib/constants";

export default function CTABand({
  title = "Ready to Build a Profile Top Universities Remember?",
  subtitle = "Book a free introductory call with a purposeed mentor and get a clear next step for your child's admissions journey.",
  primaryLabel = "Book a Consultation",
  primaryHref = "/book-consultation",
}: {
  title?: string;
  subtitle?: string;
  primaryLabel?: string;
  primaryHref?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-indigo via-indigo to-violet py-24 md:py-32">
      <GradientBlobs />
      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center sm:px-8">
        <RevealOnScroll>
          <h2 className="text-balance font-heading text-3xl font-bold leading-tight text-cream md:text-4xl lg:text-5xl">
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-balance text-base leading-relaxed text-cream/80 md:text-lg">
            {subtitle}
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <MagneticButton variant="coral" href={primaryHref}>
              {primaryLabel}
            </MagneticButton>
            <MagneticButton variant="outline" href={CTA.whatsapp.href} external>
              {CTA.whatsapp.label}
            </MagneticButton>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
