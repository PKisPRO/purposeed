import type { Metadata } from "next";
import PageHeader from "@/components/layout/PageHeader";
import StudentJourney from "@/components/sections/StudentJourney";
import UniversityTrends from "@/components/sections/UniversityTrends";
import ProgrammesSection from "@/components/sections/ProgrammesSection";
import CTABand from "@/components/sections/CTABand";

export const metadata: Metadata = {
  title: "Admissions Counselling | purposeed",
  description:
    "A clear, mentor-led admissions counselling process — from discovering a student's strengths to standing out in front of the world's top universities.",
};

export default function AdmissionsCounsellingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Admissions Counselling"
        title="A process built around the student, not a template."
        subtitle="Profile building, university shortlisting, essays, and scholarship strategy — guided by mentors who've been admitted to the universities your child is aiming for."
      />
      <StudentJourney />
      <ProgrammesSection variant="teaser" />
      <UniversityTrends />
      <CTABand />
    </>
  );
}
