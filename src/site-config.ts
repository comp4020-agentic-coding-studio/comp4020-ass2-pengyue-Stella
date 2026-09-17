import { defineSiteConfig } from "astro-theme-university/types";
import { slopBranding } from "astro-theme-slop";

// The underlying collection and URL remain `sessions`; these labels are the
// language students see. SLOP3358 calls its weekly teaching sessions "modules"
// throughout, so that's what appears on every page a reader sees.
export const sessionLabels = {
  singular: "Module",
  plural: "Modules",
} as const;

export const graphCollections = ["sessions", "assessments", "lectures", "people"];

export const courseApiCollections = [
  ...graphCollections.map((key) => ({ key })),
  { key: "policies", dir: "pages/policies" },
];

export const siteConfig = defineSiteConfig({
  ...slopBranding,
  name: "Slop University",

  links: [
    { text: "Overview", href: "/overview/" },
    { text: sessionLabels.plural, href: "/sessions/" },
    { text: "Lectures", href: "/lectures/" },
    { text: "Labs", href: "/labs/" },
    { text: "Assessment", href: "/assessments/" },
    { text: "People", href: "/people/" },
    { text: "Policies", href: "/policies/" },
    { text: "Resources", href: "/resources/" },
    { text: "References", href: "/references/" },
  ],

  licence: "CC-BY-NC-SA-4.0",
});
