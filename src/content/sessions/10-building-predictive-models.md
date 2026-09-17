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
