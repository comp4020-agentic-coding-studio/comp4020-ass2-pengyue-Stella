// Which of the three named layout patterns each module uses on its detail
// page (src/pages/sessions/[slug].astro), and which specimen plate / lab
// instrument goes with it. A module not listed here falls back to
// "measurement-led" — no lead photo exists for its specimen, so its own
// inline .sci-figure gets more visual weight instead (see scientific.css).
// Deliberately separate from src/content.config.ts: this is a presentation
// decision, not part of a module's academic content or its schema.

type PlateVariant = "noodle" | "tofu" | "emulsion" | "dumplings" | "crispy" | "lattice" | "rheometer-rig";

export type ModuleLayout = "instrument-led" | "specimen-led" | "measurement-led";

interface ModuleVisual {
  layout: ModuleLayout;
  plate?: PlateVariant;
  instrument?: { title: string; href: string };
}

export const DEFAULT_MODULE_VISUAL: ModuleVisual = { layout: "measurement-led" };

const VIRTUAL_RHEOMETER = { title: "Virtual Rheometer", href: "/labs/virtual-rheometer/" };
const CRISPNESS_PHASE_DIAGRAM = { title: "Crispness Phase Diagram", href: "/labs/crispness-phase-diagram/" };

export const MODULE_VISUALS: Record<string, ModuleVisual> = {
  "02-rheology-i-flow-behaviour": { layout: "instrument-led", plate: "rheometer-rig", instrument: VIRTUAL_RHEOMETER },
  "04-polymer-networks-i-starch-gels": { layout: "specimen-led", plate: "lattice" },
  "05-protein-aggregation-and-gelation": { layout: "specimen-led", plate: "tofu" },
  "06-colloids-and-emulsions": { layout: "specimen-led", plate: "emulsion" },
  "07-heat-and-mass-transport": { layout: "specimen-led", plate: "dumplings" },
  "09-phase-transitions-in-cooking": { layout: "specimen-led", plate: "crispy" },
  "10-building-predictive-models": { layout: "instrument-led", plate: "rheometer-rig", instrument: VIRTUAL_RHEOMETER },
  "11-the-crispness-design-space": { layout: "instrument-led", plate: "crispy", instrument: CRISPNESS_PHASE_DIAGRAM },
};
