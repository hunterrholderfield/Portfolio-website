import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/data/projects";
import { ProjectEmbed } from "@/components/project-embed";
import { ArrowLeftIcon, ArrowUpRightIcon } from "@/components/icons";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project not found" };

  return {
    title: project.name,
    description: project.tagline,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      title: `${project.name} — Hunter Holderfield`,
      description: project.tagline,
      url: `/projects/${project.slug}`,
      images: project.previewImage ? [{ url: project.previewImage }] : undefined,
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <div className="mx-auto w-full max-w-6xl px-5 pb-24 pt-28 sm:px-8 sm:pt-32">
      <Link
        href="/projects"
        className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-foreground"
      >
        <ArrowLeftIcon className="h-4 w-4" />
        All projects
      </Link>

      {/* Header */}
      <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3">
            <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              {project.name}
            </h1>
            <StatusBadge status={project.status} />
            <span className="font-mono text-sm text-faint">{project.year}</span>
          </div>
          <p className="mt-3 text-lg leading-relaxed text-muted">
            {project.tagline}
          </p>
        </div>
        <a
          href={project.url}
          target="_blank"
          rel="noreferrer noopener"
          className="group inline-flex shrink-0 items-center gap-2 rounded-lg bg-foreground px-5 py-3 text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
        >
          Open live site
          <ArrowUpRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>

      {/* Live embed */}
      <div className="mt-8">
        <ProjectEmbed
          url={project.url}
          name={project.name}
          previewImage={project.previewImage}
          allowEmbed={project.allowEmbed ?? true}
        />
      </div>

      {/* Details */}
      <div className="mt-12 grid gap-10 lg:grid-cols-[1.6fr_1fr]">
        <div>
          <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-faint">
            About this project
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            {project.description}
          </p>

          {project.highlights && project.highlights.length > 0 && (
            <ul className="mt-6 space-y-3">
              {project.highlights.map((h) => (
                <li key={h} className="flex gap-3 text-sm text-foreground">
                  <span
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                    aria-hidden
                  />
                  <span className="leading-relaxed text-muted">{h}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        <aside>
          <div className="rounded-xl border border-border bg-surface/60 p-5">
            <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-faint">
              Stack &amp; focus
            </h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-foreground px-3 py-1 text-xs text-background"
                >
                  {tag}
                </span>
              ))}
            </div>
            <a
              href={project.url}
              target="_blank"
              rel="noreferrer noopener"
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-foreground px-4 py-2.5 text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
            >
              Visit {hostname(project.url)}
              <ArrowUpRightIcon className="h-4 w-4" />
            </a>
          </div>
        </aside>
      </div>
    </div>
  );
}

function StatusBadge({
  status,
}: {
  status: "Live" | "In progress" | "Archived";
}) {
  return (
    <span className="rounded-full bg-foreground px-2.5 py-0.5 text-[11px] font-medium text-background">
      {status}
    </span>
  );
}

function hostname(url: string): string {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}
