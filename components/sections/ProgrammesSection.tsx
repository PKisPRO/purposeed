"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  Compass,
  FlaskConical,
  Briefcase,
  Globe2,
  Sparkles,
  ChevronDown,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Stagger, StaggerItem } from "@/components/ui/RevealOnScroll";
import SectionHeading from "@/components/ui/SectionHeading";
import MagneticButton from "@/components/ui/MagneticButton";
import { cn } from "@/lib/utils";
import { programmes, type Programme } from "@/lib/data";

const EASE = [0.22, 1, 0.36, 1] as const;

const iconMap: Record<string, LucideIcon> = {
  compass: Compass,
  flask: FlaskConical,
  briefcase: Briefcase,
  globe: Globe2,
  sparkles: Sparkles,
};

function AccordionCard({ programme, index }: { programme: Programme; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const Icon = iconMap[programme.icon] ?? Sparkles;

  useEffect(() => {
    // Reads window.location only after mount to avoid an SSR/hydration mismatch.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (window.location.hash === `#${programme.id}`) setExpanded(true);
  }, [programme.id]);

  return (
    <div
      id={programme.id}
      className="scroll-mt-24 overflow-hidden rounded-3xl bg-white shadow-sm shadow-indigo/5"
    >
      <button
        onClick={() => setExpanded((prev) => !prev)}
        className="flex w-full items-center gap-4 p-6 text-left"
      >
        <span
          className={cn(
            "flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br",
            index % 2 === 0 ? "from-coral to-gold" : "from-indigo to-violet"
          )}
        >
          <Icon className="h-6 w-6 text-cream" />
        </span>
        <span className="flex-1 font-heading text-lg font-bold text-indigo-dark">
          {programme.title}
        </span>
        <ChevronDown
          className={cn(
            "h-5 w-5 shrink-0 text-indigo/50 transition-transform duration-300",
            expanded && "rotate-180"
          )}
        />
      </button>
      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: EASE }}
            className="overflow-hidden"
          >
            <div className="space-y-5 px-6 pb-6">
              {programme.sections.map((section, i) => (
                <div key={i}>
                  {section.heading && (
                    <p className="font-heading text-sm font-semibold text-coral">
                      {section.heading}
                    </p>
                  )}
                  <p
                    className={cn(
                      "text-sm leading-relaxed text-indigo-dark/80",
                      section.heading && "mt-1"
                    )}
                  >
                    {section.content}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function ProgrammesTeaser() {
  return (
    <>
      <Stagger className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {programmes.map((programme, index) => {
          const Icon = iconMap[programme.icon] ?? Sparkles;
          return (
            <StaggerItem key={programme.id}>
              <div className="h-full rounded-3xl bg-white p-8 shadow-sm shadow-indigo/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <span
                  className={cn(
                    "mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br",
                    index % 2 === 0 ? "from-coral to-gold" : "from-indigo to-violet"
                  )}
                >
                  <Icon className="h-7 w-7 text-cream" />
                </span>
                <h3 className="font-heading text-xl font-bold text-indigo-dark">
                  {programme.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-indigo-dark/70">
                  {programme.shortDescription}
                </p>
                <Link
                  href={`/programmes#${programme.id}`}
                  className="mt-6 inline-flex items-center gap-1 font-heading text-sm font-medium text-coral transition-all hover:gap-2"
                >
                  <span>Learn More</span>
                  <span aria-hidden>→</span>
                </Link>
              </div>
            </StaggerItem>
          );
        })}
      </Stagger>
      <div className="mt-14 flex justify-center">
        <MagneticButton variant="ghost" href="/programmes">
          Explore Programmes
        </MagneticButton>
      </div>
    </>
  );
}

function ProgrammesFull() {
  const [activeId, setActiveId] = useState(programmes[0].id);
  const active = programmes.find((p) => p.id === activeId) ?? programmes[0];

  // Mobile relies on native #id anchoring to the accordion card; desktop has no visible element
  // sharing that id (to avoid duplicate DOM ids), so we resolve the hash into tab state here instead.
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (!programmes.some((p) => p.id === hash)) return;
    // eslint-disable-next-line react-hooks/set-state-in-effect -- resolves post-mount, SSR-unsafe otherwise
    setActiveId(hash);
    if (window.matchMedia("(min-width: 768px)").matches) {
      requestAnimationFrame(() => {
        document.getElementById(`tab-${hash}`)?.scrollIntoView({ behavior: "smooth", block: "center" });
      });
    }
  }, []);

  return (
    <>
      <div className="mt-16 hidden md:grid md:grid-cols-[300px_1fr] md:gap-10">
        <Stagger className="flex flex-col gap-2">
          {programmes.map((programme) => {
            const Icon = iconMap[programme.icon] ?? Sparkles;
            const isActive = programme.id === activeId;
            return (
              <StaggerItem key={programme.id}>
                <button
                  id={`tab-${programme.id}`}
                  onClick={() => setActiveId(programme.id)}
                  className={cn(
                    "flex w-full items-center gap-3 rounded-2xl border-l-4 px-4 py-3.5 text-left transition-all duration-300",
                    isActive
                      ? "border-coral bg-white shadow-sm shadow-indigo/5"
                      : "border-transparent text-indigo-dark/60 hover:text-indigo-dark"
                  )}
                >
                  <span
                    className={cn(
                      "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br",
                      isActive ? "from-coral to-gold" : "from-indigo/40 to-violet/40"
                    )}
                  >
                    <Icon className="h-5 w-5 text-cream" />
                  </span>
                  <span className="font-heading text-sm font-semibold">{programme.title}</span>
                </button>
              </StaggerItem>
            );
          })}
        </Stagger>

        <div className="relative overflow-hidden rounded-3xl bg-white p-10 shadow-sm shadow-indigo/5">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -12 }}
              transition={{ duration: 0.35, ease: EASE }}
              className="space-y-6"
            >
              <h3 className="font-heading text-2xl font-bold text-indigo-dark">{active.title}</h3>
              {active.sections.map((section, i) => (
                <div key={i}>
                  {section.heading && (
                    <p className="font-heading text-sm font-semibold uppercase tracking-wide text-coral">
                      {section.heading}
                    </p>
                  )}
                  <p
                    className={cn(
                      "leading-relaxed text-indigo-dark/80",
                      section.heading && "mt-2"
                    )}
                  >
                    {section.content}
                  </p>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="mt-16 flex flex-col gap-4 md:hidden">
        {programmes.map((programme, index) => (
          <AccordionCard key={programme.id} programme={programme} index={index} />
        ))}
      </div>
    </>
  );
}

export default function ProgrammesSection({
  variant = "teaser",
}: {
  variant?: "teaser" | "full";
}) {
  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <SectionHeading
          tone="light"
          align="center"
          title="Programmes Built for Ambitious High School Students"
          subtitle="From profile building and admissions strategy to STEM competitions, case-based learning, study tours, and pre-university readiness — purposeed helps students grow with direction."
        />
        {variant === "teaser" ? <ProgrammesTeaser /> : <ProgrammesFull />}
      </div>
    </section>
  );
}
