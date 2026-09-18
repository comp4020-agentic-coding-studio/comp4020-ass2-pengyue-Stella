---
title: "Building Predictive Models"
description:
  Fitting the Virtual Rheometer's models to noisy data — least squares,
  residuals, and how to tell a good model fit from a lucky one.
week: 10
stage: 4
date: 2027-05-03
teachers:
  - idris-fenn
tags: [modelling, model fitting]
spec:
  - explain what a residual is and what a residual-vs-shear-rate plot can reveal that R² alone cannot
  - state why fitting the Herschel-Bulkley model to Newtonian data does not, by itself, prove doubanjiang has a yield stress
  - use the Virtual Rheometer to fit at least two candidate models to the same specimen and justify picking one
related:
  - 02-rheology-i-flow-behaviour
  - 12-inverse-material-design
---

## Research question

Module 2 asserted that doubanjiang is a Herschel-Bulkley fluid and honey is
Newtonian. What actually justifies choosing one model over another from
data, rather than from a name pinned to a food in advance — and what does
it mean for one model to be a *better fit* than another?

<p class="specimen-label">Specimen <strong>doubanjiang &amp; honey, Virtual Rheometer flow-curve fits</strong></p>

## Where this sits

Opening module of **Stage 4, Prediction and Material Design**. Stages 1–3
gave you the governing models one at a time, each anchored to a food
system chosen because that model fits it well. This module turns the
process around: given real (noisy) data and several candidate models, how
do you choose, and how confident should you be in the choice? Module 12
depends on this module's fitting discipline to solve its inverse-design
problem responsibly.

## The model: least squares and residuals

Fitting a model means choosing its parameters to minimise the total
squared disagreement between the model's prediction and the data:

<div class="equation">RSS = Σᵢ (τᵢ,measured − τᵢ,model)²</div>
<div class="equation">R² = 1 − RSS / TSS</div>

<dl class="variable-list">
  <dt>RSS (residual sum of squares)</dt><dd>total squared error between the fitted model and the data — lower is a closer fit, but is not comparable across models with different numbers of parameters without care.</dd>
  <dt>τᵢ,measured / τᵢ,model</dt><dd>the measured and model-predicted shear stress at the i-th shear rate tested.</dd>
  <dt>TSS (total sum of squares)</dt><dd>total squared deviation of the data from its own mean — the "no model at all" baseline.</dd>
  <dt>R² (coefficient of determination, dimensionless, ≤ 1)</dt><dd>the fraction of the data's variation the model explains; higher is better, but a high R² alone does not prove the model is *correct*, only that it tracks the data closely.</dd>
</dl>

A subtler and more useful check than R² alone is a **residual plot** —
model error plotted against shear rate. A good model's residuals scatter
randomly around zero across the whole range. A wrong model's residuals show
a *pattern* — for instance, fitting a Newtonian model to a fluid with a real
yield stress systematically under-predicts stress at low shear rate and
over-predicts it at high shear rate, even if the overall R² looks
respectable. The pattern, not the summary number, is what tells you the
model family itself is wrong.

<figure class="sci-figure">
  <span class="sci-figure__kicker">Figure — residuals reveal what R² alone hides</span>
  <svg viewBox="0 0 420 260" role="img" aria-labelledby="g10-title">
    <title id="g10-title">Model residuals against shear rate: a good fit scatters randomly around zero while a wrong model family shows a systematic trend crossing zero</title>
    <line class="sci-axis" x1="60" y1="220" x2="390" y2="220" />
    <line class="sci-axis" x1="60" y1="220" x2="60" y2="30" />
    <line class="sci-curve--alt" x1="60" y1="125" x2="390" y2="125" />
    <text class="sci-axis-label" x="225" y="246" text-anchor="middle">shear rate γ̇ →</text>
    <text class="sci-axis-label" x="22" y="125" text-anchor="middle" transform="rotate(-90 22 125)">residual (model − measured)</text>
    <circle class="sci-point" cx="100" cy="118" r="3.5" />
    <circle class="sci-point" cx="140" cy="132" r="3.5" />
    <circle class="sci-point" cx="180" cy="120" r="3.5" />
    <circle class="sci-point" cx="220" cy="130" r="3.5" />
    <circle class="sci-point" cx="260" cy="119" r="3.5" />
    <circle class="sci-point" cx="300" cy="129" r="3.5" />
    <circle class="sci-point" cx="340" cy="121" r="3.5" />
    <text class="sci-label" x="330" y="105" text-anchor="end">Herschel–Bulkley: random scatter</text>
    <path class="sci-curve" d="M 90 190 C 150 178 190 155 230 130 C 270 105 320 78 380 55" />
    <text class="sci-label" x="300" y="192" text-anchor="end">Newtonian fit to doubanjiang</text>
    <text class="sci-axis-label" x="300" y="207" text-anchor="end">systematic trend, not noise</text>
  </svg>
  <figcaption>
    Two fits can share a similar overall R². The Herschel-Bulkley residuals
    scatter randomly around zero across the whole range; the Newtonian
    fit's residuals trend from negative to positive — under-predicting
    stress at low shear rate, over-predicting it at high shear rate. That
    trend, not the R² number, is what exposes the wrong model family.
  </figcaption>
</figure>

<dl class="module-stats">
  <div class="module-stat"><dt>Fit metric</dt><dd>R² = 1 − RSS/TSS</dd></div>
  <div class="module-stat"><dt>Tells more than R²</dt><dd>residual pattern</dd></div>
  <div class="module-stat"><dt>Models compared</dt><dd>≥ 2 per specimen</dd></div>
</dl>

## What you measure and analyse

In the Virtual Rheometer, fit both the power-law and Herschel-Bulkley
models to the same doubanjiang flow curve, and compare R² and the residual
plot for each. The power-law model, lacking a yield-stress term, should
show a visible systematic residual pattern at low shear rate that the
Herschel-Bulkley fit removes.

## Activity

Fit the Newtonian model to the honey specimen and to the doubanjiang
specimen in the Virtual Rheometer. Report the R² for each fit, then explain
using the residual plot (not just the R² numbers) why a high R² for the
Newtonian fit to doubanjiang, if you happen to get one over a narrow
shear-rate range, would still be a bad reason to conclude doubanjiang has
no yield stress.

:::warning[Assumptions and limitations]
Least-squares fitting weights every data point's squared error equally
(or according to whatever weighting the instrument applies); if
measurement noise is not uniform across the shear-rate range — plausible
for a real rheometer, where low-shear-rate readings are often noisier —
an unweighted least-squares fit can be biased toward matching high-shear-
rate points at the expense of low-shear-rate ones. This module does not
correct for that; it flags it as a real limitation of the method it
teaches.
:::

:::info[Data provenance]
The flow-curve data fitted in this module comes from the Virtual
Rheometer's own illustrative specimen parameters (see Module 2's
provenance note) with synthetic measurement noise added — it is not
independently measured data.
:::

## References

- Steffe, J.F. (1996). *Rheological Methods in Food Process Engineering*,
  2nd ed. Freeman Press.
