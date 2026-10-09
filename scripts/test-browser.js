const puppeteer = require("puppeteer-core");
const path = require("path");
const fs = require("fs");

const EDGE_PATH = "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";
const OUTPUT_DIR = "C:\\Users\\mamid\\.gemini\\antigravity\\brain\\e2bba1eb-56b6-4dcd-9a2f-628deaed8351\\screenshots";

async function runBrowserTests() {
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  const browser = await puppeteer.launch({
    executablePath: EDGE_PATH,
    headless: "new",
    args: ["--no-sandbox", "--disable-setuid-sandbox", "--disable-gpu"],
  });

  const page = await browser.newPage();

  const consoleLogs = [];
  const errors = [];

  page.on("console", (msg) => {
    if (msg.type() === "error") {
      errors.push(msg.text());
    } else {
      consoleLogs.push(`[${msg.type()}] ${msg.text()}`);
    }
  });

  page.on("pageerror", (err) => {
    errors.push(err.toString());
  });

  console.log("Navigating to http://localhost:3000...");
  await page.goto("http://localhost:3000", { waitUntil: "networkidle0", timeout: 15000 });

  // 1. Desktop Test (1280 x 900)
  await page.setViewport({ width: 1280, height: 900 });
  await new Promise((r) => setTimeout(r, 1000));
  await page.screenshot({ path: path.join(OUTPUT_DIR, "desktop-hero.png"), fullPage: false });
  console.log("Captured desktop-hero.png");

  // Scroll to Video Section
  await page.evaluate(() => {
    document.getElementById("video")?.scrollIntoView();
  });
  await new Promise((r) => setTimeout(r, 800));
  await page.screenshot({ path: path.join(OUTPUT_DIR, "desktop-video.png"), fullPage: false });
  console.log("Captured desktop-video.png");

  // Scroll to Projects Section
  await page.evaluate(() => {
    document.getElementById("projects")?.scrollIntoView();
  });
  await new Promise((r) => setTimeout(r, 800));
  await page.screenshot({ path: path.join(OUTPUT_DIR, "desktop-projects.png"), fullPage: false });
  console.log("Captured desktop-projects.png");

  // Scroll to Skills Section
  await page.evaluate(() => {
    document.getElementById("skills")?.scrollIntoView();
  });
  await new Promise((r) => setTimeout(r, 800));
  await page.screenshot({ path: path.join(OUTPUT_DIR, "desktop-skills.png"), fullPage: false });
  console.log("Captured desktop-skills.png");

  // Scroll to About & Contact
  await page.evaluate(() => {
    document.getElementById("contact")?.scrollIntoView();
  });
  await new Promise((r) => setTimeout(r, 800));
  await page.screenshot({ path: path.join(OUTPUT_DIR, "desktop-contact.png"), fullPage: false });
  console.log("Captured desktop-contact.png");

  // 2. Mobile Test (390 x 844 iPhone 14 style)
  await page.setViewport({ width: 390, height: 844, isMobile: true, hasTouch: true });
  await page.evaluate(() => window.scrollTo(0, 0));
  await new Promise((r) => setTimeout(r, 800));
  await page.screenshot({ path: path.join(OUTPUT_DIR, "mobile-hero.png"), fullPage: false });
  console.log("Captured mobile-hero.png");

  // Mobile Projects
  await page.evaluate(() => {
    document.getElementById("projects")?.scrollIntoView();
  });
  await new Promise((r) => setTimeout(r, 800));
  await page.screenshot({ path: path.join(OUTPUT_DIR, "mobile-projects.png"), fullPage: false });
  console.log("Captured mobile-projects.png");

  // Full Page Screenshots
  await page.setViewport({ width: 1280, height: 900 });
  await page.screenshot({ path: path.join(OUTPUT_DIR, "fullpage-desktop.png"), fullPage: true });
  console.log("Captured fullpage-desktop.png");

  await browser.close();

  console.log("\n=== BROWSER TEST RESULTS ===");
  console.log(`Console Errors: ${errors.length}`);
  if (errors.length > 0) {
    console.log("Errors detected:", errors);
  } else {
    console.log("No console or page errors detected!");
  }
}

runBrowserTests().catch((err) => {
  console.error("Test execution failed:", err);
  process.exit(1);
});
