---
title: "Heat and Mass Transport"
description:
  Why a xiaolongbao's filling is still cold when its wrapper is done —
  Fourier's law, the Biot number, and simultaneous heat and moisture transport.
week: 7
stage: 3
date: 2027-04-05
teachers:
  - marisol-quaye
tags: [heat transfer, transport phenomena]
spec:
  - write Fourier's law for one-dimensional conduction and name each term
  - use the Biot number to decide whether a lumped (uniform-temperature) model is valid for a given food object
  - explain why steaming transfers both heat and moisture to a dumpling, not heat alone
related:
  - 06-colloids-and-emulsions
  - 09-phase-transitions-in-cooking
---

## Research question

A xiaolongbao (小笼包, soup dumpling) is steamed until its wrapper is
translucent and fully cooked — but if pierced immediately, its gelatin-rich
filling may still be cool and only partly melted. Both wrapper and filling
sit in the same steam. Why does heat reach them at such different
effective rates, and can that be predicted rather than just observed?

<p class="specimen-label">Specimen <strong>xiaolongbao (小笼包), wrapper vs. gelatin-rich filling, mid-steam</strong></p>

## Where this sits

Opening module of **Stage 3, Transport, Kinetics and Transformation**. Stage 2
was about what gives a material structure; Stage 3 is about how that
structure changes during cooking, starting with the physical mechanism —
transport — that makes any change happen at all. This module's Biot-number
framing is used again, less formally, in Module 9's discussion of a
moisture front moving through frying dough.

## The model: conduction and the Biot number

Heat moves through the dumpling wrapper primarily by conduction, governed
by Fourier's law:

<div class="equation">q = −k·(dT/dx)</div>

<dl class="variable-list">
  <dt>q (heat flux, W·m⁻²)</dt><dd>the rate of heat flow through a unit area.</dd>
  <dt>k (thermal conductivity, W·m⁻¹·K⁻¹)</dt><dd>a property of the material — higher k conducts heat faster for the same temperature gradient.</dd>
  <dt>dT/dx (temperature gradient, K·m⁻¹)</dt><dd>how sharply temperature changes with position; the negative sign says heat flows from hot to cold.</dd>
</dl>

Whether it is reasonable to treat an object as having one uniform internal
temperature (a "lumped" model, useful for quick estimates) or whether you
must account for internal temperature gradients is decided by the **Biot
number**:

<div class="equation">Bi = h·L<sub>c</sub> / k</div>

<dl class="variable-list">
  <dt>Bi (Biot number, dimensionless)</dt><dd>ratio of internal (conductive) resistance to surface (convective) resistance.</dd>
  <dt>h (convective heat-transfer coefficient, W·m⁻²·K⁻¹)</dt><dd>how effectively steam transfers heat to the dumpling's surface.</dd>
  <dt>L<sub>c</sub> (characteristic length, m)</dt><dd>typically volume divided by surface area — larger objects have a larger L<sub>c</sub>.</dd>
</dl>

When Bi ≪ 0.1, surface heat transfer is the bottleneck and the object heats
almost uniformly — a lumped model is a good approximation. When Bi ≫ 0.1,
internal conduction is the bottleneck and real temperature gradients form
inside the object — a lumped model badly understates how much colder the
centre is than the surface. A thin xiaolongbao wrapper has a small L_c and
a comparatively high effective k (it's mostly water-saturated starch gel,
Module 4), giving a low Bi: it heats almost uniformly and finishes cooking
quickly. The denser, larger filling ball has a bigger L_c and, being partly
solid fat and gelled stock, a different k — its Biot number is
substantially higher, so a real temperature gradient persists inside it and
its centre lags well behind its surface.

Steaming additionally transfers **moisture**, not heat alone: condensing
steam deposits water (and its latent heat) directly onto the wrapper's
surface, which is why a steamed wrapper gains weight and becomes
translucent — a distinct process from a dry oven's heat-only transfer,
governed by an analogous mass-transfer equation with a moisture-content
gradient in place of dT/dx.

<figure class="sci-figure">
  <span class="sci-figure__kicker">Figure — internal temperature profile at two Biot numbers</span>
  <svg viewBox="0 0 420 260" role="img" aria-labelledby="g7-title">
    <title id="g7-title">Temperature against position from surface to centre for a low-Biot wrapper, which is near-uniform, and a high-Biot filling ball, which has a steep gradient and a cold core</title>
    <line class="sci-axis" x1="60" y1="220" x2="390" y2="220" />
    <line class="sci-axis" x1="60" y1="220" x2="60" y2="30" />
    <text class="sci-axis-label" x="225" y="246" text-anchor="middle">position: surface → centre</text>
    <text class="sci-axis-label" x="22" y="125" text-anchor="middle" transform="rotate(-90 22 125)">temperature</text>
    <path class="sci-curve--alt" d="M 60 60 L 390 66" />
    <text class="sci-axis-label" x="368" y="52" text-anchor="end">wrapper, Bi ≪ 0.1</text>
    <path class="sci-curve" d="M 60 60 C 140 64 220 90 280 140 C 320 175 355 195 390 205" />
    <circle class="sci-point" cx="390" cy="205" r="4.5" />
    <text class="sci-label" x="300" y="150">filling, Bi ≫ 0.1</text>
    <text class="sci-axis-label" x="300" y="166">still-cold centre</text>
  </svg>
  <figcaption>
    Same steam bath, same time. The wrapper's low Biot number means surface
    heat transfer is the bottleneck, so it heats almost uniformly. The
    filling's higher Biot number means internal conduction is the
    bottleneck instead, so a real gradient persists and the centre lags
    behind the surface.
  </figcaption>
</figure>

<dl class="module-stats">
  <div class="module-stat"><dt>Lumped model valid</dt><dd>Bi ≪ 0.1</dd></div>
  <div class="module-stat"><dt>Transports</dt><dd>heat + moisture</dd></div>
  <div class="module-stat"><dt>Bi</dt><dd>= h·L<sub>c</sub>/k</dd></div>
</dl>

## What you measure and analyse

Using supplied k, h, and L_c values for a wrapper and a filling ball, you
compute Bi for each, decide which is well approximated by a lumped model,
and estimate the ratio of characteristic heating times implied by each
Biot regime.

## Activity

A cook wants xiaolongbao filling to finish melting at the same moment the
wrapper finishes cooking. Using the Biot-number framing, propose one
process change (not an ingredient change) that would bring the two closer
together, and identify which variable in the Bi formula it acts on.

:::warning[Assumptions and limitations]
This treats the wrapper and filling as two separate, geometrically simple
bodies (a thin shell, a sphere) with uniform properties, when a real
dumpling is a composite object with a moving interface between them. The
lumped/Biot framework is a standard first-pass engineering approximation
(Singh & Heldman) and deliberately ignores the coupled heat-and-moisture
transport that a full model of steaming would require.
:::

:::info[Data provenance]
The k, h, and L_c values used in this module are illustrative, chosen to
fall within the ranges Singh & Heldman report for starch gels and
protein/fat mixtures respectively — they are not measurements of a
specific xiaolongbao taken for this course.
:::

## References

- Singh, R.P. & Heldman, D.R. *Introduction to Food Engineering*, 5th ed.
  Academic Press.
- Walstra, P. (2003). *Physical Chemistry of Foods*. Marcel Dekker.
