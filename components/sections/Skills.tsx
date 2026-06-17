"use client";

import { SkillBadge } from "@/components/portfolio/SkillBadge";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Tabs } from "@/components/ui/Tabs";
import { skillCategories } from "@/data/skills";
import { AnimatePresence, motion } from "framer-motion";
import {
  Brain,
  Container,
  Database,
  GitBranch,
  Layers,
  Palette,
  Server,
} from "lucide-react";

const categoryIcons: Record<string, React.ReactNode> = {
  frontend: <Layers className="w-4 h-4" />,
  backend: <Server className="w-4 h-4" />,
  ai: <Brain className="w-4 h-4" />,
  devops: <Container className="w-4 h-4" />,
  databases: <Database className="w-4 h-4" />,
  architecture: <GitBranch className="w-4 h-4" />,
  uiux: <Palette className="w-4 h-4" />,
};

export function Skills() {
  const tabs = skillCategories.map((c) => ({
    id: c.id,
    label: c.label,
    icon: categoryIcons[c.id],
  }));

  return (
    <Section>
      <SectionHeader
        label="Technical Skills"
        title="Full-stack expertise, end to end"
        subtitle="From pixel-perfect UIs to distributed systems and AI pipelines — here's what I bring to every project."
      />

      <Tabs tabs={tabs}>
        {(activeTab) => {
          const category = skillCategories.find((c) => c.id === activeTab)!;
          return (
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="card-base p-8"
              >
                <div className="mb-6">
                  <h3 className="text-text-primary font-semibold text-lg">
                    {category.label}
                  </h3>
                  <p className="text-text-muted text-sm mt-1">{category.description}</p>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill, i) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.04 }}
                    >
                      <SkillBadge skill={skill} showLevel />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          );
        }}
      </Tabs>
    </Section>
  );
}
