---
title: "The Crispness Design Space"
description:
  Mapping temperature and moisture onto glassy, rubbery, crisp and softened
  regions — the state diagram behind why crackers go stale.
week: 11
stage: 4
date: 2027-05-10
teachers:
  - marisol-quaye
tags: [glass transition, water activity, state diagrams]
spec:
  - locate a food's crisp region on a temperature-versus-moisture state diagram and explain why it is bounded on two sides
  - explain why a cracker left in humid air softens even at constant room temperature
  - use the Crispness Phase Diagram instrument to compare two specimens' stability margins
related:
  - 09-phase-transitions-in-cooking
  - 12-inverse-material-design
---

## Research question

Module 9 showed that a youtiao's crust becomes rigid by crossing a glass
transition as it dries. But a spring roll wrapper or rice cracker that
starts crisp can also go soft again, hours later, sitting at constant room
temperature — simply by absorbing moisture from the air. If temperature
hasn't changed, what has, and can the whole space of outcomes (crisp,
soft, glassy, rubbery) be drawn on one map rather than described case by
case?

## Where this sits

Second module of **Stage 4, Prediction and Material Design**. Module 9
introduced the glass transition as a single moving boundary during frying;
this module turns it into a full two-variable **state diagram** —
temperature against moisture content or water activity — that the
Crispness Phase Diagram instrument (`/labs/crispness-phase-diagram/`)
implements directly, and that the required lecture, *Crispness Is a
Metastable State*, uses as its central figure.

## The model: a temperature–moisture state diagram

Plotting the Gordon-Taylor glass-transition curve T_g(moisture) from
Module 9 on axes of temperature (vertical) against moisture content
(horizontal) divides the plane into two broad regions: **glassy** (below
the curve — rigid, and, for a thin, low-density structure like a wrapper
or cracker, **crisp**) and **rubbery** (above the curve — soft, pliable,
and, once wet or warm enough, **softened**, in the everyday sense of a
stale cracker).

A second, independent constraint matters for *stability over time* rather
than instantaneous state: a food's **water activity**, a_w, measures how
readily it exchanges moisture with the surrounding air, on a scale where
a_w = 1 is pure water and a_w = 0 is bone dry. A crisp food left in air at
a given relative humidity will absorb or lose moisture until its own a_w
matches the air's — so a cracker's *long-term* fate at fixed room
temperature is decided by where the surrounding air's relative humidity
sits relative to the cracker's own critical water activity, not by
temperature at all. This is why a cracker softens in humid air with no
heating involved: moisture uptake at constant temperature can still carry
the material's composition rightward across the same T_g(moisture) curve
until it crosses into the rubbery region.

<div class="equation">crisp region: T &lt; T<sub>g</sub>(moisture) AND thin/low-density structure</div>
<div class="equation">long-term stability: a<sub>w,food</sub> ≈ RH<sub>air</sub> at equilibrium</div>

<dl class="variable-list">
  <dt>T<sub>g</sub>(moisture)</dt><dd>the Gordon-Taylor curve from Module 9 — the boundary between glassy and rubbery at a given moisture content.</dd>
  <dt>a<sub>w</sub> (water activity, dimensionless, 0–1)</dt><dd>the food's own tendency to gain or lose moisture to its surroundings.</dd>
  <dt>RH<sub>air</sub> (relative humidity, %)</dt><dd>ambient moisture availability; a food equilibrates toward a<sub>w</sub> ≈ RH<sub>air</sub>/100 over time.</dd>
</dl>

Being glassy is necessary but not sufficient for "crisp" as a sensory
category: a thick glassy solid (a hard candy) reads as hard, not crisp —
crispness in the everyday sense also needs a thin, cellular or foam-like
structure that fractures audibly, which is a geometric property this
diagram does not itself capture (noted as a limitation below).

## What you measure and analyse

In the Crispness Phase Diagram instrument, place a specimen at a chosen
ambient humidity and run the time-based moisture-uptake simulation,
reading off how long the specimen's trajectory takes to cross from the
glassy/crisp region into the rubbery/softened region. Compare two
specimens at the same humidity to see which has the larger stability
margin.

## Activity

A packaged rice cracker is rated "best crisp within 2 weeks of opening at
typical room humidity." Using the state-diagram and water-activity framing,
explain what two things a manufacturer could change (one about the
cracker's own composition, one about its packaging) to extend that window,
and which term in the model each change acts on.

:::warning[Assumptions and limitations]
This diagram treats moisture uptake as governed only by the gap between
the food's water activity and the ambient relative humidity, ignoring
diffusion resistance from packaging or a food's own internal structure,
which sets how *fast* — not just whether — equilibration happens. The
glassy/rubbery/crisp/softened labelling is illustrative and qualitative:
real critical water activities and Gordon-Taylor parameters must be
measured for a specific formulation, not read off a generic diagram.
:::

:::info[Data provenance]
The state-diagram boundaries and moisture-uptake curves in the Crispness
Phase Diagram instrument are illustrative, parameterised to be consistent
with the qualitative glass-transition and water-activity behaviour
described in Roos (*Phase Transitions in Foods*) — they are not
measurements of a specific spring roll wrapper or rice cracker.
:::

## References

- Roos, Y.H. *Phase Transitions in Foods*, 2nd ed. Academic Press.
- Williams, M.L., Landel, R.F. & Ferry, J.D. (1955). "The Temperature
  Dependence of Relaxation Mechanisms in Amorphous Polymers and Other
  Glass-Forming Liquids." *Journal of the American Chemical Society*
  77(14), 3701–3707.
