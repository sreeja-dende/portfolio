// src/components/sections/About.tsx
"use client";

import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";
import { Code2, Layers, Zap, GraduationCap } from "lucide-react";

const TRAITS = [
  {
    icon: Code2,
    title: "Full Stack Focus",
    body: "I build end-to-end — from React/React Native UIs down to RESTful APIs and optimized database schemas.",
  },
  {
    icon: Layers,
    title: "Systems Thinker",
    body: "I care about architecture decisions, data flow, and how components interact — not just making things work.",
  },
  {
    icon: Zap,
    title: "ML Integration",
    body: "I've integrated ML recommendation engines and NLP pipelines into production-style web applications.",
  },
  {
    icon: GraduationCap,
    title: "B.Tech CS · RGUKT",
    body: "Graduating 2027 with a CGPA of 8.5. I supplement coursework with real project work and competitive DSA.",
  },
];

export function About() {
  const { ref, inView } = useInView<HTMLElement>();

  return (
    <section
      id="about"
      ref={ref}
      className="py-24 px-5 sm:px-8 border-t border-surface-border"
    >
      <div className="max-w-5xl mx-auto">
        <div
          className={cn("section-animate", inView && "in-view")}
        >
          <p className="section-label">Who I am</p>
          <h2 className="section-heading">About Me</h2>
          <span className="accent-line" />
        </div>

        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-16 items-start">
          {/* Left — story */}
          <div
            className={cn(
              "section-animate space-y-5 text-text-secondary leading-relaxed",
              inView && "in-view"
            )}
            style={{ transitionDelay: "0.1s" }}
          >
            <p>
              I&apos;m a second-year Computer Science student at RGUKT Hyderabad,
              building real products that solve real problems. My engineering
              practice sits at the intersection of clean system design, modern
              full-stack development, and applied ML.
            </p>
            <p>
              I started with web fundamentals and moved quickly into full-stack
              territory — architecting REST APIs, designing MongoDB and MySQL
              schemas, and integrating ML models into user-facing applications.
              Currently, my work focuses on{" "}
              <span className="text-text-primary font-medium">React/React Native</span>{" "}
              frontends,{" "}
              <span className="text-text-primary font-medium">Node.js/FastAPI</span>{" "}
              backends, and production-ready authentication flows.
            </p>
            <p>
              I&apos;m actively looking for SWE Intern, Frontend, Full Stack, and
              SDE Intern roles where I can contribute meaningfully from day one.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-4">
              {[
                { value: "3+", label: "Production projects" },
                { value: "150+", label: "LeetCode problems" },
                { value: "8.5", label: "CGPA" },
              ].map(({ value, label }) => (
                <div key={label} className="space-y-1">
                  <p className="font-display text-2xl font-bold text-accent">
                    {value}
                  </p>
                  <p className="text-xs text-text-muted">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — trait cards */}
          <div
            className={cn("stagger grid sm:grid-cols-2 gap-4", inView && "in-view")}
          >
            {TRAITS.map(({ icon: Icon, title, body }) => (
              <div key={title} className="card p-5 group">
                <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/15 transition-colors">
                  <Icon size={18} className="text-accent" />
                </div>
                <h3 className="text-text-primary font-semibold text-sm mb-2">
                  {title}
                </h3>
                <p className="text-text-muted text-xs leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
