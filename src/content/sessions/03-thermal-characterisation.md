---
title: "Thermal Characterisation"
description:
  Reading a braise as a heat-and-transition budget — specific heat, latent
  heat of transition, and what a thermal signature tells you about pork belly.
week: 3
stage: 1
date: 2027-03-08
teachers:
  - marisol-quaye
tags: [thermodynamics, calorimetry]
spec:
  - distinguish sensible heat from latent heat of transition in a worked example
  - explain what a differential scanning calorimetry (DSC) trace shows and why a peak, not a point, marks a transition
  - identify two distinct thermal transitions that happen during a long braise
related:
  - 01-what-is-edible-matter
  - 08-reaction-kinetics
---

## Research question

Red-braised pork belly (红烧肉) is simmered for one to two hours, far longer
than it takes the meat to simply reach the pot's temperature. What is that
extra time actually paying for, thermally — and can two separate physical
transitions inside the same piece of meat be told apart from how much heat
each one absorbs?

<p class="specimen-label">Specimen <strong>pork belly (红烧肉), fat cap &amp; connective tissue</strong></p>

## Where this sits

Closing module of **Stage 1, Measuring Edible Matter**. Modules 1 and 2 gave
you mechanical measurements (moduli, flow curves); this module gives the
thermal measurement toolkit — sensible heat, latent heat, and calorimetry —
that Module 8 (kinetics) and Module 9 (phase transitions) build on directly.

## The model: sensible heat vs. latent heat of transition

Raising a material's temperature without changing its physical state costs
**sensible heat**:

<div class="equation">Q = m·c<sub>p</sub>·ΔT</div>

Undergoing a transition — melting, denaturing, gelatinising — at
essentially constant temperature costs **latent heat**:

<div class="equation">Q = m·ΔH</div>

<dl class="variable-list">
  <dt>Q (heat, J)</dt><dd>the total thermal energy transferred into the material.</dd>
  <dt>m (mass, kg)</dt><dd>the mass of the material undergoing the change.</dd>
  <dt>c<sub>p</sub> (specific heat capacity, J·kg⁻¹·K⁻¹)</dt><dd>heat needed to raise 1 kg by 1 K without a transition occurring.</dd>
  <dt>ΔT (temperature change, K)</dt><dd>the sensible-heating interval.</dd>
  <dt>ΔH (specific enthalpy of transition, J·kg⁻¹)</dt><dd>heat absorbed per kilogram during the transition itself, at essentially fixed temperature.</dd>
</dl>

A pot of braising pork belly is heating two materials with very different
thermal stories at once. The fat cap undergoes a broad **melting**
transition starting well below boiling. The connective tissue (mostly
collagen) undergoes **thermal denaturation and hydrolysis into gelatin**
over a much narrower, higher temperature band, and this transition is slow
relative to the temperature change itself — which is precisely why the pot
needs a long simmer rather than a hot flash: the transition has its own
timescale, not just a temperature threshold (Module 8 makes this timescale
quantitative with an Arrhenius rate law).

A calorimetry trace (heat flow vs. temperature, ramped at a controlled
rate) for a piece of pork belly would show sensible-heat regions as a
gently sloping baseline, and each transition as a distinct **peak**: the
area under a peak is the transition's ΔH, and the peak's position and width
say something about how sharp or gradual the transition is at the molecular
scale.

<figure class="sci-figure">
  <span class="sci-figure__kicker">Figure — a two-transition thermal trace</span>
  <svg viewBox="0 0 420 260" role="img" aria-labelledby="g3-title">
    <title id="g3-title">Schematic heat-flow trace against temperature showing a broad fat-melting peak followed by a narrower, larger collagen-denaturation peak</title>
    <ellipse class="sci-region--alt" cx="150" cy="172" rx="60" ry="34" />
    <ellipse class="sci-region" cx="298" cy="150" rx="36" ry="62" />
    <line class="sci-axis" x1="60" y1="220" x2="390" y2="220" />
    <line class="sci-axis" x1="60" y1="220" x2="60" y2="30" />
    <text class="sci-axis-label" x="225" y="246" text-anchor="middle">temperature, ramped →</text>
    <text class="sci-axis-label" x="22" y="125" text-anchor="middle" transform="rotate(-90 22 125)">heat flow →</text>
    <path class="sci-curve--alt" d="M 60 192 L 390 150" />
    <path class="sci-curve" d="M 60 192 C 95 190 115 158 150 140 C 180 126 205 155 240 172 C 258 180 268 178 275 168 C 282 130 290 88 300 84 C 310 88 320 128 330 158 C 345 172 365 165 390 150" />
    <circle class="sci-point" cx="150" cy="140" r="4.5" />
    <text class="sci-label" x="150" y="126" text-anchor="middle">fat melting</text>
    <circle class="sci-point" cx="300" cy="84" r="4.5" />
    <text class="sci-label" x="300" y="70" text-anchor="middle">collagen denaturation</text>
  </svg>
  <figcaption>
    Schematic, not measured data. Sensible heating alone would trace the
    dashed baseline; each transition lifts the trace into a peak whose area
    is that transition's ΔH. The fat peak is broad and shallow — melting
    spreads over a wide temperature band. The collagen peak is narrower and
    larger — denaturation and hydrolysis into gelatin happen over a tighter
    band, and cost more heat per gram.
  </figcaption>
</figure>

<dl class="module-stats">
  <div class="module-stat"><dt>Transitions</dt><dd>2</dd></div>
  <div class="module-stat"><dt>Heat types</dt><dd>sensible + latent</dd></div>
  <div class="module-stat"><dt>Peak area</dt><dd>= ΔH</dd></div>
</dl>

## What you measure and analyse

Using a supplied illustrative DSC-style trace (heat flow vs. temperature)
for a fat-and-collagen food system, you identify the two transition peaks,
estimate each one's onset temperature by eye, and compute the ratio of the
two peak areas — a proxy for how much of the sample's transition heat goes
to melting fat versus denaturing collagen.

## Activity

Given the trace above and a target serving texture ("collagen fully
converted, fat rendered but not smoking"), argue for a target internal
temperature range and a minimum time at that range, distinguishing what the
*temperature* argument gives you from what the *time* argument gives you.
This is deliberately unresolved by the trace alone — the trace tells you
*that* a transition happens and roughly *where*, not how fast it completes,
which is Module 8's question.

:::warning[Assumptions and limitations]
Real meat is not thermally homogeneous — collagen content and fat
distribution vary within a single cut, so a bulk DSC trace is an average,
not a description of any one point in the meat. The two-transition
simplification also ignores protein denaturation in the muscle fibres
themselves, which overlaps in temperature with collagen denaturation and is
omitted here for clarity.
:::

:::info[Data provenance]
The thermal trace referenced in this module is a synthetic, illustrative
curve constructed to show two resolvable transitions at temperatures
consistent with fat melting and collagen denaturation as described in
Walstra (2003) and Singh & Heldman — it is not a DSC measurement taken for
this course.
:::

## References

- Walstra, P. (2003). *Physical Chemistry of Foods*. Marcel Dekker.
- Singh, R.P. & Heldman, D.R. *Introduction to Food Engineering*, 5th ed.
  Academic Press.
