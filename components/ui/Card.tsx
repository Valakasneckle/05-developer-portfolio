import { cn } from "@/lib/utils";
import { type ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
  hover?: boolean;
};

export function Card({ children, className, hover = false }: CardProps) {
  return (
    <div className={cn("card-base", hover && "card-hover", className)}>
      {children}
    </div>
  );
}
