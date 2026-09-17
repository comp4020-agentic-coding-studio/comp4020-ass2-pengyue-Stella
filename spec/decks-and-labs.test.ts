import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

interface ApiNode {
  id: string;
  type: string;
  meta?: Record<string, unknown>;
}

interface CourseApi {
  nodes: ApiNode[];
}

const api = JSON.parse(readFileSync(resolve("dist/api/index.json"), "utf8")) as CourseApi;

function readDist(path: string): string {
  return readFileSync(resolve("dist", path), "utf8");
}

describe("labs", () => {
  it("builds exactly two instrument pages", () => {
    expect(existsSync(resolve("dist/labs/virtual-rheometer/index.html"))).toBe(true);
    expect(existsSync(resolve("dist/labs/crispness-phase-diagram/index.html"))).toBe(true);
  });

  it("lists both instruments from the labs index", () => {
    const html = readDist("labs/index.html");
    expect(html).toContain('href="/comp4020-ass2-pengyue-Stella/labs/virtual-rheometer/"');
    expect(html).toContain('href="/comp4020-ass2-pengyue-Stella/labs/crispness-phase-diagram/"');
  });

  it("links the Crispness Phase Diagram from the modules that introduce it", () => {
    const module9 = readDist("sessions/09-phase-transitions-in-cooking/index.html");
    const module11 = readDist("sessions/11-the-crispness-design-space/index.html");
    expect(module11).toContain('href="/comp4020-ass2-pengyue-Stella/labs/crispness-phase-diagram/"');
    expect(module9 + module11).toMatch(/labs\/crispness-phase-diagram/);
  });

  it("links the Crispness Phase Diagram from the assessment that uses it", () => {
    const portfolio = readDist("assessments/laboratory-portfolio/index.html");
    expect(portfolio).toContain('href="/comp4020-ass2-pengyue-Stella/labs/crispness-phase-diagram/"');
    expect(portfolio).toContain('href="/comp4020-ass2-pengyue-Stella/labs/virtual-rheometer/"');
  });
});

describe("lecture deck", () => {
  it("builds the required deck", () => {
    expect(existsSync(resolve("dist/decks/crispness-metastable/index.html"))).toBe(true);
  });

  it("attaches the deck to week 10's lecture via the slides field", () => {
    const week10 = api.nodes.find((node) => node.id === "lectures/week-10");
    expect(week10?.meta?.slides).toBe("/decks/crispness-metastable/");
  });

  it("links to the deck from the week-10 lecture page", () => {
    const html = readDist("lectures/week-10/index.html");
    expect(html).toContain('href="/comp4020-ass2-pengyue-Stella/decks/crispness-metastable/"');
  });

  it("links back to the instrument and its module from the deck", () => {
    const html = readDist("decks/crispness-metastable/index.html");
    expect(html).toContain("crispness-phase-diagram");
    expect(html).toContain("crispness-design-space");
  });
});
