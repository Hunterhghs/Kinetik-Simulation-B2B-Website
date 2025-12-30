export const SITE_NAME = "Kinetik";
export const DEFAULT_DESCRIPTION =
  "Kinetik turns enterprise B2B signals into RevOps-ready intelligence and workflows — so teams can prioritize, route, and measure revenue motions with confidence.";

export function getSiteUrl() {
  return process.env.NEXT_PUBLIC_SITE_URL?.trim() || "https://kinetikb2b.ai";
}
