import type { Metadata } from "next";
import PageHeader from "@/components/layout/PageHeader";
import ResourcesGrid from "@/components/sections/ResourcesGrid";
import FAQSection from "@/components/sections/FAQSection";
import CTABand from "@/components/sections/CTABand";

export const metadata: Metadata = {
  title: "Resources | purposeedu",
  description:
    "University trends, admissions checklists, essay guidance, and profile-building resources for students and parents navigating global admissions.",
};

export default function ResourcesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Resources"
        title="Tools to help you think ahead, not scramble at the deadline."
        subtitle="A growing library for students and parents navigating profile building, applications, and scholarships."
      />
      <section className="bg-cream py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <ResourcesGrid />
        </div>
      </section>
      <FAQSection />
      <CTABand />
    </>
  );
}
