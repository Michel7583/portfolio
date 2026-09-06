const { chromium } = require("playwright");
(async () => {
  const browser = await chromium.launch({ channel: "chrome", headless: true });
  const page = await browser.newPage();
  const shots = [
    { width: 1024, path: "/" },
    { width: 1280, path: "/" },
    { width: 1440, path: "/" },
    { width: 1280, path: "/contact" },
  ];
  for (const shot of shots) {
    await page.setViewportSize({ width: shot.width, height: 900 });
    await page.goto("http://localhost:3000" + shot.path, { waitUntil: "networkidle", timeout: 30000 });
    if (shot.path === "/") {
      await page.evaluate(() => document.querySelector("footer")?.scrollIntoView({ block: "center" }));
      await page.waitForTimeout(300);
      await page.locator("footer").screenshot({ path: `D:/Cursor-company/.tmp-verify/loc-footer-${shot.width}.png` });
      const overlap = await page.evaluate(() => {
        const email = document.querySelector("footer a[href^='mailto:']");
        const linkedin = [...document.querySelectorAll("footer a")].find((a) => a.textContent.includes("LinkedIn"));
        if (!email || !linkedin) return { error: "missing" };
        const a = email.getBoundingClientRect();
        const b = linkedin.getBoundingClientRect();
        const hit = a.right > b.left && a.left < b.right && a.bottom > b.top && a.top < b.bottom;
        return { hit, gap: Math.round(b.left - a.right) };
      });
      console.log("footer", shot.width, JSON.stringify(overlap));
    } else {
      await page.evaluate(() => window.scrollTo(0, 420));
      await page.waitForTimeout(300);
      await page.screenshot({ path: `D:/Cursor-company/.tmp-verify/loc-contact-${shot.width}.png` });
    }
  }
  await browser.close();
})().catch((e) => { console.error(e); process.exit(1); });
