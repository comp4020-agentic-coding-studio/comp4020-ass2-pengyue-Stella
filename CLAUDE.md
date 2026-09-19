# SLOP3358 — Edible Matter: harness

Assignment 2. Course code `SLOP3358` (course level `3`, digits `358` are the
fixed part of the platform contract — see `README.md`). Full plan, IA,
reference list and checkpoint schedule live in `PLAN.md`; this file is the
standing rules, not the plan.

## Invariant decisions (don't relitigate these)

- **One thesis, twelve modules, four stages.** Every module is a distinct
  Chinese food system read through a real soft-matter/food-engineering model.
  Stage order is fixed: 1 Measuring Edible Matter → 2 Structures and Networks
  → 3 Flow, Interfaces and Transformation → 4 Prediction and Material Design.
  Don't reorder modules or rename stages without updating `PLAN.md` §2 first.
- **No fabricated evidence, ever.** No invented citations, DOIs,
  measurements, or textbook titles. Only cite from the verified list in
  `PLAN.md` §6 (or a newly web-searched and confirmed source added to that
  list before use). If a real parameter for a specific food system can't be
  sourced, say so on the page and use a clearly labelled
  illustrative/dimensionless model instead of dressing up a guess as data.
- **Every model states its assumptions.** Any equation, fitted curve, or
  simulated value on the site — module page or interactive instrument —
  carries an `:::warning[Assumptions and limitations]` callout and an
  `:::info[Data provenance]` callout (measured / literature-derived /
  illustrative-synthetic). This is a hard rule, not a nice-to-have.
- **Exactly two full interactive instruments.** Virtual Rheometer and
  Crispness Phase Diagram. Everything else scientific-visual is a lighter
  inline SVG figure inside a module page. Do not build a third or fourth
  large lab.
- **No unexplained equations, no copy-paste template modules.** Every symbol
  used gets a one-line gloss. Each module's research question and activity
  must be genuinely different from the others, even where the underlying
  math family repeats.
- **Write for third-year students, not for the API.** Professional,
  readable, specific to the named food system — not generic AI-essay prose,
  not a recipe blog, not cartoon food.
- **Palette and platform are fixed.** Keep `--at-primary: #b97d1c`,
  `--at-secondary: #8a5c13`, `--at-tertiary: #6b6154` untouched. Brand
  identity comes from typography, SVG diagrams, specimen labels, and
  equation/plot styling — not new colour. The four starter raster images
  are deleted, not restyled; a deleted starter asset passes the evidence
  hash check automatically.
- **Photography is specimen material, not decoration.** A small library of
  real, credited photographs (Pexels, free-to-use licence — credited in
  `src/assets/images/photos/CREDITS.md` regardless, as good practice) stands
  in for six food materials as close-up texture/structure specimens,
  annotated with SVG diagrams on top the same way a fully-drawn specimen is
  — not presented as plated-food styling. This is a scoped exception to "no
  stock photography", not a licence to add imagery freely: a new photograph
  is only ever a real, sourced, credited image of a specific material this
  course discusses, entered in `CREDITS.md` before use — never a generic
  decorative stock photo, and never AI-generated.
- **Accessibility and responsiveness are load-bearing, not polish.** Both
  instruments must work with mouse, keyboard, and touch; must re-measure on
  resize (no fixed-pixel canvases); must respect
  `prefers-reduced-motion`. Verify at 1920×1080 and 390×844, not just one.
- **No UI framework.** None is installed (`package.json` has no
  React/Vue/Svelte). Both instruments are vanilla TypeScript + inline SVG in
  `<script type="module">` blocks inside plain `.astro` pages. Don't add a
  framework dependency to make this easier.

## Process discipline

- Run `pnpm check` before every commit. Never commit a red state.
- One commit per checkpoint (see `PLAN.md` §9) — never one combined dump at
  the end. Each commit message names the decision it completes.
- Never push, change repository visibility, or rewrite git history without
  being explicitly asked.
- Do not automate subjective judgement (whether the writing is interesting,
  whether the visual style lands) — `spec/` checks structure and facts, a
  person judges taste at the crit.

## Things the agent kept needing to be told (record as they come up)

- `astro-theme-university`'s `remark-callout` plugin supports
  `:::info` / `:::tip` / `:::warning` / `:::error` / `:::details[summary]`
  directive syntax in plain Markdown (aliases `:::danger`→error,
  `:::caution`→warning) — use this for assumptions/provenance callouts
  instead of hand-rolled HTML or MDX component imports.
- `resolveImage` in `astro-theme-university/images.ts` resolves
  `/src/assets/...` string paths via a Vite glob that includes `.svg`, and
  both `Card.astro` and `Hero.astro` pass SVG through unrasterised — SVG is
  the supported path for hero/card art with no new imagery pipeline needed.
- A starter asset that is **deleted** (not merely edited) automatically
  passes `scripts/check-evidence.ts`'s SHA-256 check — no need to keep a
  placeholder file around.
