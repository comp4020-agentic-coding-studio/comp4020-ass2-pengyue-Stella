import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

interface ApiNode {
  id: string;
  type: string;
  meta?: Record<string, unknown>;
  body?: string;
}

interface CourseApi {
  course: {
    startDate: string;
    endDate: string;
  };
  nodes: ApiNode[];
}

const api = JSON.parse(readFileSync(resolve("dist/api/index.json"), "utf8")) as CourseApi;
const dateOnly = (value: unknown): string => String(value).slice(0, 10);

describe("course data integrity", () => {
  it("keeps every scheduled date inside the teaching period", () => {
    const dated = api.nodes.filter((node) =>
      ["sessions", "lectures", "assessments"].includes(node.type),
    );
    for (const node of dated) {
      const raw = node.type === "assessments" ? node.meta?.due : node.meta?.date;
      const date = dateOnly(raw);
      expect(date, `${node.id} has no date`).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      expect(date >= api.course.startDate, `${node.id} falls before teaching starts`).toBe(true);
      expect(date <= api.course.endDate, `${node.id} falls after teaching ends`).toBe(true);
    }
  });

  it("dates every lecture the same as the module sharing its week", () => {
    const lectures = api.nodes.filter((node) => node.type === "lectures");
    const modules = api.nodes.filter((node) => node.type === "sessions");
    for (const lecture of lectures) {
      const week = lecture.meta?.week;
      const module = modules.find((m) => m.meta?.week === week);
      expect(module, `no module found for ${lecture.id}'s week ${week}`).toBeDefined();
      expect(
        dateOnly(lecture.meta?.date),
        `${lecture.id} (week ${week}) is dated differently from its module ${module?.id}`,
      ).toBe(dateOnly(module?.meta?.date));
    }
  });
});
