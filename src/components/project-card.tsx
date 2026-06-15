import Link from "next/link";
import type { Project } from "@/data/projects";
import { ArrowUpRightIcon } from "@/components/icons";
import { StatusBadge } from "@/components/ui";

export function ProjectCard({ project }: { project: Project }) {
  const host = hostname(project.url);

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-xl border border-border bg-surface/60 transition-all duration-300 hover:-translate-y-1 hover:border-border-strong hover:bg-surface"
    >
      {/* Browser-chrome preview */}
      <div className="relative">
        <div className="flex items-center gap-1.5 border-b border-border bg-surface-2/70 px-4 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
          <span className="ml-2 truncate font-mono text-[11px] text-faint">
            {host}
          </span>
        </div>
        <div className="relative aspect-[16/9] overflow-hidden bg-surface-2">
          {project.previewImage ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={project.previewImage}
              alt={`${project.name} preview`}
              loading="lazy"
              className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-[radial-gradient(60%_60%_at_50%_30%,rgba(0,0,0,0.06),transparent)]">
              <span className="text-gradient font-mono text-2xl font-semibold">
                {project.name}
              </span>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-surface/80 via-transparent to-transparent" />
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-lg font-semibold text-foreground">
            {project.name}
          </h3>
          <StatusBadge status={project.status} className="shrink-0" />
        </div>
        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted">
          {project.tagline}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-foreground px-2.5 py-0.5 text-[11px] text-background"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
          <span className="font-mono text-xs text-faint">{project.year}</span>
          <span className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors group-hover:text-accent">
            View project
            <ArrowUpRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
      </div>
    </Link>
  );
}


function hostname(url: string): string {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}
