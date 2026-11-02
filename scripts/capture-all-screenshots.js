import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const ARTIFACT_DIR = 'C:\\Users\\Soumitra\\.gemini\\antigravity\\brain\\4684b366-da0a-402d-88c3-b3888bacd40d\\screenshots';
const LOCAL_DIR = path.resolve('public/screenshots');

[ARTIFACT_DIR, LOCAL_DIR].forEach(dir => {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
});

async function saveShot(page, filename, clip = null) {
  const options = { path: path.join(LOCAL_DIR, filename) };
  if (clip) options.clip = clip;
  await page.screenshot(options);
  fs.copyFileSync(path.join(LOCAL_DIR, filename), path.join(ARTIFACT_DIR, filename));
  console.log(`Saved: ${filename}`);
}

async function captureAll() {
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();

  // =========================================================================
  // 1. HOMEPAGE HERO & INSTRUMENT PLATE (Desktop 1440px)
  // =========================================================================
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('http://localhost:4321/', { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 600));

  // Dark Mode Hero
  await saveShot(page, 'homepage-hero-1440-dark.png', { x: 0, y: 0, width: 1440, height: 750 });

  // Light Mode Hero
  await page.evaluate(() => {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('soumitra-theme-v2', 'light');
  });
  await new Promise(r => setTimeout(r, 400));
  await saveShot(page, 'homepage-hero-1440-light.png', { x: 0, y: 0, width: 1440, height: 750 });

  // Switch back to Dark Mode
  await page.evaluate(() => {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('soumitra-theme-v2', 'dark');
  });
  await new Promise(r => setTimeout(r, 400));

  // Instrument Plate Modes in Dark Mode
  const plateEl = await page.$('#physics-instrument-container');
  if (plateEl) {
    const box = await plateEl.boundingBox();

    // Mode 01: Photometry
    await saveShot(page, 'instrument-plate-photometry-1440-dark.png', box);

    // Mode 02: N-Body
    await page.click('#btn-mode-nbody');
    await new Promise(r => setTimeout(r, 400));
    await saveShot(page, 'instrument-plate-nbody-1440-dark.png', box);

    // Mode 03: Radon CT
    await page.click('#btn-mode-radon');
    await new Promise(r => setTimeout(r, 400));
    await saveShot(page, 'instrument-plate-radon-1440-dark.png', box);

    // Mode 04: Monte Carlo
    await page.click('#btn-mode-mc');
    await new Promise(r => setTimeout(r, 400));
    await saveShot(page, 'instrument-plate-mc-1440-dark.png', box);

    // Mode 01 in Light Mode
    await page.click('#btn-mode-photometry');
    await page.evaluate(() => {
      document.documentElement.setAttribute('data-theme', 'light');
    });
    await new Promise(r => setTimeout(r, 400));
    await saveShot(page, 'instrument-plate-photometry-1440-light.png', box);
  }

  // =========================================================================
  // 2. MONOGRAPH THUMBNAIL CARDS (Desktop 1440px & Mobile 390px)
  // =========================================================================
  const monoSec = await page.$('#monographs');
  if (monoSec) {
    await page.evaluate((el) => el.scrollIntoView(), monoSec);
    await new Promise(r => setTimeout(r, 500));
    const monoBox = await monoSec.boundingBox();

    // Light Mode Monograph Cards
    await saveShot(page, 'monographs-thumbnails-1440-light.png', {
      x: monoBox.x,
      y: monoBox.y,
      width: 1440,
      height: Math.min(monoBox.height, 700)
    });

    // Dark Mode Monograph Cards
    await page.evaluate(() => {
      document.documentElement.setAttribute('data-theme', 'dark');
    });
    await new Promise(r => setTimeout(r, 400));
    await saveShot(page, 'monographs-thumbnails-1440-dark.png', {
      x: monoBox.x,
      y: monoBox.y,
      width: 1440,
      height: Math.min(monoBox.height, 700)
    });
  }

  // =========================================================================
  // 3. HOMEPAGE & MONOGRAPHS ON MOBILE (390px)
  // =========================================================================
  await page.setViewport({ width: 390, height: 844, isMobile: true });
  await page.goto('http://localhost:4321/', { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 500));

  // Mobile Hero Dark & Light
  await saveShot(page, 'homepage-hero-390-dark.png', { x: 0, y: 0, width: 390, height: 750 });
  await page.evaluate(() => {
    document.documentElement.setAttribute('data-theme', 'light');
  });
  await new Promise(r => setTimeout(r, 400));
  await saveShot(page, 'homepage-hero-390-light.png', { x: 0, y: 0, width: 390, height: 750 });

  // Mobile Monograph Cards
  const monoMobile = await page.$('#monographs');
  if (monoMobile) {
    await page.evaluate((el) => el.scrollIntoView(), monoMobile);
    await new Promise(r => setTimeout(r, 400));
    const mBox = await monoMobile.boundingBox();
    await saveShot(page, 'monographs-thumbnails-390-light.png', {
      x: mBox.x,
      y: mBox.y,
      width: 390,
      height: Math.min(mBox.height, 800)
    });

    await page.evaluate(() => {
      document.documentElement.setAttribute('data-theme', 'dark');
    });
    await new Promise(r => setTimeout(r, 400));
    await saveShot(page, 'monographs-thumbnails-390-dark.png', {
      x: mBox.x,
      y: mBox.y,
      width: 390,
      height: Math.min(mBox.height, 800)
    });
  }

  // =========================================================================
  // 4. LEADERSHIP & INTERESTS PAGE (/leadership)
  // =========================================================================
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('http://localhost:4321/leadership', { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 500));

  // Find Section 04: Interests
  const interestsSec = await page.$('section[aria-label="Interests and Intellectual Rabbit Holes"]');
  if (interestsSec) {
    await page.evaluate((el) => el.scrollIntoView(), interestsSec);
    await new Promise(r => setTimeout(r, 500));
    const intBox = await interestsSec.boundingBox();

    // Dark Mode Desktop
    await saveShot(page, 'leadership-interests-1440-dark.png', intBox);

    // Light Mode Desktop
    await page.evaluate(() => {
      document.documentElement.setAttribute('data-theme', 'light');
    });
    await new Promise(r => setTimeout(r, 400));
    await saveShot(page, 'leadership-interests-1440-light.png', intBox);
  }

  // Mobile Interests (390px)
  await page.setViewport({ width: 390, height: 844, isMobile: true });
  await page.goto('http://localhost:4321/leadership', { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 500));
  const intMobile = await page.$('section[aria-label="Interests and Intellectual Rabbit Holes"]');
  if (intMobile) {
    await page.evaluate((el) => el.scrollIntoView(), intMobile);
    await new Promise(r => setTimeout(r, 500));
    const mIntBox = await intMobile.boundingBox();

    await saveShot(page, 'leadership-interests-390-dark.png', {
      x: mIntBox.x,
      y: mIntBox.y,
      width: 390,
      height: Math.min(mIntBox.height, 840)
    });

    await page.evaluate(() => {
      document.documentElement.setAttribute('data-theme', 'light');
    });
    await new Promise(r => setTimeout(r, 400));
    await saveShot(page, 'leadership-interests-390-light.png', {
      x: mIntBox.x,
      y: mIntBox.y,
      width: 390,
      height: Math.min(mIntBox.height, 840)
    });
  }

  // =========================================================================
  // 5. ABOUT PAGE: TIMELINE & 3D TELESCOPE (/about)
  // =========================================================================
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('http://localhost:4321/about', { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 600));

  // Education Timeline & Telescope
  const timelineSec = await page.$('.about-grid-section');
  if (timelineSec) {
    await page.evaluate((el) => el.scrollIntoView(), timelineSec);
    await new Promise(r => setTimeout(r, 600));
    const timeBox = await timelineSec.boundingBox();

    // Dark Mode Desktop
    await saveShot(page, 'about-timeline-1440-dark.png', {
      x: timeBox.x,
      y: timeBox.y,
      width: 1440,
      height: Math.min(timeBox.height, 850)
    });

    // Light Mode Desktop
    await page.evaluate(() => {
      document.documentElement.setAttribute('data-theme', 'light');
    });
    await new Promise(r => setTimeout(r, 400));
    await saveShot(page, 'about-timeline-1440-light.png', {
      x: timeBox.x,
      y: timeBox.y,
      width: 1440,
      height: Math.min(timeBox.height, 850)
    });
  }

  // Mobile About Page (390px)
  await page.setViewport({ width: 390, height: 844, isMobile: true });
  await page.goto('http://localhost:4321/about', { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 500));
  const timeMobile = await page.$('.journey-column');
  if (timeMobile) {
    await page.evaluate((el) => el.scrollIntoView(), timeMobile);
    await new Promise(r => setTimeout(r, 500));
    const mTimeBox = await timeMobile.boundingBox();

    await saveShot(page, 'about-timeline-390-dark.png', {
      x: mTimeBox.x,
      y: mTimeBox.y,
      width: 390,
      height: Math.min(mTimeBox.height, 840)
    });

    await page.evaluate(() => {
      document.documentElement.setAttribute('data-theme', 'light');
    });
    await new Promise(r => setTimeout(r, 400));
    await saveShot(page, 'about-timeline-390-light.png', {
      x: mTimeBox.x,
      y: mTimeBox.y,
      width: 390,
      height: Math.min(mTimeBox.height, 840)
    });
  }

  // =========================================================================
  // 6. TOMOGRAPHY PROJECT 3D VOLUME (/projects/ct-imaging-tumour-detection)
  // =========================================================================
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('http://localhost:4321/projects/ct-imaging-tumour-detection', { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 700));

  const ctWidget = await page.$('#ct-volume-container');
  if (ctWidget) {
    await page.evaluate((el) => el.scrollIntoView(), ctWidget);
    await new Promise(r => setTimeout(r, 600));
    const ctBox = await ctWidget.boundingBox();
    await saveShot(page, 'tomography-3d-volume-1440-dark.png', ctBox);
  }

  await browser.close();
  console.log('ALL SCREENSHOTS CAPTURED SUCCESSFULLY!');
}

captureAll().catch(err => {
  console.error('Screenshot capture failed:', err);
  process.exit(1);
});
