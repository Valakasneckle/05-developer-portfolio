export type Testimonial = {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    quote:
      "The portfolio and dashboard work was far more structured than we expected. Every section felt intentional, and the technical documentation made handoff easy for our team.",
    author: "Sarah Chen",
    role: "Founder",
    company: "Northline SaaS",
  },
  {
    id: "t2",
    quote:
      "We needed a premium agency site that could support inbound leads without looking like a template. The result was polished, fast, and easy to present to clients.",
    author: "Marcus Webb",
    role: "Managing Director",
    company: "Atlas Digital Studio",
  },
  {
    id: "t3",
    quote:
      "Strong frontend architecture, clean component structure, and clear communication throughout the project. The final product looked production-ready from day one.",
    author: "Elena Rodriguez",
    role: "Product Lead",
    company: "Meridian Commerce",
  },
  {
    id: "t4",
    quote:
      "The real estate platform UI made our listings feel much more premium. Search, filtering, and property detail pages were exactly what our sales team needed.",
    author: "James Okonkwo",
    role: "Operations Manager",
    company: "Harbor Realty Group",
  },
];
