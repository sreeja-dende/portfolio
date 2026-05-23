// src/components/sections/Contact.tsx
"use client";

import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/data";
import { Mail, Github, Linkedin, ArrowRight } from "lucide-react";

const LINKS = [
  {
    icon: Mail,
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    external: false,
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/sreeja-dende",
    href: siteConfig.github,
    external: true,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/sreeja-dende",
    href: siteConfig.linkedin,
    external: true,
  },
];

export function Contact() {
  const { ref, inView } = useInView<HTMLElement>();

  return (
    <section
      id="contact"
      ref={ref}
      className="py-24 px-5 sm:px-8 border-t border-surface-border"
    >
      <div className="max-w-5xl mx-auto">
        <div className={cn("section-animate", inView && "in-view")}>
          <p className="section-label">Get in touch</p>
          <h2 className="section-heading">Contact</h2>
          <span className="accent-line" />
        </div>

        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-16 items-start">
          {/* Left */}
          <div
            className={cn("section-animate", inView && "in-view")}
            style={{ transitionDelay: "0.1s" }}
          >
            <p className="text-text-secondary leading-relaxed mb-8 max-w-md">
              I&apos;m actively looking for SWE Intern, Full Stack, Frontend, and
              SDE Intern roles starting in 2025. If you&apos;re hiring or want to
              collaborate, I&apos;d love to connect.
            </p>

            <a
              href={`mailto:${siteConfig.email}`}
              className="btn-primary group inline-flex mb-10"
            >
              Send me an email
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </a>

            <div className="space-y-3">
              {LINKS.map(({ icon: Icon, label, value, href, external }) => (
                <a
                  key={label}
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-4 p-4 rounded-xl border border-surface-border hover:border-accent/25 hover:bg-surface-hover transition-all duration-200 group"
                >
                  <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent/15 transition-colors">
                    <Icon size={16} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-xs text-text-muted font-mono">{label}</p>
                    <p className="text-text-secondary text-sm font-medium group-hover:text-text-primary transition-colors">
                      {value}
                    </p>
                  </div>
                  <ArrowRight
                    size={14}
                    className="ml-auto text-text-muted opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Right — availability card */}
          <div
            className={cn("section-animate", inView && "in-view")}
            style={{ transitionDelay: "0.18s" }}
          >
            <div className="card p-7 border-accent/20 bg-accent/[0.03]">
              <div className="flex items-center gap-3 mb-5">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-60" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent" />
                </span>
                <span className="text-accent text-sm font-medium">
                  Available for internships
                </span>
              </div>

              <p className="text-text-secondary text-sm leading-relaxed mb-6">
                I&apos;m looking for my first engineering internship role. I bring
                strong full-stack skills, a portfolio of production-style
                projects, and real hunger to learn in a fast-moving team.
              </p>

              <div className="space-y-2 text-xs text-text-muted font-mono">
                {[
                  "Full Stack / SDE Intern",
                  "Frontend Developer Intern",
                  "Backend Developer Intern",
                  "Remote or Hyderabad-based",
                ].map((r) => (
                  <div key={r} className="flex items-center gap-2">
                    <span className="text-accent/60">▸</span>
                    {r}
                  </div>
                ))}
              </div>

              <div className="mt-7 pt-5 border-t border-surface-border">
                <a
                  href={siteConfig.resumeUrl}
                  download
                  className="btn-secondary w-full justify-center text-sm"
                >
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
