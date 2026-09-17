---
title: "Inverse Material Design"
description:
  Given a target texture, work backward through the course's models to
  choose a formulation and process — the capstone design problem.
week: 12
stage: 4
date: 2027-05-17
teachers:
  - idris-fenn
  - marisol-quaye
tags: [inverse design, capstone]
spec:
  - state the difference between a forward model (predict outcome from process) and an inverse problem (choose process from target outcome)
  - identify which two prior modules' models are needed to solve a stated crispness-shelf-life design target
  - propose a formulation or process change and justify it by tracing back through the specific equation it acts on
related:
  - 10-building-predictive-models
  - 11-the-crispness-design-space
---

## Research question

Every previous module ran forward: given a material and a process, predict
what happens. A product developer's actual question usually runs the other
way — "design a cracker that stays crisp for at least three days once
opened, at typical kitchen humidity" — and asks which formulation and
process choices would achieve that target, not what a given choice
produces. Can the eleven forward models built across this course be
inverted into a design procedure?

## Where this sits

Closing module of **Stage 4, Prediction and Material Design**, and of the
course. This module does not introduce new physics; it is explicitly a
synthesis exercise that requires selecting the *right* forward models from
Stages 1–3 and running them backward, using the fitting discipline from
Module 10 to stay honest about how much confidence an inverted prediction
actually deserves. It is the direct precursor to the Inverse Material
Design Project assessment.

## The model: inversion as a design procedure

An inverse design problem has three parts, and confusing them is the most
common way such a problem goes wrong:

1. **A target outcome**, stated as a measurable quantity with a tolerance —
   here, "water activity below the specimen's critical a_w for at least 3
   days at 60% relative humidity" (Module 11's framing), not "stays crisp,"
   which is not by itself measurable.
2. **A forward model** relating process/formulation variables to that
   outcome — here, the Gordon-Taylor T_g(moisture) curve and the
   water-activity equilibration argument from Modules 9 and 11.
3. **The free variables** the model actually lets you act on — for a
   cracker, plausibly starch:water ratio at baking (shifts w₁, w₂ in
   Gordon-Taylor), bake time/temperature (shifts final moisture content
   and, via Module 8's Arrhenius kinetics, how much Maillard browning
   accompanies it), and packaging barrier properties (shifts the rate of
   equilibration Module 11 flagged as outside the state diagram itself).

Inverting the model means solving for the free variables that place the
target outcome inside the model's predicted glassy/stable region — but
because every forward model in this course carries explicit assumptions
and illustrative rather than measured parameters (see every module's
provenance note), an inverted answer is a **hypothesis about which
direction to move a process variable**, to be tested, not a guaranteed
specification. Module 10's residual-plot discipline is exactly the tool
for checking, once real data exists, whether the model that was inverted
was the right one to trust.

## What you measure and analyse

Given a stated target (critical water activity, ambient humidity, and a
shelf-life target in days) and Gordon-Taylor parameters for a candidate
starch formulation, you solve for the maximum initial moisture content the
baked cracker can have and still meet the target, and identify which one
process variable (bake time, at fixed temperature) would need to change to
hit that moisture content, referencing Module 7's transport model for why
longer baking removes moisture.

## Activity — the course's synthesis problem

Choose one Chinese food system from any earlier module (not necessarily
the one it was originally anchored to) and pose your own inverse design
target for it — a specific, measurable outcome with a tolerance, not a
vague texture word (Module 1's opening argument, now closing the loop).
State which two governing models from this course you would need to invert
to reach it, and what free variables you would act on. This is deliberately
open — the point is to practise the three-part structure above on a system
of your choosing, and it is the shape the Inverse Material Design Project
assessment expects your submission to take.

:::warning[Assumptions and limitations]
Inverting a model amplifies its uncertainty: small errors in a forward
model's fitted parameters (Module 10) can correspond to large,
non-obvious swings in the inferred "correct" process setting, especially
near a boundary like a glass transition where behaviour changes sharply
over a narrow range. This module treats inversion as producing a
testable hypothesis for a real formulation trial, not a final answer.
:::

:::info[Data provenance]
The worked target and Gordon-Taylor parameters used in this module's
example are illustrative, chosen to be solvable in closed form for
teaching purposes — they are not a specification for a real commercial
product and should not be read as one.
:::

## References

- Roos, Y.H. *Phase Transitions in Foods*, 2nd ed. Academic Press.
- Gordon, M. & Taylor, J.S. (1952). "Ideal Copolymers and the Second-Order
  Transitions of Synthetic Rubbers. I. Non-Crystalline Copolymers."
  *Journal of Applied Chemistry* 2(9), 493–500.
