import GradientBlobs from "@/components/ui/GradientBlobs";
import SectionHeading from "@/components/ui/SectionHeading";

export default function PageHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-indigo pb-20 pt-36 md:pb-24 md:pt-44">
      <GradientBlobs />
      <div className="relative z-10 mx-auto max-w-4xl px-6">
        <SectionHeading eyebrow={eyebrow} title={title} subtitle={subtitle} tone="dark" align="center" />
      </div>
    </section>
  );
}
