import { Badge } from "@/components/ui/Badge";
import { type Skill, type SkillLevel } from "@/data/skills";
import { cn } from "@/lib/utils";

type SkillBadgeProps = {
  skill: Skill;
  showLevel?: boolean;
};

const levelColors: Record<SkillLevel, string> = {
  expert: "border-accent/40 text-accent",
  advanced: "border-violet-400/40 text-violet-300",
  proficient: "border-surface-border text-text-secondary",
};

export function SkillBadge({ skill, showLevel = false }: SkillBadgeProps) {
  return (
    <Badge
      className={cn(
        "font-mono",
        showLevel && levelColors[skill.level]
      )}
    >
      {skill.name}
    </Badge>
  );
}
