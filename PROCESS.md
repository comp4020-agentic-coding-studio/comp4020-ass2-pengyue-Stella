# Process overview

## What a good course means here

SLOP3358 is a fictional third-year course — *Edible Matter: Thermodynamics,
Transport and Soft-Matter Physics in the Chinese Kitchen* — built on the
supplied SlopU starter. The bar I built against wasn't "looks like a course
site"; it was "a real convenor could stand behind every claim on it." Twelve
modules across four stages, four weighted assessments, and two interactive
instruments only count as done once every equation states its assumptions,
every number says whether it's measured, cited, or a labelled illustrative
estimate, and the whole thing reads as one course rather than twelve
unrelated pages stapled together
([`3c75606`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-pengyue-Stella/commit/3c75606)
records that plan before any content existed).

## What went into the harness, not into memory

`CLAUDE.md` and `spec/` hold the decisions I didn't want to re-litigate on
every page: the fixed four-stage order, the fixed SlopU palette, exactly two
full instruments rather than one per module, and the rule that no citation,
DOI or measurement is ever invented — a real source or a clearly labelled
synthetic value, never a guess dressed up as data.
`spec/no-starter-content.test.ts` and `spec/pages-present.test.ts`
([`4016bd3`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-pengyue-Stella/commit/4016bd3))
turn "the starter content is gone" and "every collection page exists" into
something a check enforces on every push, so review time goes to what a test
can't see.

## What stayed human

No test can tell you whether a specimen photograph actually helps explain the
material it's paired with, whether twelve modules genuinely ask twelve
different questions rather than repeating a template, or whether a page reads
as confident rather than padded. Those calls ran on full, non-adjacent reads
of the built site rather than diffs — the kind of pass that caught
`astromotion` silently clipping deck text below its fixed canvas
([`e03cdfb`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-pengyue-Stella/commit/e03cdfb)),
and, later, a full visual redesign (specimen photography, per-module figures,
a curated Resources bookshelf, a type-coded References list) that a
single-pass build would never have earned on its own.

## How review changed what was accepted

Twice, a claim that read as plausible on first pass didn't survive a second.
An early draft of this file credited the Virtual Rheometer with detecting a
gel point from an oscillatory sweep it never runs; the instrument only ever
fits Newtonian, power-law and Herschel–Bulkley models to a synthetic
steady-shear curve, and the claim was named as wrong and corrected once that
mismatch was caught
([`5939856`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-pengyue-Stella/commit/5939856)).
Later, a full reread of Module 9 found the same failure mode on the live
site rather than in this file: a crisping crust was described as
"crystallising" into a rigid glass, when a glass transition is specifically
the freezing-in of a *disordered* structure, not the formation of a crystal
lattice — fixed to read as vitrification, the term the rest of the module
already used correctly. A separate visual audit caught gold specimen-plate
annotations that had gone illegible against their own background — invisible
in a code diff, obvious the moment the rendered page was actually looked at.

## Before you ship

`pnpm check:evidence` passes: no starter markers or starter images remain,
`CLAUDE.md` is present, and every citation above resolves to a real commit in
this repo.
