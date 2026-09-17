import { existsSync, readFileSync, readdirSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

interface ApiNode {
  id: string;
  type: string;
  title: string;
}

interface CourseApi {
  course: { code: string };
  nodes: ApiNode[];
}

const api = JSON.parse(readFileSync(resolve("dist/api/index.json"), "utf8")) as CourseApi;

// Filenames and slugs the template ships as sample content — none of these
// belong in a finished course, whatever replaced them.
const STARTER_SLUGS = [
  "sessions/01-getting-started",
  "sessions/02-first-review",
  "assessments/assignment-1",
  "assessments/final-project",
  "lectures/week-02",
];

const STARTER_DECK = "decks/week-01";

const PLACEHOLDER_STRINGS = ["lorem ipsum", "SLOP1358", "TODO:", "FIXME", "coming soon", "widget"];

function allDistHtml(): string[] {
  const files: string[] = [];
  const walk = (dir: string) => {
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
      const full = resolve(dir, entry.name);
      if (entry.isDirectory()) walk(full);
      else if (entry.name.endsWith(".html")) files.push(full);
    }
  };
  walk(resolve("dist"));
  return files;
}

describe("no leftover starter content", () => {
  it("replaces every sample slug the template ships", () => {
    const ids = new Set(api.nodes.map((n) => n.id));
    for (const slug of STARTER_SLUGS) {
      expect(ids.has(slug), `${slug} should have been replaced`).toBe(false);
      expect(existsSync(resolve(`dist/${slug}/index.html`)), `${slug} should not build`).toBe(false);
    }
  });

  it("replaces the sample deck", () => {
    expect(existsSync(resolve(`dist/${STARTER_DECK}/index.html`))).toBe(false);
  });

  it("uses the assigned course code consistently", () => {
    expect(api.course.code).toBe("SLOP3358");
  });

  it("contains no placeholder or lorem-ipsum text in any built page", () => {
    for (const file of allDistHtml()) {
      const html = readFileSync(file, "utf8").toLowerCase();
      for (const needle of PLACEHOLDER_STRINGS) {
        expect(html.includes(needle.toLowerCase()), `${file} contains "${needle}"`).toBe(false);
      }
    }
  });

  it("gives every session a real, non-generic title", () => {
    const sessions = api.nodes.filter((n) => n.type === "sessions");
    expect(sessions.length).toBe(12);
    for (const s of sessions) {
      expect(s.title.toLowerCase()).not.toMatch(/getting started|first review|lesson \d/);
    }
  });
});
