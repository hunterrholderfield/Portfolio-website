// Central place for all site-wide info. Edit here to update the whole site.

export const site = {
  name: "Hunter Holderfield",
  initials: "HH",
  wordmark: "ihrh",
  role: "AI & Automation Engineer",
  location: "Kansas City, KS",
  domain: "ihrh.me",
  url: "https://ihrh.me",
  email: "hunterrholderfield@gmail.com",
  // Resume: drop your PDF in /public to replace the placeholder.
  resumeUrl: "/Hunter-Holderfield-Resume.pdf",

  // Short hero subtitle.
  tagline:
    "I design and ship AI systems and automation that take the busywork out of engineering.",

  // Longer "about" copy.
  about: [
    "I'm an AI & Automation Engineer based in Kansas City, KS. By day I build automation that keeps production systems running and removes the manual, repetitive work that slows teams down.",
    "Outside of my full-time role, I build with large language models and agentic tooling — turning ideas into shipped products. This site is where I collect those projects.",
    "I care about systems that are observable, reliable, and genuinely useful. If it can be measured, monitored, and automated, I'm interested.",
  ],

  // Social / contact links. Replace the placeholder handles with your real ones.
  socials: {
    email: "mailto:hunterrholderfield@gmail.com",
    github: "https://github.com/hunterholderfield", // TODO: update to your real GitHub
    linkedin: "https://www.linkedin.com/in/hunterholderfield", // TODO: update to your real LinkedIn
  },
} as const;

export type SkillGroup = {
  title: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "AI & LLMs",
    skills: [
      "LLM application development",
      "Agentic workflows & orchestration",
      "Prompt engineering & evals",
      "RAG & embeddings",
      "Anthropic Claude / OpenAI",
    ],
  },
  {
    title: "Automation",
    skills: [
      "Process automation",
      "CI/CD pipelines",
      "Observability & monitoring",
      "Scripting & tooling",
      "Systems integration",
    ],
  },
  {
    title: "Engineering",
    skills: [
      "Python",
      "TypeScript / JavaScript",
      "Next.js & React",
      "APIs & microservices",
      "Cloud (Vercel / AWS)",
    ],
  },
];
