import type { ReactNode } from "react";

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
    <span className="rounded-full border border-border bg-surface/60 px-3 py-1 text-xs text-muted">
      {children}
    </span>
  );
}
