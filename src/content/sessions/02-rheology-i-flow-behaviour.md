---
title: "Rheology I: Flow Behaviour"
description:
  Why doubanjiang has to be pushed before it flows, and honey doesn't —
  Newtonian, power-law and Herschel-Bulkley models of shear flow.
week: 2
stage: 1
date: 2027-03-01
teachers:
  - idris-fenn
tags: [rheology, non-Newtonian flow]
spec:
  - write the Herschel-Bulkley equation and identify which term is the yield stress
  - given a flow curve, say whether a fluid is shear-thinning, shear-thickening, or Newtonian
  - explain why "viscosity" is not a single number for most food pastes
related:
  - 01-what-is-edible-matter
  - 10-building-predictive-models
---

## Research question

Honey pours the instant you tilt the jar. Doubanjiang (豆瓣酱, fermented
broad bean and chilli paste — the base of mapo tofu sauce) sits in the jar
under gravity and does not move until you drag a spoon through it. Both are
thick pastes. Why does one have a threshold and the other doesn't, and how
do we describe that threshold quantitatively rather than just naming it?

## Where this sits

Second module of **Stage 1, Measuring Edible Matter**. Module 1 established
that texture properties are measurable; this module gives the first real
governing equations — the flow models that the
[Virtual Rheometer](/labs/virtual-rheometer/) instrument implements, and
that Module 10 revisits when fitting models to noisy data.

## The models

Three nested models describe how shear stress τ relates to shear rate γ̇ for
a fluid:

<div class="equation">Newtonian: τ = η·γ̇</div>
<div class="equation">Power-law: τ = K·γ̇<sup>n</sup></div>
<div class="equation">Herschel-Bulkley: τ = τ₀ + K·γ̇<sup>n</sup></div>

<dl class="variable-list">
  <dt>τ (shear stress, Pa)</dt><dd>the force per unit area you apply to make the fluid move.</dd>
  <dt>γ̇ (shear rate, s⁻¹)</dt><dd>how fast adjacent layers of the fluid slide past each other.</dd>
  <dt>η (viscosity, Pa·s)</dt><dd>the single stress-to-rate ratio that fully describes a Newtonian fluid — constant at every γ̇.</dd>
  <dt>K (consistency index, Pa·s<sup>n</sup>)</dt><dd>a scale factor for stress; not directly comparable between fluids with different n.</dd>
  <dt>n (flow behaviour index, dimensionless)</dt><dd>n &lt; 1 is shear-thinning (apparent viscosity drops as you stir harder — most food pastes); n &gt; 1 is shear-thickening (rare in food, common in some starch-water slurries at high concentration); n = 1 recovers the Newtonian case.</dd>
  <dt>τ₀ (yield stress, Pa)</dt><dd>the stress that must be exceeded before any flow starts at all. Doubanjiang's resistance to gravity is exactly τ₀ &gt; (stress gravity applies at rest).</dd>
</dl>

Honey is well described as Newtonian (n = 1, τ₀ = 0): its apparent
viscosity is the same whether you stir gently or vigorously. Doubanjiang is
better described by the Herschel-Bulkley model: a suspension of bean and
chilli solids in a viscous liquid phase forms a weak, jammed
solid-like network at rest (giving τ₀ > 0), which breaks down and flows,
shear-thinning, once τ₀ is exceeded.

## What you measure and analyse

In the Virtual Rheometer, you set a specimen (doubanjiang, honey, or a
dumpling dough with a stronger yield stress), sweep shear rate, and read off
the resulting flow curve. You then fit each of the three models to the
curve and compare the residual sum of squares — the wrong model (e.g.
Newtonian fitted to doubanjiang) visibly fails to track the curve at low
shear rate, where the yield-stress plateau appears.

## Activity

Before opening the instrument, sketch by hand what you expect the flow
curve (τ vs γ̇) to look like for doubanjiang, honey, and a dumpling dough,
on the same axes. Then use the Virtual Rheometer to check your sketch
against the fitted curves. Where your sketch disagrees with the fit, say
which physical intuition was wrong — most students initially expect a yield
stress to show up as a curved line through the origin rather than as a
non-zero stress at γ̇ = 0.

:::warning[Assumptions and limitations]
These are steady-shear models: they describe how a fluid resists a
continuing shear, not how it responds to a sudden impact (that needs a
viscoelastic, time-dependent model — see Module 1's G′/G″ framing and
Module 5's gel-point criterion). They also assume the fluid is
homogeneous at the scale of the measurement, which is a simplification for
a chunky paste like doubanjiang.
:::

:::info[Data provenance]
Specimen parameters (K, n, τ₀) in the Virtual Rheometer are illustrative
values chosen to sit within the ranges Steffe (1996) reports for the
corresponding food classes (Newtonian liquids, shear-thinning purees,
yield-stress pastes) — they are not measurements of doubanjiang, honey, or
dumpling dough taken for this course.
:::

## References

- Steffe, J.F. (1996). *Rheological Methods in Food Process Engineering*,
  2nd ed. Freeman Press.
- Walstra, P. (2003). *Physical Chemistry of Foods*. Marcel Dekker.
