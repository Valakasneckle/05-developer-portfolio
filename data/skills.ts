export type SkillLevel = "expert" | "advanced" | "proficient";

export type Skill = {
  name: string;
  level: SkillLevel;
};

export type SkillCategory = {
  id: string;
  label: string;
  description: string;
  skills: Skill[];
};

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    label: "Frontend",
    description: "Modern UI development with performance and accessibility in mind",
    skills: [
      { name: "Next.js", level: "expert" },
      { name: "React", level: "expert" },
      { name: "TypeScript", level: "expert" },
      { name: "Tailwind CSS", level: "expert" },
      { name: "Responsive UI", level: "expert" },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    description: "API design, business logic, and scalable server-side systems",
    skills: [
      { name: "Node.js", level: "expert" },
      { name: "NestJS", level: "advanced" },
      { name: "Fastify", level: "advanced" },
      { name: "API Design", level: "expert" },
    ],
  },
  {
    id: "ai",
    label: "AI Engineering",
    description: "LLM integrations, RAG pipelines, and production AI features",
    skills: [
      { name: "OpenAI", level: "advanced" },
      { name: "RAG", level: "advanced" },
      { name: "Vector Databases", level: "advanced" },
    ],
  },
  {
    id: "databases",
    label: "Databases",
    description: "Relational data modeling, caching, and performance tuning",
    skills: [
      { name: "PostgreSQL", level: "expert" },
      { name: "Redis", level: "advanced" },
    ],
  },
  {
    id: "devops",
    label: "DevOps",
    description: "Deployment workflows, containerization, and production operations",
    skills: [
      { name: "Docker", level: "advanced" },
      { name: "Linux", level: "advanced" },
      { name: "Vercel", level: "expert" },
    ],
  },
  {
    id: "architecture",
    label: "Architecture",
    description: "System design, scalability planning, and technical decision-making",
    skills: [
      { name: "System Design", level: "expert" },
      { name: "API Design", level: "expert" },
    ],
  },
  {
    id: "uiux",
    label: "UI/UX",
    description: "Product-facing interface decisions and conversion-oriented layout",
    skills: [
      { name: "Responsive UI", level: "expert" },
      { name: "Tailwind CSS", level: "expert" },
    ],
  },
];
