import { ProjectCard } from "@/components/portfolio/ProjectCard";
import { Button } from "@/components/ui/Button";
import { Section, SectionHeader } from "@/components/ui/Section";
import { getFeaturedProjects } from "@/data/projects";
import { ArrowRight } from "lucide-react";

export function FeaturedProjects() {
  const projects = getFeaturedProjects().slice(0, 6);

  return (
    <Section>
      <SectionHeader
        label="Featured Work"
        title="Projects that shipped to production"
        subtitle="A selection of commercial web platforms, SaaS interfaces, and product-focused builds."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>

      <div className="mt-12 text-center">
        <Button href="/projects" variant="outline">
          <span className="flex items-center gap-2">
            View All Projects
            <ArrowRight className="w-4 h-4" />
          </span>
        </Button>
      </div>
    </Section>
  );
}
