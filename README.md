# purposeedu

Premium, animated marketing site for purposeedu — an admissions-mentorship edtech
brand. Built with Next.js (App Router), TypeScript, Tailwind CSS v4, and Framer Motion.

## Installation

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run build
npm run start
```

## Deployment

The site is a standard Next.js app — deploy to [Vercel](https://vercel.com/new) (zero
config: connect the repo, it detects Next.js automatically) or any Node host that runs
`npm run build && npm run start`. No environment variables are required yet — see
"Contact form backend" below for the one integration that will need one.

## Project structure

```
app/
  layout.tsx                 Root layout: fonts, Header, Footer, WhatsAppButton, StickyCTA
  page.tsx                   Home
  about/page.tsx             About Us (full founder bios)
  admissions-counselling/    Admissions Counselling
  programmes/page.tsx        Programmes (full interactive tabs/accordion)
  resources/page.tsx         Resources
  contact/page.tsx           Contact
  book-consultation/page.tsx Book a Consultation
  globals.css                Brand color/font tokens (Tailwind v4 @theme block)

components/
  layout/     Header, Footer, WhatsAppButton, StickyCTA, PageHeader
  ui/         Reusable primitives — MagneticButton, RevealOnScroll, AnimatedCounter,
              LogoMarquee, FAQAccordion, GradientBlobs, SectionHeading
  sections/   Page sections — Hero, UniversityAcceptance, ProgrammesSection,
              StudentJourney, UniversityTrends, FounderSection, Testimonials,
              PartnersSection, FAQSection, CTABand, ContactForm, ConsultationForm,
              ResourcesGrid

lib/
  data.ts        All editable content: universities, partners, founders, programmes,
                 journeySteps, resources, faqs, heroStats
  constants.ts   Site-wide config: nav links, CTAs, phone/WhatsApp/email
  utils.ts       Small `cn()` classname helper
```

## Editing content

Everything editorial lives in **`lib/data.ts`** and **`lib/constants.ts`** — no content
is hardcoded inside components. To update copy, add a university, change a founder bio,
or add an FAQ, edit those two files only.

## Media assets not yet included

No internet access was assumed while building this site, so real university/partner
logos, founder photos, and the hero video were not fetched. Every reference has a
graceful in-app fallback (initials badges for logos, gradient-initials avatars for
founders) so the site already looks complete — see **`ASSETS.md`** for the exact file
list and folder locations to drop real assets into.

## Contact form backend

`ContactForm.tsx` and `ConsultationForm.tsx` currently simulate submission (see the
`TODO` comment above each `handleSubmit`). Wire either to a real backend — Formspree,
a serverless function, or a CRM webhook — by replacing the `setTimeout` with a real
`fetch` call.

## Brochure

Per the current brief, no brochure download UI exists anywhere on the site (no button,
no card, no section). If one is needed later, add it to `lib/data.ts` under `resources`
and render it in `ResourcesGrid.tsx`.
