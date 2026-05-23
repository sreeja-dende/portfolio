import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
        display: ["var(--font-syne)", "sans-serif"],
      },
      colors: {
        bg: {
          primary: "#090909",
          secondary: "#0f0f0f",
          card: "#111111",
          elevated: "#161616",
        },
        accent: {
          DEFAULT: "#6EE7B7",      // emerald-300 — cool but uncommon
          dim: "#34D399",
          muted: "rgba(110,231,183,0.12)",
          border: "rgba(110,231,183,0.25)",
        },
        surface: {
          DEFAULT: "#1a1a1a",
          border: "rgba(255,255,255,0.07)",
          hover: "rgba(255,255,255,0.05)",
        },
        text: {
          primary: "#F0F0F0",
          secondary: "#A0A0A0",
          muted: "#606060",
        },
      },
      backgroundImage: {
        "noise": "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E\")",
        "grid-pattern": "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
        "radial-glow": "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(110,231,183,0.08), transparent)",
      },
      backgroundSize: {
        "grid": "64px 64px",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease forwards",
        "slide-up": "slideUp 0.6s ease forwards",
        "glow-pulse": "glowPulse 3s ease-in-out infinite",
        "cursor-blink": "cursorBlink 1.2s step-end infinite",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        slideUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        glowPulse: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.8" },
        },
        cursorBlink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
      boxShadow: {
        "accent-sm": "0 0 20px rgba(110,231,183,0.15)",
        "accent-md": "0 0 40px rgba(110,231,183,0.2)",
        "card": "0 1px 0 rgba(255,255,255,0.05), 0 4px 32px rgba(0,0,0,0.4)",
      },
    },
  },
  plugins: [],
};

export default config;
