# ihrh.me — Hunter Holderfield's portfolio

Personal portfolio for **Hunter Holderfield**, AI & Automation Engineer based in
Kansas City, KS. Built with Next.js (App Router), React, TypeScript, and
Tailwind CSS v4. Deployed at **[ihrh.me](https://ihrh.me)**.

The Projects section embeds each personal project live, in-page, via an
`<iframe>` (with a graceful fallback for sites that block embedding). The first
project featured is **[Stackon](https://stackon.ai)**.

## Develop

```bash
npm install
npm run dev          # http://localhost:3000
```

Other scripts:

```bash
npm run build        # production build
npm run start        # serve the production build
npm run lint         # eslint
```

## Editing content

Everything is content-driven — you shouldn't need to touch the components to keep
the site current.

| What | Where |
| --- | --- |
| Name, role, bio, location, skills, social links | `src/data/site.ts` |
| Projects (cards + embedded pages) | `src/data/projects.ts` |
| Résumé PDF | `public/Hunter-Holderfield-Resume.pdf` |
| Favicon | `src/app/icon.svg` |
| Theme colors / fonts | `src/app/globals.css` (`@theme` block) |

### Add a project

Add an entry to the `projects` array in `src/data/projects.ts`:

```ts
{
  slug: "my-project",                 // becomes /projects/my-project
  name: "My Project",
  tagline: "One-line summary.",
  description: "A paragraph about it.",
  url: "https://my-project.com",      // the live site that gets embedded
  previewImage: "https://my-project.com/opengraph-image", // optional card/fallback image
  tags: ["Next.js", "LLM"],
  year: "2026",
  status: "Live",                     // "Live" | "In progress" | "Archived"
  featured: true,                     // show on the home page
  highlights: ["Key thing 1", "Key thing 2"],
  allowEmbed: true,                   // set false if the site blocks iframes
}
```

> **Embedding note:** some sites send `X-Frame-Options` / CSP `frame-ancestors`
> headers that prevent iframe embedding. If a project can't be framed, set
> `allowEmbed: false` and it will show a preview + "Open" button instead of a
> broken frame. (Stackon.ai currently allows embedding.)

### Update your links

In `src/data/site.ts`, replace the placeholder GitHub and LinkedIn URLs with your
real profiles:

```ts
socials: {
  email: "mailto:hunterrholderfield@gmail.com",
  github: "https://github.com/<your-username>",
  linkedin: "https://www.linkedin.com/in/<your-handle>",
},
```

### Replace the résumé

The "Résumé" button links to `public/Hunter-Holderfield-Resume.pdf`, which is a
generated placeholder. Drop your real PDF in at that path (same filename) to
replace it. To regenerate the placeholder: `node scripts/gen-resume.mjs`.

## Deploy to Vercel + connect ihrh.me

1. Push this repo to GitHub.
2. At [vercel.com/new](https://vercel.com/new), import the repo. Vercel
   auto-detects Next.js — no config needed. Click **Deploy**.
3. In the project's **Settings → Domains**, add `ihrh.me` (and `www.ihrh.me`).
4. At your domain registrar, point DNS at Vercel:
   - **Apex `ihrh.me`** → `A` record to `76.76.21.21`, **or** an `ALIAS`/`ANAME`
     to `cname.vercel-dns.com` if your registrar supports it.
   - **`www`** → `CNAME` to `cname.vercel-dns.com`.
5. Wait for DNS to propagate; Vercel issues an HTTPS certificate automatically.

> Always use the exact DNS values Vercel shows in **Settings → Domains** — they
> are occasionally updated.

## Stack

- [Next.js 16](https://nextjs.org) (App Router, static export of all routes)
- [React 19](https://react.dev) + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com)
- Geist font via `next/font`
