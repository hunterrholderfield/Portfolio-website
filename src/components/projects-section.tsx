import Link from "next/link";
import { featuredProjects, projects } from "@/data/projects";
import { ProjectCard } from "@/components/project-card";
import { Section, SectionHeading } from "@/components/ui";
import { ArrowUpRightIcon } from "@/components/icons";

export function ProjectsSection() {
  const showcased = featuredProjects.length ? featuredProjects : projects;

  return (
    <Section id="projects">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <SectionHeading
          eyebrow="Projects"
          title="Things I've built"
          description="A growing collection of products and experiments. Each one embeds the live project right here on the site."
        />
        {projects.length > showcased.length && (
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-accent"
          >
            All projects
            <ArrowUpRightIcon className="h-4 w-4" />
          </Link>
        )}
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {showcased.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </Section>
  );
}
