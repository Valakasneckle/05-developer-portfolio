export type TechItem = {
  name: string;
};

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  category: string;
  status: "live" | "beta" | "archived" | "wip";
  year: string;
  problem: string;
  solution: string;
  features: string[];
  techStack: TechItem[];
  architectureNotes: string;
  businessValue: string;
  caseStudySummary: string;
  futureImprovements: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  accentColor?: string;
};

export const projects: Project[] = [
  {
    slug: "ai-saas-landing",
    title: "AI SaaS Landing",
    tagline: "High-converting landing page for an AI-powered productivity SaaS",
    category: "AI SaaS",
    status: "live",
    year: "2024",
    featured: true,
    accentColor: "#6366f1",
    problem:
      "The client had a strong AI product but a weak landing page that failed to explain value, convert trial signups, or communicate technical credibility to enterprise buyers.",
    solution:
      "Designed and built a conversion-focused landing page with clear positioning, feature storytelling, social proof, pricing tiers, and a technical credibility section aimed at decision-makers.",
    features: [
      "Hero with clear value proposition and dual CTAs",
      "Feature grid with benefit-driven copy",
      "Interactive product preview section",
      "Pricing comparison table",
      "FAQ and objection handling",
      "SEO-optimized metadata and structured content",
    ],
    techStack: [
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "Tailwind CSS" },
      { name: "Framer Motion" },
      { name: "Vercel" },
    ],
    architectureNotes:
      "Static-first Next.js App Router layout with reusable section components, optimized images, and server-rendered metadata for SEO performance.",
    businessValue:
      "Improved trial signup clarity, strengthened product positioning, and created a sales-ready page suitable for ads, outreach, and investor conversations.",
    caseStudySummary:
      "Transformed a generic SaaS page into a commercial landing experience that communicates product value and technical seriousness.",
    futureImprovements: [
      "A/B testing for hero messaging",
      "CMS integration for marketing updates",
      "Analytics event tracking",
    ],
    githubUrl: "https://github.com/Valakasneckle/01-ai-saas-landing",
    liveUrl: "https://developer-portfolio-eight-alpha.vercel.app/",
  },
  {
    slug: "saas-dashboard",
    title: "SaaS Dashboard",
    tagline: "Analytics and operations dashboard for a multi-tenant SaaS platform",
    category: "SaaS Dashboard",
    status: "live",
    year: "2024",
    featured: true,
    accentColor: "#8b5cf6",
    problem:
      "Operations teams needed a single interface to monitor user activity, revenue metrics, support load, and system health without switching between multiple tools.",
    solution:
      "Built a modular dashboard with KPI cards, trend charts, user management, billing overview, and role-based views for admins and support staff.",
    features: [
      "KPI overview with trend indicators",
      "User and organization management",
      "Billing and subscription insights",
      "Activity feed and audit trail",
      "Responsive sidebar navigation",
      "Role-based dashboard views",
    ],
    techStack: [
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "Tailwind CSS" },
      { name: "PostgreSQL" },
      { name: "Node.js" },
      { name: "Redis" },
    ],
    architectureNotes:
      "Component-driven dashboard shell with isolated data modules, shared UI primitives, and API-ready layout patterns for future backend integration.",
    businessValue:
      "Reduced operational friction and gave stakeholders a clear view of product health, customer activity, and revenue performance.",
    caseStudySummary:
      "Delivered a production-style SaaS dashboard focused on clarity, scalability, and day-to-day operational usefulness.",
    futureImprovements: [
      "Real-time websocket updates",
      "Custom report builder",
      "Export to CSV and PDF",
    ],
    githubUrl: "https://github.com/Valakasneckle/02-saas-dashboard",
    liveUrl: "https://developer-portfolio-eight-alpha.vercel.app/",
  },
  {
    slug: "agency-website",
    title: "Agency Website",
    tagline: "Premium agency website for a digital product studio",
    category: "Agency Website",
    status: "live",
    year: "2023",
    featured: true,
    accentColor: "#06b6d4",
    problem:
      "The agency needed a website that felt premium, communicated service quality, and helped convert inbound leads from founders and marketing teams.",
    solution:
      "Created a polished agency site with strong service positioning, selected case studies, process transparency, testimonials, and repeated contact CTAs.",
    features: [
      "Service-focused homepage",
      "Case study highlights",
      "Process and delivery model section",
      "Team and credibility blocks",
      "Contact and inquiry CTA",
      "Mobile-first responsive layout",
    ],
    techStack: [
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "Tailwind CSS" },
      { name: "Framer Motion" },
      { name: "Lucide React" },
    ],
    architectureNotes:
      "Marketing-site architecture with reusable content sections, lightweight static data, and clear conversion paths from homepage to contact.",
    businessValue:
      "Positioned the agency as a credible partner for product design and engineering work while improving lead quality and trust.",
    caseStudySummary:
      "Built a commercial agency website that balances design quality with clear business messaging and lead generation.",
    futureImprovements: [
      "CMS for case studies",
      "Lead form backend integration",
      "Multilingual version",
    ],
    githubUrl: "https://github.com/Valakasneckle/03-agency-website",
    liveUrl: "https://developer-portfolio-eight-alpha.vercel.app/",
  },
  {
    slug: "premium-ecommerce",
    title: "Premium E-commerce Store",
    tagline: "High-end e-commerce storefront with premium brand presentation",
    category: "E-commerce",
    status: "live",
    year: "2023",
    featured: true,
    accentColor: "#f59e0b",
    problem:
      "A premium retail brand needed an online store that matched its physical brand experience and supported conversion without feeling like a generic template shop.",
    solution:
      "Developed a custom storefront with curated product presentation, category navigation, trust elements, and a checkout-ready product detail experience.",
    features: [
      "Premium homepage merchandising",
      "Category and collection pages",
      "Product detail layout",
      "Trust and shipping messaging",
      "Newsletter capture section",
      "Responsive product grid",
    ],
    techStack: [
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "Tailwind CSS" },
      { name: "Stripe" },
      { name: "PostgreSQL" },
    ],
    architectureNotes:
      "Headless storefront structure with reusable product components, SEO-friendly product pages, and integration-ready commerce data models.",
    businessValue:
      "Created a premium digital storefront that supports brand perception, product discovery, and future commerce scaling.",
    caseStudySummary:
      "Delivered a polished e-commerce experience focused on brand quality, product storytelling, and conversion readiness.",
    futureImprovements: [
      "Inventory sync",
      "Cart and checkout backend",
      "Personalized recommendations",
    ],
    githubUrl: "https://github.com/Valakasneckle/04-premium-ecommerce",
    liveUrl: "https://developer-portfolio-eight-alpha.vercel.app/",
  },
  {
    slug: "developer-portfolio",
    title: "Developer Portfolio 2.0",
    tagline: "Advanced personal portfolio for full-stack engineering credibility",
    category: "Portfolio",
    status: "live",
    year: "2024",
    featured: true,
    accentColor: "#6366f1",
    problem:
      "Most developer portfolios look generic and fail to communicate senior-level thinking, business value, and project quality to clients and recruiters.",
    solution:
      "Built a portfolio platform with project case studies, service positioning, architecture showcase, skills grouping, testimonials, and a clear contact flow.",
    features: [
      "Project case study pages",
      "Services and freelance positioning",
      "Architecture showcase",
      "Skills and experience sections",
      "Blog preview and contact CTA",
      "Responsive personal brand design",
    ],
    techStack: [
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "Tailwind CSS" },
      { name: "Framer Motion" },
      { name: "Lucide React" },
      { name: "Vercel" },
    ],
    architectureNotes:
      "App Router multi-page structure with static data files, reusable UI primitives, and dynamic project detail routes for scalable portfolio growth.",
    businessValue:
      "Helps potential clients and collaborators quickly understand skills, project quality, technical range, and availability for contract work.",
    caseStudySummary:
      "A portfolio engineered for credibility, case study depth, and freelance lead generation rather than generic personal branding.",
    futureImprovements: [
      "CMS integration",
      "GitHub API activity feed",
      "Contact form backend",
      "MDX blog support",
    ],
    githubUrl: "https://github.com/Valakasneckle/05-developer-portfolio",
    liveUrl: "https://developer-portfolio-eight-alpha.vercel.app/",
  },
  {
    slug: "cybersecurity-website",
    title: "Cybersecurity Website",
    tagline: "Trust-focused website for a cybersecurity services company",
    category: "Cybersecurity",
    status: "live",
    year: "2023",
    featured: true,
    accentColor: "#10b981",
    problem:
      "A cybersecurity firm needed a website that communicated authority, compliance readiness, and service clarity to risk-conscious enterprise buyers.",
    solution:
      "Built a dark professional site with service breakdowns, compliance messaging, threat-response positioning, and trust-building content blocks.",
    features: [
      "Service and compliance sections",
      "Threat response positioning",
      "Client trust indicators",
      "Security-focused visual language",
      "Consultation CTA flow",
      "Responsive enterprise layout",
    ],
    techStack: [
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "Tailwind CSS" },
      { name: "Framer Motion" },
      { name: "Vercel" },
    ],
    architectureNotes:
      "Content-led marketing architecture with modular trust sections, reusable service cards, and clear paths from education to consultation.",
    businessValue:
      "Improved perceived authority and made complex security services easier for prospects to understand and act on.",
    caseStudySummary:
      "Created a cybersecurity website that balances technical seriousness with accessible commercial messaging.",
    futureImprovements: [
      "Resource library",
      "Lead qualification form",
      "Case study expansion",
    ],
    githubUrl: "https://github.com/Valakasneckle/08-cybersecurity-website",
    liveUrl: "https://developer-portfolio-eight-alpha.vercel.app/",
  },
  {
    slug: "real-estate-platform",
    title: "Real Estate Platform",
    tagline: "Property discovery platform with search, listings, and lead capture",
    category: "Real Estate",
    status: "live",
    year: "2024",
    featured: true,
    accentColor: "#3b82f6",
    problem:
      "A real estate business needed a modern platform to showcase listings, improve property discovery, and capture qualified buyer inquiries.",
    solution:
      "Developed a property platform with listing cards, advanced filtering UI, detail pages, agent contact flows, and location-focused content structure.",
    features: [
      "Property listing grid",
      "Search and filter interface",
      "Property detail pages",
      "Agent contact forms",
      "Location-based content blocks",
      "Mobile-friendly browsing experience",
    ],
    techStack: [
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "Tailwind CSS" },
      { name: "PostgreSQL" },
      { name: "API Design" },
    ],
    architectureNotes:
      "Listing-centric frontend architecture with reusable property components, filter state management, and SEO-friendly detail routes.",
    businessValue:
      "Improved listing presentation, supported lead generation, and created a scalable foundation for future CRM integration.",
    caseStudySummary:
      "Built a real estate platform focused on discoverability, listing quality, and inquiry conversion.",
    futureImprovements: [
      "Map-based search",
      "Saved listings and alerts",
      "CRM integration",
    ],
    githubUrl: "https://github.com/Valakasneckle/10-real-estate-platform",
    liveUrl: "https://developer-portfolio-eight-alpha.vercel.app/",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((p) => p.slug);
}
