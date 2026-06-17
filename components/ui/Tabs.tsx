"use client";

import { cn } from "@/lib/utils";
import { type ReactNode, useState } from "react";

type Tab = {
  id: string;
  label: string;
  icon?: ReactNode;
};

type TabsProps = {
  tabs: Tab[];
  children: (activeTab: string) => ReactNode;
  className?: string;
  defaultTab?: string;
};

export function Tabs({ tabs, children, className, defaultTab }: TabsProps) {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id);

  return (
    <div className={className}>
      <div className="flex flex-wrap gap-2 justify-center mb-10">
        {tabs.map((tab) => {
          const isActive = tab.id === activeTab;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200",
                isActive
                  ? "bg-accent text-white shadow-glow-sm"
                  : "bg-surface-elevated border border-surface-border text-text-secondary hover:text-text-primary hover:border-accent/30"
              )}
            >
              {tab.icon}
              {tab.label}
            </button>
          );
        })}
      </div>
      {children(activeTab)}
    </div>
  );
}
