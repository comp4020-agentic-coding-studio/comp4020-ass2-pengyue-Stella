// Temperature-moisture state model behind the Crispness Phase Diagram
// (/labs/crispness-phase-diagram/). No DOM access here, matching
// src/lib/rheometer.ts.

export interface CrispnessSpecimen {
  id: string;
  label: string;
  description: string;
  /** Glass transition temperature of the anhydrous solid, degrees C. */
  tgDry: number;
  /** Gordon-Taylor constant for this solid-water system, dimensionless. */
  gordonTaylorK: number;
  /** Sorption-isotherm plateau: the moisture mass fraction approached at RH -> 100%. */
  moistureMax: number;
  /** Time constant of moisture uptake toward its RH-set equilibrium, hours. */
  uptakeTimeConstant: number;
  /** Starting moisture mass fraction, fresh out of the fryer/oven/press. */
  initialMoisture: number;
}

// Glass transition temperature of pure amorphous water: a widely used
// approximate value in the food glass-transition literature (see Roos,
// Phase Transitions in Foods, and the Williams-Landel-Ferry tradition it
// draws on) — not a per-specimen fitted parameter.
export const TG_WATER = -135;

// Ambient storage temperature the whole diagram is drawn at: typical indoor
// room temperature, held fixed so that moisture uptake is the only thing
// that moves a specimen's state, per Module 11's framing.
export const AMBIENT_TEMPERATURE = 22;

export const RH_MIN = 10;
export const RH_MAX = 95;
export const MOISTURE_AXIS_MAX = 0.4;
export const TIME_AXIS_MAX_HOURS = 336; // two weeks, matching Module 11's own framing

// Illustrative parameters, chosen to be qualitatively consistent with the
// glass-transition and water-activity behaviour Roos (2010) describes for
// starch- and gluten-based food solids -- not measurements of these
// specific foods. See the page's data-provenance panel.
export const SPECIMENS: CrispnessSpecimen[] = [
  {
    id: "rice-cracker",
    label: "Rice cracker",
    description: "A dense, low-moisture starch solid: a high dry-state Tg gives it a wide crisp margin before humid air catches up.",
    tgDry: 180,
    gordonTaylorK: 5,
    moistureMax: 0.3,
    uptakeTimeConstant: 120,
    initialMoisture: 0.03,
  },
  {
    id: "spring-roll-wrapper",
    label: "Spring roll wrapper",
    description: "Thin and wheat-based: a lower dry-state Tg and fast moisture uptake give it the narrowest crisp margin of the three.",
    tgDry: 140,
    gordonTaylorK: 4,
    moistureMax: 0.35,
    uptakeTimeConstant: 40,
    initialMoisture: 0.05,
  },
  {
    id: "youtiao-crust",
    label: "Youtiao crust",
    description: "Fried dough: frying drives off moisture and leaves an oil-rich surface, giving intermediate dry-state Tg and uptake speed.",
    tgDry: 160,
    gordonTaylorK: 6,
    moistureMax: 0.28,
    uptakeTimeConstant: 70,
    initialMoisture: 0.04,
  },
];

/** Gordon-Taylor glass transition temperature at a given moisture mass fraction. */
export function glassTransitionTemp(specimen: CrispnessSpecimen, moisture: number): number {
  const w2 = Math.min(Math.max(moisture, 0), 0.999);
  const w1 = 1 - w2;
  const { tgDry, gordonTaylorK: k } = specimen;
  return (w1 * tgDry + k * w2 * TG_WATER) / (w1 + k * w2);
}

/** Equilibrium moisture content a specimen approaches at a given ambient relative humidity. */
export function equilibriumMoisture(specimen: CrispnessSpecimen, relativeHumidity: number): number {
  // A linear sorption isotherm: the simplest monotonic RH -> moisture map,
  // used here as a clearly-labelled illustrative stand-in for a measured
  // GAB or BET isotherm (see the page's assumptions panel).
  return specimen.moistureMax * (relativeHumidity / 100);
}

/** Moisture content after `hours` of exposure to a fixed ambient relative humidity. */
export function moistureAtTime(specimen: CrispnessSpecimen, relativeHumidity: number, hours: number): number {
  const eq = equilibriumMoisture(specimen, relativeHumidity);
  const t = Math.max(hours, 0);
  return eq + (specimen.initialMoisture - eq) * Math.exp(-t / specimen.uptakeTimeConstant);
}

/** The moisture content at which this specimen's Tg curve crosses the ambient temperature. */
function moistureAtAmbientCrossing(specimen: CrispnessSpecimen): number {
  let lo = 0;
  let hi = 0.999;
  for (let i = 0; i < 60; i++) {
    const mid = (lo + hi) / 2;
    if (glassTransitionTemp(specimen, mid) > AMBIENT_TEMPERATURE) {
      lo = mid;
    } else {
      hi = mid;
    }
  }
  return (lo + hi) / 2;
}

/**
 * Hours until this specimen's moisture content, absorbing toward RH's
 * equilibrium, pushes its glass transition temperature down to ambient
 * temperature -- the point it crosses from glassy/crisp to rubbery/softened.
 * Returns Infinity if equilibrium moisture at this RH never reaches that
 * crossing point (the specimen stays crisp indefinitely at this humidity).
 */
export function stabilityMarginHours(specimen: CrispnessSpecimen, relativeHumidity: number): number {
  const crossingMoisture = moistureAtAmbientCrossing(specimen);
  const eq = equilibriumMoisture(specimen, relativeHumidity);
  if (eq <= crossingMoisture) return Number.POSITIVE_INFINITY;
  if (specimen.initialMoisture >= crossingMoisture) return 0;
  const ratio = (crossingMoisture - eq) / (specimen.initialMoisture - eq);
  return -specimen.uptakeTimeConstant * Math.log(ratio);
}

export function isCrisp(specimen: CrispnessSpecimen, moisture: number): boolean {
  return glassTransitionTemp(specimen, moisture) > AMBIENT_TEMPERATURE;
}
