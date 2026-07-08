export type University = {
  name: string;
  logo: string;
  url: string;
};

// NOTE: Logo files are referenced but not bundled (no verified internet access
// at build time). Drop official logo files at the paths below — see
// public/logos/README.md for the exact file list. LogoMarquee renders a clean
// text fallback automatically until each file is added, so the site never
// shows a broken image.
export const universities: University[] = [
  { name: "Harvard University", logo: "/logos/universities/harvard.svg", url: "https://www.harvard.edu/" },
  { name: "Cornell University", logo: "/logos/universities/cornell.svg", url: "https://www.cornell.edu/" },
  { name: "University of Pennsylvania", logo: "/logos/universities/upenn.svg", url: "https://www.upenn.edu/" },
  { name: "The University of British Columbia", logo: "/logos/universities/ubc.svg", url: "https://www.ubc.ca/" },
  { name: "University of Toronto", logo: "/logos/universities/toronto.svg", url: "https://www.utoronto.ca/" },
  { name: "Western University", logo: "/logos/universities/western.svg", url: "https://www.uwo.ca/" },
  { name: "York University", logo: "/logos/universities/york.svg", url: "https://www.yorku.ca/" },
  { name: "McGill University", logo: "/logos/universities/mcgill.svg", url: "https://www.mcgill.ca/" },
  { name: "University of Queensland", logo: "/logos/universities/uq.svg", url: "https://www.uq.edu.au/" },
  { name: "University of Warwick", logo: "/logos/universities/warwick.svg", url: "https://warwick.ac.uk/" },
  { name: "Ashoka University", logo: "/logos/universities/ashoka.svg", url: "https://www.ashoka.edu.in/" },
  { name: "Azim Premji University", logo: "/logos/universities/azim-premji.svg", url: "https://azimpremjiuniversity.edu.in/" },
];

export type Partner = {
  name: string;
  logo: string;
  url: string;
};

export const partners: Partner[] = [
  { name: "United Nations", logo: "/logos/partners/united-nations.svg", url: "https://www.un.org/" },
  { name: "Dalberg", logo: "/logos/partners/dalberg.svg", url: "https://dalberg.com/" },
  { name: "Accenture", logo: "/logos/partners/accenture.svg", url: "https://www.accenture.com/" },
  { name: "Digital Dx Ventures", logo: "/logos/partners/digital-dx-ventures.svg", url: "https://www.digitaldxventures.com/" },
  { name: "Lumiere Education", logo: "/logos/partners/lumiere-education.svg", url: "https://www.lumiere-education.com/" },
  { name: "Nikore Associates", logo: "/logos/partners/nikore-associates.svg", url: "https://www.nikoreassociates.com/" },
  { name: "JIVAM Foundation", logo: "/logos/partners/jivam-foundation.svg", url: "#" },
  { name: "Government of Haryana", logo: "/logos/partners/govt-haryana.svg", url: "https://haryana.gov.in/" },
  { name: "TiE", logo: "/logos/partners/tie.svg", url: "https://tie.org/" },
  { name: "Global Spark", logo: "/logos/partners/global-spark.svg", url: "#" },
  { name: "UNLEASH", logo: "/logos/partners/unleash.svg", url: "https://unleash.org/" },
  { name: "TEDx", logo: "/logos/partners/tedx.svg", url: "https://www.ted.com/tedx" },
];

export type Founder = {
  name: string;
  role: string;
  linkedin: string;
  image: string;
  bio: string;
};

export const founders: Founder[] = [
  {
    name: "Abhijeet Godara",
    role: "Co-Founder, purposeed | UBC Sauder Scholar",
    linkedin: "https://www.linkedin.com/in/abhijeet-godara-1a081320b/?skipRedirect=true",
    image: "/founders/abhijeet.jpg", // TODO: replace with real founder photo
    bio: "Abhijeet Godara is a sophomore at UBC's Sauder School of Business on a full-ride Karen McKellin International Leader of Tomorrow scholarship. He founded JIVAM Foundation, an NGO bringing libraries and computer access to rural India, and has since mentored students on their own college applications. He is currently a Summer Associate at Lumiere Education and was selected as a Global Talent delegate for UNLEASH's Innovation Lab. At Purposeed, he draws on his own admissions journey to help high schoolers turn their passions into standout applications.",
  },
  {
    name: "Isha Godara",
    role: "Co-Founder, purposeed | Harvard, UPenn & Cornell Admit",
    linkedin: "https://www.linkedin.com/in/ishagodara/",
    image: "/founders/isha.jpg", // TODO: replace with real founder photo
    bio: "Isha Godara recently earned admission to master's programs at Harvard, UPenn, and Cornell in education, public policy, and entrepreneurship. A University of Alberta graduate and former Consultant at Dalberg, she founded JIVAM Foundation, an NGO running education and nutrition programs for rural children in India, and has mentored dozens of high schoolers through its Impact Fellowship. Her work spans partnerships with She's the First, Terra.do, and policymakers expanding education access. At Purposeed, she helps students see their own potential and craft applications that truly reflect who they are.",
  },
  {
    name: "Michelle Kim-Rissi",
    role: "Strategic Director | Harvard Graduate",
    linkedin: "https://www.linkedin.com/in/michelle-kim-qm0620/",
    image: "/founders/michelle.jpg", // TODO: replace with real founder photo
    bio: "Michelle Kim-Rissi is a Harvard graduate and recipient of the Harvard Extension Alumni Association's Emerging Leaders Award. She works in outreach for WFUNA and the United Nations Association in Canada, focusing on climate action and youth advocacy, and was named to Misk Global's Top 20 Under 30 in 2025. As Strategic Director at JIVAM Foundation, she has helped expand education and health programs for young girls in rural India. At Purposeed, she brings this global policy and youth-leadership lens to help students build authentic, purpose-driven applications.",
  },
];

export type Programme = {
  id: string;
  title: string;
  shortDescription: string;
  icon: string;
  sections: { heading?: string; content: string }[];
};

export const programmes: Programme[] = [
  {
    id: "profile-building",
    title: "Profile Building & College Applications",
    shortDescription:
      "We help high school students get into the universities they are aiming for by helping them build meaningful profiles and craft applications that actually represent who they are.",
    icon: "compass",
    sections: [
      {
        content:
          "We help high school students get into the universities they're aiming for. Having gotten into Ivy League and top Canadian universities ourselves, we know what this process actually looks like, from both sides of the table.",
      },
      {
        heading: "Profile Building / Profile Modelling",
        content:
          "Most high schoolers are doing a lot, but they don't always know how to put it together in a way that makes sense. We start by understanding where the student stands today, then help them build out their profile and plan their extracurriculars so everything ties back to the universities they're targeting.",
      },
      {
        heading: "College Application Support",
        content:
          "We help students shortlist the right universities, often starting with a focused approach around specific programs or locations — Canada, business schools, or other target pathways. From there, we walk through the entire application together: essays, scholarship applications, and everything in between. The goal is simple: a final application that actually sounds like the student and gives them the best shot at standing out.",
      },
    ],
  },
  {
    id: "stem-competitions",
    title: "STEM Competitions",
    shortDescription:
      "Week-long STEM competitions where students build real skills, then use them to solve a real problem in 48 hours — no coding background needed.",
    icon: "flask",
    sections: [
      {
        content:
          "We run week-long STEM competitions for school students across India. The first five days are workshops where students build real skills through Minecraft Education for Python, Tinkercad for CAD modelling and 3D printing, and MIT Scratch for animation and storytelling. No coding background is needed. The last two days are where students put it into practice. They get into teams, pick a real problem, and use everything they have learned to build something in 48 hours. Think of it like MUN, but instead of debating the problem, students build a solution to it.",
      },
    ],
  },
  {
    id: "case-based-learning",
    title: "Case-Based Learning",
    shortDescription:
      "Harvard-style case studies on real businesses and real problems, built to get high schoolers thinking analytically and working in teams.",
    icon: "briefcase",
    sections: [
      {
        content:
          "We bring Harvard-style case-based learning to high schoolers. We prepare case studies around real businesses and real problems. Students come in groups, dig into the case, work through the problem, and present their findings. It is similar to college-level case competitions but designed for high school students. The idea is to get students thinking analytically and working in teams on actual problems, not textbook exercises.",
      },
    ],
  },
  {
    id: "study-immersion-tours",
    title: "Study Immersion Tours",
    shortDescription:
      "National and international study tours built around what students actually want to study — case studies, faculty time, and real conversations, not sightseeing.",
    icon: "globe",
    sections: [
      {
        content:
          "We organize study tours for students nationally and internationally, built around what they actually want to study. A commerce student might spend a week in Delhi visiting LSR, Delhi School of Economics, a startup, a consulting firm, and an investment bank. A student eyeing foreign universities might spend a week visiting Harvard, MIT, and New York. Every tour has experiential learning built in, including case studies, group projects, interactions with faculty, and conversations with current students, so it is not just sightseeing.",
      },
    ],
  },
  {
    id: "special-workshops",
    title: "Special Workshops",
    shortDescription:
      "Career talks, university support, pre-university bootcamps, and more — built to fill the gaps school doesn't cover.",
    icon: "sparkles",
    sections: [
      {
        heading: "Career Talks",
        content:
          "We bring in professionals from different fields for honest, candid Q&A sessions. The idea is that students and parents get a real picture of what different careers actually look like, not just what they sound like on paper.",
      },
      {
        heading: "University Support",
        content:
          "Periodic sessions focused on essay writing, balancing academics and extracurriculars, and open conversations with students who are currently at university and have been through the process recently.",
      },
      {
        heading: "Pre-University Bootcamp",
        content:
          "A 5-day bootcamp in July or August for students heading abroad. We cover practical things that nobody really prepares students for, including managing food and nutrition, networking for jobs, social etiquette, and how to carry yourself in professional settings. The goal is to make sure students are not figuring all of this out only after they have landed abroad.",
      },
      {
        heading: "Also in the Works",
        content:
          "We're actively developing AI-focused sessions, guided internships, and dedicated support for students in Tier 2 and Tier 3 cities — alongside job search optimisation and short career camps. Reach out if you'd like to be an early cohort.",
      },
    ],
  },
];

export type JourneyStep = {
  step: number;
  title: string;
  description: string;
  icon: string;
};

export const journeySteps: JourneyStep[] = [
  { step: 1, title: "Discover the student's strengths", description: "We map interests, skills, and story before we talk about any university.", icon: "compass" },
  { step: 2, title: "Map target universities and pathways", description: "A shortlist grounded in the student's goals, not rankings alone.", icon: "map" },
  { step: 3, title: "Build profile and extracurricular direction", description: "Purposeful activities that add up to a coherent story over time.", icon: "layers" },
  { step: 4, title: "Craft essays and applications", description: "Writing that sounds like the student, sharpened until it stands out.", icon: "pen" },
  { step: 5, title: "Prepare for scholarships and interviews", description: "Positioning and practice for the moments that decide outcomes.", icon: "award" },
  { step: 6, title: "Transition confidently into university life", description: "Ready academically, socially, and practically for what comes next.", icon: "rocket" },
];

export type Resource = {
  title: string;
  description: string;
  icon: string;
  cta: string;
  href: string;
  comingSoon?: boolean;
};

export const resources: Resource[] = [
  {
    title: "University Trends",
    description: "Track global rankings, admissions competitiveness, and where students are getting in.",
    icon: "trending-up",
    cta: "View Trends",
    href: "https://www.topuniversities.com/world-university-rankings",
  },
  {
    title: "Admissions Checklist",
    description: "A grade-by-grade checklist for what to prioritise before applications open.",
    icon: "check-square",
    cta: "Coming Soon",
    href: "#",
    comingSoon: true,
  },
  {
    title: "Essay Guide",
    description: "How to plan, structure, and edit an essay that actually sounds like you.",
    icon: "file-text",
    cta: "Coming Soon",
    href: "#",
    comingSoon: true,
  },
  {
    title: "Profile-Building Roadmap",
    description: "A framework for turning scattered activities into one coherent profile.",
    icon: "route",
    cta: "Coming Soon",
    href: "#",
    comingSoon: true,
  },
  {
    title: "Parent Guide",
    description: "What to ask, when to step back, and how to support without adding pressure.",
    icon: "heart-handshake",
    cta: "Coming Soon",
    href: "#",
    comingSoon: true,
  },
  {
    title: "Scholarship Planning Guide",
    description: "How scholarship strategy fits into the wider admissions timeline.",
    icon: "gem",
    cta: "Coming Soon",
    href: "#",
    comingSoon: true,
  },
];

export type FAQ = {
  question: string;
  answer: string;
};

export const faqs: FAQ[] = [
  {
    question: "Who is purposeed for?",
    answer:
      "purposeed is for high school students and families who want structured guidance for profile building, university admissions, scholarships, competitions, and future-ready learning pathways.",
  },
  {
    question: "When should a student start profile building?",
    answer:
      "Students can start as early as Grades 8–9, but Grades 10–12 are especially important for building direction, depth, and a strong application story.",
  },
  {
    question: "Do you only help with foreign universities?",
    answer:
      "No. purposeed helps students explore both Indian and international pathways depending on the student's interests, goals, and target programmes.",
  },
  {
    question: "Can you help with scholarships?",
    answer:
      "Yes. Scholarship strategy, essays, and application positioning can be included as part of the admissions support process.",
  },
  {
    question: "Do students need a strong profile before joining?",
    answer:
      "No. The goal is to help students understand where they stand and then build a meaningful, authentic profile from there.",
  },
  {
    question: "Do you help with essays and applications?",
    answer:
      "Yes. purposeed supports students through university shortlisting, essays, scholarship applications, and the complete application process.",
  },
  {
    question: "Are the STEM competitions beginner-friendly?",
    answer:
      "Yes. Students do not need prior coding experience. The workshops are designed to help them learn tools and then apply them in a team-based build challenge.",
  },
  {
    question: "How do we book a consultation?",
    answer:
      "You can book a consultation through the website form or use the floating WhatsApp button to connect directly.",
  },
];

export type TrustPoint = { icon: string; label: string };

export const trustPoints: TrustPoint[] = [
  { icon: "graduation-cap", label: "Ivy League & top global admits" },
  { icon: "gem", label: "Full-ride scholarship experience" },
  { icon: "users", label: "Mentors from leading universities" },
  { icon: "globe", label: "Global admissions pathways" },
];
