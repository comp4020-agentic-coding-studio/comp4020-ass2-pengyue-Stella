# Process

I think a good university course is one idea a student can carry from week 1
to week 12, tested against something they already know, not a pile of correct
facts. I picked a narrow idea on purpose: Chinese cooking is applied
soft-matter physics, and rheology, heat transport and phase transitions
describe a dumpling or a fried crust more precisely than recipe language
does. My first plan, written before any content existed
([`3c75606`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-pengyue-Stella/commit/3c75606)),
already said this, but the pull toward the easier version stayed strong: a
food-vocabulary course, meeting new words for texture, instead of a physics
course that uses food as its lab bench.

I put the decisions I did not want to argue about on every page into
`CLAUDE.md` and `spec/`. Twelve modules across four fixed stages, measure,
find structure, transform, predict and design, and `modules.test.ts` checks
all twelve weeks and stages exist. `assessments.test.ts` checks the weights
sum to 100, and the home page's mark bars read that same data live, so the
page cannot drift from the check. The harder rule was scientific honesty: no
invented citation or measurement, every model states its own assumptions.
That rule only becomes real when I check the agent's claim against the
actual model, not just the wording.

Twice I caught the agent claiming more than a model does. The Virtual
Rheometer fits Newtonian, power-law and Herschel-Bulkley curves to a
steady-shear flow curve, but an early write-up, and later a References
citation, both said it detected a gel point from an oscillatory sweep this
instrument never runs. I corrected both once I compared the claim to the
code
([`5939856`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-pengyue-Stella/commit/5939856),
[`c0c2283`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-pengyue-Stella/commit/c0c2283)).
The same failure showed up in Module 9: a crisping crust "crystallising" into
a glass, when a glass transition is the opposite, a disordered structure
freezing without a crystal forming. Fixed to vitrification on a later reread
([`587c8ee`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-pengyue-Stella/commit/587c8ee)).
Neither error fails a build. They only show up if you know the physics.

The clearest wrong turn was the Overview page: a second landing page, another
hero, another stage diagram, framed around "building the vocabulary" of
rheology terms. It repeated the home page and treated the course as being
about words. I rewrote it into a practical guide: who it is for, what it
assumes, how a week runs, and a map from each assessment to the outcome it
tests
([`587c8ee`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-pengyue-Stella/commit/587c8ee)).
A later visual pass moved the site from the starter theme with course text
pasted in to a lab-notebook look, built only from the existing SlopU colours
plus real photography and hand-drawn figures, once the earlier version read
like a template with the nouns swapped
([`bcbc797`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-pengyue-Stella/compare/bcbc797...1c98363),
six commits).

Tests protect facts: weights, page counts, week numbers, old starter markers.
They cannot tell you whether a paragraph is interesting or a diagram helps,
so those calls came from reading the built site end to end, not from diffs.
That is how I found a lecture deck silently clipping its last two bullets off
a slide
([`e03cdfb`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-pengyue-Stella/commit/e03cdfb)),
and, this week, a nav bar whose search button wrapped onto its own empty row
at desktop width
([`ec1e93d`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-pengyue-Stella/commit/ec1e93d)).
The real breakthrough was smaller than a feature: the point where I stopped
accepting a claim because it sounded plausible and started checking it
against what the model actually computes. Once evidence replaced vocabulary
as the point, twelve pages turned into one argument instead of twelve
decorated ones.
