"use client";

import { motion } from "framer-motion";
import { Quote, Sparkles } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import RevealOnScroll, { Stagger, StaggerItem } from "@/components/ui/RevealOnScroll";

const avatarGradients = [
  "from-violet to-indigo",
  "from-coral to-gold",
  "from-indigo to-violet",
];

const skeletonWidths = ["w-full", "w-5/6", "w-4/6", "w-3/6"];

const placeholderCards = [0, 1, 2];

export default function Testimonials() {
  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          title="Student Stories Coming Soon"
          subtitle="We're collecting the first cohort of purposeed stories. Real journeys, real outcomes, coming soon."
          tone="light"
          align="center"
        />

        <Stagger className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {placeholderCards.map((i) => (
            <StaggerItem key={i}>
              <div className="relative overflow-hidden rounded-3xl bg-white p-8 shadow-sm shadow-indigo/5">
                <Quote
                  aria-hidden="true"
                  className={`absolute -right-2 -top-2 h-16 w-16 ${
                    i % 2 === 0 ? "text-violet/10" : "text-coral/10"
                  }`}
                />
                <div className="relative">
                  <div
                    className={`h-14 w-14 rounded-full bg-gradient-to-br ${avatarGradients[i % avatarGradients.length]}`}
                  />
                  <div className="mt-6 flex flex-col gap-3">
                    {skeletonWidths.slice(0, 3 + (i % 2)).map((width, j) => (
                      <motion.div
                        key={j}
                        animate={{ opacity: [0.4, 0.8, 0.4] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: j * 0.2,
                        }}
                        className={`h-3 ${width} rounded-full bg-indigo/10`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <RevealOnScroll className="mt-12 flex justify-center">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-indigo/10 px-5 py-2.5">
            <Sparkles className="h-4 w-4 text-coral" aria-hidden="true" />
            <span className="font-heading text-sm text-indigo-dark/60">
              Real student journeys will be added soon.
            </span>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
