// Which specimen plate each lecture week pairs with, and which weeks are
// "anchor" lectures — the four stage-opening lectures (1, 4, 7, 10), each
// framing the stage ahead rather than following a single module. The other
// eight are ordinary week-to-week lectures. Deliberately separate from
// src/content.config.ts: this is a presentation decision, not part of a
// lecture's academic content or its schema. Mirrors src/module-layouts.ts.

type PlateVariant =
  | "noodle"
  | "noodle-fried"
  | "tofu"
  | "emulsion"
  | "dumplings"
  | "crispy"
  | "lattice"
  | "rheometer-rig"
  | "thermal-trace"
  | "inverse-design"
  | "model-fit"
  | "design-space";

export interface LectureVisual {
  stage: 1 | 2 | 3 | 4;
  plate: PlateVariant;
  anchor?: boolean;
}

export const LECTURE_VISUALS: Record<number, LectureVisual> = {
  1: { stage: 1, plate: "noodle", anchor: true },
  2: { stage: 1, plate: "rheometer-rig" },
  3: { stage: 1, plate: "thermal-trace" },
  4: { stage: 2, plate: "lattice", anchor: true },
  5: { stage: 2, plate: "tofu" },
  6: { stage: 2, plate: "emulsion" },
  7: { stage: 3, plate: "dumplings", anchor: true },
  8: { stage: 3, plate: "noodle-fried" },
  9: { stage: 3, plate: "crispy" },
  10: { stage: 4, plate: "model-fit", anchor: true },
  11: { stage: 4, plate: "design-space" },
  12: { stage: 4, plate: "inverse-design" },
};
