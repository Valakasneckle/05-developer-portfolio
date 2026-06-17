import { cn } from "@/lib/utils";
import { type ReactNode } from "react";

type BadgeVariant = "default" | "success" | "warning" | "accent";

type BadgeProps = {
  children: ReactNode;
  variant?: BadgeVariant;
  size?: "sm" | "md";
  className?: string;
};

const variantClasses: Record<BadgeVariant, string> = {
  default: "bg-surface-elevated border-surface-border text-text-secondary",
  success: "bg-success/10 border-success/20 text-success",
  warning: "bg-amber-500/10 border-amber-500/20 text-amber-400",
  accent: "bg-accent/10 border-accent/20 text-accent",
};

export function Badge({
  children,
  variant = "default",
  size = "md",
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border font-medium",
        size === "sm" ? "px-2 py-0.5 text-xs" : "px-3 py-1 text-xs",
        variantClasses[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
