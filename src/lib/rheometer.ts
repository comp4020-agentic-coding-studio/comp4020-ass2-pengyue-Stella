// Flow-curve physics and model fitting for the Virtual Rheometer
// (/labs/virtual-rheometer/). No DOM access here so this stays testable in
// isolation from the SVG rendering that consumes it.

export type FlowModel = "newtonian" | "power-law" | "herschel-bulkley";

export interface FlowParams {
  /** Consistency index, Pa·sⁿ. For the Newtonian model this is the viscosity η (n = 1). */
  k: number;
  /** Flow behaviour index, dimensionless. Fixed at 1 for the Newtonian model. */
  n: number;
  /** Yield stress, Pa. Zero for Newtonian and power-law. */
  tau0: number;
}

export interface Specimen {
  id: string;
  label: string;
  /** The flow model this specimen's synthetic data is generated from. */
  trueModel: FlowModel;
  trueParams: FlowParams;
  description: string;
}

// Illustrative parameters chosen to sit within the ranges Steffe (1996) and
// Walstra (2003) report for the corresponding food class (Newtonian liquids,
// starch-thickened purees, yield-stress pastes) — not measurements of these
// specific foods. See the page's own data-provenance panel.
export const SPECIMENS: Specimen[] = [
  {
    id: "honey",
    label: "Honey",
    trueModel: "newtonian",
    trueParams: { k: 6, n: 1, tau0: 0 },
    description: "A single viscosity describes it at every shear rate — no yield stress, no thinning.",
  },
  {
    id: "congee",
    label: "Rice congee",
    trueModel: "power-law",
    trueParams: { k: 3, n: 0.4, tau0: 0 },
    description: "Starch-thickened liquid: shear-thinning from the first instant of flow, no threshold to overcome.",
  },
  {
    id: "doubanjiang",
    label: "Doubanjiang (fermented bean paste)",
    trueModel: "herschel-bulkley",
    trueParams: { k: 8, n: 0.35, tau0: 25 },
    description: "A jammed suspension of bean and chilli solids: sits still under its own weight until stress exceeds τ₀.",
  },
  {
    id: "dumpling-dough",
    label: "Dumpling dough",
    trueModel: "herschel-bulkley",
    trueParams: { k: 40, n: 0.3, tau0: 120 },
    description: "A stiffer gluten network: a much higher yield stress than doubanjiang before it deforms at all.",
  },
];

export const SHEAR_RATE_MIN = 0.1;
export const SHEAR_RATE_MAX = 500;

export function stressAt(model: FlowModel, params: FlowParams, gammaDot: number): number {
  switch (model) {
    case "newtonian":
      return params.k * gammaDot;
    case "power-law":
      return params.k * gammaDot ** params.n;
    case "herschel-bulkley":
      return params.tau0 + params.k * gammaDot ** params.n;
  }
}

export function viscosityAt(model: FlowModel, params: FlowParams, gammaDot: number): number {
  return stressAt(model, params, gammaDot) / gammaDot;
}

export interface SweepPoint {
  gammaDot: number;
  tau: number;
}

/**
 * A deterministic pseudo-random generator (mulberry32) so a specimen's
 * "measured" scatter is reproducible across renders and resizes rather than
 * jittering every redraw.
 */
function mulberry32(seed: number): () => number {
  let a = seed;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/**
 * Synthetic "measured" flow curve: the specimen's true model plus small
 * multiplicative noise, standing in for real instrument scatter. Labelled as
 * synthetic throughout the page — never presented as measured data.
 */
export function generateSweep(specimen: Specimen, pointCount = 22): SweepPoint[] {
  const rand = mulberry32(hashString(specimen.id));
  const logMin = Math.log10(SHEAR_RATE_MIN);
  const logMax = Math.log10(SHEAR_RATE_MAX);
  const points: SweepPoint[] = [];
  for (let i = 0; i < pointCount; i++) {
    const logGamma = logMin + ((logMax - logMin) * i) / (pointCount - 1);
    const gammaDot = 10 ** logGamma;
    const trueTau = stressAt(specimen.trueModel, specimen.trueParams, gammaDot);
    const noiseFactor = 1 + (rand() - 0.5) * 0.12;
    points.push({ gammaDot, tau: trueTau * noiseFactor });
  }
  return points;
}

function hashString(value: string): number {
  let hash = 0;
  for (let i = 0; i < value.length; i++) {
    hash = (Math.imul(31, hash) + value.charCodeAt(i)) | 0;
  }
  return hash;
}

export interface FitResult {
  model: FlowModel;
  params: FlowParams;
  predictions: SweepPoint[];
  residuals: { gammaDot: number; residual: number }[];
  rss: number;
  tss: number;
  r2: number;
}

function ordinaryLeastSquares(xs: number[], ys: number[]): { slope: number; intercept: number } {
  const n = xs.length;
  const meanX = xs.reduce((a, b) => a + b, 0) / n;
  const meanY = ys.reduce((a, b) => a + b, 0) / n;
  let num = 0;
  let den = 0;
  for (let i = 0; i < n; i++) {
    num += (xs[i] - meanX) * (ys[i] - meanY);
    den += (xs[i] - meanX) ** 2;
  }
  const slope = den === 0 ? 0 : num / den;
  const intercept = meanY - slope * meanX;
  return { slope, intercept };
}

function fitPowerLawToResiduals(points: SweepPoint[], tau0: number): { k: number; n: number } {
  // log(tau - tau0) = log(K) + n * log(gammaDot) --- only points left of the
  // yield stress contribute; a fit with tau0 too large discards them and
  // scores badly, which is what makes the tau0 search below work.
  const usable = points.filter((p) => p.tau - tau0 > 0);
  if (usable.length < 2) return { k: 0, n: 0 };
  const xs = usable.map((p) => Math.log(p.gammaDot));
  const ys = usable.map((p) => Math.log(p.tau - tau0));
  const { slope, intercept } = ordinaryLeastSquares(xs, ys);
  return { k: Math.exp(intercept), n: slope };
}

function rssForHerschelBulkley(points: SweepPoint[], tau0: number): number {
  const { k, n } = fitPowerLawToResiduals(points, tau0);
  let rss = 0;
  for (const p of points) {
    const predicted = tau0 + k * p.gammaDot ** n;
    rss += (p.tau - predicted) ** 2;
  }
  return rss;
}

/** Golden-section search for the τ₀ that minimises RSS in real (not log) stress space. */
function searchYieldStress(points: SweepPoint[]): number {
  const minObservedTau = Math.min(...points.map((p) => p.tau));
  let lo = 0;
  let hi = minObservedTau * 0.98;
  const phi = (Math.sqrt(5) - 1) / 2;
  let c = hi - phi * (hi - lo);
  let d = lo + phi * (hi - lo);
  for (let i = 0; i < 40; i++) {
    if (rssForHerschelBulkley(points, c) < rssForHerschelBulkley(points, d)) {
      hi = d;
    } else {
      lo = c;
    }
    c = hi - phi * (hi - lo);
    d = lo + phi * (hi - lo);
  }
  return (lo + hi) / 2;
}

function summarise(model: FlowModel, params: FlowParams, points: SweepPoint[]): FitResult {
  const predictions = points.map((p) => ({ gammaDot: p.gammaDot, tau: stressAt(model, params, p.gammaDot) }));
  const residuals = points.map((p, i) => ({ gammaDot: p.gammaDot, residual: p.tau - predictions[i].tau }));
  const rss = residuals.reduce((sum, r) => sum + r.residual ** 2, 0);
  const meanTau = points.reduce((sum, p) => sum + p.tau, 0) / points.length;
  const tss = points.reduce((sum, p) => sum + (p.tau - meanTau) ** 2, 0);
  const r2 = tss === 0 ? 1 : 1 - rss / tss;
  return { model, params, predictions, residuals, rss, tss, r2 };
}

/**
 * Fit the requested model family to a sweep of (possibly noisy) points. This
 * is deliberately independent of which specimen generated the data — fitting
 * the Newtonian model to a yield-stress fluid is a valid (if bad) fit, and
 * showing exactly how badly is the point of the instrument.
 */
export function fitModel(model: FlowModel, points: SweepPoint[]): FitResult {
  if (model === "newtonian") {
    const xs = points.map((p) => p.gammaDot);
    const ys = points.map((p) => p.tau);
    const sumXY = xs.reduce((s, x, i) => s + x * ys[i], 0);
    const sumXX = xs.reduce((s, x) => s + x * x, 0);
    const eta = sumXX === 0 ? 0 : sumXY / sumXX;
    return summarise(model, { k: eta, n: 1, tau0: 0 }, points);
  }
  if (model === "power-law") {
    const { k, n } = fitPowerLawToResiduals(points, 0);
    return summarise(model, { k, n, tau0: 0 }, points);
  }
  const tau0 = searchYieldStress(points);
  const { k, n } = fitPowerLawToResiduals(points, tau0);
  return summarise(model, { k, n, tau0 }, points);
}

export const MODEL_LABELS: Record<FlowModel, string> = {
  newtonian: "Newtonian",
  "power-law": "Power-law",
  "herschel-bulkley": "Herschel-Bulkley",
};
