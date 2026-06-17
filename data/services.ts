export type Service = {
  id: string;
  title: string;
  description: string;
  deliverables: string[];
};

export const services: Service[] = [
  {
    id: "landing-page",
    title: "Landing Page Development",
    description:
      "High-converting landing pages for SaaS products, agencies, and product launches with clear positioning and strong visual presentation.",
    deliverables: [
      "Custom homepage design implementation",
      "Responsive layout",
      "SEO-ready page structure",
      "CTA and conversion sections",
    ],
  },
  {
    id: "saas-dashboard",
    title: "SaaS Dashboard Development",
    description:
      "Operational dashboards for SaaS teams with KPI views, user management patterns, and scalable frontend architecture.",
    deliverables: [
      "Dashboard shell and navigation",
      "KPI and analytics sections",
      "Reusable data components",
      "Role-based UI patterns",
    ],
  },
  {
    id: "ecommerce",
    title: "E-commerce Development",
    description:
      "Premium storefront experiences with product storytelling, category navigation, and conversion-focused product detail pages.",
    deliverables: [
      "Storefront homepage",
      "Product listing and detail pages",
      "Category navigation",
      "Checkout-ready UI structure",
    ],
  },
  {
    id: "ai-integration",
    title: "AI Integration",
    description:
      "Practical AI feature integration for web products, including chat interfaces, workflow automation, and retrieval-based experiences.",
    deliverables: [
      "AI feature UX design",
      "Integration-ready frontend flows",
      "Prompt and response UI patterns",
      "Documentation for backend connection",
    ],
  },
  {
    id: "fullstack",
    title: "Full-Stack Web Applications",
    description:
      "End-to-end web application development from frontend architecture to API-ready product structure and deployment setup.",
    deliverables: [
      "Application architecture planning",
      "Frontend implementation",
      "API integration structure",
      "Deployment guidance",
    ],
  },
  {
    id: "documentation",
    title: "Technical Documentation",
    description:
      "Clear technical documentation for projects, architecture decisions, onboarding, and handoff to internal teams or future developers.",
    deliverables: [
      "Architecture notes",
      "Setup documentation",
      "Component and data structure guides",
      "Improvement roadmap",
    ],
  },
  {
    id: "devops",
    title: "Deployment and DevOps",
    description:
      "Production deployment workflows, environment setup, and release preparation for Next.js applications on modern hosting platforms.",
    deliverables: [
      "Vercel deployment setup",
      "Environment variable structure",
      "Build and release checklist",
      "Production URL configuration",
    ],
  },
];
