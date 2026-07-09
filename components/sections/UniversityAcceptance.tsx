"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, Award, Globe2, Sparkles, Star } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import LogoMarquee from "@/components/ui/LogoMarquee";
import { Stagger, StaggerItem } from "@/components/ui/RevealOnScroll";
import { universities } from "@/lib/data";

const badges = [
  { label: "Ivy League", icon: GraduationCap, tone: "coral" as const },
  { label: "Full Scholarships", icon: Award, tone: "gold" as const },
  { label: "Global Pathways", icon: Globe2, tone: "coral" as const },
];

const toneClasses: Record<"coral" | "gold", string> = {
  coral: "bg-coral/10 text-coral",
  gold: "bg-gold/15 text-gold",
};

const PARTICLE_COUNT = 14;
const colors = ["bg-coral", "bg-gold", "bg-violet"];

// Deterministic pseudo-random burst layout so server and client render identical markup.
const particles = Array.from({ length: PARTICLE_COUNT }, (_, i) => {
  const angle = (i / PARTICLE_COUNT) * Math.PI * 2 + (i % 3) * 0.35;
  const distance = 70 + (i % 4) * 16;
  return {
    id: i,
    x: Math.cos(angle) * distance,
    y: Math.sin(angle) * distance * 0.55,
    rotate: (i % 2 === 0 ? 1 : -1) * (30 + i * 5),
    delay: i * 0.03,
    color: colors[i % colors.length],
    isSparkle: i % 8 === 0,
    isStar: i % 5 === 0 && i % 8 !== 0,
  };
});

export default function UniversityAcceptance() {
  const half = Math.ceil(universities.length / 2);
  const rowOne = universities.slice(0, half);
  const rowTwo = [...universities.slice(half)].reverse();

  const burstRef = useRef(null);
  const inView = useInView(burstRef, { once: true, amount: 0.4 });

  return (
    <section className="relative overflow-hidden bg-cream py-20 md:py-28">
      <div ref={burstRef} className="relative mx-auto max-w-5xl px-6">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-0 w-0" aria-hidden>
          {particles.map((p) => {
            const ParticleIcon = p.isSparkle ? Sparkles : Star;
            return (
              <motion.span
                key={p.id}
                initial={{ opacity: 0, scale: 0, x: 0, y: 0, rotate: 0 }}
                animate={
                  inView
                    ? { opacity: [0, 1, 0], scale: [0, 1, 0.8], x: p.x, y: p.y, rotate: p.rotate }
                    : undefined
                }
                transition={{ duration: 0.9, delay: p.delay, ease: "easeOut" }}
                className="absolute left-0 top-0"
              >
                {p.isSparkle || p.isStar ? (
                  <ParticleIcon className={`h-3.5 w-3.5 ${p.color.replace("bg-", "text-")}`} />
                ) : (
                  <span className={`block h-2 w-2 rounded-full ${p.color}`} />
                )}
              </motion.span>
            );
          })}
        </div>

        <Stagger className="mb-8 flex flex-wrap items-center justify-center gap-3">
          {badges.map(({ label, icon: Icon, tone }) => (
            <StaggerItem key={label}>
              <span
                className={`inline-flex items-center gap-2 rounded-full px-4 py-2 font-heading text-xs font-semibold uppercase tracking-wide ${toneClasses[tone]}`}
              >
                <Icon className="h-3.5 w-3.5" />
                {label}
              </span>
            </StaggerItem>
          ))}
        </Stagger>

        <SectionHeading
          title="Universities Our Students and Mentors Have Been Accepted To"
          subtitle="From Ivy League campuses to leading Canadian, UK, and Australian universities. Here's where the purposeedu community has landed."
          tone="light"
          align="center"
        />
      </div>

      <div className="mx-auto mt-14 flex max-w-6xl flex-col gap-6 px-6 md:mt-16">
        <LogoMarquee items={rowOne} tone="light" speed={38} />
        <LogoMarquee items={rowTwo} tone="light" speed={52} />
      </div>
    </section>
  );
}
