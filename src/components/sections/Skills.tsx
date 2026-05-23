// src/components/sections/Skills.tsx
"use client";

import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";
import { skills } from "@/lib/data";

const CATEGORIES = [
  { key: "frontend", label: "Frontend", color: "blue" },
  { key: "backend", label: "Backend", color: "emerald" },
  { key: "databases", label: "Databases", color: "purple" },
  { key: "mlData", label: "ML & Data", color: "orange" },
  { key: "tools", label: "DevOps & Tools", color: "yellow" },
  { key: "core", label: "CS Fundamentals", color: "teal" },
] as const;

const COLOR_MAP: Record<string, string> = {
  blue:    "bg-blue-500/[0.07] border-blue-500/20 text-blue-300/80",
  emerald: "bg-emerald-500/[0.07] border-emerald-500/20 text-emerald-300/80",
  purple:  "bg-purple-500/[0.07] border-purple-500/20 text-purple-300/80",
  orange:  "bg-orange-500/[0.07] border-orange-500/20 text-orange-300/80",
  yellow:  "bg-yellow-500/[0.07] border-yellow-500/20 text-yellow-200/70",
  teal:    "bg-teal-500/[0.07] border-teal-500/20 text-teal-300/80",
};

const LABEL_COLOR: Record<string, string> = {
  blue:    "text-blue-400",
  emerald: "text-emerald-400",
  purple:  "text-purple-400",
  orange:  "text-orange-400",
  yellow:  "text-yellow-400",
  teal:    "text-teal-400",
};

export function Skills() {
  const { ref, inView } = useInView<HTMLElement>();

  return (
    <section
      id="skills"
      ref={ref}
      className="py-24 px-5 sm:px-8 bg-bg-secondary/40"
    >
      <div className="max-w-5xl mx-auto">
        <div className={cn("section-animate mb-12", inView && "in-view")}>
          <p className="section-label">Technical stack</p>
          <h2 className="section-heading">Skills</h2>
          <span className="accent-line" />
          <p className="text-text-secondary max-w-lg text-sm leading-relaxed mt-2">
            Technologies I use to build, ship, and scale — from frontend UIs to
            ML-backed APIs.
          </p>
        </div>

        <div
          className={cn(
            "stagger grid sm:grid-cols-2 lg:grid-cols-3 gap-5",
            inView && "in-view"
          )}
        >
          {CATEGORIES.map(({ key, label, color }) => {
            const items = skills[key] as readonly string[];
            return (
              <div key={key} className="card p-5">
                <h3
                  className={cn(
                    "text-xs font-mono uppercase tracking-wider mb-4 font-semibold",
                    LABEL_COLOR[color]
                  )}
                >
                  {label}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className={cn(
                        "text-xs px-2.5 py-1 rounded-md border font-medium transition-all duration-150",
                        COLOR_MAP[color],
                        "hover:scale-[1.04]"
                      )}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
