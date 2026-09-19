import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

interface ApiNode {
  id: string;
  type: string;
  title: string;
  related?: string[];
  meta?: Record<string, unknown>;
}

interface CourseApi {
  nodes: ApiNode[];
}

const api = JSON.parse(readFileSync(resolve("dist/api/index.json"), "utf8")) as CourseApi;
const assessments = api.nodes.filter((node) => node.type === "assessments");
const sessions = api.nodes.filter((node) => node.type === "sessions");
const sessionById = new Map(sessions.map((s) => [s.id, s]));
const dateOnly = (value: unknown): string => String(value).slice(0, 10);

describe("assessments", () => {
  it("has exactly 4 assessment entries", () => {
    expect(assessments.length).toBe(4);
  });

  it("weights every assessment as a positive number", () => {
    for (const a of assessments) {
      expect(typeof a.meta?.weight, `${a.id} has no weight`).toBe("number");
      expect(a.meta?.weight, `${a.id} weight must be positive`).toBeGreaterThan(0);
    }
  });

  it("uses the specified weight split (25 / 20 / 20 / 35)", () => {
    const weights = assessments.map((a) => a.meta?.weight as number).sort((a, b) => a - b);
    expect(weights).toEqual([20, 20, 25, 35]);
  });

  it("sums assessment weights to exactly 100", () => {
    const total = assessments.reduce((sum, a) => sum + (a.meta?.weight as number), 0);
    expect(total).toBe(100);
  });

  it("gives every assessment a valid marking scheme", () => {
    for (const a of assessments) {
      const marking = a.meta?.marking as { mode?: string; criteria?: { weight: number }[] } | undefined;
      expect(marking, `${a.id} has no marking scheme`).toBeDefined();
      if (marking?.mode === "weighted") {
        const criteriaTotal = (marking.criteria ?? []).reduce((sum, c) => sum + c.weight, 0);
        expect(criteriaTotal, `${a.id} marking criteria must sum to 100`).toBe(100);
      } else {
        expect(marking?.mode, `${a.id} marking mode must be weighted or holistic`).toBe("holistic");
      }
    }
  });

  it("gives every assessment a unique title", () => {
    const titles = assessments.map((a) => a.title);
    expect(new Set(titles).size).toBe(titles.length);
  });

  it("never sets an assessment due before a session listed in its related field", () => {
    for (const a of assessments) {
      const due = dateOnly(a.meta?.due);
      const relatedSessions = (a.related ?? []).filter((id) => id.startsWith("sessions/"));
      for (const sessionId of relatedSessions) {
        const session = sessionById.get(sessionId);
        expect(session, `${a.id} lists related session ${sessionId}, which does not exist`).toBeDefined();
        const sessionDate = dateOnly(session?.meta?.date);
        expect(
          due >= sessionDate,
          `${a.id} is due ${due}, before its related session ${sessionId} (taught ${sessionDate})`,
        ).toBe(true);
      }
    }
  });

  it("schedules the Modelling Problem Sets assessment after Module 9", () => {
    const assessment = assessments.find((a) => a.id === "assessments/modelling-problem-sets");
    expect(assessment, "assessments/modelling-problem-sets not found").toBeDefined();
    const module9 = sessionById.get("sessions/09-phase-transitions-in-cooking");
    expect(module9, "sessions/09-phase-transitions-in-cooking not found").toBeDefined();
    const due = dateOnly(assessment?.meta?.due);
    const module9Date = dateOnly(module9?.meta?.date);
    expect(
      due > module9Date,
      `Modelling Problem Sets is due ${due}, which is not after Module 9 (taught ${module9Date})`,
    ).toBe(true);
  });
});
