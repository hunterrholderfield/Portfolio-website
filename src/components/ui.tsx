import type { ReactNode } from "react";
import type { Project } from "@/data/projects";

/** Shared filled-black button style (rounded-lg). Compose with orthogonal
 *  utilities at the call site, e.g. `${btn} group`. */
export const btn =
  "inline-flex items-center gap-2 rounded-lg bg-foreground px-5 py-3 text-sm font-medium text-background transition-transform hover:-translate-y-0.5";

/** Shared filled-black icon button (square). */
export const iconBtn =
  "rounded-md bg-foreground p-2.5 text-background transition-transform hover:-translate-y-0.5";

export function Section({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-24 ${className}`}
    >
      {children}
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-accent">
      <span className="h-px w-6 bg-accent/60" aria-hidden />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
}) {
  return (
    <div className="max-w-2xl">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-muted">
          {description}
        </p>
      )}
    </div>
  );
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full bg-foreground px-3 py-1 text-xs text-background">
      {children}
    </span>
  );
}

export function StatusBadge({
  status,
  className = "",
}: {
  status: Project["status"];
  className?: string;
}) {
  return (
    <span
      className={`rounded-full bg-foreground px-2.5 py-0.5 text-[11px] font-medium text-background ${className}`}
    >
      {status}
    </span>
  );
}
