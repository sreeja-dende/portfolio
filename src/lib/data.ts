// src/lib/data.ts
// ============================================================
// SINGLE SOURCE OF TRUTH — update your portfolio content here
// ============================================================

export const siteConfig = {
  name: "Sreeja Dende",
  title: "Full Stack Developer & CS Student",
  email: "dendesreeja4@gmail.com",
  github: "https://github.com/sreeja-dende",
  linkedin: "https://www.linkedin.com/in/sreeja-dende/",
  resumeUrl: "/resume.pdf", // place your resume PDF in /public/resume.pdf
  heroTagline: "Building scalable full-stack systems",
  heroDescription:
    "Computer Science student at RGUKT with a focus on full-stack engineering, ML integration, and clean system design. I build products that are fast, purposeful, and production-ready.",
  location: "Hyderabad, India",
  available: true, // set to false when not looking
} as const;

// ============================================================
// SKILLS
// ============================================================
export const skills = {
  frontend: [
    "React.js",
    "React Native",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Redux",
    "HTML5",
    "CSS3",
  ],
  backend: [
    "Node.js",
    "Express.js",
    "FastAPI",
    "Flask",
    "Spring Boot",
    "REST APIs",
    "JWT Auth",
  ],
  databases: ["MySQL", "MongoDB", "Mongoose ODM", "SQL"],
  mlData: ["Python", "scikit-learn", "Pandas", "NumPy", "NLTK", "Matplotlib"],
  tools: ["Git", "GitHub", "Docker", "Postman", "VS Code", "Jupyter"],
  core: [
    "Data Structures & Algorithms",
    "OOP",
    "System Design",
    "Computer Networks",
    "OS",
  ],
} as const;

// ============================================================
// PROJECTS
// ============================================================
export const projects = [
  {
    id: "solvex",
    title: "SolveX",
    subtitle: "Cross-Platform Startup Challenge Marketplace",
    description:
      "A full-stack mobile platform that connects startups posting real engineering challenges with students competing to solve them — built for scale with a real-time leaderboard, multi-role access, and secure auth.",
    problem:
      "Startups lack an efficient channel to crowdsource solutions from talented students. Students lack real-world problem exposure.",
    impact: [
      "15+ RESTful API endpoints with sub-100ms query response",
      "JWT stateless auth eliminating unauthorized access in testing",
      "bcrypt (salt=12) for zero plaintext credential storage",
    ],
    tech: ["React Native", "Node.js", "Express.js", "MongoDB", "JWT", "bcrypt"],
    github: "https://github.com/sreeja-dende/SolveX",
    demo: null, // add live URL when deployed
    featured: true,
    // Replace with actual project screenshot: public/projects/solvex.png
    imagePlaceholder: "#1a2a1f",
    imageAlt: "SolveX app interface showing challenge leaderboard",
    tags: ["Mobile", "Full Stack", "Auth"],
  },
  {
    id: "hirereday",
    title: "HireReady",
    subtitle: "AI-Driven Placement Readiness Platform",
    description:
      "An end-to-end AI platform unifying Coding, Aptitude, HR Interview, and Communication modules for students — powered by an ML recommendation engine and an NLP communication analysis pipeline.",
    problem:
      "Students preparing for placements lack personalized, data-driven guidance across all interview dimensions in one system.",
    impact: [
      "85% ML recommendation accuracy on 1,000+ student records",
      "40% reduction in manual HR evaluation effort via NLP",
      "Role-based access for students, admins, and recruiters",
    ],
    tech: ["React.js", "Node.js", "FastAPI", "MySQL", "scikit-learn", "NLTK"],
    github: "https://github.com/sreeja-dende/HireReady",
    demo: null,
    featured: true,
    imagePlaceholder: "#1a1a2a",
    imageAlt: "HireReady dashboard showing performance analytics",
    tags: ["AI/ML", "Full Stack", "NLP"],
  },
  {
    id: "bookhive",
    title: "BookHive",
    subtitle: "E-Commerce Book Platform",
    description:
      "A full-stack e-commerce platform for book browsing and purchasing with server-side session management, optimized MySQL queries, and a mobile-first responsive UI.",
    problem:
      "Needed a performant, maintainable web storefront that handles CRUD on large catalogs without degrading under load.",
    impact: [
      "30% query speed improvement via indexing & JOIN restructuring",
      "500+ book records with full CRUD",
      "Consistent rendering across 5 device breakpoints",
    ],
    tech: ["PHP", "MySQL", "HTML5", "CSS3", "JavaScript"],
    github: "https://github.com/sreeja-dende/Book-Stall",
    demo: null,
    featured: false,
    imagePlaceholder: "#1f1a1a",
    imageAlt: "BookHive storefront listing page",
    tags: ["E-Commerce", "Full Stack"],
  },
] as const;

// ============================================================
// TIMELINE / EXPERIENCE
// ============================================================
export const timeline = [
  {
    year: "2025",
    title: "HackWithHyderabad",
    org: "Team Participant",
    type: "hackathon" as const,
    description:
      "Collaborated on backend architecture and API design under a 24-hour constraint.",
  },
  {
    year: "2025",
    title: "Deloitte Data Analytics Simulation",
    org: "Forage",
    type: "certification" as const,
    description:
      "Completed enterprise-data cleaning, EDA, and stakeholder-facing insight report.",
  },
  {
    year: "2025",
    title: "150+ LeetCode Problems Solved",
    org: "LeetCode / NeetCode",
    type: "achievement" as const,
    description:
      "Covered 12 core DSA patterns including DP, Trees, Graphs, and Sliding Window.",
  },
  {
    year: "2023",
    title: "B.Tech Computer Science",
    org: "RGUKT Hyderabad — CGPA 8.5",
    type: "education" as const,
    description: "Specializing in full-stack development and ML systems.",
  },
] as const;

export type Project = (typeof projects)[number];
export type TimelineItem = (typeof timeline)[number];
