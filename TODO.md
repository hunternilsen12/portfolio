# TODO — Portfolio website

Split out of `portfolio/TODO.md` on 2026-08-20 when upper-level TODOs were removed. This is a project with
its own git repo (`hunternilsen12/portfolio`, a personal account — not `domo-domosapiens`), so its task
list belongs here.

⚠ This repo is on branch `cleanup/remove-dead-sidebar-code` with **no upstream set**, carrying 27 local
commits. `git log @{u}..` reports 0 because there is no `@{u}` — set an upstream or fold the branch in
before trusting any unpushed count.

## Blocking

_Nothing blocked._

## Active

- [ ] **All 7 referenced screenshots are missing from `public/`, so every project card's imagery is broken
      on the live site.** `src/data/projects.ts` points at
      `screenshots/{comint-dashboard,comint-queue,comint-scoring,command-account,command-revenue,rooster-dashboard,…}.jpg`
      and none exist. `public/{screenshots,logos,lottie}` are empty dirs kept deliberately — deleting them
      would hide the problem, not fix it. Verify with:
      ```bash
      python3 -c "import re,os;print([r for r in set(re.findall(r'\"((?:screenshots|logos|lottie)/[^\"]+)\"',open('src/data/projects.ts').read())) if not os.path.exists('public/'+r)])"
      ```
- [ ] Compress `src/assets/Headshot.jpg` — 2.5 MB ships uncompressed and is the single largest asset
- [ ] Deploy the resume-PDF fix: `npm run deploy:pages` (publishes live)
- [ ] Reconcile `PORTFOLIO-CONTENT.md` with `projects.ts` — the archive is missing `hubspot-revops-build`
      and `territory-framework`

## Parked

- [ ] Decide the fate of the unused `status` and `section` project fields — both are set in `projects.ts`
      but no live component reads them (badges and section grouping died with `ProjectGrid`). Either wire
      them into `CuratedWork`/`ValueDetail` or drop them from the type
- [ ] Prune dead rules from `src/styles.css` (3,532 lines) — sidebar, project-grid, filter, and
      detail-section rules are unreachable after the 2026-07-30 cleanup. Needs a visual check, so not a
      blind delete

## Known gaps

- The empty `public/{screenshots,logos,lottie}` directories are intentional markers for the item above.

## Done

- [x] Deleted 35 orphaned source files from `src/` and dropped the `lottie-react` dependency — dead since
      the top-nav editorial redesign (2026-07-30)
- [x] Fixed the `/resume` Download CV 404 by copying the resume PDF into `public/` (2026-07-30)
