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

<p class="specimen-label">Specimen <strong>spring roll wrapper / rice cracker, ambient humidity uptake</strong></p>

## Where this sits

Second module of **Stage 4, Prediction and Material Design**. Module 9
introduced the glass transition as a single moving boundary during frying;
this module turns it into a full two-variable **state diagram** —
temperature against moisture content or water activity — that the
[Crispness Phase Diagram](/labs/crispness-phase-diagram/) instrument
implements directly, and that the required lecture,
[*Crispness Is a Metastable State*](/decks/crispness-metastable/), uses as
its central figure.

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

The state diagram above says *where* the glassy/rubbery boundary sits, but
not *when* a specimen's own moisture content reaches it. That takes a
second, separate model: an illustrative moisture-uptake equation for how a
material's moisture content moves toward equilibrium over time.

<div class="equation">w(t) = w<sub>eq</sub> + (w<sub>0</sub> − w<sub>eq</sub>)e<sup>−t/τ</sup></div>

<dl class="variable-list">
  <dt>w(t) (moisture content at time t)</dt><dd>how much moisture the specimen holds after time t exposed to the ambient air.</dd>
  <dt>w<sub>0</sub> (initial moisture content)</dt><dd>the specimen's moisture content at the moment it is exposed, t = 0.</dd>
  <dt>w<sub>eq</sub> (equilibrium moisture content)</dt><dd>the moisture content the specimen settles at, set by matching a<sub>w</sub> to RH<sub>air</sub> above.</dd>
  <dt>τ (time constant)</dt><dd>how quickly the specimen approaches w<sub>eq</sub>; a larger τ means slower uptake.</dd>
</dl>

The two models answer different questions. Gordon-Taylor (Module 9) sets
the moisture content at which the material crosses out of the glassy
region — the boundary. This uptake equation sets when the material's own
moisture content actually reaches that boundary — the timing. Packaging
mainly changes τ: a better moisture barrier slows uptake without moving
the boundary itself. Formulation mainly changes the boundary's position,
by shifting w<sub>eq</sub> or the Gordon-Taylor curve directly. As with the
rest of this module, these parameters are illustrative, not measured
specifications.

Being glassy is necessary but not sufficient for "crisp" as a sensory
category: a thick glassy solid (a hard candy) reads as hard, not crisp —
crispness in the everyday sense also needs a thin, cellular or foam-like
structure that fractures audibly, which is a geometric property this
diagram does not itself capture (noted as a limitation below).

<figure class="sci-figure">
  <span class="sci-figure__kicker">Figure — the temperature–moisture state diagram</span>
  <svg viewBox="0 0 420 260" role="img" aria-labelledby="g11-title">
    <title id="g11-title">Temperature against moisture content divided by the glass-transition curve into a glassy, crisp region and a rubbery, softened region, with an arrow showing moisture uptake at constant temperature crossing the boundary</title>
    <rect class="sci-region" x="60" y="30" width="330" height="120" />
    <line class="sci-axis" x1="60" y1="220" x2="390" y2="220" />
    <line class="sci-axis" x1="60" y1="220" x2="60" y2="30" />
    <text class="sci-axis-label" x="225" y="246" text-anchor="middle">moisture content →</text>
    <text class="sci-axis-label" x="22" y="125" text-anchor="middle" transform="rotate(-90 22 125)">temperature →</text>
    <path class="sci-curve" d="M 60 45 C 130 60 190 100 250 140 C 300 172 340 195 390 205" />
    <text class="sci-label" x="90" y="80">glassy — crisp</text>
    <text class="sci-label" x="300" y="195">rubbery — softened</text>
    <path class="sci-annotation" d="M 100 165 L 230 165" />
    <circle class="sci-point" cx="100" cy="165" r="4" />
    <circle class="sci-point" cx="230" cy="165" r="4" />
    <text class="sci-axis-label" x="165" y="182" text-anchor="middle">moisture uptake, T fixed</text>
  </svg>
  <figcaption>
    The Gordon-Taylor curve from Module 9, redrawn as a full map. A cracker
    doesn't need to get hotter to go stale — moving rightward at constant
    temperature, as moisture is absorbed from humid air, crosses the same
    boundary from the glassy/crisp region into the rubbery/softened one.
  </figcaption>
</figure>

<dl class="module-stats">
  <div class="module-stat"><dt>State variables</dt><dd>T, moisture</dd></div>
  <div class="module-stat"><dt>Long-term fate</dt><dd>a<sub>w</sub> ≈ RH<sub>air</sub></dd></div>
  <div class="module-stat"><dt>Crisp needs</dt><dd>glassy + thin structure</dd></div>
</dl>

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
