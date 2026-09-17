export interface StageInfo {
  number: 1 | 2 | 3 | 4;
  title: string;
  description: string;
}

// The four-stage curriculum structure. Order here is the teaching order —
// see PLAN.md §2 for the reasoning behind the progression.
export const STAGES: StageInfo[] = [
  {
    number: 1,
    title: "Measuring Edible Matter",
    description:
      "How a physical chemist looks at a food material: definitions, flow curves and thermal signatures.",
  },
  {
    number: 2,
    title: "Structures and Networks",
    description: "What gives a food material its structure: gel networks, aggregated proteins, dispersed phases.",
  },
  {
    number: 3,
    title: "Flow, Interfaces and Transformation",
    description: "How that structure changes during cooking: transport, reaction kinetics and phase transitions.",
  },
  {
    number: 4,
    title: "Prediction and Material Design",
    description: "Fitting models to data, mapping a design space, and inverting the problem to engineer a texture.",
  },
];

export function stageInfo(stage: number): StageInfo {
  const found = STAGES.find((s) => s.number === stage);
  if (!found) throw new Error(`no stage ${stage}`);
  return found;
}
