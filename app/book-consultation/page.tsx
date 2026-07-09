import type { Metadata } from "next";
import ConsultationForm from "@/components/sections/ConsultationForm";

export const metadata: Metadata = {
  title: "Book a Consultation | purposeed",
  description:
    "Schedule a meeting with a purposeed admissions mentor and get a clear next step for your child's global university journey.",
};

export default function BookConsultationPage() {
  return (
    <section className="bg-cream pb-20 pt-32 md:pb-28 md:pt-40">
      <div className="mx-auto max-w-4xl px-6">
        <ConsultationForm />
      </div>
    </section>
  );
}
