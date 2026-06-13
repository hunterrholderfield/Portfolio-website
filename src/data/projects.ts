// Each project here renders a card on the home page + /projects, and gets its
// own embedded page at /projects/<slug>. To add a project, copy an entry and
// fill it in — `url` is the live site that gets embedded.

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  // The live URL that gets embedded in an <iframe> on the project page.
  url: string;
  // Optional preview/fallback image (used on cards and when an embed is blocked).
  previewImage?: string;
  tags: string[];
  year: string;
  status: "Live" | "In progress" | "Archived";
  featured: boolean;
  highlights?: string[];
  // Set false for sites that block iframe embedding to skip the live preview.
  allowEmbed?: boolean;
};

export const projects: Project[] = [
  {
    slug: "stackon",
    name: "Stackon",
    tagline: "An agentic development environment powered by Claude and Codex.",
    description:
      "Stackon is the agentic development environment for engineering teams who refuse to fly blind. It brings multi-agent orchestration together with first-class observability, evals, bring-your-own compute, and a creator marketplace — so every agent run is traceable, measurable, and reproducible.",
    url: "https://stackon.ai",
    previewImage: "https://stackon.ai/opengraph-image",
    tags: [
      "Multi-agent orchestration",
      "Observability",
      "Evals",
      "BYO compute",
      "Claude",
      "Codex",
    ],
    year: "2025",
    status: "Live",
    featured: true,
    highlights: [
      "Multi-agent orchestration with first-class observability",
      "Built-in evals to measure and compare agent runs",
      "Bring-your-own compute and a creator marketplace",
    ],
    allowEmbed: true,
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export const featuredProjects = projects.filter((p) => p.featured);
