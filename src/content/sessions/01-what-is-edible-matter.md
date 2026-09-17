---
title: "What Is Edible Matter?"
description:
  Framing the course's central claim — a food's texture is a measurable
  material property, not a matter of taste. Anchored on tapioca pearls.
week: 1
stage: 1
date: 2027-02-22
teachers:
  - idris-fenn
tags: [soft matter, texture]
spec:
  - state, in one sentence, what "QQ" (Q弹) texture means as a physical property
  - name three material states a cooked food can occupy (solid, gel, glass) and give a Chinese food example of each
  - explain why "chewy" is not one property but at least two (elasticity and toughness)
related:
  - 02-rheology-i-flow-behaviour
  - 10-building-predictive-models
---

## Research question

When a diner in Chengdu says boba (珍珠, tapioca pearls) has good "QQ" —
springy, resistant, bouncing back after a bite — what are they actually
measuring? This module asks whether a texture word from a kitchen can be
mapped onto a property a rheometer reports in pascals, and if so, which one.

## Where this sits

This is the opening module of **Stage 1, Measuring Edible Matter**. Before
the course can talk about structure (Stage 2) or transformation (Stage 3),
it needs a shared, testable vocabulary for what a food material *is*. Every
later module reuses the framing built here: a food is a material occupying
one of a small number of physical states, and its behaviour under load, heat,
or moisture is what a model predicts — not an adjective.

## The model: states of edible matter

Cooked and processed foods mostly sit in four regimes, each with a distinct
mechanical signature:

- **Fluid** — deforms continuously under any shear stress (chili oil).
- **Viscoelastic solid** — has both an elastic (spring-like, energy-storing)
  and a viscous (dashpot-like, energy-dissipating) response (dough, tapioca
  gel).
- **Amorphous glass** — a disordered solid below its glass transition
  temperature, rigid and often brittle (a dried spring roll wrapper — see
  Module 9 and Module 11).
- **Crystalline/semi-crystalline solid** — ordered at the molecular scale
  (ice, some fats).

A boba pearl at serving temperature is a **physical hydrogel**: a swollen,
crosslinked tapioca-starch network holding a large fraction of water. Its
"QQ" character comes from two separable quantities:

<div class="equation">G* = G′ + iG″</div>

<dl class="variable-list">
  <dt>G′ (storage modulus)</dt><dd>the elastic component — how much energy the pearl stores and returns on deformation. Higher G′ reads as "springy" or "resistant."</dd>
  <dt>G″ (loss modulus)</dt><dd>the viscous component — how much energy is dissipated as heat rather than returned. Higher G″ relative to G′ reads as "soft" or "mushy."</dd>
  <dt>tan δ = G″/G′</dt><dd>the ratio diners actually feel: a low tan δ pearl snaps back; a high tan δ pearl deforms and stays deformed.</dd>
</dl>

"QQ" texture, in this framing, is a **high G′ with a low tan δ** — a gel
that is both stiff and highly elastic, not merely stiff. A pearl that is
stiff but has a high tan δ reads as "hard," not "QQ" — the two are
mechanically distinguishable even though both would be called "firm" in
English.

## What you measure and analyse

Using a supplied oscillatory-rheology dataset (Laboratory Portfolio, dataset
analysis component), you will read G′ and G″ against time for tapioca
pearls cooked for three different durations, compute tan δ for each, and
rank the three by how close they sit to a target "QQ" window rather than by
G′ alone.

## Activity

Pick two Chinese foods you'd both call "chewy" in English — a candidates
list: hand-pulled noodle dough (拉面), century egg white (皮蛋), dried squid
(鱿鱼干). For each, argue from the material-state list above which state it
occupies, and predict qualitatively whether it has a higher or lower tan δ
than tapioca pearls. You are not expected to have measured this — the point
is to practise turning a texture word into a testable material claim, which
every later module in this course requires.

:::warning[Assumptions and limitations]
Treating G′ and G″ as separable "springiness" and "softness" is a
simplification: real food gels are viscoelastic across a range of
frequencies, and a single-frequency measurement (as summarised here) does
not capture how a pearl behaves at the very different deformation rates of
a first bite versus a slow chew. The perceptual mapping from tan δ to "QQ"
is a reasonable first model, not a validated sensory equation.
:::

:::info[Data provenance]
The oscillatory-rheology dataset used in the Laboratory Portfolio for this
module is a supplied, illustrative dataset constructed to sit within
published ranges for cooked starch gels (Steffe, 1996) — it is not a
measurement taken for this course.
:::

## References

- Steffe, J.F. (1996). *Rheological Methods in Food Process Engineering*,
  2nd ed. Freeman Press.
- Walstra, P. (2003). *Physical Chemistry of Foods*. Marcel Dekker.
