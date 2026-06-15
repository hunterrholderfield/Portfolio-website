import Link from "next/link";
import { btn, iconBtn } from "@/components/ui";
import { site } from "@/data/site";
import { featuredProjects } from "@/data/projects";
import {
  ArrowUpRightIcon,
  DownloadIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
} from "@/components/icons";

const statusRows: [string, string][] = [
  ["role", site.role],
  ["location", site.location],
  ["status", "Open to interesting problems"],
  ["focus", "LLMs · agents · automation"],
  [
    "latest",
    featuredProjects[0] ? featuredProjects[0].name : "Personal projects",
  ],
];

export function Hero() {
  return (
    <section className="relative mx-auto flex max-w-6xl flex-col gap-14 px-5 pb-12 pt-32 sm:px-8 sm:pt-40 lg:flex-row lg:items-center lg:gap-10">
      {/* Left: intro */}
      <div className="rise flex-1">
        <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-6xl">
          {site.name}
        </h1>
        <p className="text-gradient mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
          {site.role}
        </p>

        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
          {site.tagline}
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Link
            href="/projects"
            className={`${btn} group`}
          >
            View projects
            <ArrowUpRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
          <a
            href={site.resumeUrl}
            className={btn}
          >
            <DownloadIcon className="h-4 w-4" />
            Résumé
          </a>
        </div>

        <div className="mt-8 flex items-center gap-3">
          <a
            href={site.socials.github}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub"
            className={iconBtn}
          >
            <GitHubIcon className="h-5 w-5" />
          </a>
          <a
            href={site.socials.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="LinkedIn"
            className={iconBtn}
          >
            <LinkedInIcon className="h-5 w-5" />
          </a>
          <a
            href={site.socials.email}
            aria-label="Email"
            className={iconBtn}
          >
            <MailIcon className="h-5 w-5" />
          </a>
        </div>
      </div>

      {/* Right: faux terminal status card */}
      <div className="rise w-full lg:w-[26rem]" style={{ animationDelay: "120ms" }}>
        <div className="glow-accent overflow-hidden rounded-xl border border-border bg-surface/70 backdrop-blur">
          <div className="flex items-center gap-2 border-b border-border bg-surface-2/60 px-4 py-3">
            <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
            <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
            <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
            <span className="ml-2 font-mono text-xs text-faint">
              {site.wordmark}@portfolio: ~
            </span>
          </div>
          <div className="space-y-2.5 p-5 font-mono text-sm">
            <p className="text-faint">
              <span className="text-accent">$</span> whoami --status
            </p>
            {statusRows.map(([key, value]) => (
              <div key={key} className="flex gap-3">
                <span className="w-20 shrink-0 text-faint">{key}</span>
                <span className="text-foreground">{value}</span>
              </div>
            ))}
            <p className="pt-2 text-faint">
              <span className="text-accent">$</span>{" "}
              <span className="inline-block h-4 w-2 translate-y-0.5 animate-pulse bg-accent/80" />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
