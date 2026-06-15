"use client";

import { useEffect, useRef, useState, type SVGProps } from "react";
import { ArrowUpRightIcon, ExternalIcon } from "@/components/icons";

type Status = "loading" | "loaded" | "blocked";

// How long to wait for the iframe to load before assuming the site blocks
// embedding and showing the fallback.
const LOAD_TIMEOUT_MS = 12_000;

export function ProjectEmbed({
  url,
  name,
  previewImage,
  allowEmbed = true,
}: {
  url: string;
  name: string;
  previewImage?: string;
  allowEmbed?: boolean;
}) {
  const [status, setStatus] = useState<Status>(
    allowEmbed ? "loading" : "blocked",
  );
  const [reloadKey, setReloadKey] = useState(0);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const host = hostname(url);

  useEffect(() => {
    if (status !== "loading") return;
    timer.current = setTimeout(() => {
      setStatus((s) => (s === "loading" ? "blocked" : s));
    }, LOAD_TIMEOUT_MS);
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, [status, reloadKey]);

  const handleReload = () => {
    setStatus("loading");
    setReloadKey((k) => k + 1);
  };

  return (
    <div className="glow-accent overflow-hidden rounded-xl border border-border bg-surface">
      {/* Browser chrome */}
      <div className="flex items-center gap-3 border-b border-border bg-surface-2/70 px-4 py-3">
        <div className="flex items-center gap-1.5">
          <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
          <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
          <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
        </div>
        <div className="flex min-w-0 flex-1 items-center gap-2 rounded-md border border-border bg-background/60 px-3 py-1.5">
          <LockIcon className="h-3.5 w-3.5 shrink-0 text-faint" />
          <span className="truncate font-mono text-xs text-muted">{host}</span>
        </div>
        <div className="flex items-center gap-1">
          {allowEmbed && (
            <button
              type="button"
              onClick={handleReload}
              className="hidden rounded-md p-2 text-faint transition-colors hover:bg-surface hover:text-foreground sm:inline-flex"
              aria-label="Reload preview"
            >
              <ReloadIcon className="h-4 w-4" />
            </button>
          )}
          <a
            href={url}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-1.5 rounded-md bg-foreground px-3 py-1.5 text-xs font-medium text-background transition-transform hover:-translate-y-0.5"
          >
            Open
            <ExternalIcon className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>

      {/* Viewport */}
      <div className="relative h-[68vh] min-h-[460px] w-full bg-background">
        {allowEmbed && (
          <iframe
            key={reloadKey}
            src={url}
            title={`${name} — live preview`}
            loading="lazy"
            onLoad={() => {
              if (timer.current) clearTimeout(timer.current);
              setStatus("loaded");
            }}
            referrerPolicy="no-referrer-when-downgrade"
            allow="clipboard-write; fullscreen"
            className={`h-full w-full border-0 transition-opacity duration-500 ${
              status === "loaded" ? "opacity-100" : "opacity-0"
            }`}
          />
        )}

        {/* Loading overlay */}
        {status === "loading" && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-background">
            <div className="h-9 w-9 animate-spin rounded-full border-2 border-border border-t-accent" />
            <p className="font-mono text-xs text-faint">
              Loading {host}…
            </p>
          </div>
        )}

        {/* Fallback when embedding is blocked or times out */}
        {status === "blocked" && (
          <Fallback url={url} name={name} previewImage={previewImage} />
        )}
      </div>
    </div>
  );
}

function Fallback({
  url,
  name,
  previewImage,
}: {
  url: string;
  name: string;
  previewImage?: string;
}) {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {previewImage && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={previewImage}
          alt={`${name} preview`}
          className="h-full w-full object-cover object-top opacity-25"
        />
      )}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-background/70 px-6 text-center backdrop-blur-sm">
        <p className="max-w-sm text-sm leading-relaxed text-muted">
          This project can&apos;t be previewed inline here, but it&apos;s live
          and ready to explore.
        </p>
        <a
          href={url}
          target="_blank"
          rel="noreferrer noopener"
          className="group inline-flex items-center gap-2 rounded-lg bg-foreground px-5 py-3 text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
        >
          Open {name}
          <ArrowUpRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>
    </div>
  );
}

function hostname(url: string): string {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}

function LockIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M12 1.5a4.5 4.5 0 0 0-4.5 4.5v3H6.75A1.75 1.75 0 0 0 5 10.75v9.5c0 .966.784 1.75 1.75 1.75h10.5A1.75 1.75 0 0 0 19 20.25v-9.5A1.75 1.75 0 0 0 17.25 9H16.5V6A4.5 4.5 0 0 0 12 1.5Zm3 7.5H9V6a3 3 0 1 1 6 0v3Z" />
    </svg>
  );
}

function ReloadIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      {...props}
    >
      <path d="M3 12a9 9 0 0 1 15.5-6.2L21 8M21 3v5h-5M21 12a9 9 0 0 1-15.5 6.2L3 16M3 21v-5h5" />
    </svg>
  );
}
