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

<p class="specimen-label">Specimen <strong>tapioca pearl (boba), cooked, at serving temperature</strong></p>

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

<figure class="sci-figure">
  <span class="sci-figure__kicker">Figure — the complex modulus as a vector</span>
  <svg viewBox="0 0 420 260" role="img" aria-labelledby="g1-title">
    <title id="g1-title">Vector diagram comparing a QQ tapioca pearl to a hard gel of similar magnitude but larger phase angle</title>
    <line class="sci-axis" x1="70" y1="220" x2="390" y2="220" />
    <line class="sci-axis" x1="70" y1="220" x2="70" y2="30" />
    <text class="sci-axis-label" x="230" y="246" text-anchor="middle">G′ — elastic component (Pa)</text>
    <text class="sci-axis-label" x="24" y="125" text-anchor="middle" transform="rotate(-90 24 125)">G″ — viscous component (Pa)</text>
    <path class="sci-annotation" d="M 217 189 A 150 150 0 0 0 182 120" />
    <path class="sci-annotation" d="M 217 189 L 217 220" />
    <path class="sci-annotation" d="M 217 189 L 70 189" />
    <line class="sci-curve" x1="70" y1="220" x2="217" y2="189" />
    <circle class="sci-point" cx="217" cy="189" r="4.5" />
    <text class="sci-label" x="223" y="182">QQ pearl</text>
    <text class="sci-axis-label" x="223" y="198">low tan δ</text>
    <line class="sci-curve--alt" x1="70" y1="220" x2="182" y2="120" />
    <circle class="sci-point" cx="182" cy="120" r="4.5" />
    <text class="sci-label" x="188" y="114">Hard gel</text>
    <text class="sci-axis-label" x="188" y="130">high tan δ</text>
    <path class="sci-annotation" d="M 102 220 A 32 32 0 0 0 100 213" />
    <text class="sci-axis-label" x="106" y="209">δ</text>
  </svg>
  <figcaption>
    Two gels can share the same |G*| — the same overall stiffness — and still
    feel unrelated. A small phase angle δ puts almost all of that stiffness
    into the elastic, energy-returning G′ component ("QQ"); a larger δ at the
    same magnitude routes more of it into the dissipative G″ component
    ("hard" but not springy).
  </figcaption>
</figure>

<dl class="module-stats">
  <div class="module-stat"><dt>Material states</dt><dd>4</dd></div>
  <div class="module-stat"><dt>Loss ratio</dt><dd>tan δ = G″⁄G′</dd></div>
  <div class="module-stat"><dt>QQ target</dt><dd>high G′, low tan δ</dd></div>
</dl>

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
