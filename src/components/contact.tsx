import { site } from "@/data/site";
import { Section, Eyebrow } from "@/components/ui";
import {
  ArrowUpRightIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
} from "@/components/icons";

export function Contact() {
  return (
    <Section id="contact">
      <div className="glow-accent relative overflow-hidden rounded-2xl border border-border bg-surface/60 px-6 py-14 text-center sm:px-12 sm:py-20">
        <div
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{
            background:
              "radial-gradient(40rem 20rem at 50% -20%, rgba(129,140,248,0.18), transparent 70%)",
          }}
          aria-hidden
        />
        <div className="relative mx-auto max-w-2xl">
          <div className="flex justify-center">
            <Eyebrow>Contact</Eyebrow>
          </div>
          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Let&apos;s build something
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Have an idea, a role, or a problem worth automating? I&apos;m always
            happy to talk shop. The fastest way to reach me is email.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href={site.socials.email}
              className="group inline-flex items-center gap-2 rounded-lg bg-foreground px-5 py-3 text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
            >
              <MailIcon className="h-4 w-4" />
              {site.email}
            </a>
            <a
              href={site.socials.github}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-lg border border-border-strong bg-surface px-5 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent/60 hover:text-accent"
            >
              <GitHubIcon className="h-4 w-4" />
              GitHub
              <ArrowUpRightIcon className="h-4 w-4" />
            </a>
            <a
              href={site.socials.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-lg border border-border-strong bg-surface px-5 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent/60 hover:text-accent"
            >
              <LinkedInIcon className="h-4 w-4" />
              LinkedIn
              <ArrowUpRightIcon className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}
