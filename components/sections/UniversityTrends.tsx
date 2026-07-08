"use client";

import { TrendingUp, Globe2, Gem } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import MagneticButton from "@/components/ui/MagneticButton";

const trends = [
  {
    icon: TrendingUp,
    chip: "bg-coral/10 text-coral",
    title: "Global Admissions Competitiveness",
    body: "Acceptance rates at top global universities continue to tighten each year, making early profile-building and strategic positioning more important than ever.",
  },
  {
    icon: Globe2,
    chip: "bg-gold/15 text-gold",
    title: "Rising Interest in Canada, the UK & Australia",
    body: "Indian students are increasingly diversifying beyond the US, exploring strong programs across Canada, the UK, and Australia.",
  },
  {
    icon: Gem,
    chip: "bg-coral/10 text-coral",
    title: "Scholarship Access",
    body: "Merit and need-based scholarships are increasingly available for students who build a clear, well-positioned profile early.",
  },
];

export default function UniversityTrends() {
  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          title="Explore Global University Trends"
          subtitle="Help students and parents understand top university rankings, admissions competitiveness, and global education pathways."
          tone="light"
          align="center"
        />

        <div className="mt-14 grid grid-cols-1 gap-6 md:mt-16 md:grid-cols-3">
          {trends.map((trend, index) => (
            <RevealOnScroll key={trend.title} direction="up" delay={index * 0.1}>
              <div className="h-full rounded-2xl bg-white p-6 shadow-sm shadow-indigo/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <span className={`inline-flex h-11 w-11 items-center justify-center rounded-xl ${trend.chip}`}>
                  <trend.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-heading font-semibold text-indigo-dark">{trend.title}</h3>
                <p className="mt-2 text-sm text-indigo-dark/70">{trend.body}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        <div className="mt-12 flex justify-center md:mt-14">
          <MagneticButton
            variant="coral"
            href="https://www.topuniversities.com/world-university-rankings"
            external
          >
            View University Trends
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
