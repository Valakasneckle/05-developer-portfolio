import { Card } from "@/components/ui/Card";
import { type ArchitectureItem } from "@/data/architecture";

type ArchitectureCardProps = {
  item: ArchitectureItem;
};

export function ArchitectureCard({ item }: ArchitectureCardProps) {
  return (
    <Card hover className="p-6 h-full">
      <h3 className="text-lg font-semibold text-text-primary mb-3">{item.title}</h3>
      <p className="text-text-secondary text-sm leading-relaxed mb-5">
        {item.description}
      </p>
      <div className="flex flex-wrap gap-2">
        {item.focusAreas.map((area) => (
          <span
            key={area}
            className="text-xs px-2.5 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent"
          >
            {area}
          </span>
        ))}
      </div>
    </Card>
  );
}
