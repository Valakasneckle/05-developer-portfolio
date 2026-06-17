export type ExperienceItem = {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  highlights: string[];
};

export const experience: ExperienceItem[] = [
  {
    id: "exp-1",
    role: "Senior Full Stack Engineer",
    company: "Independent / Freelance",
    period: "2021 — Present",
    description:
      "Building production-ready web platforms, SaaS dashboards, AI integrations, and commercial websites for startups and growing businesses.",
    highlights: [
      "Delivered SaaS dashboards, landing pages, and marketplace interfaces",
      "Led architecture decisions for scalable Next.js applications",
      "Worked directly with founders on product scope and delivery",
    ],
  },
  {
    id: "exp-2",
    role: "Full Stack Developer",
    company: "Product Studio",
    period: "2018 — 2021",
    description:
      "Developed client-facing web applications across e-commerce, agency, and internal tooling projects with a focus on maintainable frontend architecture.",
    highlights: [
      "Built reusable component systems for multiple client projects",
      "Improved delivery speed through shared UI patterns and documentation",
      "Collaborated with designers on responsive product interfaces",
    ],
  },
  {
    id: "exp-3",
    role: "Frontend Developer",
    company: "Digital Agency",
    period: "2015 — 2018",
    description:
      "Created marketing websites, campaign landing pages, and content-driven interfaces for brands that needed strong visual presentation and fast delivery.",
    highlights: [
      "Shipped responsive websites for commercial clients",
      "Improved page performance and mobile usability",
      "Established reusable layout and section patterns",
    ],
  },
];
