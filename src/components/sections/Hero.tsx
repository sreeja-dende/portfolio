// src/components/sections/Hero.tsx
"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Download, ArrowRight, MapPin } from "lucide-react";
import { siteConfig } from "@/lib/data";

const ROLES = [
  "Full Stack Developer",
  "Frontend Engineer",
  "SDE Intern Candidate",
  "React Developer",
  "Backend Engineer",
];

// Simple fade-up variants
const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1], delay },
  },
});

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center pt-24 pb-16 px-5 sm:px-8"
    >
      <div className="max-w-5xl mx-auto w-full">
        {/* Available badge */}
        <motion.div
          variants={fadeUp(0)}
          initial="hidden"
          animate="visible"
          className="mb-8"
        >
          {siteConfig.available && (
            <span className="inline-flex items-center gap-2 text-xs font-mono text-accent/80 border border-accent/20 bg-accent/[0.06] px-3 py-1.5 rounded-full">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent" />
              </span>
              Available for internships · 2025
            </span>
          )}
        </motion.div>

        {/* Main heading */}
        <motion.div variants={fadeUp(0.08)} initial="hidden" animate="visible">
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.08] tracking-tight mb-6">
            <span className="text-text-primary">Hi, I&apos;m </span>
            <span className="gradient-text">Sreeja Dende</span>
            <span className="text-text-primary">.</span>
          </h1>
        </motion.div>

        {/* Role cycling */}
        <motion.div
          variants={fadeUp(0.16)}
          initial="hidden"
          animate="visible"
          className="mb-6"
        >
          <RoleCycler roles={ROLES} />
        </motion.div>

        {/* Description */}
        <motion.p
          variants={fadeUp(0.22)}
          initial="hidden"
          animate="visible"
          className="text-text-secondary text-lg sm:text-xl leading-relaxed max-w-2xl mb-10 text-balance"
        >
          {siteConfig.heroDescription}
        </motion.p>

        {/* Location */}
        <motion.div
          variants={fadeUp(0.26)}
          initial="hidden"
          animate="visible"
          className="flex items-center gap-2 text-text-muted text-sm font-mono mb-10"
        >
          <MapPin size={14} className="text-accent/60" />
          {siteConfig.location}
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          variants={fadeUp(0.32)}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap items-center gap-3"
        >
          <a href="#projects" className="btn-primary group">
            View Projects
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-0.5"
            />
          </a>
          <a
            href={siteConfig.resumeUrl}
            download
            className="btn-secondary"
          >
            <Download size={16} />
            Resume
          </a>
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
            aria-label="GitHub"
          >
            <Github size={16} />
            GitHub
          </a>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
            aria-label="LinkedIn"
          >
            <Linkedin size={16} />
            LinkedIn
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-text-muted text-xs font-mono tracking-widest uppercase">
            scroll
          </span>
          <div className="w-px h-12 bg-gradient-to-b from-text-muted/40 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}

// ---- Role cycler (pure CSS animation) ----
function RoleCycler({ roles }: { roles: string[] }) {
  return (
    <div className="flex items-center gap-3 font-mono text-sm sm:text-base">
      <span className="text-text-muted">~/</span>
      <div className="relative h-6 overflow-hidden">
        <RoleTicker roles={roles} />
      </div>
      <span className="inline-block w-[2px] h-5 bg-accent animate-[cursorBlink_1.2s_step-end_infinite]" />
    </div>
  );
}

function RoleTicker({ roles }: { roles: string[] }) {
  return (
    <motion.div
      animate={{ y: roles.map((_, i) => `-${i * 100}%`) }}
      transition={{
        duration: roles.length * 2.5,
        ease: "linear",
        repeat: Infinity,
        times: roles.map((_, i) => i / roles.length),
      }}
      className="flex flex-col"
    >
      {[...roles, roles[0]].map((role, i) => (
        <span
          key={i}
          className="h-6 flex items-center text-accent font-medium whitespace-nowrap"
        >
          {role}
        </span>
      ))}
    </motion.div>
  );
}
