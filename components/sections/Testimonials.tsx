"use client";

import { Section, SectionHeader } from "@/components/ui/Section";
import { testimonials } from "@/data/testimonials";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState } from "react";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const current = testimonials[index];

  function next() {
    setIndex((i) => (i + 1) % testimonials.length);
  }

  function prev() {
    setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  }

  return (
    <Section>
      <SectionHeader
        label="Client Testimonials"
        title="What people say"
        subtitle="Feedback from clients and collaborators on real production projects."
      />

      <div className="max-w-3xl mx-auto">
        <div className="card-base p-8 sm:p-10 relative">
          <Quote className="w-8 h-8 text-accent/40 mb-6" />
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-lg text-text-primary leading-relaxed mb-6">
                &ldquo;{current.quote}&rdquo;
              </p>
              <div>
                <p className="font-semibold text-text-primary">{current.author}</p>
                <p className="text-sm text-text-muted">
                  {current.role}, {current.company}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={prev}
            className="p-2 rounded-lg border border-surface-border text-text-secondary hover:text-text-primary hover:border-accent/30 transition-colors"
            aria-label="Previous"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  i === index ? "bg-accent" : "bg-surface-border"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
          <button
            onClick={next}
            className="p-2 rounded-lg border border-surface-border text-text-secondary hover:text-text-primary hover:border-accent/30 transition-colors"
            aria-label="Next"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </Section>
  );
}
