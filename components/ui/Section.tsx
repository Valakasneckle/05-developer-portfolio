import { cn } from "@/lib/utils";
import { type ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
};

export function Section({ children, className, id }: SectionProps) {
  return (
    <section id={id} className={cn("section-padding", className)}>
      <div className="container-wide">{children}</div>
    </section>
  );
}

type SectionHeaderProps = {
  label?: string;
  title: string;
  subtitle?: string;
  className?: string;
};

export function SectionHeader({
  label,
  title,
  subtitle,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn("text-center max-w-3xl mx-auto mb-14", className)}>
      {label && <p className="section-label mb-3">{label}</p>}
      <h2 className="text-3xl sm:text-4xl font-bold text-text-primary tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-text-secondary text-lg leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
