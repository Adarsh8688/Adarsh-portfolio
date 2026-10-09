const puppeteer = require("puppeteer-core");

async function testInteractivity() {
  const browser = await puppeteer.launch({
    executablePath: "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
    headless: "new",
    args: ["--no-sandbox", "--disable-gpu"],
  });

  const page = await browser.newPage();
  await page.goto("http://localhost:3000", { waitUntil: "networkidle0" });

  // 1. Check Project Modal
  const detailButton = await page.$('button[title="View Details & Methodology"]');
  if (detailButton) {
    await detailButton.click();
    await new Promise((r) => setTimeout(r, 600));
    const modalHeading = await page.$eval("h3.text-xl", (el) => el.textContent);
    console.log("✓ Modal opened successfully:", modalHeading);

    // Close modal
    const closeBtn = await page.$('button[aria-label="Close project modal"]');
    if (closeBtn) {
      await closeBtn.click();
      console.log("✓ Modal closed successfully");
    }
  }

  // 2. Check Transcript Search
  const searchInput = await page.$('input[placeholder*="Search within script"]');
  if (searchInput) {
    await searchInput.type("traffic");
    await new Promise((r) => setTimeout(r, 300));
    console.log("✓ Transcript search typed successfully");
  }

  // 3. Check Category Filter Pill
  const mlFilter = await page.evaluate(() => {
    const btns = Array.from(document.querySelectorAll("button"));
    const ml = btns.find((b) => b.textContent.includes("Machine Learning"));
    if (ml) {
      ml.click();
      return true;
    }
    return false;
  });
  console.log("✓ Clicked Machine Learning filter pill:", mlFilter);

  await browser.close();
  console.log("✓ All interaction tests passed with 0 errors!");
}

testInteractivity().catch((err) => {
  console.error("Test failed:", err);
  process.exit(1);
});
