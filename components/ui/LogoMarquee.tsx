"use client";

import { useState } from "react";
import Image from "next/image";

type LogoItem = {
  name: string;
  logo: string;
  url: string;
};

function initials(name: string) {
  return name
    .split(" ")
    .filter((w) => w.length > 2 || /^[A-Z]/.test(w))
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

function LogoCard({ item, tone = "light" }: { item: LogoItem; tone?: "light" | "dark" }) {
  const [errored, setErrored] = useState(false);

  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`group flex h-24 w-48 shrink-0 items-center justify-center rounded-2xl px-6 transition-all duration-300 hover:-translate-y-1 ${
        tone === "light"
          ? "bg-white shadow-sm shadow-indigo/5 hover:shadow-lg hover:shadow-indigo/10"
          : "bg-white/10 backdrop-blur-sm hover:bg-white/20"
      }`}
      title={item.name}
    >
      {!errored ? (
        <Image
          src={item.logo}
          alt={`${item.name} logo`}
          width={140}
          height={56}
          className="max-h-12 w-auto object-contain grayscale transition-all duration-300 group-hover:grayscale-0"
          onError={() => setErrored(true)}
          unoptimized
        />
      ) : (
        <div className="flex flex-col items-center gap-1">
          <span
            className={`flex h-9 w-9 items-center justify-center rounded-full font-heading text-xs font-bold ${
              tone === "light" ? "bg-indigo/10 text-indigo" : "bg-cream/20 text-cream"
            }`}
          >
            {initials(item.name)}
          </span>
          <span
            className={`text-center text-[11px] font-medium leading-tight ${
              tone === "light" ? "text-indigo-dark/70" : "text-cream/70"
            }`}
          >
            {item.name}
          </span>
        </div>
      )}
    </a>
  );
}

export default function LogoMarquee({
  items,
  tone = "light",
  speed = 40,
}: {
  items: LogoItem[];
  tone?: "light" | "dark";
  speed?: number;
}) {
  const doubled = [...items, ...items];
  return (
    <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div
        className="flex w-max animate-marquee gap-6 [animation-duration:var(--marquee-duration)]"
        style={{ ["--marquee-duration" as string]: `${speed}s` }}
      >
        {doubled.map((item, i) => (
          <LogoCard key={`${item.name}-${i}`} item={item} tone={tone} />
        ))}
      </div>
    </div>
  );
}
