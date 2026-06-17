import { ServiceCard } from "@/components/portfolio/ServiceCard";
import { Section, SectionHeader } from "@/components/ui/Section";
import { services } from "@/data/services";

export function Services() {
  return (
    <Section>
      <SectionHeader
        label="Services"
        title="What I build for clients"
        subtitle="Freelance and contract services for startups, agencies, and product teams that need production-ready web platforms."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </Section>
  );
}
