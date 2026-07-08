import Hero from "@/components/sections/Hero";
import UniversityAcceptance from "@/components/sections/UniversityAcceptance";
import ProgrammesSection from "@/components/sections/ProgrammesSection";
import StudentJourney from "@/components/sections/StudentJourney";
import UniversityTrends from "@/components/sections/UniversityTrends";
import FounderSection from "@/components/sections/FounderSection";
import Testimonials from "@/components/sections/Testimonials";
import PartnersSection from "@/components/sections/PartnersSection";
import FAQSection from "@/components/sections/FAQSection";
import CTABand from "@/components/sections/CTABand";

export default function Home() {
  return (
    <>
      <Hero />
      <UniversityAcceptance />
      <ProgrammesSection variant="teaser" />
      <StudentJourney />
      <UniversityTrends />
      <FounderSection variant="teaser" />
      <Testimonials />
      <PartnersSection />
      <FAQSection />
      <CTABand />
    </>
  );
}
