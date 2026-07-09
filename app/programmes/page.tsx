import type { Metadata } from "next";
import PageHeader from "@/components/layout/PageHeader";
import ProgrammesSection from "@/components/sections/ProgrammesSection";
import CTABand from "@/components/sections/CTABand";

export const metadata: Metadata = {
  title: "Programmes | purposeedu",
  description:
    "Profile building, STEM competitions, case-based learning, study immersion tours, and special workshops built for ambitious high school students.",
};

export default function ProgrammesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Programmes"
        title="Built for students who want to grow with direction."
        subtitle="Every purposeedu programme ties back to the same goal: a student who knows their strengths and can show them clearly, on paper and in person."
      />
      <ProgrammesSection variant="full" />
      <CTABand
        title="Not sure which programme fits?"
        subtitle="Book a call and we'll help map the right combination for your child's grade, goals, and timeline."
      />
    </>
  );
}
