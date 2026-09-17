import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

interface ApiNode {
  id: string;
  type: string;
  title: string;
  meta?: Record<string, unknown>;
}

interface CourseApi {
  nodes: ApiNode[];
}

const api = JSON.parse(readFileSync(resolve("dist/api/index.json"), "utf8")) as CourseApi;
const assessments = api.nodes.filter((node) => node.type === "assessments");

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
});
