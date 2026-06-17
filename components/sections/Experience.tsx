import { ExperienceItemCard } from "@/components/portfolio/ExperienceItem";
import { Section, SectionHeader } from "@/components/ui/Section";
import { experience } from "@/data/experience";

export function Experience() {
  return (
    <Section>
      <SectionHeader
        label="Experience"
        title="Engineering background"
        subtitle="A track record of building web platforms, SaaS products, and commercial interfaces for clients and product teams."
      />

      <div className="space-y-6 max-w-3xl mx-auto">
        {experience.map((item) => (
          <ExperienceItemCard key={item.id} item={item} />
        ))}
      </div>
    </Section>
  );
}
