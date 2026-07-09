"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Compass, Map, Layers, PenLine, Award, Rocket, type LucideIcon } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { cn } from "@/lib/utils";
import { journeySteps } from "@/lib/data";

const iconMap: Record<string, LucideIcon> = {
  compass: Compass,
  map: Map,
  layers: Layers,
  pen: PenLine,
  award: Award,
  rocket: Rocket,
};

export default function StudentJourney({ className }: { className?: string }) {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"],
  });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      ref={sectionRef}
      className={cn("relative overflow-hidden bg-cream py-20 md:py-28", className)}
    >
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          title="The Purposeedu Pathway"
          subtitle="A clear, mentor-led journey from self-discovery to standout applications."
          tone="light"
          align="center"
        />

        <div className="relative mt-16 md:mt-20">
          <div className="absolute left-6 top-0 h-full w-[2px] -translate-x-1/2 bg-indigo/10 md:left-1/2" />
          <motion.div
            style={{ scaleY: lineScale, transformOrigin: "top" }}
            className="absolute left-6 top-0 h-full w-[2px] -translate-x-1/2 bg-gradient-to-b from-coral to-gold md:left-1/2"
          />

          <div className="flex flex-col gap-12 md:gap-16">
            {journeySteps.map((item, index) => {
              const Icon = iconMap[item.icon];
              const isEven = index % 2 === 0;
              const direction = isEven ? "left" : "right";

              return (
                <div
                  key={item.step}
                  className="relative flex items-start gap-6 md:grid md:grid-cols-2 md:items-center md:gap-0"
                >
                  <div className="absolute left-6 top-0 z-10 -translate-x-1/2 md:left-1/2 md:top-1/2 md:-translate-y-1/2">
                    <div className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-indigo/20 bg-white">
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, amount: 0.6 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="absolute inset-0 bg-gradient-to-br from-coral to-gold"
                      />
                      <motion.div
                        initial={{ color: "rgba(58,46,140,0.4)" }}
                        whileInView={{ color: "#FBF6EC" }}
                        viewport={{ once: true, amount: 0.6 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="relative z-10 flex h-full w-full items-center justify-center"
                      >
                        <Icon className="h-5 w-5" />
                      </motion.div>
                    </div>
                  </div>

                  <div
                    className={cn(
                      "min-w-0 pl-16 md:pl-0",
                      isEven ? "md:col-start-1 md:pr-16 md:text-right" : "md:col-start-2 md:pl-16"
                    )}
                  >
                    <RevealOnScroll direction={direction}>
                      <span className="mb-2 inline-block rounded-full bg-indigo/10 px-3 py-1 font-heading text-xs font-semibold text-indigo">
                        Step {item.step}
                      </span>
                      <h3 className="font-heading text-lg font-bold text-indigo-dark md:text-xl">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-indigo-dark/70 md:text-base">
                        {item.description}
                      </p>
                    </RevealOnScroll>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
