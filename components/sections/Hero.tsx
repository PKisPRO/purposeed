"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Sparkles,
  GraduationCap,
  Gem,
  Compass,
  PenLine,
  Globe2,
  Users,
} from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";
import GradientBlobs from "@/components/ui/GradientBlobs";
import { CTA } from "@/lib/constants";
import { trustPoints } from "@/lib/data";

const EASE = [0.22, 1, 0.36, 1] as const;

const trustIconMap: Record<string, typeof GraduationCap> = {
  "graduation-cap": GraduationCap,
  gem: Gem,
  users: Users,
  globe: Globe2,
};

const floatingBadges = [
  {
    icon: GraduationCap,
    label: "Accepted to Harvard",
    position: "left-[4%] top-[16%]",
    rotation: "-rotate-3",
    float: "animate-float",
    chip: "bg-coral",
  },
  {
    icon: Gem,
    label: "Full-ride scholarship",
    position: "right-[5%] top-[22%]",
    rotation: "rotate-2",
    float: "animate-float-slow",
    chip: "bg-gold",
  },
  {
    icon: Compass,
    label: "Profile strategy",
    position: "left-[8%] bottom-[26%]",
    rotation: "rotate-3",
    float: "animate-float-slow",
    chip: "bg-coral",
  },
  {
    icon: PenLine,
    label: "Essay mentoring",
    position: "right-[7%] bottom-[30%]",
    rotation: "-rotate-2",
    float: "animate-float",
    chip: "bg-gold",
  },
  {
    icon: Globe2,
    label: "Global university pathways",
    position: "right-[14%] top-[6%]",
    rotation: "rotate-1",
    float: "animate-float-slow",
    chip: "bg-coral",
  },
];

const headline = [
  { text: "Your ", accent: false },
  { text: "Purpose", accent: true },
  { text: ". Your ", accent: false },
  { text: "Profile", accent: true },
  { text: ". Your ", accent: false },
  { text: "Path", accent: true },
  { text: " to Global Universities.", accent: false },
];

const heroVideos = ["/videos/hero-1.mp4", "/videos/hero-2.mp4", "/videos/hero-3.mp4", "/videos/hero-4.mp4"];

export default function Hero() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  function handleVideoEnd() {
    setCurrentVideoIndex((prev) => (prev + 1) % heroVideos.length);
  }

  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-indigo">
      {/* Decorative gradient-mesh + dot-grid background, visible behind the video (and as graceful fallback if the video source is missing) */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -left-32 -top-20 h-96 w-96 rounded-full bg-violet/40 blur-3xl" />
        <div className="absolute right-0 top-1/4 h-[28rem] w-[28rem] rounded-full bg-indigo-dark/60 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 h-80 w-80 rounded-full bg-coral/20 blur-3xl" />
        <GradientBlobs />
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(251,246,236,0.6) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
          aria-hidden
        />
      </div>

      <div className="absolute inset-0 z-[1] h-full w-full overflow-hidden">
        <AnimatePresence mode="sync">
          <motion.video
            key={currentVideoIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: EASE }}
            autoPlay
            muted
            playsInline
            preload="auto"
            onEnded={handleVideoEnd}
            className="absolute inset-0 h-full w-full object-cover"
          >
            <source src={heroVideos[currentVideoIndex]} type="video/mp4" />
            Your browser does not support the video tag.
          </motion.video>
        </AnimatePresence>
      </div>

      <div className="absolute inset-0 z-[2] bg-gradient-to-br from-[#3A2E8C]/85 via-[#3A2E8C]/65 to-[#6B5FD4]/70" />

      {floatingBadges.map(({ icon: Icon, label, position, rotation, float, chip }) => (
        <div
          key={label}
          className={`absolute z-10 hidden ${position} ${rotation} ${float} md:block`}
        >
          <div className="flex items-center gap-3 rounded-2xl border border-white/20 bg-white/10 px-4 py-3 shadow-xl backdrop-blur-md">
            <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${chip}`}>
              <Icon className="h-4 w-4 text-cream" />
            </span>
            <span className="font-heading text-sm font-medium text-cream">{label}</span>
          </div>
        </div>
      ))}

      <div className="relative z-10 flex min-h-screen flex-col justify-center px-6 pb-40 pt-32 sm:px-8 md:pb-48">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0, ease: EASE }}
            className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full bg-cream/10 px-4 py-2 text-xs backdrop-blur-md sm:text-sm"
          >
            <Sparkles className="h-4 w-4 text-gold" />
            <span className="text-cream/80">
              For students in Grades 8–12 exploring global universities, profile building, scholarships, and future-ready careers.
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12, ease: EASE }}
            className="text-balance font-heading text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-7xl"
          >
            {headline.map((part, i) => (
              <span key={i} className={part.accent ? "text-coral" : "text-cream"}>
                {part.text}
              </span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.24, ease: EASE }}
            className="mx-auto mt-6 max-w-2xl text-lg text-cream/85 md:text-xl"
          >
            We help high school students discover their strengths, build meaningful profiles, and craft authentic applications for top universities across the world.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.36, ease: EASE }}
            className="mx-auto mt-10 flex w-full max-w-md flex-col gap-4 sm:max-w-none sm:flex-row sm:justify-center"
          >
            <MagneticButton variant="coral" href={CTA.primary.href} className="w-full sm:w-auto">
              {CTA.primary.label}
            </MagneticButton>
            <MagneticButton variant="outline" href={CTA.secondary.href} className="w-full sm:w-auto">
              {CTA.secondary.label}
            </MagneticButton>
          </motion.div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 z-10 border-t border-cream/10 bg-indigo-dark/40 py-6 backdrop-blur-sm">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 px-6 sm:px-8 md:grid-cols-4">
          {trustPoints.map((point) => {
            const Icon = trustIconMap[point.icon] ?? Sparkles;
            return (
              <div key={point.label} className="flex items-center justify-center gap-2.5 sm:justify-start">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-coral/15 text-coral">
                  <Icon className="h-4 w-4" />
                </span>
                <p className="font-heading text-xs font-medium leading-tight text-cream/85 sm:text-sm">
                  {point.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
