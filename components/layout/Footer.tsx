import Link from "next/link";
import { NAV_LINKS, SITE, CTA } from "@/lib/constants";
import { programmes, founders } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-indigo text-cream">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center font-heading text-2xl font-bold">
              <span className="text-cream">purpose</span>
              <span className="text-coral">ed</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-cream/70">
              Helping students build purposeful profiles, authentic applications, and confident
              pathways to global universities.
            </p>
            <a
              href={CTA.whatsapp.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-coral px-5 py-2.5 font-heading text-sm font-semibold text-cream transition-transform hover:scale-105"
            >
              WhatsApp Us
            </a>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-widest text-gold">
              Explore
            </h3>
            <ul className="mt-4 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-cream/75 transition-colors hover:text-coral">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/book-consultation" className="text-sm text-cream/75 transition-colors hover:text-coral">
                  Book a Consultation
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-widest text-gold">
              Programmes
            </h3>
            <ul className="mt-4 space-y-3">
              {programmes.map((p) => (
                <li key={p.id}>
                  <Link href={`/programmes#${p.id}`} className="text-sm text-cream/75 transition-colors hover:text-coral">
                    {p.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-widest text-gold">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-cream/75">
              <li>{SITE.phone}</li>
              <li>{SITE.email}</li>
              <li className="flex flex-col gap-2 pt-2">
                {founders.map((f) => (
                  <a
                    key={f.name}
                    href={f.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-coral"
                  >
                    {f.name} · LinkedIn
                  </a>
                ))}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-cream/15 pt-8 text-xs text-cream/60 md:flex-row">
          <p>© {year} purposeed. All rights reserved.</p>
          <div className="flex gap-5">
            {/* TODO: replace with real social links */}
            <span className="cursor-default opacity-60">Instagram</span>
            <span className="cursor-default opacity-60">LinkedIn</span>
            <span className="cursor-default opacity-60">YouTube</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
