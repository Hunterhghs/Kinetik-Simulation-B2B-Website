import fs from "node:fs";
import path from "node:path";
import { chromium } from "playwright";

const ROOT = process.cwd();
const templatesDir = path.join(ROOT, "linkedin", "templates");
const outDir = path.join(ROOT, "linkedin", "export", "out");

function listTemplates() {
  return fs
    .readdirSync(templatesDir)
    .filter((f) => f.endsWith(".html"))
    .sort();
}

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

(async () => {
  ensureDir(outDir);
  const files = listTemplates();

  if (files.length === 0) {
    console.error("No HTML templates found in:", templatesDir);
    process.exit(1);
  }

  const browser = await chromium.launch();
  const page = await browser.newPage({
    viewport: { width: 1080, height: 1080 },
    deviceScaleFactor: 2,
  });

  for (const file of files) {
    const inputPath = path.join(templatesDir, file);
    const url = "file://" + inputPath;
    const outputPath = path.join(outDir, file.replace(/\.html$/, ".png"));

    await page.goto(url, { waitUntil: "load" });
    await page.waitForTimeout(250); // allow fonts/layout to settle
    await page.screenshot({ path: outputPath, fullPage: false });

    console.log("Exported:", outputPath);
  }

  await page.close();
  await browser.close();

  console.log("\nDone. PNGs written to:", outDir);
})().catch((err) => {
  console.error(err);
  process.exit(1);
});
