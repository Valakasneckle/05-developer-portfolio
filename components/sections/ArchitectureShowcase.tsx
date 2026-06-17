import { ArchitectureCard } from "@/components/portfolio/ArchitectureCard";
import { Section, SectionHeader } from "@/components/ui/Section";
import { architectureItems } from "@/data/architecture";

export function ArchitectureShowcase() {
  return (
    <Section>
      <SectionHeader
        label="System Design"
        title="Architecture I've designed"
        subtitle="High-level views of the systems behind the projects — service boundaries, data flows, and infrastructure decisions."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {architectureItems.map((item) => (
          <ArchitectureCard key={item.id} item={item} />
        ))}
      </div>
    </Section>
  );
}
