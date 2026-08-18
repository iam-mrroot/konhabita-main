# Konhabita — Developer Guide

Next.js 16 (App Router) marketing site for Konhabita, an architecture/landscape/urban
design studio. This doc is a map of the codebase after a cleanup pass that took the
project from AI-generated "vibe code" to a normal, human-editable structure — **no
visual or behavioral changes were made**, only reorganization. Everything below
reflects the current layout.

## Getting started

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm run lint    # eslint
```

## How routing maps to code

Every route is a thin file in `src/app/**/page.js` — it just renders `<Navbar />` plus
one big component from `src/components/`. The pages themselves rarely need editing;
almost all the real content and logic live in the component they render.

| URL | Page file | Renders |
|---|---|---|
| `/` | `src/app/page.js` | `Hero` (intro/gateway animation, no navbar) |
| `/home` | `src/app/home/page.js` | `Expertise`, `ExpertisePage`, `StudioManifesto`, `InteractiveStudioLab`, `Testimonials`, `ClientsCarousel`, `ContactCard` |
| `/studio` | `src/app/studio/page.js` | `Studio` |
| `/projects` | `src/app/projects/page.js` | `Projects` |
| `/projects/architecture` | `.../architecture/page.js` | `Architecture` |
| `/projects/interiors` | `.../interiors/page.js` | `Interiors` |
| `/projects/landscape` | `.../landscape/page.js` | `Landscape` |
| `/projects/sustainability` | `.../sustainability/page.js` | `Sustainability` |
| `/projects/planning-urban-design` | `.../planning-urban-design/page.js` | `PlanningUrbanDesign` |
| `/projects/competition` | `.../competition/page.js` | `Competition` |
| `/expertise/architecture-expertise` | `.../page.js` | `ArchitectureExpertise` |
| `/expertise/interiors-expertise` | `.../page.js` | `InteriorExpertise` |
| `/expertise/landscape-expertise` | `.../page.js` | `LandscapeExpertise` |
| `/expertise/planning-expertise` | `.../page.js` | `PlanningExpertise` |
| `/expertise/sustainability-expertise` | `.../page.js` | `SustainabilityExpertise` |
| `/join-us` | `src/app/join-us/page.js` | `CareersIntro` |
| `/join-us/career-opportunity` | `.../page.js` | `CareerOpportunity` |
| `/join-us/internship` | `.../page.js` | `Internship` |
| `/contact` | `src/app/contact/page.js` | `ContactIntro` |
| `/contact/collaboration` | `.../page.js` | `ForCollaboration` |
| `/contact/project-enquiry` | `.../page.js` | `ProjectEnquiry` |
| `/news` | `src/app/news/page.js` | `NewsEventsIntro` |
| `/news/monthly-events` | `.../page.js` | `MonthlyEvents` |
| `/news/podcasts` | `.../page.js` | `Podcasts` |
| `/news/workshops` | `.../page.js` | `Workshops` |

## Folder conventions

```
src/
  app/            Next.js routes only — page.js + layout.js. Keep these thin.
  components/     All page content: one PascalCase.js file per section/page.
  data/           Content that's shared or big enough to deserve its own top-level file.
```

Inside `src/components/` you'll see three kinds of files:

1. **`ComponentName.js`** — the component itself, default export, `'use client'`
   where it needs interactivity/animation.
2. **`ComponentName.data.js`** — plain JS content that used to be a hardcoded array
   inside the component (nav links, project lists, team bios, FAQ entries, form
   options). Extracted so a non-developer can update copy without touching JSX.
   Imported back with `import { thing } from "./ComponentName.data"`.
3. **Sub-components** for anything that used to be a 600-800 line file — e.g. a
   modal or form that's only used by one parent. Named for what they are
   (`CareerOpportunityApplicationForm.js`, `DesignTeamMemberModal.js`,
   `ProjectModal.js`), not by line number or "part 2".

`src/data/` holds content that's either shared across components or large enough
that it made sense to move it fully out of `src/components/` (project listings,
expertise-page copy, monthly event/workshop galleries).

## Shared building blocks worth knowing about

The site has two families of near-identical pages that used to be 5-6 separate
copy-pasted files. They're now driven by one shared component + per-page data:

**The 5 `*Expertise.js` pages** (`ArchitectureExpertise`, `InteriorExpertise`,
`LandscapeExpertise`, `PlanningExpertise`, `SustainabilityExpertise`) are now thin
wrappers around `ExpertiseDetailPage.js`. To change layout/behavior for all 5, edit
`ExpertiseDetailPage.js`. To change one discipline's copy, edit its file in
`src/data/` (`architectureExpertise.js`, etc.).

**The 6 project-showcase pages** (`Architecture`, `Landscape`, `Interiors`,
`Sustainability`, `PlanningUrbanDesign`, `Competition`) share:
- `DisciplineCategoryNav.js` — the sticky sidebar nav
- `DisciplineProjectCard.js` — the project preview card
- `ProjectDetailModal.js` — the click-to-expand detail dialog
- `useProjectCardReveal.js` — the scroll-in reveal animation hook
- Each page keeps its own `*.data.js` project list.

**Note:** the main `/projects` listing page (`Projects.js`) looks similar but is a
*different, standalone* layout with its own `ProjectCard.js` / `ProjectModal.js` —
don't merge it into the discipline-page family above, the spacing/sizing genuinely
differs by design.

## Known pre-existing quirks (not introduced by the cleanup, left as-is)

- `HomeHero.js` and `NewsEvents.js` exist but aren't imported by any route. Safe to
  ignore, wire up, or delete — just flagging so they don't look like a mistake.
- `ProjectEnquiryModal.js` has one pre-existing lint error
  (`react-hooks/set-state-in-effect`, line ~31) and a few `useEffect` missing-dependency
  warnings exist elsewhere (`Hero.js`). These were present before the cleanup and
  don't affect the build — worth a look if you're doing a hooks pass, not urgent.

## Git history

- `00f988f` — baseline snapshot of the AI-generated code, before any cleanup.
- `dbcda5c` — the full restructure (this pass). Diff against the baseline commit if
  you want to see exactly what moved where.
