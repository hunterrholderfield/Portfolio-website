"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { site } from "@/data/site";
import { CloseIcon, MenuIcon } from "@/components/icons";

const links = [
  { href: "/#about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "border-b border-border bg-background/80 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="group font-mono text-sm tracking-tight text-foreground"
          aria-label={`${site.name} — home`}
        >
          <span className="text-gradient font-semibold">{site.wordmark}</span>
          <span className="text-faint transition-colors group-hover:text-muted">
            .me
          </span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm text-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={site.socials.email}
            className="ml-2 rounded-md border border-border-strong bg-surface px-3.5 py-2 text-sm font-medium text-foreground transition-colors hover:border-accent/60 hover:text-accent"
          >
            Get in touch
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="-mr-2 inline-flex items-center justify-center rounded-md p-2 text-muted hover:text-foreground md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? (
            <CloseIcon className="h-6 w-6" />
          ) : (
            <MenuIcon className="h-6 w-6" />
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-border bg-background/95 backdrop-blur-md md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-4 sm:px-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-base text-muted transition-colors hover:bg-surface hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={site.socials.email}
              onClick={() => setOpen(false)}
              className="mt-1 rounded-md border border-border-strong bg-surface px-3 py-3 text-center text-base font-medium text-foreground"
            >
              Get in touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
