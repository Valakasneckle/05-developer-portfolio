import { ProjectCard } from "@/components/portfolio/ProjectCard";
import { Section, SectionHeader } from "@/components/ui/Section";
import { projects } from "@/data/projects";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "A portfolio of production systems: AI SaaS platforms, dashboards, e-commerce stores, agency websites, and commercial web applications.",
};

export default function ProjectsPage() {
  return (
    <Section>
      <SectionHeader
        label="All Projects"
        title="Production systems I've shipped"
        subtitle="Every project includes a full breakdown — problem, solution, tech stack, architecture notes, and business value."
        className="text-left mx-0"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </Section>
  );
}
