import { Card } from "@/components/ui/Card";
import { type ExperienceItem } from "@/data/experience";

type ExperienceItemProps = {
  item: ExperienceItem;
};

export function ExperienceItemCard({ item }: ExperienceItemProps) {
  return (
    <Card className="p-6">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
        <div>
          <h3 className="text-lg font-semibold text-text-primary">{item.role}</h3>
          <p className="text-accent text-sm font-medium">{item.company}</p>
        </div>
        <span className="text-sm text-text-muted font-mono">{item.period}</span>
      </div>
      <p className="text-text-secondary leading-relaxed mb-4">{item.description}</p>
      <ul className="space-y-2">
        {item.highlights.map((highlight) => (
          <li key={highlight} className="flex items-start gap-2 text-sm text-text-secondary">
            <span className="text-accent mt-0.5">•</span>
            {highlight}
          </li>
        ))}
      </ul>
    </Card>
  );
}
