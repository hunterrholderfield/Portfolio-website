import Link from "next/link";
import { site } from "@/data/site";
import { GitHubIcon, LinkedInIcon, MailIcon } from "@/components/icons";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div>
          <Link href="/" className="font-mono text-sm">
            <span className="text-gradient font-semibold">{site.wordmark}</span>
            <span className="text-faint">.me</span>
          </Link>
          <p className="mt-2 text-sm text-faint">
            © {year} {site.name}. {site.location}.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <a
            href={site.socials.github}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub"
            className="rounded-md border border-border p-2.5 text-muted transition-colors hover:border-border-strong hover:text-foreground"
          >
            <GitHubIcon className="h-5 w-5" />
          </a>
          <a
            href={site.socials.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="LinkedIn"
            className="rounded-md border border-border p-2.5 text-muted transition-colors hover:border-border-strong hover:text-foreground"
          >
            <LinkedInIcon className="h-5 w-5" />
          </a>
          <a
            href={site.socials.email}
            aria-label="Email"
            className="rounded-md border border-border p-2.5 text-muted transition-colors hover:border-border-strong hover:text-foreground"
          >
            <MailIcon className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
