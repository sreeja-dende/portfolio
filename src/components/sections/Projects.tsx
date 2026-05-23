// src/components/sections/Projects.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, ArrowUpRight } from "lucide-react";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";
import { projects } from "@/lib/data";
import type { Project } from "@/lib/data";

const ALL_TAGS = ["All", ...Array.from(new Set(projects.flatMap((p) => [...p.tags])))];

export function Projects() {
  const { ref, inView } = useInView<HTMLElement>();
  const [activeTag, setActiveTag] = useState("All");

  const filtered =
    activeTag === "All"
      ? projects
      : projects.filter((p) => p.tags.includes(activeTag as never));

  return (
    <section
      id="projects"
      ref={ref}
      className="py-24 px-5 sm:px-8 border-t border-surface-border"
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className={cn("section-animate mb-4", inView && "in-view")}>
          <p className="section-label">What I&apos;ve built</p>
          <h2 className="section-heading">Featured Projects</h2>
          <span className="accent-line" />
          <p className="text-text-secondary max-w-lg text-sm leading-relaxed mt-2">
            Engineering-focused projects with real technical depth — not just
            tutorials.
          </p>
        </div>

        {/* Tag filter */}
        <div
          className={cn(
            "section-animate flex flex-wrap gap-2 mb-10",
            inView && "in-view"
          )}
          style={{ transitionDelay: "0.08s" }}
        >
          {ALL_TAGS.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={cn(
                "text-xs px-3 py-1.5 rounded-full border font-medium transition-all duration-200",
                activeTag === tag
                  ? "bg-accent/10 border-accent/40 text-accent"
                  : "border-surface-border text-text-muted hover:border-accent/20 hover:text-text-secondary"
              )}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Project grid */}
        <motion.div layout className="grid lg:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={i}
                inView={inView}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
  inView,
}: {
  project: Project;
  index: number;
  inView: boolean;
}) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
        delay: inView ? index * 0.08 : 0,
      }}
      className="card group flex flex-col overflow-hidden"
    >
      {/* Visual header */}
      <div
        className="relative h-44 overflow-hidden flex items-end p-5"
        style={{ background: `${project.imagePlaceholder}` }}
      >
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        {/* Subtle grid on card header */}
        <div
          aria-hidden
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        {/* Tags */}
        <div className="relative flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] px-2 py-0.5 rounded-full bg-black/40 backdrop-blur-sm border border-white/10 text-white/70 font-mono"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Featured badge */}
        {project.featured && (
          <span className="absolute top-4 right-4 text-[10px] px-2 py-0.5 rounded-full bg-accent/20 border border-accent/30 text-accent font-mono">
            featured
          </span>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        <div className="mb-4">
          <h3 className="font-display text-lg font-bold text-text-primary mb-1 group-hover:text-accent transition-colors">
            {project.title}
          </h3>
          <p className="text-xs text-text-muted font-medium mb-3">
            {project.subtitle}
          </p>
          <p className="text-text-secondary text-sm leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Impact bullets */}
        <ul className="space-y-1.5 mb-5">
          {project.impact.map((item) => (
            <li
              key={item}
              className="flex gap-2 text-xs text-text-muted leading-relaxed"
            >
              <span className="text-accent mt-0.5 shrink-0">▸</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-[11px] px-2 py-0.5 rounded bg-surface-DEFAULT border border-surface-border text-text-muted font-mono"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="mt-auto flex items-center gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary text-xs py-1.5 px-3"
            aria-label={`${project.title} GitHub`}
          >
            <Github size={13} />
            Source
          </a>
          {project.demo ? (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-xs py-1.5 px-3"
              aria-label={`${project.title} live demo`}
            >
              <ExternalLink size={13} />
              Live Demo
            </a>
          ) : (
            <span className="text-[11px] text-text-muted font-mono italic flex items-center gap-1">
              <ArrowUpRight size={11} />
              Deploy in progress
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
}
