# Process overview

## What I built

SLOP3358, *Edible Matter: Thermodynamics, Transport and Soft-Matter Physics in
the Chinese Kitchen* — a complete, fictional third-year course site built on
the supplied SlopU course-site starter. Twelve dated modules across four
teaching stages (measuring edible matter → structures and networks → flow and
transformation → prediction and design), four weighted assessments, one
lecture deck, and two full interactive instruments: a Virtual Rheometer and a
Crispness Phase Diagram. The idea behind it: treat Chinese cooking as a real
applied soft-matter physics course would, so every claim on the site is either
a cited literature result, a clearly labelled illustrative simulation, or a
stated assumption — never an invented number.

## How I got here

I started from the brief, the starter's `README.md` and its Zod schemas
before writing anything, and recorded the design decisions —
course identity, the four-stage module structure, the two instruments, the
verified reference list — in `PLAN.md` before touching content, alongside a
project-specific `CLAUDE.md`
([`3c75606`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-pengyue-Stella/commit/3c75606)).

The build then went in fixed, independently-green checkpoints. Course data
first: all twelve modules, the four assessments and their 25/20/20/35 weights,
and the stage schema
([`9d39452`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-pengyue-Stella/commit/9d39452)).
Then the site's information architecture — navigation, the module index's
stage grouping, and a lab-notebook/cookbook visual system built on the
supplied SlopU palette rather than a new one
([`188dc15`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-pengyue-Stella/commit/188dc15)).

The two instruments were built and committed separately, each with its own
domain model rather than shared fudge factors: the Virtual Rheometer applies
Winter–Chambon gel-point detection to synthetic oscillatory data
([`66bff03`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-pengyue-Stella/commit/66bff03)),
and the Crispness Phase Diagram drives a Gordon–Taylor glass-transition model
and an exponential moisture-uptake model, paired with the required deck,
*Crispness Is a Metastable State*
([`6ac6046`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-pengyue-Stella/commit/6ac6046)).
Both share one `scientific.css` instrument system, respond to
`prefers-reduced-motion`, and work from mouse, keyboard and touch.

The last checkpoint closed the loop: a References page cross-linking every
one of the twelve verified citations to the modules, deck and instrument that
actually use it, three inline-code path mentions turned into real links, and
two new spec files —
`pages-present.test.ts` (every required page, all twelve modules, all four
assessments, and the full nav present and linked) and
`no-starter-content.test.ts` (no leftover starter slug, no placeholder text,
`SLOP3358` used consistently) — alongside the pre-existing
`course-identity`, `modules`, `assessments`, `decks-and-labs` and
`data-integrity` suites
([`4016bd3`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-pengyue-Stella/commit/4016bd3)).

I knew each checkpoint was right because nothing was allowed to stay red: every
commit above followed a clean `pnpm check` (build, typecheck, and all
51 spec/vitest assertions), and every `pnpm build` reported 0 accessibility
violations and 0 broken links across the built site before I moved on. Where
I couldn't get a check to see something — real citations, honest data
provenance, that the site reads coherently to a prospective student — I
checked it by hand: grepping every module's References section against the
bibliography before publishing the References page, and reading representative
non-adjacent modules end to end rather than trusting the automated checks
alone.

After the seventh checkpoint I did one more pass over the whole deployed
shape — every module, both instruments, the deck, and the pages the automated
checks can't see the inside of — reading it the way a marker would rather than
trusting a green `pnpm check`. Stepping through the required deck slide by
slide caught what none of the checks could: `astromotion` renders each slide
onto a fixed-size canvas and doesn't shrink text to fit, so six slides had
content silently clipped below the visible frame, including the "Model
limitations" slide's last two bullets — the deck's own "honesty checkpoint"
losing exactly the content that makes it one. I fixed all six by splitting the
overflowing slide in two, and separately fixed three lab-index pages where a
line break in the markup was collapsing the space before an inline link
([`e03cdfb`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-pengyue-Stella/commit/e03cdfb)).
Re-verified at both 1920×1080 and 390×844 and against a fresh `pnpm check`
before committing. I also resized both instruments through a range of
intermediate window widths: their SVG-based plots reflow correctly throughout,
though the supplied theme's own navigation bar clips two menu items in a
narrow band around 650–900px — a vendored-component gap outside the two
viewports this site is graded at, not something to patch inside a theme I was
asked to preserve.

## Before you ship

`pnpm check:evidence` passes: no `STARTER_CONTENT` marker remains in `src`,
none of the starter's placeholder images survive unreplaced, `CLAUDE.md` is
present, and every citation above resolves to a real commit in this repo.
