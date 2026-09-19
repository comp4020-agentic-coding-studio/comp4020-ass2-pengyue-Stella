---
title: "Reaction Kinetics"
description:
  Why Peking duck skin browns faster at a higher oven temperature than the
  temperature difference alone would suggest — the Arrhenius equation.
week: 8
stage: 3
date: 2027-04-19
teachers:
  - idris-fenn
tags: [kinetics, Maillard reaction]
spec:
  - write the Arrhenius equation and explain what activation energy controls
  - explain why a small increase in cooking temperature can cause a large increase in browning rate
  - compare the temperature-sensitivity of two different food reactions using the same model
related:
  - 03-thermal-characterisation
  - 09-phase-transitions-in-cooking
---

## Research question

Roasting Peking duck skin (北京烤鸭) a little hotter produces noticeably
more browning in the same amount of time — not a proportionally small
increase, but a disproportionately large one. Module 3 established that
some food transitions have their own timescale, separate from temperature;
this module asks how that timescale actually depends on temperature, using
duck-skin Maillard browning as the case and pork-belly collagen conversion
(from Module 3) as a comparison.

<p class="specimen-label">Specimen <strong>Peking duck skin (北京烤鸭), Maillard browning at oven temperature</strong></p>

## Where this sits

Second module of **Stage 3, Transport, Kinetics and Transformation**. Module 7
covered how heat and moisture physically move through food; this module
covers what happens once they arrive — how fast a chemical or structural
change proceeds at a given temperature. Module 9 uses the same rate-law
idea implicitly when discussing how quickly a crust dries during frying.

## The model: the Arrhenius equation

The rate constant of most food-relevant thermally-driven reactions,
including Maillard browning and collagen hydrolysis, follows an Arrhenius
temperature dependence:

<div class="equation">k(T) = A·exp(−E<sub>a</sub> / (R·T))</div>

<dl class="variable-list">
  <dt>k(T) (rate constant, units depend on reaction order)</dt><dd>how fast the reaction proceeds at absolute temperature T.</dd>
  <dt>A (pre-exponential factor)</dt><dd>a reaction-specific constant related to how often molecules collide in the right orientation to react.</dd>
  <dt>E<sub>a</sub> (activation energy, J·mol⁻¹)</dt><dd>the energy barrier the reaction must overcome; a larger E<sub>a</sub> makes the rate more sensitive to temperature, not less likely to happen eventually.</dd>
  <dt>R (gas constant, 8.314 J·mol⁻¹·K⁻¹)</dt><dd>fixed.</dd>
  <dt>T (absolute temperature, K)</dt><dd>note this is Kelvin, not °C — the exponential's sensitivity comes from T appearing in a denominator on an absolute scale.</dd>
</dl>

Because k depends **exponentially** on 1/T, reactions with a large E_a are
far more temperature-sensitive than reactions with a small one. Maillard
browning reactions are reported with comparatively high activation
energies, which is consistent with duck skin's browning rate jumping
sharply for a modest oven-temperature increase. Collagen-to-gelatin
hydrolysis (Module 3) proceeds over a narrower practical temperature window
in a braise, but its rate is still governed by the same functional form —
the two reactions differ in A and E_a, not in which equation applies.

<figure class="sci-figure">
  <span class="sci-figure__kicker">Figure — Arrhenius plot for two food reactions</span>
  <svg viewBox="0 0 420 260" role="img" aria-labelledby="g8-title">
    <title id="g8-title">Natural log of the rate constant against inverse temperature for Maillard browning and collagen hydrolysis, with Maillard browning's steeper slope indicating a larger activation energy</title>
    <line class="sci-axis" x1="60" y1="220" x2="390" y2="220" />
    <line class="sci-axis" x1="60" y1="220" x2="60" y2="30" />
    <text class="sci-axis-label" x="225" y="246" text-anchor="middle">1/T →</text>
    <text class="sci-axis-label" x="22" y="125" text-anchor="middle" transform="rotate(-90 22 125)">ln k</text>
    <line class="sci-curve" x1="60" y1="60" x2="390" y2="205" />
    <text class="sci-label" x="70" y="54">Maillard browning</text>
    <text class="sci-axis-label" x="70" y="70">steep slope, high Eₐ</text>
    <line class="sci-curve--alt" x1="60" y1="110" x2="390" y2="165" />
    <text class="sci-label" x="70" y="128">collagen hydrolysis</text>
    <text class="sci-axis-label" x="70" y="144">shallower slope, lower Eₐ</text>
  </svg>
  <figcaption>
    Plotted this way, slope is −E_a/R: a steeper line means a reaction whose
    rate swings harder for the same temperature change. Duck-skin browning's
    steeper slope is why a modest oven-temperature increase produces a
    disproportionate jump in colour — the same functional form as collagen
    conversion, just a larger activation energy.
  </figcaption>
</figure>

<dl class="module-stats">
  <div class="module-stat"><dt>Model</dt><dd>k(T) = A·exp(−E<sub>a</sub>/RT)</dd></div>
  <div class="module-stat"><dt>Linearised as</dt><dd>ln k vs 1/T</dd></div>
  <div class="module-stat"><dt>Steeper slope</dt><dd>larger E<sub>a</sub></dd></div>
</dl>

## What you measure and analyse

Given a supplied table of browning-rate measurements at three oven
temperatures, you linearise the Arrhenius equation (plotting ln k against
1/T) to extract an apparent activation energy from the slope, and use it to
predict the browning rate at a fourth, untested temperature.

## Activity

A recipe says "roast at 220 °C for 45 minutes, or 200 °C for 65 minutes"
for equivalent browning. Using an activation energy from the literature
range for Maillard browning (cite your source — do not invent a number),
check whether the two temperature/time pairs given by the recipe are
roughly consistent with a single Arrhenius rate law, or whether the recipe
appears to be relying on more than temperature alone (for example, surface
drying, covered in Module 9).

:::warning[Assumptions and limitations]
The Arrhenius equation assumes a single, well-defined reaction with one
rate-limiting step; Maillard browning is actually a complex cascade of many
parallel and sequential reactions, so a fitted "apparent" activation energy
is an empirical summary of the overall browning rate, not the energy
barrier of one specific chemical step. This module's use of it is
deliberately at that empirical level.
:::

:::info[Data provenance]
The browning-rate values used in this module's worked example are
synthetic, chosen to produce activation-energy estimates broadly consistent
with the ranges discussed for Maillard browning in Fennema's Food Chemistry
(Damodaran & Parkin, Eds., 2017) — they are not measurements of duck skin
taken for this course.
:::

## References

- Damodaran, S. & Parkin, K.L. (Eds.) (2017). *Fennema's Food Chemistry*,
  5th ed. CRC Press.
- Walstra, P. (2003). *Physical Chemistry of Foods*. Marcel Dekker.
