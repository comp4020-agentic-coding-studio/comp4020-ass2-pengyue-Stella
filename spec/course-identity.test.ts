import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

interface CourseApi {
  course: {
    code: string;
    title: string;
    description: string;
    level: number;
    tags: string[];
    startDate: string;
    endDate: string;
  };
}

const api = JSON.parse(readFileSync(resolve("dist/api/index.json"), "utf8")) as CourseApi;

describe("course identity", () => {
  it("keeps the assigned course code SLOP3358", () => {
    expect(api.course.code).toBe("SLOP3358");
  });

  it("keeps the assigned final three digits (358)", () => {
    expect(api.course.code.slice(-3)).toBe("358");
  });

  it("reports a third-year level", () => {
    expect(api.course.level).toBe(3);
  });

  it("has a non-empty title and description", () => {
    expect(api.course.title.length).toBeGreaterThan(0);
    expect(api.course.description.length).toBeGreaterThan(40);
  });

  it("has at least one tag", () => {
    expect(Array.isArray(api.course.tags)).toBe(true);
    expect(api.course.tags.length).toBeGreaterThan(0);
  });

  it("has a teaching period where start precedes end", () => {
    expect(api.course.startDate < api.course.endDate).toBe(true);
  });
});
