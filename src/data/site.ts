// Central place for all site-wide info. Edit here to update the whole site.

export const site = {
  name: "Hunter Holderfield",
  initials: "HH",
  wordmark: "ihrh",
  role: "AI & Automation Engineer",
  location: "Overland Park, KS",
  domain: "ihrh.me",
  url: "https://ihrh.me",
  email: "hunterrholderfield@gmail.com",
  // Resume: drop your PDF in /public to replace the placeholder.
  resumeUrl: "/Hunter-Holderfield-Resume.pdf",

  // Short hero subtitle.
  tagline:
    "I design and deliver AI and automation solutions and provide you with a return-on-investment for a tedious, time-consuming manual process.",

  // Longer "about" copy.
  about: [
    "I'm an AI & Automation Engineer based in Overland Park, KS. During the day, I help businesses identify the processes they're performing manually today, to provide them with a return-on-investment and implement the automation. I strive to reduce the manual, repetitive work that's slowing you and your business down.",
    "Outside of my full-time career, I build with large language models and agentic tooling — turning my ideas into shipped products for the community. This site is where I collect the ideas and projects I've developed.",
    "I care about systems that are observable, reliable, and genuinely useful. If it can be measured, monitored, and there's a process — I'm interested!",
  ],

  // Social / contact links. Replace the placeholder handles with your real ones.
  socials: {
    email: "mailto:hunterrholderfield@gmail.com",
    github: "https://github.com/hunterrholderfield",
    linkedin: "https://www.linkedin.com/in/hunter-holderfield-11081b1a7/",
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
      "APIs",
      "Cloud (Vercel / AWS)",
      "Supabase (SQL)",
    ],
  },
];
