import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { type Project } from "@/data/projects";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import Link from "next/link";

type ProjectDetailProps = {
  project: Project;
};

export function ProjectDetail({ project }: ProjectDetailProps) {
  return (
    <div className="section-padding">
      <div className="container-wide max-w-4xl">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-accent transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Projects
        </Link>

        <div className="flex flex-wrap items-center gap-3 mb-4">
          <Badge variant="accent">{project.category}</Badge>
          <span className="text-sm text-text-muted">{project.year}</span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-bold text-text-primary mb-4">
          {project.title}
        </h1>
        <p className="text-xl text-text-secondary leading-relaxed mb-8">
          {project.tagline}
        </p>

        <div className="flex flex-wrap gap-4 mb-12">
          {project.liveUrl && (
            <Button href={project.liveUrl} variant="primary">
              <span className="flex items-center gap-2">
                Live Demo
                <ExternalLink className="w-4 h-4" />
              </span>
            </Button>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="outline-button flex items-center gap-2"
            >
              <Github className="w-4 h-4" />
              View on GitHub
            </a>
          )}
        </div>

        <div className="space-y-8">
          <Card className="p-6">
            <h2 className="text-xl font-semibold text-text-primary mb-3">Overview</h2>
            <p className="text-text-secondary leading-relaxed">{project.caseStudySummary}</p>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-semibold text-text-primary mb-3">Problem</h2>
            <p className="text-text-secondary leading-relaxed">{project.problem}</p>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-semibold text-text-primary mb-3">Solution</h2>
            <p className="text-text-secondary leading-relaxed">{project.solution}</p>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-semibold text-text-primary mb-4">Key Features</h2>
            <ul className="space-y-2">
              {project.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2 text-text-secondary">
                  <span className="text-accent mt-1">•</span>
                  {feature}
                </li>
              ))}
            </ul>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-semibold text-text-primary mb-4">Tech Stack</h2>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech.name}
                  className="text-sm px-3 py-1.5 rounded-lg bg-surface-elevated border border-surface-border text-text-secondary font-mono"
                >
                  {tech.name}
                </span>
              ))}
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-semibold text-text-primary mb-3">Architecture Notes</h2>
            <p className="text-text-secondary leading-relaxed">{project.architectureNotes}</p>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-semibold text-text-primary mb-3">Business Value</h2>
            <p className="text-text-secondary leading-relaxed">{project.businessValue}</p>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-semibold text-text-primary mb-4">Future Improvements</h2>
            <ul className="space-y-2">
              {project.futureImprovements.map((item) => (
                <li key={item} className="flex items-start gap-2 text-text-secondary">
                  <span className="text-accent mt-1">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </div>
  );
}
