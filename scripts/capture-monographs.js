import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const ARTIFACT_DIR = 'C:\\Users\\Soumitra\\.gemini\\antigravity\\brain\\4684b366-da0a-402d-88c3-b3888bacd40d\\screenshots';
const LOCAL_DIR = path.resolve('public/screenshots');

async function saveShot(page, filename, clip = null) {
  const options = { path: path.join(LOCAL_DIR, filename) };
  if (clip) options.clip = clip;
  await page.screenshot(options);
  fs.copyFileSync(path.join(LOCAL_DIR, filename), path.join(ARTIFACT_DIR, filename));
  console.log(`Saved: ${filename}`);
}

async function captureMonographs() {
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();

  // Desktop 1440px
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('http://localhost:4321/', { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 600));

  const monoGrid = await page.$('.monographs-bento-grid');
  if (monoGrid) {
    await page.evaluate((el) => el.scrollIntoView(), monoGrid);
    await new Promise(r => setTimeout(r, 500));
    const box = await monoGrid.boundingBox();

    // Dark Desktop
    await saveShot(page, 'monographs-thumbnails-1440-dark.png', {
      x: 0,
      y: box.y - 40,
      width: 1440,
      height: Math.min(box.height + 80, 850)
    });

    // Light Desktop
    await page.evaluate(() => {
      document.documentElement.setAttribute('data-theme', 'light');
    });
    await new Promise(r => setTimeout(r, 400));
    await saveShot(page, 'monographs-thumbnails-1440-light.png', {
      x: 0,
      y: box.y - 40,
      width: 1440,
      height: Math.min(box.height + 80, 850)
    });
  }

  // Mobile 390px
  await page.setViewport({ width: 390, height: 844, isMobile: true });
  await page.goto('http://localhost:4321/', { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 500));

  const mobileGrid = await page.$('.monographs-bento-grid');
  if (mobileGrid) {
    await page.evaluate((el) => el.scrollIntoView(), mobileGrid);
    await new Promise(r => setTimeout(r, 500));
    const mBox = await mobileGrid.boundingBox();

    // Dark Mobile
    await saveShot(page, 'monographs-thumbnails-390-dark.png', {
      x: 0,
      y: mBox.y - 20,
      width: 390,
      height: Math.min(mBox.height + 40, 840)
    });

    // Light Mobile
    await page.evaluate(() => {
      document.documentElement.setAttribute('data-theme', 'light');
    });
    await new Promise(r => setTimeout(r, 400));
    await saveShot(page, 'monographs-thumbnails-390-light.png', {
      x: 0,
      y: mBox.y - 20,
      width: 390,
      height: Math.min(mBox.height + 40, 840)
    });
  }

  await browser.close();
  console.log('MONOGRAPH THUMBNAIL SCREENSHOTS CAPTURED!');
}

captureMonographs().catch(err => {
  console.error(err);
  process.exit(1);
});
