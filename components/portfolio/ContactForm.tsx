"use client";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Card } from "@/components/ui/Card";
import { useState } from "react";

const projectTypes = [
  "Landing Page",
  "SaaS Dashboard",
  "E-commerce Store",
  "AI Integration",
  "Full-Stack App",
  "Marketplace",
  "Other",
];

const budgetRanges = ["$1k–$3k", "$3k–$5k", "$5k–$10k", "$10k+"];

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <Card className="p-8 text-center">
        <h3 className="text-xl font-semibold text-text-primary mb-2">
          Message received
        </h3>
        <p className="text-text-secondary">
          Thank you for your inquiry. This is a UI-only form — connect a backend
          or email service to enable real submissions.
        </p>
      </Card>
    );
  }

  return (
    <Card className="p-8">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Input label="Name" name="name" required placeholder="Your name" />
          <Input
            label="Email"
            name="email"
            type="email"
            required
            placeholder="you@company.com"
          />
        </div>

        <Input label="Company" name="company" placeholder="Company name (optional)" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="project-type" className="block text-sm font-medium text-text-primary">
              Project Type
            </label>
            <select
              id="project-type"
              name="projectType"
              required
              className="w-full px-4 py-3 rounded-lg bg-surface border border-surface-border text-text-primary focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/30 transition-colors"
            >
              <option value="">Select project type</option>
              {projectTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <label htmlFor="budget" className="block text-sm font-medium text-text-primary">
              Budget Range
            </label>
            <select
              id="budget"
              name="budget"
              required
              className="w-full px-4 py-3 rounded-lg bg-surface border border-surface-border text-text-primary focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/30 transition-colors"
            >
              <option value="">Select budget range</option>
              {budgetRanges.map((range) => (
                <option key={range} value={range}>
                  {range}
                </option>
              ))}
            </select>
          </div>
        </div>

        <Textarea
          label="Message"
          name="message"
          required
          placeholder="Tell me about your project, timeline, and goals..."
        />

        <Button type="submit" variant="primary" className="w-full sm:w-auto">
          Send Inquiry
        </Button>
      </form>
    </Card>
  );
}
