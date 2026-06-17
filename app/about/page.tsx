import { ExperienceItemCard } from "@/components/portfolio/ExperienceItem";
import { SkillBadge } from "@/components/portfolio/SkillBadge";
import { Section, SectionHeader } from "@/components/ui/Section";
import { experience } from "@/data/experience";
import { skillCategories } from "@/data/skills";
import { siteConfig } from "@/lib/siteConfig";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Full-stack developer building scalable web platforms, AI tools, SaaS dashboards, and production-ready business applications.",
};

export default function AboutPage() {
  return (
    <>
      <Section className="border-b border-surface-border bg-surface/30">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-1">
            <div className="w-28 h-28 rounded-2xl bg-gradient-accent flex items-center justify-center text-white text-3xl font-extrabold shadow-glow mb-4">
              DP
            </div>
            <h1 className="text-2xl font-extrabold text-text-primary">{siteConfig.name}</h1>
            <p className="text-accent font-medium mt-1">{siteConfig.title}</p>
            <div className="flex flex-col gap-2 text-sm text-text-muted mt-4">
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                {siteConfig.location}
              </span>
              <span className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                {siteConfig.email}
              </span>
            </div>
            <div className="flex gap-3 mt-4">
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-surface-elevated border border-surface-border flex items-center justify-center text-text-muted hover:text-accent transition-all"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-surface-elevated border border-surface-border flex items-center justify-center text-text-muted hover:text-accent transition-all"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-4 text-text-secondary leading-relaxed">
            <p>
              Developer Portfolio 2.0 represents an advanced personal website for presenting
              full-stack engineering skills, commercial web platforms, AI project experience,
              and freelance availability.
            </p>
            <p>
              I build scalable web platforms, AI integrations, SaaS dashboards, e-commerce
              stores, marketplaces, and high-converting websites for startups, agencies, and
              product teams.
            </p>
            <p>
              My work focuses on clean frontend architecture, reusable component systems,
              strong project case studies, and production-ready delivery workflows.
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeader
          label="Skills Overview"
          title="Core technical competencies"
          className="text-left mx-0"
        />
        <div className="space-y-8">
          {skillCategories.map((category) => (
            <div key={category.id}>
              <h3 className="text-sm font-semibold text-text-secondary mb-3 font-mono uppercase tracking-wider">
                {category.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <SkillBadge key={skill.name} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader
          label="Experience"
          title="Work history"
          className="text-left mx-0"
        />
        <div className="space-y-6 max-w-3xl">
          {experience.map((item) => (
            <ExperienceItemCard key={item.id} item={item} />
          ))}
        </div>
      </Section>
    </>
  );
}
