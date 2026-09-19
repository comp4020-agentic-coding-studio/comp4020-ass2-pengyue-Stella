import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

interface ApiNode {
  id: string;
  type: string;
  title: string;
  tags?: string[];
  related?: string[];
  spec?: string[];
  meta?: Record<string, unknown>;
}

interface CourseApi {
  course: { startDate: string; endDate: string };
  nodes: ApiNode[];
}

const api = JSON.parse(readFileSync(resolve("dist/api/index.json"), "utf8")) as CourseApi;
const modules = api.nodes.filter((node) => node.type === "sessions");

function readDist(path: string): string {
  return readFileSync(resolve("dist", path), "utf8");
}

describe("the 12 teaching modules", () => {
  it("has exactly 12 session (module) entries", () => {
    expect(modules.length).toBe(12);
  });

  it("uses each week number 1 through 12 exactly once", () => {
    const weeks = modules.map((m) => m.meta?.week).sort((a, b) => Number(a) - Number(b));
    expect(weeks).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
  });

  it("assigns every module a stage in 1-4, and uses all four stages", () => {
    const stages = new Set<number>();
    for (const m of modules) {
      const stage = m.meta?.stage;
      expect(typeof stage, `${m.id} has no stage`).toBe("number");
      expect(stage, `${m.id} stage out of range`).toBeGreaterThanOrEqual(1);
      expect(stage, `${m.id} stage out of range`).toBeLessThanOrEqual(4);
      stages.add(stage as number);
    }
    expect(stages).toEqual(new Set([1, 2, 3, 4]));
  });

  it("dates every module inside the teaching period", () => {
    for (const m of modules) {
      const date = String(m.meta?.date).slice(0, 10);
      expect(date, `${m.id} has no valid date`).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      expect(date >= api.course.startDate, `${m.id} falls before teaching starts`).toBe(true);
      expect(date <= api.course.endDate, `${m.id} falls after teaching ends`).toBe(true);
    }
  });

  it("gives every module a unique title", () => {
    const titles = modules.map((m) => m.title);
    expect(new Set(titles).size).toBe(titles.length);
  });

  it("gives every module a unique slug", () => {
    const slugs = modules.map((m) => m.id);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("gives every module at least one teacher, tag and related link", () => {
    for (const m of modules) {
      const teachers = (m.meta?.teachers ?? []) as unknown[];
      expect(Array.isArray(teachers) && teachers.length > 0, `${m.id} has no teacher`).toBe(true);
      expect((m.tags ?? []).length > 0, `${m.id} has no tags`).toBe(true);
      expect((m.related ?? []).length > 0, `${m.id} has no related links`).toBe(true);
    }
  });

  it("names the same four material regimes in Module 1's spec and body", () => {
    const REGIMES = ["fluid", "viscoelastic solid", "amorphous glass", "crystalline/semi-crystalline solid"];
    const module1 = modules.find((m) => m.id === "sessions/01-what-is-edible-matter");
    expect(module1, "sessions/01-what-is-edible-matter not found").toBeDefined();

    const specText = (module1?.spec ?? []).join(" ").toLowerCase();
    for (const regime of REGIMES) {
      expect(specText, `Module 1's frontmatter spec is missing the "${regime}" regime`).toContain(regime);
    }

    const html = readDist("sessions/01-what-is-edible-matter/index.html").toLowerCase();
    for (const regime of REGIMES) {
      expect(html, `Module 1's rendered body is missing the "${regime}" regime`).toContain(regime);
    }
  });

  it('names Stage 3 exactly "Transport, Kinetics and Transformation" on the modules index', () => {
    const html = readDist("sessions/index.html");
    expect(
      html,
      'dist/sessions/index.html does not contain the exact Stage 3 heading "Transport, Kinetics and Transformation"',
    ).toContain("Stage 3 · Transport, Kinetics and Transformation");
  });
});
