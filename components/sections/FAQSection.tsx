import SectionHeading from "@/components/ui/SectionHeading";
import FAQAccordion from "@/components/ui/FAQAccordion";
import { faqs } from "@/lib/data";

export default function FAQSection() {
  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          title="Frequently Asked Questions"
          subtitle="Everything parents and students ask us before getting started."
          tone="light"
          align="center"
        />

        <div className="mt-12">
          <FAQAccordion items={faqs} />
        </div>
      </div>
    </section>
  );
}
