# Process overview

## What I built

SLOP3358, *Edible Matter: Thermodynamics, Transport and Soft-Matter Physics in
the Chinese Kitchen* — a fictional third-year course site on the supplied
SlopU starter. Twelve dated modules across four teaching stages, four weighted
assessments, one lecture deck, and two interactive instruments: a Virtual
Rheometer and a Crispness Phase Diagram. Every claim is either a cited
literature result, a clearly labelled synthetic simulation, or a stated
assumption — never an invented number.

## How I got here

I started from the brief and the starter's schemas, recording decisions —
course identity, the four-stage structure, the two instruments, the reference
list — in `PLAN.md` alongside a project-specific `CLAUDE.md`
([`3c75606`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-pengyue-Stella/commit/3c75606)).

The build went in fixed, independently-green checkpoints: course data first —
all twelve modules, the four assessments and their weights
([`9d39452`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-pengyue-Stella/commit/9d39452));
then navigation, stage grouping, and a lab-notebook visual system on the
supplied SlopU palette
([`188dc15`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-pengyue-Stella/commit/188dc15)).

The two instruments were built separately, each with its own domain model.
The Virtual Rheometer fits Newtonian, power-law and Herschel-Bulkley models to
a synthetic steady-shear flow curve and shows the residuals — it does not
attempt Winter-Chambon gel-point detection, which needs an oscillatory
frequency sweep this instrument never runs, and an earlier draft of this file
wrongly claimed it did
([`66bff03`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-pengyue-Stella/commit/66bff03)).
The Crispness Phase Diagram drives a Gordon-Taylor glass-transition model and
an exponential moisture-uptake model, paired with the deck *Crispness Is a
Metastable State*
([`6ac6046`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-pengyue-Stella/commit/6ac6046)).
Both share one `scientific.css` instrument system and respond to
`prefers-reduced-motion`.

A References page and two spec files —
`pages-present.test.ts` and `no-starter-content.test.ts` — closed the content
loop
([`4016bd3`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-pengyue-Stella/commit/4016bd3)).
A later art-direction pass then rebuilt the visual system on top of that
working content: a real specimen-plate photo library
([`8143055`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-pengyue-Stella/commit/8143055)),
a custom homepage and sessions journey
([`fd78533`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-pengyue-Stella/commit/fd78533)),
named layout patterns tying each module to a specimen photo or an instrument
([`ff9856d`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-pengyue-Stella/commit/ff9856d)),
and a lead specimen plate on both instrument pages plus a placard border on
deck figures, so the two central objects on the site finally carry the same
imagery the modules do
([`a24bff8`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-pengyue-Stella/commit/a24bff8)).

Nothing stayed red between checkpoints: every commit above followed a clean
`pnpm check`, and every build reported 0 accessibility violations and 0
broken links. Where a check couldn't see something — real citations, honest
data provenance, whether the site reads coherently — I checked by hand:
grepping every module's references against the bibliography, and reading
non-adjacent modules end to end.

One full read-through the way a marker would caught what no check could:
`astromotion` doesn't shrink slide text to fit its fixed canvas, so six
slides had content clipped below the frame, including the deck's own "model
limitations" honesty checkpoint. I split all six, fixed three lab pages where
a line break was collapsing space before an inline link, and re-verified at
1920×1080 and 390×844
([`e03cdfb`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-pengyue-Stella/commit/e03cdfb)).
Both instruments' SVG plots reflow correctly across intermediate widths; the
supplied theme's own nav clips two items around 650–900px, a vendored gap
outside the graded viewports.

## Before you ship

`pnpm check:evidence` passes: no starter markers or starter images remain,
`CLAUDE.md` is present, and every citation above resolves to a real commit in
this repo.
