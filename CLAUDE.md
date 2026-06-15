# Portfolio — Hunter Nilsen

## Overview
Single-page portfolio site for Hunter Nilsen. React 19 + TypeScript (strict) + Vite 8, hash-based routing, deployed to GitHub Pages at `hunternilsen.github.io/portfolio-landing/`.

Ported from vanilla HTML/CSS/JS on 2026-04-22. The pre-migration vanilla is archived at `~/Documents/Projects/.archive/Portfolio-vanilla/` and tagged `v0.0.1-vanilla` in this repo.

## Stack
- **Build:** Vite 8, `base: './'` (relative asset paths — works under the `/portfolio-landing/` Pages subpath)
- **Framework:** React 19 + TypeScript strict; functional components only
- **Router:** `react-router-dom` HashRouter — routes `/`, `/project/:slug`, `/resume`
- **Styling:** Plain CSS in `src/styles.css`, imported once in `main.tsx`. **Do not migrate to Tailwind or CSS Modules** without a separate discussion — the design system was kept verbatim on purpose.
- **State:** Local `useState` only. No Zustand / Context.
- **Animations:** `lottie-react` for JSON-driven animations (lazy-loaded via `LottiePlayer`); CSS `.fade-up` / `.in-view` transitions for scroll-triggered entrance effects.

## File Structure
- `src/main.tsx` — Mounts App, imports `styles.css`
- `src/App.tsx` — HashRouter with home, project detail, and resume routes
- `src/styles.css` — Complete design system (~2,300 lines after overhaul)
- `src/assets/Headshot.jpg` — About section photo, imported via Vite
- `src/types/project.ts` — `Project` type + 15-variant `RichSection` discriminated union
- `src/data/projects.ts` — `PROJECT_DATA: Project[]`, ~1,100 lines, 15 projects
- `src/lib/seo.ts` — `applyProjectSeo` / `resetSeo` for title + meta tag updates
- `src/lib/scrollMemory.ts` — Module-scoped scroll position preservation between home ↔ detail
- `src/hooks/useScrollSpy.ts` — Active nav highlighting driven by scroll position
- `src/hooks/useInView.ts` — Generic Intersection Observer hook; fire-once, returns `[RefCallback<T>, boolean]`
- `src/hooks/useCountUp.ts` — rAF-based counter animation; respects `prefers-reduced-motion`
- `src/components/` — Home chrome (Header, About, Experience, Skills, Filters, ProjectGrid, ProjectCard, Footer)
- `src/components/common/` — SkipLink, ScrollProgress, RouteAnnouncer, LottiePlayer, LottieInner
- `src/components/detail/` — DetailHeader, PrevNextNav, PlainDetail, RichDetail, SectionDispatcher
- `src/components/detail/sections/` — 15 section components (Features, ThreeCol, Compare, Workflow, Pipeline, Tech, Steps, Rubric, Accordion, Modules, DataArchitecture, Timeline, Callout, Architecture, **ImageGallery**)
- `src/pages/Home.tsx`, `src/pages/ProjectDetail.tsx`, `src/pages/ResumePage.tsx`

## Routing
- `#/` — Home (About, Experience, Skills, Filters, Project grid)
- `#/project/{slug}` — Project detail; dispatches to `PlainDetail` or `RichDetail`
- `#/resume` — Standalone resume page with PDF download
- Invalid slug → `<Navigate to="/" replace />`
- Section anchors (About / Experience / Skills / Projects / Resume) — `Resume` is a route link; all others scroll imperatively via `onNavClick` in `Header.tsx`. `handleNav` guards: if `href.startsWith('#/')` it's a route link and the browser navigates natively; otherwise `e.preventDefault()` + imperative scroll.

## Project Data Shape
Every project needs: `slug`, `title`, `date` (YYYY-MM for sorting), `dateLabel`, `role`, `roleLabel`, `category`, `section`, `tags`, `impactAreas`, `summary`, `company`, `featured`, and a `detail` object. Projects with a rich detail page add a `richDetail` object whose `sections[]` is an array of the 15-variant `RichSection` union.

Optional fields:
- `cardStats?: string[]` — renders inline KPI chips on the home-grid card

**If you add or rename a `RichSection` variant, you must update both:**
1. The union in `src/types/project.ts`
2. The `switch` in `src/components/detail/SectionDispatcher.tsx`

TypeScript's exhaustiveness check on the `_exhaustive: never` fallthrough will catch a missing case at compile time.

### `image-gallery` section type
Images are served from `public/screenshots/` (not bundled by Vite — stable paths). The `src` field is a relative string like `screenshots/comint-queue.jpg`. Drop real screenshots into `public/screenshots/` and update the `src` values in `projects.ts`. Three projects already have gallery placeholders: COMINT (`call-review-coaching-app`), Command Structure (`account-mapping-app`), roosterIQ (`market-intelligence-app`).

## Animation System
- **Scroll entrance:** Add `className="fade-up"` + `className+=" in-view"` (toggled by `useInView`) to any element. Optional stagger via `delay-1` through `delay-4`.
- **Counter:** `useCountUp(target, durationMs, enabled)` — starts when `enabled` is true (pass `inView` from `useInView`). Respects `prefers-reduced-motion`.
- **Lottie:** `<LottiePlayer src="lottie/foo.json" />` — renders nothing if `src` is undefined. JSON files go in `public/lottie/` and are fetched at runtime (not bundled). Used in About section placeholder spots.

## Lottie Setup (user task)
Drop `.json` animation files into `public/lottie/`, then pass the relative path as the `src` prop to `<LottiePlayer>` in `About.tsx` (currently `src={undefined}` — placeholders that render nothing).

## Resume PDF (user task)
Export the resume as PDF and place at `public/hunter-nilsen-resume.pdf`. The "Download CV" header button and "Download PDF" button on the resume page both reference this path via `<a href="hunter-nilsen-resume.pdf" download>`.

## Screenshots (user task)
Drop anonymized screenshots into `public/screenshots/`. Expected filenames (from `projects.ts`):
- `comint-queue.jpg`, `comint-scoring.jpg`, `comint-dashboard.jpg`
- `command-account.jpg`, `command-revenue.jpg`
- `rooster-dashboard.jpg`, `rooster-modal.jpg`

## Common Tasks

### Add a new project
1. Add an object to `PROJECT_DATA` in `src/data/projects.ts`. Type-check flags missing fields.
2. If it needs a rich detail page, add `richDetail.sections[]` using existing section types.
3. Nothing else to touch — the grid, filters, and prev/next nav derive automatically.

### Add a new rich-detail section type
1. Add the interface + union member in `src/types/project.ts`
2. Create `src/components/detail/sections/<Name>.tsx`
3. Wire it in the `switch` in `SectionDispatcher.tsx`
4. Add styling to `src/styles.css` using `.rich-<name>-*` class names

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
- `npm run deploy:pages` — Build and push `dist/` to the `gh-pages` branch via the `gh-pages` npm package

## Deployment — GitHub Pages
The live site is `https://hunternilsen.github.io/portfolio-landing/`.

Once configured, deploys are one command: `npm run deploy:pages`. The `gh-pages` package builds, then force-pushes `dist/` to `origin/gh-pages`.

## Design Rules
- **Fonts:** Inter (headings, 500/600/700) + Lato (body, 400/500/700) via Google Fonts — already linked in `index.html`
- **Accent red:** `#DC2626` (buttons, accents). Token: `var(--color-accent)`
- **Respect `prefers-reduced-motion`** — the `@media (prefers-reduced-motion: reduce)` block sets `transition-duration: 0.01ms` globally, which automatically disables `.fade-up` transitions and `useCountUp` returns the target value immediately
- All colors, spacing, radii, shadows live as `var(--*)` tokens in `src/styles.css`

## Rollback
```bash
cd ~/Documents/Projects/Portfolio
git checkout v0.0.1-vanilla
```
