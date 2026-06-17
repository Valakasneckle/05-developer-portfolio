import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { siteConfig } from "@/lib/siteConfig";
import { ArrowRight, Mail } from "lucide-react";

export function ContactCTA() {
  return (
    <Section>
      <div className="card-base p-10 sm:p-14 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial-accent pointer-events-none" />
        <div className="relative">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
            Have a project in mind?
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto mb-8">
            Whether it&apos;s a greenfield SaaS, an AI integration, or a commercial
            website that needs a stronger technical foundation — let&apos;s talk about
            what you&apos;re building.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button href="/contact" variant="primary">
              <span className="flex items-center gap-2">
                Start a Project
                <ArrowRight className="w-4 h-4" />
              </span>
            </Button>
            <a
              href={`mailto:${siteConfig.email}`}
              className="outline-button flex items-center gap-2"
            >
              <Mail className="w-4 h-4" />
              {siteConfig.email}
            </a>
          </div>
          <p className="text-sm text-text-muted mt-6">
            Typical response time: within 24 hours
          </p>
        </div>
      </div>
    </Section>
  );
}
