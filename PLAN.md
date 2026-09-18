# PLAN — SLOP3358: Edible Matter

Working plan for Assignment 2, written before implementation and updated only
where the record needs to note a real change of direction. This is the plan
the agent worked from, not a retrospective.

## 1. Course thesis

**SLOP3358 — Edible Matter: Thermodynamics, Transport and Soft-Matter Physics
in the Chinese Kitchen.**

One thesis runs through all twelve modules: *Chinese cooking is applied
soft-matter physics, and the vocabulary of rheology, thermodynamics and
transport phenomena describes it more precisely than recipe language does.*
Every module picks one real Chinese food material system (hand-pulled noodle
dough, mapo tofu sauce, a century egg, a Peking duck skin) and asks what a
physical chemist would ask about it: what is the governing equation, what do
you measure, what does the model assume, where does the model break.

The course does **not** try to be more advanced than a third-year elective —
it reuses standard soft-matter and food-engineering models (Newtonian /
power-law / Herschel-Bulkley flow; Fourier conduction; Arrhenius kinetics;
Flory-Stockmayer percolation; Gordon-Taylor / WLF glass transition) rather
than inventing new theory. Depth comes from applying real models honestly to
real food systems, not from vocabulary.

## 2. Four-stage curriculum

| Stage | Title | Modules |
|---|---|---|
| 1 | Measuring Edible Matter | 1 What Is Edible Matter?, 2 Rheology I: Flow Behaviour, 3 Thermal Characterisation |
| 2 | Structures and Networks | 4 Polymer Networks I: Starch Gels, 5 Protein Aggregation and Gelation, 6 Colloids and Emulsions |
| 3 | Flow, Interfaces and Transformation | 7 Heat and Mass Transport, 8 Reaction Kinetics, 9 Phase Transitions in Cooking |
| 4 | Prediction and Material Design | 10 Building Predictive Models, 11 The Crispness Design Space, 12 Inverse Material Design |

Progression logic: Stage 1 establishes *how we measure* a food material
(definitions, flow curves, thermal signatures). Stage 2 asks *what gives it
structure* (gel networks, protein aggregation, dispersed phases). Stage 3
asks *how structure changes* (transport, kinetics, transitions — the
processes a cook actually controls). Stage 4 asks *can we predict and design
it* (fitting models, mapping a design space, inverting the problem: choose a
target texture, solve for the process). Each module's page states this
placement explicitly and links to the previous/next module (computed from
`week`, not separate frontmatter).

Twelve modules, weeks 1–12, one per week of a 12-week teaching period
(2027-02-22 to 2027-05-28, unchanged from the starter — already schema-valid).

## 3. Information architecture

- `/` — home: thesis statement, four-stage overview, entry points.
- `/overview/` — course overview, learning outcomes, prerequisites (one page;
  keeps nav small, matches the weight of the content).
- `/sessions/` — module index, **grouped by the four stages** (rebuilt
  `SessionsGrid`, not a flat list).
- `/sessions/[slug]/` — the 12 module pages (existing dynamic route, extended
  with a stage badge and prev/next module links).
- `/lectures/` — lecture index.
- `/lectures/[slug]/` — lecture pages, one links to the deck.
- `/labs/` — laboratory index: the two interactive instruments.
- `/labs/virtual-rheometer/`, `/labs/crispness-phase-diagram/` — the
  instruments themselves.
- `/assessments/` — assessment index (existing).
- `/assessments/[slug]/` — the four assessment pages (existing route).
- `/people/` — staff page (existing route, restaffed for this course).
- `/policies/` — academic policies (existing MDX page, rewritten).
- `/resources/` — external tools, datasets, further reading pointers.
- `/references/` — full bibliography, grouped by stage/topic.
- `/decks/crispness-metastable/` — the required lecture deck (built by
  `astromotion` from a `.deck.mdx` source).

No orphans: every page above is reachable from the top nav or from a page the
nav reaches. Nav links: Overview, Modules, Lectures, Labs, Assessment,
People, Policies, Resources, References — the existing `.at-nav-links`
component scrolls horizontally past the fold, so nine links is fine at
390 px.

## 4. The two interactive instruments

Both are hand-rolled vanilla TypeScript + inline SVG inside plain `.astro`
pages (no UI framework is installed, and none is needed). Both: work with
mouse, keyboard (range inputs are natively focusable/steppable) and touch;
re-measure on resize (`ResizeObserver`, not a fixed pixel canvas); check
`prefers-reduced-motion` before animating; state their assumptions and data
provenance in an `:::info`/`:::warning` panel on the page itself, not just in
prose above the widget.

**A. Virtual Rheometer** (`/labs/virtual-rheometer/`)
- Specimen selector: 3–4 real Chinese food systems with distinct rheological
  character (e.g. mapo tofu sauce ≈ shear-thinning power-law fluid, honey ≈
  Newtonian, a dumpling dough ≈ Herschel-Bulkley fluid with a yield stress).
- Shear-rate control (range input, log-scaled).
- Three fittable models: Newtonian (η = const), power-law (τ = K·γ̇ⁿ),
  Herschel-Bulkley (τ = τ₀ + K·γ̇ⁿ).
- Live flow curve (τ vs γ̇) and viscosity curve (η vs γ̇), redrawn on any
  control change.
- Model fitting: least-squares fit of the selected model to the specimen's
  synthetic-but-parameterised curve; report fitted K, n (and τ₀ for HB) plus
  an R² / residual-sum display so a bad model choice is visibly bad.
- Explicit label: parameters are **illustrative**, chosen to sit in the
  published range for each food class (cited in Steffe 1996 and Walstra
  2003), not measurements from a real instrument run for this course.

**B. Crispness Phase Diagram** (`/labs/crispness-phase-diagram/`)
- Specimen selector (e.g. spring roll wrapper, biscuit, rice cracker) and
  ambient-humidity control.
- A temperature-vs-moisture-content (or water-activity) state map with
  glassy / rubbery / crisp / softened regions, boundary informed by the
  Gordon-Taylor equation for Tg(moisture) and by typical critical water
  activity values for crisp foods (Roos, *Phase Transitions in Foods*).
- Time-based moisture-uptake animation at the chosen humidity (first-order
  approach to equilibrium moisture — a standard, clearly-labelled simplified
  kinetic model, not a measured sorption isotherm).
- Specimen comparison (two specimens' trajectories on the same diagram).
- Same assumptions/provenance panel as the rheometer.

Everything else the original brief associated with "labs" — starch-state and
transport visuals — is **not** a third or fourth full instrument. It is a
lighter inline SVG figure (e.g. an animated gelatinisation-front diagram in
Module 4, a Biot-number regime sketch in Module 7) embedded directly in the
relevant module page, per the explicit instruction not to build two more
large instruments.

## 5. Content and scientific-integrity rules

These become both working rules and, where mechanically possible, spec
tests:

1. Every module states its research question, its stage placement, the
   governing model, the specific food system, and explains every symbol it
   uses — no unexplained equations.
2. Every quantitative model on the site (module page or instrument) carries
   an explicit assumptions/limitations statement (an `:::warning` callout)
   and a data-provenance statement (an `:::info` callout: measured /
   literature-derived / illustrative-synthetic).
3. No invented citations, DOIs, measurements, or textbook titles. The
   reference list (§6 below) was verified by web search against real
   publisher/journal records before any module text was written; module
   pages cite only from that list.
4. Where a precise parameter can't be sourced to real literature for this
   specific food system, the module says so and uses a labelled
   dimensionless/illustrative model instead of dressing up a guess as data.
5. No two modules share the template with only nouns swapped: each module's
   research question, activity and governing physics are genuinely
   different, even where two modules share a math family (e.g. Arrhenius
   appears in both Module 8 and the Maillard sub-topic of Module 3, but asks
   different questions of it).

## 6. Verified reference set

Confirmed by web search (title, author, publisher/journal, DOI/edition) —
recorded here so the References page and in-module citations draw from the
same checked list, and so nothing downstream can drift into a fabricated
title:

- Steffe, J.F. (1996). *Rheological Methods in Food Process Engineering*,
  2nd ed. Freeman Press, East Lansing, MI.
- Walstra, P. (2003). *Physical Chemistry of Foods*. Marcel Dekker, New York.
- BeMiller, J.N. & Whistler, R.L. (Eds.) (2009). *Starch: Chemistry and
  Technology*, 3rd ed. Academic Press.
- McClements, D.J. (2015). *Food Emulsions: Principles, Practices, and
  Techniques*, 3rd ed. CRC Press.
- Singh, R.P. & Heldman, D.R. *Introduction to Food Engineering*, 5th ed.
  Academic Press.
- Damodaran, S. & Parkin, K.L. (Eds.) (2017). *Fennema's Food Chemistry*,
  5th ed. CRC Press.
- Roos, Y.H. *Phase Transitions in Foods*, 2nd ed. Academic Press.
- Winter, H.H. & Chambon, F. (1986). "Analysis of Linear Viscoelasticity of a
  Crosslinking Polymer at the Gel Point." *Journal of Rheology* 30(2),
  367–382.
- Williams, M.L., Landel, R.F. & Ferry, J.D. (1955). "The Temperature
  Dependence of Relaxation Mechanisms in Amorphous Polymers and Other
  Glass-Forming Liquids." *Journal of the American Chemical Society* 77(14),
  3701–3707. https://doi.org/10.1021/ja01619a008
- Gordon, M. & Taylor, J.S. (1952). "Ideal Copolymers and the Second-Order
  Transitions of Synthetic Rubbers. I. Non-Crystalline Copolymers." *Journal
  of Applied Chemistry* 2(9), 493–500.
- Flory, P.J. (1941). "Molecular Size Distribution in Three Dimensional
  Polymers. I. Gelation." *Journal of the American Chemical Society* 63(11),
  3083–3090. https://doi.org/10.1021/ja01856a061
- Stockmayer, W.H. (1944). "Theory of Molecular Size Distribution and Gel
  Formation in Branched Polymers. II. General Cross Linking." *Journal of
  Chemical Physics* 12(4), 125–131.

## 7. Checks to add in `spec/`

New `spec/*.test.ts` files, alongside the shipped `spec/data-integrity.test.ts`:

- `course-identity.test.ts` — code is exactly `SLOP3358`, level digit 3,
  title/description/tags valid against the schema.
- `modules.test.ts` — exactly 12 `sessions` entries; weeks 1–12 each used
  once; every date within the course period; every entry has a `stage` in
  1–4 and all four stages appear; unique titles and slugs.
- `assessments.test.ts` — exactly 4 assessment entries; weights are
  25 / 20 / 20 / 35 and sum to 100.
- `decks-and-labs.test.ts` — at least one lecture links a real `/decks/.../`
  path that exists in `dist`; both lab pages exist in `dist` and are linked
  from `/labs/`.
- `pages-present.test.ts` — every required page in §3 exists in `dist`.
- `no-starter-content.test.ts` — no `STARTER_CONTENT` marker text remains in
  `dist` output (belt-and-braces alongside the evidence script's own
  source-level grep).

Not automated, by design: whether the writing is interesting, whether the
visual style reads as a chemistry lab rather than a recipe blog. Those stay
judged by a person at the crit.

## 8. Visual system

Identity: *physical chemistry laboratory crossed with an experimental
cookbook.* Keep the supplied SlopU palette (`--at-primary: #b97d1c`,
`--at-secondary: #8a5c13`, `--at-tertiary: #6b6154`) untouched — brand
identity comes from motif and typography, not new colour.

- **No stock/cartoon imagery.** The four starter raster images
  (`card.png`, `hero-home.avif`, two people `.avif` photos) are deleted, not
  replaced with new photography. `astro-theme-university`'s image resolver
  passes SVG through unrasterised for `Card`/`Hero`, so identity is built
  from hand-authored SVG: specimen labels, small material cross-sections,
  a phase-diagram motif for the hero, axis/plot sketches.
- **Equation and variable presentation.** A small set of global CSS classes
  (`.equation`, `.variable-list`, `.specimen-label`) styled with `--at-*`
  tokens so they inherit dark-mode support automatically. Equations are set
  in plain HTML with Unicode subscripts/superscripts and `<sub>/<sup>` —
  no new dependency (no KaTeX/MathJax is installed and the assignment
  doesn't need one).
- **Assumptions/limitations and provenance** use the theme's native
  `:::warning[Assumptions and limitations]` / `:::info[Data provenance]`
  directive callouts (`remark-callout`, already shipped) — no bespoke
  component needed, and it keeps every module visually consistent.
- **Motion**: small parameter-driven SVG transitions (a viscosity-curve
  sweep, a moisture-front animation) gated behind
  `matchMedia("(prefers-reduced-motion: reduce)")`.

## 9. Implementation checkpoints

1. `PLAN.md` + project `CLAUDE.md`.
2. Course data (`course-config.ts`, `content.config.ts` `stage` field),
   structural specs, 4 assessments, all 12 modules.
3. Information architecture: navigation, new pages, stage-grouped module
   index, scientific visual system, starter-asset removal.
4. Virtual Rheometer.
5. Crispness Phase Diagram + the "Crispness Is a Metastable State" deck.
6. References page, content review pass, accessibility and responsive
   fixes.
7. `PROCESS.md` evidence draft + final verification.

Each checkpoint: inspect the diff, run `pnpm check`, run the new focused
spec file(s) for that checkpoint, fix red before committing, one commit per
checkpoint with a message describing the decision — never a single combined
commit.

## 10. Verification plan

Before calling this done: `pnpm check` green, `pnpm check:evidence` green,
`pnpm build` succeeds, then a manual pass over non-adjacent modules (e.g. 1,
5, 9, 12), both instruments, the deck, assessments/policies/references, at
both 1920×1080 and 390×844 (via `agent-browser` against the local preview),
keyboard-only interaction with both instruments' controls, and a resize
check. No `STARTER_CONTENT` marker, no broken internal link, no placeholder
copy left anywhere in `dist`.

## 11. Visual redesign (pass 2)

The build above shipped a working, correct site that still read as "the
starter theme with course text in it." This pass keeps every invariant in
`CLAUDE.md` (palette, IA, curriculum, instruments, assessments, references)
and rebuilds the page-body visual language so the site reads as *an
experimental materials-science laboratory studying edible matter* — closer to
a journal's figure style than a template's card grid.

**Stage colour without new colour.** The four curriculum stages need to feel
related but distinguishable without touching `--at-primary` /
`--at-secondary` / `--at-tertiary`. Solution: a `--stage-accent` custom
property, set per `[data-stage="n"]` scope, that only ever redistributes the
three existing tokens (stage 4 uses `color-mix()` of two of them, not a new
hue) — plus one small monochrome motif glyph per stage (gauge, lattice,
flow arrows, feedback loop) that carries the rest of the distinction.

**Figures live inside existing content, not a new pipeline.** Module pages
stay `.md`; new figures are hand-authored inline `<svg>` markup styled by a
shared `.sci-figure*` class family in `scientific.css`, the same
raw-HTML-in-Markdown pattern `.equation`/`.variable-list` already use. No
schema change, no `.mdx` conversion, no new build dependency.

**Six stages, six commits** (never combined): (1) the shared visual
system — figure/caption/specimen-label/stage-accent/motif classes; (2) the
homepage and `/sessions/` curriculum map; (3) one original figure per module,
committed in curriculum-stage-sized groups, not as one dump; (4) the
*Crispness Is a Metastable State* deck rebuilt as claim-per-slide with
supporting diagrams; (5) both instruments' surrounding framing/legends
brought into the same visual language (no third instrument); (6) a final
site-wide pass at 1920×1080 and 390×844, `pnpm check`, and `PROCESS.md`.
