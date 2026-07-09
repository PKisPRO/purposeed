"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import MagneticButton from "@/components/ui/MagneticButton";
import { Stagger, StaggerItem } from "@/components/ui/RevealOnScroll";
import { founders, type Founder } from "@/lib/data";

// lucide-react (installed version) ships no brand/logo icons, so the LinkedIn
// mark is a small inline SVG kept visually consistent with lucide's 24x24 grid.
function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3.5a1.96 1.96 0 1 0 0 3.92 1.96 1.96 0 0 0 0-3.92ZM20.44 20h-3.37v-5.98c0-1.43-.03-3.26-1.99-3.26-1.99 0-2.3 1.55-2.3 3.15V20H9.42V8.5h3.24v1.57h.05c.45-.85 1.56-1.75 3.2-1.75 3.42 0 4.05 2.25 4.05 5.18V20Z" />
    </svg>
  );
}

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function FounderCard({ founder, variant }: { founder: Founder; variant: "teaser" | "full" }) {
  const [imageFailed, setImageFailed] = useState(false);
  const [tapped, setTapped] = useState(false);
  const [hovered, setHovered] = useState(false);

  // Desktop reveals the full bio on hover; mobile (and the "full" variant's button) reveals it on tap.
  const isOpen = variant === "teaser" ? tapped || hovered : tapped;

  return (
    <div
      className={`group flex flex-col items-center rounded-3xl bg-white text-center shadow-sm shadow-indigo/5 transition-shadow duration-300 hover:shadow-xl hover:shadow-indigo/10 ${
        variant === "full" ? "p-8 md:p-10" : "p-6 md:p-8"
      }`}
      onMouseEnter={() => variant === "teaser" && setHovered(true)}
      onMouseLeave={() => variant === "teaser" && setHovered(false)}
      onClick={() => variant === "teaser" && setTapped((prev) => !prev)}
    >
      <div className="relative h-28 w-28 overflow-hidden rounded-full shadow-lg shadow-indigo/20 md:h-32 md:w-32">
        {imageFailed ? (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-violet to-indigo font-heading text-3xl font-bold text-cream">
            {initials(founder.name)}
          </div>
        ) : (
          <Image
            src={founder.image}
            alt={founder.name}
            fill
            sizes="128px"
            className="object-cover"
            onError={() => setImageFailed(true)}
          />
        )}
      </div>

      <h3 className="mt-5 font-heading text-lg font-bold text-indigo-dark md:text-xl">{founder.name}</h3>
      <p className="mt-1 font-heading text-sm font-medium text-coral">{founder.role}</p>

      <a
        href={founder.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => e.stopPropagation()}
        className="mt-3 inline-flex items-center gap-1.5 text-sm text-indigo transition-all duration-200 hover:-translate-y-0.5 hover:text-coral"
      >
        <LinkedinIcon className="h-4 w-4" />
        View LinkedIn
      </a>

      <div className="mt-4 w-full text-left">
        <AnimatePresence mode="wait" initial={false}>
          {!isOpen ? (
            <motion.p
              key="clamped"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="line-clamp-2 text-center text-sm leading-relaxed text-indigo-dark/70 md:text-left"
            >
              {founder.bio}
            </motion.p>
          ) : (
            <motion.div
              key="full"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <p className="text-center text-sm leading-relaxed text-indigo-dark/70 md:text-left">{founder.bio}</p>
            </motion.div>
          )}
        </AnimatePresence>

        {variant === "full" && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setTapped((prev) => !prev);
            }}
            className="mx-auto mt-3 block font-heading text-xs font-semibold uppercase tracking-widest text-coral transition-colors hover:text-indigo md:mx-0"
          >
            {isOpen ? "Show Less" : "Read Story"}
          </button>
        )}
      </div>
    </div>
  );
}

export default function FounderSection({ variant = "teaser" }: { variant?: "teaser" | "full" }) {
  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <SectionHeading
          align="center"
          tone="light"
          title="Learn From Those Who Have Been There"
          subtitle="Our mentors have lived the journey, from building authentic profiles to earning offers from leading universities around the world."
        />

        <Stagger className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
          {founders.map((founder) => (
            <StaggerItem key={founder.name}>
              <FounderCard founder={founder} variant={variant} />
            </StaggerItem>
          ))}
        </Stagger>

        {variant === "teaser" ? (
          <div className="mt-14 flex justify-center">
            <MagneticButton variant="ghost" href="/about">
              Meet the Mentors
            </MagneticButton>
          </div>
        ) : (
          <p className="mt-14 text-center font-editorial text-lg italic text-indigo/70">
            Every mentor at purposeed has been on the other side of the admissions table.
          </p>
        )}
      </div>
    </section>
  );
}
