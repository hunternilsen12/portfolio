# Portfolio — Hunter Nilsen

## Overview
Single-page portfolio site for Hunter Nilsen. React 19 + TypeScript (strict) + Vite 8, hash-based routing, deployed to GitHub Pages at `hunternilsen12.github.io/portfolio/`.

Ported from vanilla HTML/CSS/JS on 2026-04-22. Sidebar layout overhaul (v2) completed 2026-06-28.

## Stack
- **Build:** Vite 8, `base: './'` (relative asset paths — works under the `/portfolio/` Pages subpath)
- **Framework:** React 19 + TypeScript strict; functional components only
- **Router:** `react-router-dom` HashRouter — routes `/`, `/project/:slug`, `/resume`
- **Styling:** Plain CSS in `src/styles.css`, imported once in `main.tsx`. **Do not migrate to Tailwind or CSS Modules** without a separate discussion.
- **State:** Local `useState` only. No Zustand / Context.
- **Fonts:** Inter-only (300–700) via Google Fonts — `index.html` already linked. No Lato.
- **Animations:** `lottie-react` for JSON-driven animations (lazy-loaded via `LottiePlayer`); CSS `.fade-up` / `.in-view` transitions for scroll-triggered entrance effects.

## Layout Architecture
Fixed-left sidebar + scrollable main content. **Not** a sticky top header.

```
┌──────────────┬────────────────────────────────┐
│  Sidebar     │  Main content (scrolls)         │
│  260px dark  │  margin-left: 260px             │
│  #0f172a     │                                 │
│              │  About / Experience / Skills     │
│  [avatar]    │  Filters / Project grid          │
│  [nav links] │                                 │
│  [socials]   │                                 │
│  [resume btn]│                                 │
└──────────────┴────────────────────────────────┘
Mobile ≤768px: sidebar hidden, fixed topbar (56px) + hamburger drawer
```

CSS tokens: `--sidebar-bg: #0f172a`, `--sidebar-width: 260px`, `--topbar-height: 56px`

## File Structure
- `src/main.tsx` — Mounts App, imports `styles.css`
- `src/App.tsx` — HashRouter with home, project detail, and resume routes
- `src/styles.css` — Complete design system (~2,900 lines)
- `src/assets/Headshot.jpg` — Sidebar avatar photo, imported via Vite
- `src/types/project.ts` — `Project` type + 15-variant `RichSection` discriminated union; `Category` includes `'fde' | 'revsuite'`
- `src/data/projects.ts` — `PROJECT_DATA: Project[]`, ~1,300 lines, 23 projects
- `src/lib/seo.ts` — `applyProjectSeo` / `resetSeo` for title + meta tag updates
- `src/lib/scrollMemory.ts` — Module-scoped scroll position preservation between home ↔ detail
- `src/hooks/useScrollSpy.ts` — Active nav highlighting driven by scroll position
- `src/hooks/useInView.ts` — Generic Intersection Observer hook; fire-once, returns `[RefCallback<T>, boolean]`
- `src/hooks/useCountUp.ts` — rAF-based counter animation; respects `prefers-reduced-motion`
- `src/components/Sidebar.tsx` — Fixed dark sidebar (avatar, nav, social icons, resume download). **Replaces Header.tsx** on Home + Resume pages.
- `src/components/` — About, Experience, Skills, Filters, ProjectGrid, ProjectCard, Footer; Header.tsx is still present but unused.
- `src/components/common/` — SkipLink, ScrollProgress, RouteAnnouncer, LottiePlayer, LottieInner
- `src/components/detail/` — DetailHeader, PrevNextNav, PlainDetail, RichDetail, SectionDispatcher (all still present; only `ValueDetail` is rendered now)
- `src/components/detail/sections/` — 15 section components incl. **ImageGallery**
- `src/pages/Home.tsx` — Wraps `<Sidebar>` + `.main-content` in `.layout-shell`
- `src/pages/ProjectDetail.tsx` — Always renders `<ValueDetail>` (no PlainDetail/RichDetail dispatch)
- `src/pages/ResumePage.tsx` — Wraps `<Sidebar activeSection="/resume">` in `.layout-shell`
- `src/pages/ValueDetail.tsx` — Simplified project detail: metrics strip + approach + outcome + screenshot gallery

## Routing
- `#/` — Home (About, Experience, Skills, Filters, Project grid)
- `#/project/{slug}` — Project detail; **always renders ValueDetail** (ignores richDetail sections except `image-gallery`)
- `#/resume` — Standalone resume page with PDF download
- Invalid slug → `<Navigate to="/" replace />`
- Nav links: `handleNav` guard — `href.startsWith('#/')` means route link (let HashRouter handle it); otherwise `e.preventDefault()` + imperative scroll via `onNavClick`.

## Project Data Shape
Every project needs: `slug`, `title`, `date` (YYYY-MM for sorting), `dateLabel`, `role`, `roleLabel`, `category`, `section`, `tags`, `impactAreas`, `summary`, `company`, `featured`, and a `detail` object.

`detail` shape (all required by `PlainDetail` type):
- `tagline`, `problem`, `solution`, `building`, `results` — strings
- `metrics: Array<{value: string; label: string}>` — 2–4 chips on the ValueDetail page

`ValueDetail` renders: `solution` as "The Approach", `results` as "The Outcome", `metrics` as the impact strip. It ignores `tagline`, `problem`, `building` at render time — they're still required by the type.

Optional fields:
- `cardStats?: string[]` — KPI chips on the home-grid card
- `richDetail?: RichDetail` — not rendered by ValueDetail except for `image-gallery` sections

### Project Categories
`Category = 'automation' | 'dashboards' | 'enablement' | 'intelligence' | 'strategic' | 'fde' | 'revsuite'`

Current sections in projects.ts:
- **FDE Customer Onsites** — Feld Entertainment (Monster Jam), ESPN (contact intelligence), Ocean Partners (trading dashboard)
- **RevSuite** — RevReplay (Gong replacement), RevRadar (account intelligence), RevRoutine (enablement platform)
- **Team Enablement Tools & Processes** — ADM Daily Command Center + others
- **Automation & Workflows** — No Lead Left Behind + others
- **Dashboards & Analytics** — existing projects
- **Intelligence & AI Tools** — existing projects
- **Strategic Initiatives** — existing projects

### `image-gallery` section type
Images are served from `public/screenshots/` (not bundled by Vite — stable paths). The `src` field is a relative string like `screenshots/comint-queue.jpg`. Drop real screenshots into `public/screenshots/` and update the `src` values in `projects.ts`. Existing gallery placeholders: COMINT, Command Structure, roosterIQ.

## Animation System
- **Scroll entrance:** Add `className="fade-up"` + `className+=" in-view"` (toggled by `useInView`) to any element. Optional stagger via `delay-1` through `delay-4`.
- **Counter:** `useCountUp(target, durationMs, enabled)` — starts when `enabled` is true. Respects `prefers-reduced-motion`.
- **Lottie:** `<LottiePlayer src="lottie/foo.json" />` — renders nothing if `src` is undefined. JSON files go in `public/lottie/`.

## User Tasks (carry forward)
- Drop screenshots into `public/screenshots/` — existing filenames in `projects.ts`
- Export resume PDF → `public/hunter-nilsen-resume.pdf` (referenced by sidebar "Download CV" button and resume page)
- Drop Lottie JSON files into `public/lottie/`, update `src` in `About.tsx` (currently `undefined`)

## Common Tasks

### Add a new project
1. Add an object to `PROJECT_DATA` in `src/data/projects.ts` — typecheck flags missing fields.
2. Nothing else to touch — grid, filters, and prev/next nav derive automatically.
3. To add screenshots: put files in `public/screenshots/` and add `richDetail.sections` with `type: 'image-gallery'`.

### Add scroll-triggered animation to a component
```tsx
const [ref, inView] = useInView<HTMLElement>({ threshold: 0.1 })
return <section ref={ref} className={'fade-up' + (inView ? ' in-view' : '')} />
```

### Visual tweaks
Edit `src/styles.css` directly. Do not inline Tailwind utilities.

## Scripts
- `npm run dev` — Vite dev server at `http://localhost:5173/`
- `npm run typecheck` — `tsc -b`, strict mode; expect clean
- `npm run build` — Type-check, then produce `dist/` with hashed asset filenames
- `npm run deploy:pages` — Build and push `dist/` to the `gh-pages` branch

## Deployment — GitHub Pages
The live site is `https://hunternilsen12.github.io/portfolio/`.

One command: `npm run deploy:pages`. The `gh-pages` package builds, then force-pushes `dist/` to `origin/gh-pages`.

## Design Rules
- **Fonts:** Inter-only (300–700) — no Lato
- **Sidebar:** `#0f172a` dark, 260px wide. Main content `margin-left: 260px`.
- **Accent red:** `#DC2626` (buttons, accents). Token: `var(--color-accent)`
- **Surfaces:** `#f8fafc` (off-white), borders `#e2e8f0`
- **Respect `prefers-reduced-motion`** — the `@media (prefers-reduced-motion: reduce)` block sets `transition-duration: 0.01ms` globally

## Rollback
```bash
cd ~/Documents/Projects/Portfolio
git checkout v0.0.1-vanilla
```
