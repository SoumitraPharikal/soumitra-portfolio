import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

async function capture() {
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('http://localhost:4321/', { waitUntil: 'networkidle0' });

  const outDir = path.resolve('screenshots');
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

  await page.screenshot({ path: path.join(outDir, 'test-desktop-dark.png') });

  // Switch to light mode
  await page.evaluate(() => {
    document.documentElement.setAttribute('data-theme', 'light');
  });
  await new Promise(r => setTimeout(r, 400));
  await page.screenshot({ path: path.join(outDir, 'test-desktop-light.png') });

  await browser.close();
  console.log('Screenshots captured successfully!');
}

capture().catch(err => {
  console.error(err);
  process.exit(1);
});
