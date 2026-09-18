---
title: "Polymer Networks I: Starch Gels"
description:
  How liangpi goes from a pourable starch slurry to a sliceable sheet —
  gelatinisation, retrogradation, and the degree-of-gelatinisation model.
week: 4
stage: 2
date: 2027-03-15
teachers:
  - marisol-quaye
tags: [polymers, starch, gelation]
spec:
  - explain gelatinisation and retrogradation as two distinct, sequential processes
  - define degree of gelatinisation and say what a partially-gelatinised sample implies for texture
  - name one variable (besides temperature) that changes how a starch gel sets
related:
  - 03-thermal-characterisation
  - 05-protein-aggregation-and-gelation
---

## Research question

Liangpi (凉皮, cold-skin noodles) starts as a thin wheat-starch slurry in
water, is steamed briefly, and comes out as a firm, sliceable, translucent
sheet — with no ingredient added and no chemical reaction, just heat and
then cooling. What structural change makes a liquid slurry into a solid
sheet, and is it the heating step or the cooling step that actually does
the work?

<p class="specimen-label">Specimen <strong>liangpi (凉皮), wheat-starch sheet, post-retrogradation</strong></p>

## Where this sits

Opening module of **Stage 2, Structures and Networks**. Stage 1 measured
materials as they are; Stage 2 asks how a material acquires its structure
in the first place. This module covers the starch case; Module 5 covers the
protein case using a different but related network-formation idea (the gel
point), and Module 9 returns to starch-based systems from the transport
side (moisture loss during frying).

## The model: gelatinisation, then retrogradation

Raw starch exists as semi-crystalline granules. Heating them in excess
water above a characteristic **gelatinisation temperature** irreversibly
disrupts that crystalline order: granules swell, amylose leaches into the
surrounding water, and the mixture's viscosity rises sharply. This is the
steaming step, and on its own it produces a viscous **paste**, not a solid
sheet — gelatinisation alone does not explain liangpi's final texture.

The sheet forms on **cooling**: leached amylose chains, no longer
thermally agitated, re-associate into new, more ordered regions —
**retrogradation** — forming a three-dimensional network that traps the
remaining water. It is retrogradation, not gelatinisation, that converts
the paste into a self-supporting sheet.

The extent of the first process is tracked with a **degree of
gelatinisation**, X, derived from how much transition enthalpy remains
un-released in a sample compared to a fully raw reference:

<div class="equation">X = (ΔH<sub>raw</sub> − ΔH<sub>sample</sub>) / ΔH<sub>raw</sub></div>

<dl class="variable-list">
  <dt>X (degree of gelatinisation, dimensionless, 0–1)</dt><dd>fraction of starch granules that have lost their native crystalline order.</dd>
  <dt>ΔH<sub>raw</sub> (J·g⁻¹)</dt><dd>transition enthalpy of a fully raw (ungelatinised) reference sample, measured by calorimetry (Module 3's method, applied here to starch rather than meat).</dd>
  <dt>ΔH<sub>sample</sub> (J·g⁻¹)</dt><dd>the residual transition enthalpy remaining in the cooked sample — zero if gelatinisation is complete.</dd>
</dl>

A sample with X close to 1 has been fully gelatinised and, given time and a
falling temperature, will retrograde into a firm network. A partially
gelatinised sample (X well below 1) still has intact granules acting as
inert filler rather than network-forming material, and sets weaker or not
at all — which is why undercooking liangpi produces a sheet that tears
rather than slices.

<figure class="sci-figure">
  <span class="sci-figure__kicker">Figure — degree of gelatinisation against steaming time</span>
  <svg viewBox="0 0 420 260" role="img" aria-labelledby="g4-title">
    <title id="g4-title">Degree of gelatinisation X rising with steaming time and plateauing near X = 1, with the point of diminishing return marked</title>
    <line class="sci-axis" x1="60" y1="220" x2="390" y2="220" />
    <line class="sci-axis" x1="60" y1="220" x2="60" y2="30" />
    <text class="sci-axis-label" x="225" y="246" text-anchor="middle">steaming time →</text>
    <text class="sci-axis-label" x="22" y="125" text-anchor="middle" transform="rotate(-90 22 125)">X — degree of gelatinisation</text>
    <line class="sci-curve--alt" x1="60" y1="50" x2="390" y2="50" />
    <text class="sci-axis-label" x="368" y="42" text-anchor="end">X = 1 (fully gelatinised)</text>
    <path class="sci-curve" d="M 60 218 C 100 208 130 140 160 95 C 190 62 210 52 230 50 C 280 48 340 47 390 46" />
    <path class="sci-annotation" d="M 230 50 L 230 220" />
    <circle class="sci-point" cx="230" cy="50" r="4.5" />
    <text class="sci-label" x="236" y="70">further steaming</text>
    <text class="sci-label" x="236" y="86">wasted beyond here</text>
  </svg>
  <figcaption>
    Illustrative shape, not measured data. X rises steeply while granules are
    still gelatinising, then flattens once nearly all of them have lost their
    native order — the marked point is where extra steaming time buys almost
    no additional X, though it says nothing about whether the sheet has
    finished retrograding into a solid network yet.
  </figcaption>
</figure>

<dl class="module-stats">
  <div class="module-stat"><dt>Key steps</dt><dd>2 (heat, then cool)</dd></div>
  <div class="module-stat"><dt>Network former</dt><dd>retrogradation</dd></div>
  <div class="module-stat"><dt>X range</dt><dd>0–1</dd></div>
</dl>

## What you measure and analyse

Using a supplied set of residual-enthalpy values for wheat starch slurries
steamed for different times, you compute X for each and plot X against
steaming time, identifying the steaming duration beyond which further
heating gives negligible additional gelatinisation — the point past which
extra steam time is wasted.

## Activity

Liangpi recipes vary starch:water ratio, not just steaming time. Using the
gelatinisation/retrogradation framing above (not new data), argue whether
you'd expect a higher starch:water ratio to raise or lower the final
sheet's stiffness, and identify which of the two processes (gelatinisation
or retrogradation) your argument actually depends on.

:::warning[Assumptions and limitations]
The degree-of-gelatinisation model assumes a single, well-defined
transition enthalpy for "raw" starch, but real starches (and blends, as in
some liangpi recipes) show a distribution of granule sizes and
compositions that gelatinise over a temperature range rather than at one
point. Retrogradation kinetics also depend on storage temperature and time
in ways this simplified two-step picture does not quantify.
:::

:::info[Data provenance]
The residual-enthalpy values used in this module's dataset are synthetic,
constructed to produce a plausible gelatinisation-vs-time curve consistent
with the qualitative behaviour described in BeMiller & Whistler (2009) —
they are not measurements taken for this course.
:::

## References

- BeMiller, J.N. & Whistler, R.L. (Eds.) (2009). *Starch: Chemistry and
  Technology*, 3rd ed. Academic Press.
- Walstra, P. (2003). *Physical Chemistry of Foods*. Marcel Dekker.
