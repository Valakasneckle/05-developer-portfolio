import { ContactForm } from "@/components/portfolio/ContactForm";
import { Section, SectionHeader } from "@/components/ui/Section";
import { siteConfig } from "@/lib/siteConfig";
import { Clock, Github, Linkedin, Mail, MapPin } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch for freelance projects, SaaS development, AI integration, or technical collaboration.",
};

export default function ContactPage() {
  return (
    <Section>
      <SectionHeader
        label="Get in Touch"
        title="Start a project"
        subtitle="Share your project goals, timeline, and budget. I typically respond within 24 hours."
      />

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
        <div className="lg:col-span-2 space-y-6">
          <div className="card-base p-6 space-y-4">
            <h2 className="font-semibold text-text-primary mb-4">Contact Details</h2>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                <Mail className="w-4 h-4 text-accent" />
              </div>
              <div>
                <p className="text-xs text-text-muted">Email</p>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-sm text-text-secondary hover:text-accent transition-colors"
                >
                  {siteConfig.email}
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                <MapPin className="w-4 h-4 text-accent" />
              </div>
              <div>
                <p className="text-xs text-text-muted">Location</p>
                <p className="text-sm text-text-secondary">{siteConfig.location}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                <Clock className="w-4 h-4 text-accent" />
              </div>
              <div>
                <p className="text-xs text-text-muted">Response time</p>
                <p className="text-sm text-text-secondary">Within 24 hours</p>
              </div>
            </div>
          </div>

          <div className="card-base p-6">
            <h2 className="font-semibold text-text-primary mb-4">Find Me Online</h2>
            <div className="space-y-3">
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-text-secondary hover:text-accent transition-colors"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-text-secondary hover:text-accent transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="lg:col-span-3">
          <ContactForm />
        </div>
      </div>
    </Section>
  );
}
