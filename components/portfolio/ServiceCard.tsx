import { Card } from "@/components/ui/Card";
import { type Service } from "@/data/services";
import { Check } from "lucide-react";

type ServiceCardProps = {
  service: Service;
};

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Card hover className="p-6 h-full">
      <h3 className="text-lg font-semibold text-text-primary mb-3">{service.title}</h3>
      <p className="text-text-secondary text-sm leading-relaxed mb-5">
        {service.description}
      </p>
      <ul className="space-y-2">
        {service.deliverables.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm text-text-secondary">
            <Check className="w-4 h-4 text-accent shrink-0 mt-0.5" />
            {item}
          </li>
        ))}
      </ul>
    </Card>
  );
}
