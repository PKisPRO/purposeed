import type { Metadata } from "next";
import { Phone, Mail, MessageCircle } from "lucide-react";
import PageHeader from "@/components/layout/PageHeader";
import ContactForm from "@/components/sections/ContactForm";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact | purposeed",
  description: "Get in touch with purposeed by form, WhatsApp, phone, or email.",
};

const contactDetails = [
  { icon: Phone, label: "Call or WhatsApp", value: SITE.phone, href: `tel:+${SITE.phoneRaw}` },
  { icon: Mail, label: "Email", value: SITE.email, href: `mailto:${SITE.email}` },
  { icon: MessageCircle, label: "WhatsApp", value: "Chat with a mentor", href: SITE.whatsappUrl },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's talk about where your child wants to go."
        subtitle="Reach out with a question, or fill in the form and a purposeed mentor will get back to you."
      />
      <section className="bg-cream py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <h2 className="font-heading text-2xl font-bold text-indigo-dark md:text-3xl">
              We&apos;d love to hear from you.
            </h2>
            <p className="mt-3 text-indigo-dark/70">
              Whether it&apos;s a quick question about a programme or you&apos;re ready to book a
              consultation, here&apos;s how to reach us directly.
            </p>
            <div className="mt-8 flex flex-col gap-4">
              {contactDetails.map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-4 rounded-2xl bg-white p-4 shadow-sm shadow-indigo/5 transition-all hover:-translate-y-0.5 hover:shadow-md"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-coral/10 text-coral">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block font-heading text-sm font-semibold text-indigo-dark">
                      {label}
                    </span>
                    <span className="block text-sm text-indigo-dark/60">{value}</span>
                  </span>
                </a>
              ))}
            </div>
          </div>
          <div className="lg:col-span-3">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
