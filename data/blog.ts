export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "building-scalable-portfolio-architecture",
    title: "Building Scalable Portfolio Architecture with Next.js",
    excerpt:
      "How to structure a developer portfolio so project case studies, services, and contact flows stay maintainable as content grows.",
    category: "Architecture",
    date: "2024-11-12",
    readTime: "6 min read",
  },
  {
    slug: "designing-saas-dashboards-that-teams-actually-use",
    title: "Designing SaaS Dashboards That Teams Actually Use",
    excerpt:
      "Practical UI decisions for dashboards that reduce operational friction and make product health visible at a glance.",
    category: "Product",
    date: "2024-10-03",
    readTime: "5 min read",
  },
  {
    slug: "frontend-patterns-for-ai-product-websites",
    title: "Frontend Patterns for AI Product Websites",
    excerpt:
      "How to present AI capabilities clearly on marketing sites without overwhelming non-technical buyers.",
    category: "AI",
    date: "2024-08-21",
    readTime: "7 min read",
  },
];
