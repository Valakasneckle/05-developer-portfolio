import { siteConfig } from "@/lib/siteConfig";
import { ArrowUpRight, Code2, Github, Linkedin, Mail, Twitter } from "lucide-react";
import Link from "next/link";

const footerLinks = {
  Navigation: [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/about", label: "About" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ],
  Work: [
    { href: "/projects/ai-saas-landing", label: "AI SaaS Landing" },
    { href: "/projects/saas-dashboard", label: "SaaS Dashboard" },
    { href: "/projects/premium-ecommerce", label: "E-commerce Store" },
    { href: "/projects/cybersecurity-website", label: "Cybersecurity Website" },
    { href: "/projects/real-estate-platform", label: "Real Estate Platform" },
  ],
};

const socials = [
  { href: siteConfig.github, icon: Github, label: "GitHub" },
  { href: siteConfig.linkedin, icon: Linkedin, label: "LinkedIn" },
  { href: siteConfig.twitter, icon: Twitter, label: "Twitter" },
  { href: `mailto:${siteConfig.email}`, icon: Mail, label: "Email" },
];

export function Footer() {
  return (
    <footer className="border-t border-surface-border bg-surface/50 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-accent flex items-center justify-center">
                <Code2 className="w-4 h-4 text-white" />
              </div>
              <span className="font-mono font-semibold text-text-primary">
                {siteConfig.brand}
                <span className="text-accent">.</span>dev
              </span>
            </div>
            <p className="text-text-muted text-sm leading-relaxed max-w-xs mb-6">
              Building scalable web platforms, AI tools, and production-ready SaaS systems.
              Available for senior engineering roles and technical consulting.
            </p>
            <div className="flex items-center gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-9 h-9 rounded-lg bg-surface-elevated border border-surface-border flex items-center justify-center text-text-muted hover:text-accent hover:border-accent/30 hover:bg-accent/5 transition-all duration-200"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link groups */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <h3 className="text-text-primary font-semibold text-sm mb-4">{group}</h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-text-muted text-sm hover:text-accent transition-colors duration-200 flex items-center gap-1 group"
                    >
                      {link.label}
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-6 border-t border-surface-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-text-muted text-xs">
            © {new Date().getFullYear()} {siteConfig.name}. Built with Next.js, TypeScript & Tailwind.
          </p>
          <div className="flex items-center gap-4 text-xs text-text-muted">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse-slow" />
              Open to opportunities
            </span>
            <a href={`mailto:${siteConfig.email}`} className="hover:text-accent transition-colors">
              {siteConfig.email}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
