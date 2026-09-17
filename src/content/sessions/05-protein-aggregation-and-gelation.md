---
title: "Protein Aggregation and Gelation"
description:
  The moment soy milk becomes tofu — percolation, the gel point, and the
  Winter-Chambon criterion for when a liquid becomes a solid network.
week: 5
stage: 2
date: 2027-03-22
teachers:
  - idris-fenn
tags: [gelation, percolation, proteins]
spec:
  - state the Winter-Chambon criterion for locating a gel point
  - explain what "percolation" means for a network of aggregating protein particles
  - say why the gel point is a moment, not a texture, and why that distinction matters
related:
  - 04-polymer-networks-i-starch-gels
  - 06-colloids-and-emulsions
---

## Research question

Add a coagulant (nigari or gypsum) to hot soy milk and, within seconds to
minutes, a suspension of individual soy protein particles becomes tofu (豆
腐): a continuous, self-supporting solid. Somewhere in that window there is
a precise instant at which the material stops being a liquid and starts
being a solid. Can that instant be identified from a measurement, rather
than by eye?

## Where this sits

Second module of **Stage 2, Structures and Networks**. Module 4 built a
network from starch chains reassociating on cooling; this module builds one
from protein particles aggregating irreversibly once a coagulant
neutralises the electrostatic repulsion that was keeping soy milk a stable
suspension. The underlying mathematics — a percolating network appearing at
a critical threshold — is the same idea in a different material, which is
why it gets its own module rather than being folded into Module 4.

## The model: percolation and the gel point

As coagulant is added, individual protein particles aggregate into
progressively larger clusters. **Percolation theory** (Flory, 1941;
Stockmayer, 1944) predicts that below a critical extent of
crosslinking, clusters stay finite and the material remains a (viscous)
liquid; above it, a single cluster spans the whole sample and the material
becomes a solid network, in principle abruptly:

<div class="equation">p<sub>c</sub> = 1 / (f − 1)</div>

<dl class="variable-list">
  <dt>p (extent of crosslinking, dimensionless, 0–1)</dt><dd>the fraction of possible crosslinks between particles that have actually formed.</dd>
  <dt>p<sub>c</sub> (critical extent, dimensionless)</dt><dd>the threshold at which a sample-spanning cluster first appears.</dd>
  <dt>f (functionality)</dt><dd>the average number of crosslinking sites available per particle; a higher f reaches the gel point at a lower p<sub>c</sub>.</dd>
</dl>

Because p is not directly observable during cooking, the **gel point** is
found rheologically instead, using the Winter-Chambon criterion: at the gel
point, and only at the gel point, the loss tangent (tan δ = G″/G′,
introduced in Module 1) becomes **independent of oscillation frequency**.
Before gelation, tan δ varies with frequency because the material still
relaxes like a liquid at long timescales; after gelation, it varies with
frequency because the network is now a solid with its own elastic
timescale; exactly at the transition, curves at different frequencies all
cross at one point.

## What you measure and analyse

Using a supplied set of tan δ vs. time curves recorded at several
oscillation frequencies for a coagulating soy-protein suspension, you
identify the time at which the curves converge — the gel point — and
compare it against the time a texture reading first shows measurable
solid-like resistance, to see how much (if at all) the two disagree.

## Activity

Gypsum (calcium sulfate) and nigari (largely magnesium chloride) coagulate
soy protein by different ionic mechanisms and are known to produce tofu
with different final textures (softer and firmer respectively, at
comparable protein content). Using the percolation model above, argue
whether a coagulant that produces a firmer final gel is more likely to be
raising or lowering the effective functionality f of the protein particles,
and what evidence from a gel-point measurement would support your answer.

:::warning[Assumptions and limitations]
The Flory-Stockmayer treatment assumes ideal, randomly-branching network
formation and no steric or electrostatic constraints on which particles can
crosslink — real soy-protein aggregation is more structured than this
(aggregates form fractal, not perfectly random, clusters), so p<sub>c</sub>
values from the idealised theory are indicative, not exact, for a real
coagulating system. The Winter-Chambon criterion also assumes the material
is at a genuine self-similar critical state at the gel point, which does
not hold for every gelling system.
:::

:::info[Data provenance]
The tan δ dataset used in this module is a synthetic, illustrative curve
set constructed to show frequency convergence at a single time point,
consistent with the qualitative behaviour reported for coagulating protein
gels in the gel-point rheology literature (Winter & Chambon, 1986) — it is
not a measurement taken for this course.
:::

## References

- Flory, P.J. (1941). "Molecular Size Distribution in Three Dimensional
  Polymers. I. Gelation." *Journal of the American Chemical Society*
  63(11), 3083–3090.
- Stockmayer, W.H. (1944). "Theory of Molecular Size Distribution and Gel
  Formation in Branched Polymers. II. General Cross Linking." *Journal of
  Chemical Physics* 12(4), 125–131.
- Winter, H.H. & Chambon, F. (1986). "Analysis of Linear Viscoelasticity of
  a Crosslinking Polymer at the Gel Point." *Journal of Rheology* 30(2),
  367–382.
