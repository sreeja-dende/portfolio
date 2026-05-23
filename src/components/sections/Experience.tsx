// src/components/sections/Experience.tsx
"use client";

import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";
import { timeline } from "@/lib/data";
import type { TimelineItem } from "@/lib/data";
import {
  Trophy,
  Award,
  Star,
  GraduationCap,
} from "lucide-react";

const TYPE_CONFIG: Record<
  TimelineItem["type"],
  { icon: React.ElementType; color: string; bg: string }
> = {
  hackathon:    { icon: Trophy,        color: "text-orange-400",  bg: "bg-orange-500/10 border-orange-500/20" },
  certification:{ icon: Award,         color: "text-blue-400",    bg: "bg-blue-500/10 border-blue-500/20" },
  achievement:  { icon: Star,          color: "text-yellow-400",  bg: "bg-yellow-500/10 border-yellow-500/20" },
  education:    { icon: GraduationCap, color: "text-accent",      bg: "bg-accent/10 border-accent/20" },
};

export function Experience() {
  const { ref, inView } = useInView<HTMLElement>();

  return (
    <section
      id="experience"
      ref={ref}
      className="py-24 px-5 sm:px-8 bg-bg-secondary/40"
    >
      <div className="max-w-5xl mx-auto">
        <div className={cn("section-animate mb-12", inView && "in-view")}>
          <p className="section-label">Background</p>
          <h2 className="section-heading">Experience & Achievements</h2>
          <span className="accent-line" />
          <p className="text-text-secondary max-w-lg text-sm leading-relaxed mt-2">
            A track record of consistent learning, real engineering work, and
            competitive problem-solving.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[22px] top-0 bottom-0 w-px bg-surface-border sm:left-6" />

          <div
            className={cn(
              "stagger space-y-6",
              inView && "in-view"
            )}
          >
            {timeline.map((item, i) => (
              <TimelineCard key={i} item={item} />
            ))}

            {/* Placeholder — looking for internship */}
            <div className="relative pl-14 sm:pl-16">
              <div className="absolute left-0 w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-dashed border-accent/30 bg-bg-card flex items-center justify-center">
                <span className="text-accent/50 text-lg font-bold">+</span>
              </div>
              <div className="card p-4 border-dashed border-accent/20 bg-accent/[0.02]">
                <p className="text-xs font-mono text-accent/60 mb-1">2025 — Present</p>
                <h3 className="text-text-secondary text-sm font-medium">
                  Open to Internship Opportunities
                </h3>
                <p className="text-text-muted text-xs mt-1">
                  Actively seeking SWE / Full Stack / Frontend intern roles.{" "}
                  <a
                    href="#contact"
                    className="text-accent/70 hover:text-accent underline underline-offset-2"
                  >
                    Let&apos;s talk
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineCard({ item }: { item: TimelineItem }) {
  const { icon: Icon, color, bg } = TYPE_CONFIG[item.type];

  return (
    <div className="relative pl-14 sm:pl-16">
      {/* Icon dot */}
      <div
        className={cn(
          "absolute left-0 w-11 h-11 sm:w-12 sm:h-12 rounded-full border flex items-center justify-center",
          bg
        )}
      >
        <Icon size={18} className={color} />
      </div>

      {/* Card */}
      <div className="card p-5 hover:border-white/10">
        <div className="flex items-start justify-between gap-4 mb-2">
          <div>
            <p className="text-xs font-mono text-text-muted mb-1">{item.year}</p>
            <h3 className="text-text-primary font-semibold text-sm">
              {item.title}
            </h3>
            <p className={cn("text-xs font-medium mt-0.5", color)}>
              {item.org}
            </p>
          </div>
          <span
            className={cn(
              "shrink-0 text-[10px] px-2 py-0.5 rounded-full border font-mono capitalize",
              bg,
              color
            )}
          >
            {item.type}
          </span>
        </div>
        <p className="text-text-muted text-xs leading-relaxed">
          {item.description}
        </p>
      </div>
    </div>
  );
}
