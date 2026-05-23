// src/components/layout/Navbar.tsx
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useActiveSection } from "@/hooks/useActiveSection";
import { siteConfig } from "@/lib/data";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const active = useActiveSection();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const handler = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-bg-primary/80 backdrop-blur-xl border-b border-surface-border shadow-[0_1px_0_rgba(255,255,255,0.04)]"
            : "bg-transparent"
        )}
      >
        <nav className="max-w-5xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
          {/* Logo / Name */}
          <a
            href="#home"
            className="font-display font-bold text-base tracking-tight text-text-primary hover:text-accent transition-colors"
          >
            <span className="text-accent">S</span>reeja
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map(({ label, href }) => {
              const id = href.replace("#", "");
              const isActive = active === id;
              return (
                <li key={href}>
                  <a
                    href={href}
                    className={cn(
                      "relative px-3 py-1.5 text-sm font-medium rounded-md transition-colors duration-200",
                      isActive
                        ? "text-accent"
                        : "text-text-muted hover:text-text-primary"
                    )}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-indicator"
                        className="absolute inset-0 rounded-md bg-accent/[0.08]"
                        transition={{ type: "spring", duration: 0.4 }}
                      />
                    )}
                    <span className="relative">{label}</span>
                  </a>
                </li>
              );
            })}
          </ul>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-3">
            <a
              href={siteConfig.resumeUrl}
              download
              className="hidden sm:inline-flex btn-primary text-xs py-2 px-4"
            >
              Resume
            </a>
            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="md:hidden p-2 rounded-lg text-text-muted hover:text-text-primary hover:bg-surface-hover transition-colors"
              aria-label="Toggle navigation"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 z-40 bg-bg-secondary/95 backdrop-blur-xl border-b border-surface-border md:hidden"
          >
            <ul className="flex flex-col py-4 px-5 gap-1">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    onClick={() => setMenuOpen(false)}
                    className="block py-2.5 px-3 rounded-lg text-text-secondary hover:text-text-primary hover:bg-surface-hover transition-colors text-sm font-medium"
                  >
                    {label}
                  </a>
                </li>
              ))}
              <li className="mt-3 pt-3 border-t border-surface-border">
                <a
                  href={siteConfig.resumeUrl}
                  download
                  onClick={() => setMenuOpen(false)}
                  className="btn-primary w-full justify-center text-sm"
                >
                  Download Resume
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
