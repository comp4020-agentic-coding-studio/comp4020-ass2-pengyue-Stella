---
title: "Phase Transitions in Cooking"
description:
  What actually happens inside a youtiao as it deep-fries — a moving
  moisture front and a crust crossing its glass transition.
week: 9
stage: 3
date: 2027-04-26
teachers:
  - marisol-quaye
tags: [phase transitions, glass transition, frying]
spec:
  - describe the two zones (crust, moist core) that form inside a piece of dough during frying and why a boundary moves between them
  - explain what a glass transition is and why crossing it is what makes a fried crust rigid
  - name the two variables a Gordon-Taylor-style model links for a food glass transition
related:
  - 07-heat-and-mass-transport
  - 11-the-crispness-design-space
---

## Research question

A youtiao (油条, fried dough stick) goes into hot oil as a soft, moist
dough and comes out with a rigid, crisp shell around a still-soft interior.
No new ingredient is added during frying. What physical change, exactly, is
responsible for the shell being rigid when the interior a millimetre away
is not?

## Where this sits

Closing module of **Stage 3, Flow, Interfaces and Transformation**. Module
7 gave the transport mechanics (heat and moisture moving through a food
object); Module 8 gave the kinetics of thermally-driven change. This module
combines both to explain a moving internal boundary, and introduces the
**glass transition** concept that Module 11 turns into a full design space.

## The model: a moving moisture front and a glass transition

As the dough fries, heat conducts inward (Module 7) while water at the
surface evaporates rapidly into the surrounding oil. Water loss is fastest
where the temperature is highest — near the surface — so a boundary forms
and moves inward over time: outside it, the dough has lost most of its
water and is hot; inside it, moisture content is still close to the raw
dough's. This is structurally the same "moving boundary" idea as the
gelatinisation front in a thick dumpling wrapper, but driven by moisture
loss rather than heat alone.

Losing water does more than dry the crust out — it changes which physical
*state* the starch-water crust matrix occupies. An amorphous (non-
crystalline) food solid has a **glass transition temperature**, T_g, below
which it is a rigid, brittle "glass" and above which it is a soft,
deformable "rubber." Critically, T_g is not fixed: water acts as a
plasticiser, and T_g depends strongly on how much moisture remains, in a
relationship the Gordon-Taylor equation approximates:

<div class="equation">T<sub>g</sub> = (w<sub>1</sub>·T<sub>g1</sub> + K·w<sub>2</sub>·T<sub>g2</sub>) / (w<sub>1</sub> + K·w<sub>2</sub>)</div>

<dl class="variable-list">
  <dt>T<sub>g</sub> (mixture glass transition temperature, K)</dt><dd>the T<sub>g</sub> of the dry-solid/water mixture at a given composition.</dd>
  <dt>w<sub>1</sub>, w<sub>2</sub> (mass fractions)</dt><dd>of dry solid and water respectively; w<sub>1</sub> + w<sub>2</sub> = 1.</dd>
  <dt>T<sub>g1</sub>, T<sub>g2</sub> (K)</dt><dd>glass transition temperatures of the pure dry solid and of pure water (water's own T<sub>g</sub> is far below 0 °C).</dd>
  <dt>K (Gordon-Taylor constant)</dt><dd>a material-specific fitting parameter reflecting how strongly the two components' free volumes mix.</dd>
</dl>

As the crust loses water (w₂ falls), its T_g **rises**. Once the crust's
falling moisture content pushes T_g above the crust's actual temperature,
the crust crystallises out of the rubbery state into a rigid glass — this
is the instant it becomes crisp. The soft interior, still at high moisture,
has a T_g far below its temperature and stays rubbery.

## What you measure and analyse

Using a supplied moisture-vs-depth profile at a fixed frying time, and
Gordon-Taylor parameters for a starch-based dough, you compute T_g at each
depth and identify the depth at which T_g first exceeds the local
temperature — locating the crust/core boundary from the model rather than
by eye.

## Activity

Two youtiao are fried for the same total time, one in oil 15 °C hotter than
the other. Using the moving-front and glass-transition framing above,
predict which one has a thicker crust, and separate your reasoning into
the transport effect (Module 7: how fast the temperature and moisture
fronts move) and the thermodynamic effect (this module: at what moisture
content T_g is crossed).

:::warning[Assumptions and limitations]
This treats the crust/core boundary as sharp, when in a real fried dough
moisture content changes continuously with depth and the glass transition
itself occurs over a temperature range, not at one point. The Gordon-Taylor
equation is also an empirical mixing rule, not a first-principles
prediction — it fits real data well for many food solids but its K
parameter must come from measurement, not be assumed.
:::

:::info[Data provenance]
The moisture-vs-depth profile and Gordon-Taylor parameters used here are
illustrative, chosen to be dimensionally and qualitatively consistent with
the glass-transition behaviour of starch-based foods described in Roos
(*Phase Transitions in Foods*) — they are not measurements of a youtiao
taken for this course.
:::

## References

- Gordon, M. & Taylor, J.S. (1952). "Ideal Copolymers and the Second-Order
  Transitions of Synthetic Rubbers. I. Non-Crystalline Copolymers."
  *Journal of Applied Chemistry* 2(9), 493–500.
- Roos, Y.H. *Phase Transitions in Foods*, 2nd ed. Academic Press.
