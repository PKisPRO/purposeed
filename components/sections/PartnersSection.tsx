import SectionHeading from "@/components/ui/SectionHeading";
import LogoMarquee from "@/components/ui/LogoMarquee";
import GradientBlobs from "@/components/ui/GradientBlobs";
import { partners } from "@/lib/data";

export default function PartnersSection() {
  return (
    <section className="relative overflow-hidden bg-indigo py-20 md:py-28">
      <GradientBlobs />
      <div className="relative z-10 mx-auto max-w-5xl px-6">
        <SectionHeading
          title="Organisations Our Team Has Worked With"
          subtitle="Our mentors' experience spans global institutions, policy, and impact-driven organisations — the same rigor they bring to every student's profile."
          tone="dark"
          align="center"
        />
      </div>
      <div className="relative z-10 mx-auto mt-14 max-w-6xl px-6 md:mt-16">
        <LogoMarquee items={partners} tone="dark" />
      </div>
    </section>
  );
}
