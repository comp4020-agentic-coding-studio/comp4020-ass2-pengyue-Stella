---
title: "Colloids and Emulsions"
description:
  Why a long-simmered bone broth turns milky and stays that way —
  Stokes' law and what actually stabilises a food emulsion.
week: 6
stage: 2
date: 2027-03-29
teachers:
  - idris-fenn
tags: [colloids, emulsions]
spec:
  - write Stokes' law for creaming velocity and identify which variable is easiest to control in a kitchen
  - explain why droplet size matters more than density difference for a stable food emulsion
  - state one reason Stokes' law is only an approximation for a real broth
related:
  - 05-protein-aggregation-and-gelation
  - 07-heat-and-mass-transport
---

## Research question

A long-simmered pork or fish bone broth (奶汤, "milky soup") turns opaque
white and stays that way for hours, while a quickly-simmered clear stock
made from the same bones does not. Both contain fat. Why does one separate
into a clear stock with fat floating on top, and the other stay a stable,
uniform milky emulsion?

## Where this sits

Closing module of **Stage 2, Structures and Networks**. Modules 4 and 5
built continuous solid networks from starch and protein; this module
covers the other structural outcome available to a food system — a stable
**dispersion** of one phase (fat droplets) in another (water), which never
becomes a single network but can still be kinetically stable for a long
time. It sets up Module 7's transport framing directly: a milky broth is
literally the product of vigorous simmering breaking fat into small
droplets and dispersing them by turbulent mass transport.

## The model: Stokes' law and creaming

An isolated spherical fat droplet in a broth rises (creams) or falls
(sediments) under gravity at a terminal velocity given by Stokes' law:

<div class="equation">v = 2·Δρ·g·r<sup>2</sup> / (9·η)</div>

<dl class="variable-list">
  <dt>v (creaming velocity, m·s⁻¹)</dt><dd>how fast the droplet moves relative to the surrounding liquid.</dd>
  <dt>Δρ (density difference, kg·m⁻³)</dt><dd>fat is less dense than water, so fat droplets rise; the larger this gap, the faster the separation.</dd>
  <dt>g (gravitational acceleration, m·s⁻²)</dt><dd>fixed.</dd>
  <dt>r (droplet radius, m)</dt><dd>the dominant lever: v scales with r², so halving droplet size cuts creaming velocity by a factor of four.</dd>
  <dt>η (continuous-phase viscosity, Pa·s)</dt><dd>a more viscous water phase (from dissolved gelatin — Module 3's collagen-to-gelatin transition, held in solution) slows creaming.</dd>
</dl>

A quickly-made clear stock is simmered gently, so fat stays in large
droplets (or an unbroken layer) that cream out fast — the r² term dominates.
A long-simmered milky broth is boiled hard enough that turbulence
mechanically breaks fat into much smaller droplets, and the same long
simmer dissolves collagen into gelatin, raising the continuous phase's
viscosity η. Both effects push in the same direction: smaller r and higher
η both reduce v, so the emulsion resists separating even without any added
emulsifier — though naturally-occurring phospholipids and proteins at the
droplet surface also play a stabilising role that Stokes' law, on its own,
does not capture (see limitations below).

## What you measure and analyse

Using a supplied dataset of droplet-size distributions for broths simmered
at three different intensities, you compute the Stokes' law creaming
velocity for the median droplet size in each case and rank the three
broths by predicted visual stability over a 4-hour rest.

## Activity

A restaurant kitchen wants a broth that is milky (stable emulsion) but
needs to be made faster than a multi-hour simmer allows. Using the two
levers in Stokes' law that a cook can actually influence during cooking
(droplet size via mechanical agitation, continuous-phase viscosity via
gelatin extraction), propose a process change and justify it from the
equation rather than from taste alone.

:::warning[Assumptions and limitations]
Stokes' law assumes isolated, rigid, non-interacting spherical droplets in
a dilute suspension. A working broth's fat volume fraction is high enough
that droplets interact and their return flow of displaced liquid slows
creaming below the simple Stokes prediction — real food-emulsion analysis
corrects for this with a hindered-settling factor. Stokes' law also ignores
surface-active proteins and phospholipids that adsorb onto droplet
surfaces and provide additional stability against droplets merging
(coalescence), which is a separate mechanism from creaming.
:::

:::info[Data provenance]
The droplet-size dataset in this module is synthetic and illustrative,
constructed to show three distributions consistent with the qualitative
effect of simmer intensity described in McClements (2015) — it is not a
measurement of real broth samples taken for this course.
:::

## References

- McClements, D.J. (2015). *Food Emulsions: Principles, Practices, and
  Techniques*, 3rd ed. CRC Press.
- Walstra, P. (2003). *Physical Chemistry of Foods*. Marcel Dekker.
