# Portfolio site — hunternilsen.com

## Overview
Single-page portfolio for Hunter Nilsen. React 19 + TypeScript (strict) + Vite 8, hash-based
routing, deployed to GitHub Pages on the apex domain via `public/CNAME`.

Ported from vanilla HTML/CSS/JS 2026-04-22. A sidebar layout shipped 2026-06-28, then was replaced
by the current **top-nav editorial** layout on 2026-06-29 (`5b2278b`). The orphaned sidebar-era code
was removed 2026-07-30.

## Stack
- **Build:** Vite 8, `base: './'` (relative asset paths)
- **Framework:** React 19 + TypeScript strict; functional components only
- **Router:** `react-router-dom` HashRouter
- **Styling:** Plain CSS in `src/styles.css`, imported once in `main.tsx`. **Do not migrate to
  Tailwind or CSS Modules** without a separate discussion.
- **State:** Local `useState` only. No Zustand / Context.
- **Fonts:** **Inter** (300–700) for body + **Playfair Display** (700/900, incl. italic) for
  editorial headings — both loaded at `index.html:20`
- **No animation library.** `lottie-react` was dropped 2026-07-30; there is no scroll-entrance or
  counter system in the live tree.

## Layout
Top nav + stacked editorial sections, cream theme. There is no sidebar.

```
┌───────────────────────────────────────┐
│  TopNav (links + resume)              │
├───────────────────────────────────────┤
│  Hero         headshot + intro copy   │
│  CuratedWork  "Top Projects" list     │
│  Footer                               │
└───────────────────────────────────────┘
```

`/resume` and `/project/:slug` reuse `TopNav` + `Footer` around their own body.

## File Structure
Everything under `src/` is live — 17 modules, no orphans as of 2026-07-30.

- `src/main.tsx` — mounts `App`, imports `styles.css`
- `src/App.tsx` — HashRouter + `SkipLink` / `ScrollProgress` / `RouteAnnouncer`
- `src/styles.css` — design system, 3,532 lines (see Known traps — contains dead rules)
- `src/assets/Headshot.jpg` — hero photo, imported via Vite (2.5 MB, uncompressed)
- `src/types/project.ts` — `Project` type + 15-variant `RichSection` union
- `src/data/projects.ts` — `PROJECT_DATA: Project[]`, 1,563 lines, **32 projects**
- `src/lib/seo.ts` — `applyProjectSeo` / `resetSeo` for title + meta updates
- `src/lib/scrollMemory.ts` — scroll position preserved across home ↔ detail
- `src/components/` — `TopNav`, `Hero`, `CuratedWork`, `Footer`
- `src/components/common/` — `SkipLink`, `ScrollProgress`, `RouteAnnouncer`
- `src/pages/Home.tsx` — `TopNav + Hero + CuratedWork + Footer`
- `src/pages/ProjectDetail.tsx` — slug lookup; always renders `ValueDetail`
- `src/pages/ResumePage.tsx` — standalone resume; content is **hardcoded JSX**, not data-driven
- `src/pages/ValueDetail.tsx` — metrics strip + approach + outcome + inline screenshot gallery

## Routing
- `#/` — Home
- `#/project/{slug}` — always `ValueDetail`
- `#/resume` — resume page with PDF download
- `#*` — catch-all falls through to `Home` (`App.tsx:18`)
- Invalid slug → `<Navigate to="/" replace />` (`ProjectDetail.tsx:21`)

## Project Data Shape
Required on every project: `slug`, `title`, `date` (YYYY-MM for sorting), `dateLabel`, `role`,
`roleLabel`, `category`, `section`, `tags`, `impactAreas`, `summary`, `company`, `featured`, `detail`.

`detail` requires `tagline`, `problem`, `solution`, `building`, `results` (strings) and
`metrics: Array<{value, label}>`.

`Category = 'automation' | 'dashboards' | 'enablement' | 'intelligence' | 'strategic' | 'fde' | 'revsuite'`

`section` values in use: Team Enablement Tools & Processes (8), Dashboards & Data Infrastructure (6),
RevSuite (5), Automation & Workflows (5), Strategic Initiatives (4), FDE Customer Onsites (3),
Skills in Progress (1).

## Known traps
Read these before editing — each one causes work that looks right and changes nothing.

**Required fields that never render.** `ValueDetail` shows only `metrics`, `solution` (as "The
Approach"), and `results` (as "The Outcome"). `detail.tagline`, `detail.problem`, and
`detail.building` are required by the type but rendered nowhere. Same for `status` and `section` —
both are populated in the data but no live component reads them; the status badges and the
section-grouped grid died with `ProjectGrid`. Editing any of these changes nothing on screen.

**The home page is a hardcoded curation.** `CuratedWork.tsx:3-12` lists 8 slugs explicitly, plus a
hardcoded "FDE AI Solution Sprints" block. Adding a project to `projects.ts` makes it reachable at
`#/project/{slug}` but does **not** surface it on the home page — add the slug to `CURATED_SLUGS`.

**Hero and resume copy is hardcoded JSX.** Home intro text lives in `Hero.tsx`, not in any data
file; the whole resume body is JSX in `ResumePage.tsx`. `PORTFOLIO-CONTENT.md` is an archive of that
prose, not a source the build reads.

**Screenshots are unbundled and currently missing.** `image-gallery` sections use plain relative
paths served from `public/screenshots/` (deliberately not Vite-bundled, so paths stay stable). That
directory is empty while `projects.ts` references 7 files, so those `<img>` tags render broken.

**`styles.css` still holds dead rules.** Sidebar, project-grid, filter, and detail-section CSS
survived the 2026-07-30 component deletion. Harmless but misleading — a selector existing there does
not mean a component uses it.

**The resume PDF lives in two places.** `public/hunter-nilsen-resume.pdf` is what the site serves;
`../hunter-nilsen-resume.pdf` is the export you attach to applications. Re-exporting one without
copying to the other silently 404s the Download CV button — exactly the bug fixed 2026-07-30.

## Deleted 2026-07-30 — do not resurrect
35 files were removed because nothing imported them (verified by BFS from `main.tsx`): the
sidebar-era home page (`Sidebar`, `Header`, `About`, `Experience`, `Skills`, `Filters`,
`ProjectGrid`, `ProjectCard`, `Companies`), the Lottie wrappers, all three scroll/counter hooks
(`useInView`, `useCountUp`, `useScrollSpy`), and the entire `components/detail/` tree —
`SectionDispatcher`, `RichDetail`, `PlainDetail`, `DetailHeader`, `PrevNextNav`, and all 16
`sections/` renderers.

They are recoverable from history at `57c51d5`, but they were **already unreachable** when deleted —
recovering one does not restore a working feature. The `RichSection` union in `types/project.ts` was
intentionally kept: `projects.ts` still carries `richDetail` data and `ValueDetail` reads
`image-gallery` sections inline.

## Scripts
- `npm run dev` — Vite dev server at `http://localhost:5173/`
- `npm run typecheck` — `tsc -b`, strict; expect clean
- `npm run build` — typecheck, then `dist/` with hashed filenames
- `npm run lint` — `eslint .`
- `npm run preview` — serve the built `dist/`
- `npm run deploy:pages` — **publishes live.** Build + force-push `dist/` to `gh-pages`

## Deployment
Live at `https://hunternilsen.com/`, served from the `gh-pages` branch with `public/CNAME` holding
the apex domain. Remote is `github.com/hunternilsen12/portfolio` — Hunter's personal GitHub, not the
`domo-domosapiens` EMU org, so a non-EMU remote warning from `/session-start` is expected here.

**Never deploy without being asked.** Committing is not publishing.

## Design Rules
- **Fonts:** Inter for body, Playfair Display for editorial headings
- **Accent red:** `#DC2626` — token `var(--color-accent)`
- **Respect `prefers-reduced-motion`** — the `@media (prefers-reduced-motion: reduce)` block sets
  `transition-duration: 0.01ms` globally

## Rollback
```bash
cd ~/work/portfolio/website
git checkout v0.0.1-vanilla   # pre-React vanilla build
```
