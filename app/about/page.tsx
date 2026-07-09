import type { Metadata } from "next";
import PageHeader from "@/components/layout/PageHeader";
import FounderSection from "@/components/sections/FounderSection";
import PartnersSection from "@/components/sections/PartnersSection";
import CTABand from "@/components/sections/CTABand";

export const metadata: Metadata = {
  title: "About Us | purposeedu",
  description:
    "Meet the purposeedu mentors, students and strategists who have been through the admissions journey themselves, from Ivy League offers to full-ride scholarships.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About purposeedu"
        title="We built purposeedu because we needed it ourselves."
        subtitle="Every mentor on this team has sat on the other side of the admissions table, building a profile, writing the essay, waiting for the decision. That's the lens we bring to every student we work with."
      />
      <FounderSection variant="full" />
      <PartnersSection />
      <CTABand
        title="Want to work with a mentor who's been there?"
        subtitle="Book an introductory call and tell us where your child is headed. We'll help map the path."
      />
    </>
  );
}
