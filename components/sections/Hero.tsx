"use client";

import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/siteConfig";
import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] },
  },
};

const stats = [
  { value: "8+", label: "Years Experience" },
  { value: "30+", label: "Projects Shipped" },
  { value: "15+", label: "Happy Clients" },
  { value: "6+", label: "SaaS Products" },
];

export function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-64px)] flex items-center section-padding overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#6366f1 1px, transparent 1px), linear-gradient(90deg, #6366f1 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-accent/5 blur-3xl pointer-events-none" />

      <div className="container-wide w-full relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          {siteConfig.availableForWork && (
            <motion.div variants={itemVariants} className="mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-success/10 border border-success/20 text-success text-sm font-medium">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-success" />
                </span>
                <Zap className="w-3.5 h-3.5" fill="currentColor" />
                Available for freelance &amp; consulting
              </div>
            </motion.div>
          )}

          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-text-primary"
          >
            I build{" "}
            <span className="text-gradient">scalable web platforms</span>
            {", "}
            <span className="text-gradient">AI tools</span>
            {", and "}
            <br className="hidden sm:block" />
            production-ready{" "}
            <span className="text-gradient">SaaS systems</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-6 text-lg sm:text-xl text-text-secondary leading-relaxed max-w-2xl"
          >
            {siteConfig.description}
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Button href="/projects" variant="primary">
              <span className="flex items-center gap-2">
                View Projects
                <ArrowRight className="w-4 h-4" />
              </span>
            </Button>
            <Button href="/contact" variant="outline">
              Start a Project
            </Button>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-16 flex flex-wrap gap-8">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-extrabold text-gradient">{stat.value}</div>
                <div className="text-sm text-text-muted mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
