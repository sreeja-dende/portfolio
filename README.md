# Sreeja Dende — Developer Portfolio

**▶ Live:** https://portfolio-k5c1fv8h2-sreeja.vercel.app/

A modern, production-grade developer portfolio built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion. Designed for SWE Intern, Full Stack, Frontend, and SDE Intern applications.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Animation | Framer Motion |
| Icons | Lucide React |
| Fonts | Syne (display) + Geist Sans/Mono |
| Deployment | Vercel (recommended) |

---

## Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn

### Install & Run

```bash
# Clone or extract the project
cd portfolio

# Install dependencies
npm install

# Start dev server
npm run dev
```

Visit `http://localhost:3000`

---

## Customization

**All content lives in one file:**

```
src/lib/data.ts
```

Edit it to update:
- Your name, email, GitHub, LinkedIn
- Hero description and tagline
- Skills
- Projects (title, description, impact bullets, tech stack, links)
- Timeline (achievements, education, certifications)

### Add your resume PDF

Place your resume at:
```
public/resume.pdf
```

### Add project screenshots

Place images at:
```
public/projects/solvex.png
public/projects/hireready.png
public/projects/bookhive.png
```

Then in `src/lib/data.ts`, update each project to use an `<Image>` component instead of the `imagePlaceholder` hex color. Example:

```tsx
// In the ProjectCard component (Projects.tsx), replace:
<div style={{ background: project.imagePlaceholder }} ...>

// With:
<Image
  src={`/projects/${project.id}.png`}
  alt={project.imageAlt}
  fill
  className="object-cover"
/>
```

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx        # Root layout, fonts, SEO metadata
│   ├── page.tsx          # Composes all sections
│   └── globals.css       # Base styles, CSS utilities, animations
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx    # Sticky nav with active section tracking
│   │   └── Footer.tsx    # Minimal footer
│   ├── sections/
│   │   ├── Hero.tsx      # Hero with role cycler + CTA buttons
│   │   ├── About.tsx     # About + trait cards
│   │   ├── Skills.tsx    # Categorized skill tags
│   │   ├── Projects.tsx  # Project cards with filter
│   │   ├── Experience.tsx # Timeline of achievements
│   │   └── Contact.tsx   # Contact links + availability card
│   └── ui/
│       └── SectionWrapper.tsx
├── hooks/
│   ├── useInView.ts      # Intersection Observer hook
│   └── useActiveSection.ts # Tracks scroll position for navbar
└── lib/
    ├── data.ts           # ALL CONTENT — edit this file
    └── utils.ts          # cn() utility
```

---

## Deployment on Vercel

### Option 1 — Vercel CLI

```bash
npm i -g vercel
vercel
```

Follow the prompts. Vercel auto-detects Next.js.

### Option 2 — GitHub + Vercel Dashboard

1. Push to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your repo
4. Leave all defaults → Deploy

**Environment variables**: None required for this portfolio.

---

## Performance & SEO

- Fonts: `display: swap` for zero FOUT
- Images: Next.js `<Image>` with `avif` + `webp` formats
- Animations: Framer Motion with `will-change` handled automatically
- Metadata: Full Open Graph + Twitter card in `layout.tsx`
- Accessibility: `focus-visible` styles, `aria-label` on icon buttons, semantic HTML

---

## Best Project Screenshots

For each project, the ideal screenshot is:
- **SolveX**: Mobile screen showing the challenge feed or leaderboard (screenshot from your emulator/Expo Go)
- **HireReady**: The dashboard analytics view showing performance charts
- **BookHive**: The book listing/search page showing the grid layout

Use browser DevTools device emulation for clean mobile shots.
Size: **1200×630px** works perfectly for the card headers (16:8 ratio).

---

## Future Improvements

- [ ] Add a blog section (MDX-based) for technical writing
- [ ] Connect LeetCode stats API for live problem count
- [ ] Add GitHub contribution graph
- [ ] Add testimonials section once you have colleagues/mentors to quote
- [ ] Add a `/projects/[slug]` detail page for each project
- [ ] Add Google Analytics (via `@next/third-parties/google`)

---

## License

MIT — free to use as a personal portfolio base.
