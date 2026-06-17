export type ArchitectureItem = {
  id: string;
  title: string;
  description: string;
  focusAreas: string[];
};

export const architectureItems: ArchitectureItem[] = [
  {
    id: "saas-platform",
    title: "SaaS Platform Architecture",
    description:
      "Multi-page SaaS product structure with authentication-ready layout, dashboard modules, billing views, and scalable frontend boundaries.",
    focusAreas: [
      "Tenant-aware UI patterns",
      "Dashboard module separation",
      "Billing and usage views",
      "API integration boundaries",
    ],
  },
  {
    id: "ecommerce",
    title: "E-commerce Store Architecture",
    description:
      "Headless storefront architecture focused on product discovery, category navigation, SEO-friendly detail pages, and checkout-ready UI flows.",
    focusAreas: [
      "Product listing components",
      "Category navigation",
      "Trust and conversion sections",
      "Commerce data modeling",
    ],
  },
  {
    id: "dashboard",
    title: "Dashboard Architecture",
    description:
      "Operational dashboard shell with KPI cards, sidebar navigation, reusable data widgets, and role-based content areas.",
    focusAreas: [
      "KPI visualization",
      "Navigation shell",
      "Reusable widgets",
      "Admin and support views",
    ],
  },
  {
    id: "ai-rag",
    title: "AI/RAG Architecture",
    description:
      "Frontend patterns for AI-powered products including chat interfaces, knowledge ingestion flows, and retrieval-based response presentation.",
    focusAreas: [
      "Chat and response UI",
      "Knowledge ingestion views",
      "Confidence and escalation states",
      "Analytics for AI workflows",
    ],
  },
  {
    id: "marketplace",
    title: "Marketplace Architecture",
    description:
      "Two-sided marketplace structure with listing discovery, seller profiles, filtering, and inquiry flows designed for future backend expansion.",
    focusAreas: [
      "Listing discovery",
      "Seller presentation",
      "Search and filters",
      "Lead capture flows",
    ],
  },
];
