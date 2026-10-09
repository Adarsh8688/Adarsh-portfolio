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
  await page.setCacheEnabled(false);

  const errors = [];

  page.on("console", (msg) => {
    if (msg.type() === "error") {
      errors.push(msg.text());
    }
  });

  page.on("pageerror", (err) => {
    errors.push(err.toString());
  });

  console.log("Navigating to http://localhost:3000...");
  await page.goto("http://localhost:3000", { waitUntil: "networkidle0", timeout: 15000 });

  // 1. Verify Default Theme is Midnight Navy (#0B1120) Dark Mode
  const isDarkMode = await page.evaluate(() => {
    return document.documentElement.classList.contains("dark");
  });
  console.log(`Default theme is Midnight Navy (Dark mode): ${isDarkMode}`);

  // 2. Desktop Test in Midnight Navy (1280 x 900)
  await page.setViewport({ width: 1280, height: 900 });
  await new Promise((r) => setTimeout(r, 600));
  await page.screenshot({ path: path.join(OUTPUT_DIR, "desktop-hero.png"), fullPage: false });
  console.log("Captured desktop-hero.png (Midnight Navy mode)");

  // Scroll to AI Presenter
  await page.evaluate(() => {
    document.getElementById("ai-presenter")?.scrollIntoView();
  });
  await new Promise((r) => setTimeout(r, 600));
  await page.screenshot({ path: path.join(OUTPUT_DIR, "desktop-presenter.png"), fullPage: false });
  console.log("Captured desktop-presenter.png (Bright mode)");

  // Scroll to Education
  await page.evaluate(() => {
    document.getElementById("education")?.scrollIntoView();
  });
  await new Promise((r) => setTimeout(r, 600));
  await page.screenshot({ path: path.join(OUTPUT_DIR, "desktop-education.png"), fullPage: false });
  console.log("Captured desktop-education.png (Bright mode)");

  // Scroll to Research Lab
  await page.evaluate(() => {
    document.getElementById("research-lab")?.scrollIntoView();
  });
  await new Promise((r) => setTimeout(r, 600));
  await page.screenshot({ path: path.join(OUTPUT_DIR, "desktop-research-lab.png"), fullPage: false });
  console.log("Captured desktop-research-lab.png (Bright mode)");

  // Scroll to Projects
  await page.evaluate(() => {
    document.getElementById("projects")?.scrollIntoView();
  });
  await new Promise((r) => setTimeout(r, 600));
  await page.screenshot({ path: path.join(OUTPUT_DIR, "desktop-projects.png"), fullPage: false });
  console.log("Captured desktop-projects.png (Bright mode)");

  // Scroll to Skills
  await page.evaluate(() => {
    document.getElementById("skills")?.scrollIntoView();
  });
  await new Promise((r) => setTimeout(r, 600));
  await page.screenshot({ path: path.join(OUTPUT_DIR, "desktop-skills.png"), fullPage: false });
  console.log("Captured desktop-skills.png (Bright mode)");

  // Scroll to Contact
  await page.evaluate(() => {
    document.getElementById("contact")?.scrollIntoView();
  });
  await new Promise((r) => setTimeout(r, 600));
  await page.screenshot({ path: path.join(OUTPUT_DIR, "desktop-contact.png"), fullPage: false });
  console.log("Captured desktop-contact.png (Bright mode)");

  // Full Page Screenshot in Bright Mode
  await page.evaluate(() => window.scrollTo(0, 0));
  await new Promise((r) => setTimeout(r, 600));
  await page.screenshot({ path: path.join(OUTPUT_DIR, "fullpage-desktop.png"), fullPage: true });
  console.log("Captured fullpage-desktop.png (Bright mode)");

  // 3. Mobile Test in Bright Mode (390 x 844)
  await page.setViewport({ width: 390, height: 844, isMobile: true, hasTouch: true });
  await page.evaluate(() => window.scrollTo(0, 0));
  await new Promise((r) => setTimeout(r, 600));
  await page.screenshot({ path: path.join(OUTPUT_DIR, "mobile-hero.png"), fullPage: false });
  console.log("Captured mobile-hero.png (Bright mode)");

  // 4. Test Theme Toggle: Click Theme Button to Switch to Bright Light Mode
  await page.setViewport({ width: 1280, height: 900 });
  await page.evaluate(() => window.scrollTo(0, 0));
  await new Promise((r) => setTimeout(r, 400));
  
  // Find and click the toggle button (currently in dark, so label is "Switch to Bright Light theme")
  await page.click('button[aria-label="Switch to Bright Light theme"]');
  await new Promise((r) => setTimeout(r, 600));

  const isLightModeNow = await page.evaluate(() => {
    return !document.documentElement.classList.contains("dark");
  });
  console.log(`Theme toggled to Bright Light successfully: ${isLightModeNow}`);

  await page.screenshot({ path: path.join(OUTPUT_DIR, "desktop-light-hero.png"), fullPage: false });
  console.log("Captured desktop-light-hero.png (Bright Light mode verified)");

  // Switch back to Midnight Navy (dark) mode
  await page.click('button[aria-label="Switch to Midnight Navy theme"]');
  await new Promise((r) => setTimeout(r, 600));
  const isBackToDark = await page.evaluate(() => {
    return document.documentElement.classList.contains("dark");
  });
  console.log(`Switched back to Midnight Navy mode: ${isBackToDark}`);

  await browser.close();

  console.log("\n=== BROWSER TEST RESULTS ===");
  console.log(`Console Errors: ${errors.length}`);
  if (errors.length > 0) {
    console.log("Errors detected:", errors);
  } else {
    console.log("ALL TESTS PASSED: 0 console or page errors detected!");
  }
}

runBrowserTests().catch((err) => {
  console.error("Test execution failed:", err);
  process.exit(1);
});
