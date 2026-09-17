import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

function readDist(path: string): string {
  return readFileSync(resolve("dist", path), "utf8");
}

const REQUIRED_PAGES = [
  "index.html",
  "overview/index.html",
  "sessions/index.html",
  "lectures/index.html",
  "labs/index.html",
  "assessments/index.html",
  "people/index.html",
  "policies/index.html",
  "resources/index.html",
  "references/index.html",
];

const MODULE_SLUGS = [
  "01-what-is-edible-matter",
  "02-rheology-i-flow-behaviour",
  "03-thermal-characterisation",
  "04-polymer-networks-i-starch-gels",
  "05-protein-aggregation-and-gelation",
  "06-colloids-and-emulsions",
  "07-heat-and-mass-transport",
  "08-reaction-kinetics",
  "09-phase-transitions-in-cooking",
  "10-building-predictive-models",
  "11-the-crispness-design-space",
  "12-inverse-material-design",
];

const ASSESSMENT_SLUGS = [
  "laboratory-portfolio",
  "modelling-problem-sets",
  "material-characterisation-report",
  "inverse-material-design-project",
];

describe("required pages", () => {
  it.each(REQUIRED_PAGES)("builds %s", (path) => {
    expect(existsSync(resolve("dist", path))).toBe(true);
  });

  it("builds all 12 module pages", () => {
    for (const slug of MODULE_SLUGS) {
      expect(existsSync(resolve(`dist/sessions/${slug}/index.html`)), slug).toBe(true);
    }
  });

  it("builds a page for every assessment", () => {
    for (const slug of ASSESSMENT_SLUGS) {
      expect(existsSync(resolve(`dist/assessments/${slug}/index.html`)), slug).toBe(true);
    }
  });

  it("groups the module index into exactly four named stages", () => {
    const html = readDist("sessions/index.html");
    for (let stage = 1; stage <= 4; stage++) {
      expect(html, `stage ${stage} heading missing`).toContain(`id="stage-${stage}"`);
    }
  });

  it("gives every module a page in the module index's stage groups", () => {
    const html = readDist("sessions/index.html");
    for (const slug of MODULE_SLUGS) {
      expect(html, `${slug} not linked from the module index`).toContain(`sessions/${slug}/`);
    }
  });

  it("lists both interactive instruments from the labs index", () => {
    const html = readDist("labs/index.html");
    expect(html).toContain("virtual-rheometer");
    expect(html).toContain("crispness-phase-diagram");
  });

  it("gives at least one staff member their own page", () => {
    const html = readDist("people/index.html");
    expect(html).toMatch(/people\/[a-z-]+\//);
  });
});

describe("navigation", () => {
  const REQUIRED_LINKS = [
    "/overview/",
    "/sessions/",
    "/lectures/",
    "/labs/",
    "/assessments/",
    "/people/",
    "/policies/",
    "/resources/",
    "/references/",
  ];

  it("exposes every required section from the main nav on the home page", () => {
    const html = readDist("index.html");
    const nav = html.match(/<nav class="at-nav"[\s\S]*?<\/nav>/)?.[0] ?? "";
    for (const link of REQUIRED_LINKS) {
      expect(nav, `${link} missing from main nav`).toContain(link);
    }
  });

  it("carries the same main nav onto a deep content page", () => {
    const html = readDist(`sessions/${MODULE_SLUGS[11]}/index.html`);
    const nav = html.match(/<nav class="at-nav"[\s\S]*?<\/nav>/)?.[0] ?? "";
    for (const link of REQUIRED_LINKS) {
      expect(nav, `${link} missing from nav on a module page`).toContain(link);
    }
  });
});
