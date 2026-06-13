import type { Metadata } from "next";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/project-card";
import { Eyebrow } from "@/components/ui";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Products and experiments built by Hunter Holderfield — each project embedded live, from AI tooling to automation.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-5 pb-24 pt-32 sm:px-8 sm:pt-40">
      <div className="max-w-2xl">
        <Eyebrow>Projects</Eyebrow>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          Everything I&apos;ve been building
        </h1>
        <p className="mt-4 text-base leading-relaxed text-muted">
          A collection of products and experiments. Open any project to explore
          it live, embedded right here on the site.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
