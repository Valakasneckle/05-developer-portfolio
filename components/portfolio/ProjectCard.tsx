"use client";

import { Badge } from "@/components/ui/Badge";
import { type Project } from "@/data/projects";
import { cn } from "@/lib/utils";
import { ArrowUpRight, Github, Globe } from "lucide-react";
import Link from "next/link";

type ProjectCardProps = {
  project: Project;
  variant?: "default" | "compact";
};

const statusConfig = {
  live: { label: "Live", variant: "success" as const },
  beta: { label: "Beta", variant: "warning" as const },
  wip: { label: "WIP", variant: "default" as const },
  archived: { label: "Archived", variant: "default" as const },
};

export function ProjectCard({ project, variant = "default" }: ProjectCardProps) {
  const status = statusConfig[project.status];

  return (
    <Link
      href={`/projects/${project.slug}`}
      className={cn(
        "group card-base card-hover block overflow-hidden",
        variant === "compact" ? "p-5" : "p-6"
      )}
    >
      <div
        className="h-0.5 w-full mb-5 rounded-full opacity-60"
        style={{
          background: `linear-gradient(90deg, ${project.accentColor || "#6366f1"}, transparent)`,
        }}
      />

      <div className="flex items-start justify-between gap-3 mb-3">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Badge variant={status.variant} size="sm">
              {status.label}
            </Badge>
            <span className="text-xs text-text-muted">{project.year}</span>
          </div>
          <h3 className="font-bold text-text-primary group-hover:text-accent transition-colors duration-200 text-lg leading-snug">
            {project.title}
          </h3>
        </div>
        <ArrowUpRight className="w-5 h-5 text-text-muted group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 shrink-0 mt-1" />
      </div>

      <p className="text-xs font-mono text-text-muted mb-3">{project.category}</p>
      <p className="text-text-secondary text-sm leading-relaxed mb-4 line-clamp-2">
        {project.tagline}
      </p>

      {variant !== "compact" && (
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.techStack.slice(0, 5).map((tech) => (
            <span
              key={tech.name}
              className="text-xs px-2 py-0.5 rounded bg-surface-elevated border border-surface-border text-text-muted font-mono"
            >
              {tech.name}
            </span>
          ))}
          {project.techStack.length > 5 && (
            <span className="text-xs px-2 py-0.5 rounded bg-surface-elevated border border-surface-border text-text-muted">
              +{project.techStack.length - 5} more
            </span>
          )}
        </div>
      )}

      <div
        className="flex items-center gap-3 pt-4 border-t border-surface-border"
        onClick={(e) => e.preventDefault()}
      >
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-text-muted hover:text-text-primary transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            <Github className="w-3.5 h-3.5" />
            Code
          </a>
        )}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-text-muted hover:text-accent transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            <Globe className="w-3.5 h-3.5" />
            Live Demo
          </a>
        )}
      </div>
    </Link>
  );
}
