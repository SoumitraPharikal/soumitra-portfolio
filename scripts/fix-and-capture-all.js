import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const ARTIFACT_DIR = 'C:\\Users\\Soumitra\\.gemini\\antigravity\\brain\\4684b366-da0a-402d-88c3-b3888bacd40d\\screenshots';
const LOCAL_DIR = path.resolve('public/screenshots');

[ARTIFACT_DIR, LOCAL_DIR].forEach(dir => {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
});

async function saveElement(el, filename) {
  const localPath = path.join(LOCAL_DIR, filename);
  const artPath = path.join(ARTIFACT_DIR, filename);
  await el.screenshot({ path: localPath });
  fs.copyFileSync(localPath, artPath);
  console.log(`Saved element shot: ${filename}`);
}

async function run() {
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();

  async function ensureVisible() {
    await page.evaluate(() => {
      document.querySelectorAll('.reveal-up, .reveal-line').forEach(el => {
        el.classList.add('is-visible');
        el.style.opacity = '1';
        el.style.transform = 'none';
      });
    });
    await new Promise(r => setTimeout(r, 200));
  }

  // =========================================================================
  // 1. LEADERSHIP & INTERESTS (1440px & 390px, Dark & Light)
  // =========================================================================
  console.log('Capturing Leadership Interests...');
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('http://localhost:4321/leadership', { waitUntil: 'networkidle0' });
  await ensureVisible();

  let interestsSec = await page.$('section[aria-label="Interests and Intellectual Rabbit Holes"]');
  if (interestsSec) {
    await saveElement(interestsSec, 'leadership-interests-1440-dark.png');

    await page.evaluate(() => {
      document.documentElement.setAttribute('data-theme', 'light');
    });
    await ensureVisible();
    interestsSec = await page.$('section[aria-label="Interests and Intellectual Rabbit Holes"]');
    await saveElement(interestsSec, 'leadership-interests-1440-light.png');
  }

  // Mobile Leadership
  await page.setViewport({ width: 390, height: 844, isMobile: true });
  await page.goto('http://localhost:4321/leadership', { waitUntil: 'networkidle0' });
  await ensureVisible();

  interestsSec = await page.$('section[aria-label="Interests and Intellectual Rabbit Holes"]');
  if (interestsSec) {
    await saveElement(interestsSec, 'leadership-interests-390-dark.png');

    await page.evaluate(() => {
      document.documentElement.setAttribute('data-theme', 'light');
    });
    await ensureVisible();
    interestsSec = await page.$('section[aria-label="Interests and Intellectual Rabbit Holes"]');
    await saveElement(interestsSec, 'leadership-interests-390-light.png');
  }

  // =========================================================================
  // 2. ABOUT PAGE: SCORES & 3D TELESCOPE (1440px & 390px, Dark & Light)
  // =========================================================================
  console.log('Capturing About Page...');
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('http://localhost:4321/about', { waitUntil: 'networkidle0' });
  await ensureVisible();
  await new Promise(r => setTimeout(r, 600));

  let aboutGrid = await page.$('.about-grid-section');
  if (aboutGrid) {
    await saveElement(aboutGrid, 'about-timeline-1440-dark.png');

    await page.evaluate(() => {
      document.documentElement.setAttribute('data-theme', 'light');
    });
    await ensureVisible();
    await new Promise(r => setTimeout(r, 400));
    aboutGrid = await page.$('.about-grid-section');
    await saveElement(aboutGrid, 'about-timeline-1440-light.png');
  }

  // Mobile About Page
  await page.setViewport({ width: 390, height: 844, isMobile: true });
  await page.goto('http://localhost:4321/about', { waitUntil: 'networkidle0' });
  await ensureVisible();
  await new Promise(r => setTimeout(r, 500));

  let journeyCol = await page.$('.journey-column');
  if (journeyCol) {
    await saveElement(journeyCol, 'about-timeline-390-dark.png');

    await page.evaluate(() => {
      document.documentElement.setAttribute('data-theme', 'light');
    });
    await ensureVisible();
    journeyCol = await page.$('.journey-column');
    await saveElement(journeyCol, 'about-timeline-390-light.png');
  }

  // =========================================================================
  // 3. HOMEPAGE MONOGRAPHS BENTO GRID (1440px & 390px, Dark & Light)
  // =========================================================================
  console.log('Capturing Homepage Monographs...');
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('http://localhost:4321/', { waitUntil: 'networkidle0' });
  await ensureVisible();
  await new Promise(r => setTimeout(r, 500));

  let monoSec = await page.$('section[aria-label="Featured Technical Monographs"]');
  if (monoSec) {
    await saveElement(monoSec, 'monographs-thumbnails-1440-dark.png');

    await page.evaluate(() => {
      document.documentElement.setAttribute('data-theme', 'light');
    });
    await ensureVisible();
    monoSec = await page.$('section[aria-label="Featured Technical Monographs"]');
    await saveElement(monoSec, 'monographs-thumbnails-1440-light.png');
  }

  // Mobile Monographs
  await page.setViewport({ width: 390, height: 844, isMobile: true });
  await page.goto('http://localhost:4321/', { waitUntil: 'networkidle0' });
  await ensureVisible();

  monoSec = await page.$('section[aria-label="Featured Technical Monographs"]');
  if (monoSec) {
    await saveElement(monoSec, 'monographs-thumbnails-390-dark.png');

    await page.evaluate(() => {
      document.documentElement.setAttribute('data-theme', 'light');
    });
    await ensureVisible();
    monoSec = await page.$('section[aria-label="Featured Technical Monographs"]');
    await saveElement(monoSec, 'monographs-thumbnails-390-light.png');
  }

  // =========================================================================
  // 4. TOMOGRAPHY 3D CT VOLUME (1440px Dark & Light)
  // =========================================================================
  console.log('Capturing Tomography 3D Volume...');
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('http://localhost:4321/projects/ct-imaging-tumour-detection', { waitUntil: 'networkidle0' });
  await ensureVisible();
  await new Promise(r => setTimeout(r, 800));

  let ctVol = await page.$('#ct-volume-container');
  if (ctVol) {
    await saveElement(ctVol, 'tomography-3d-volume-1440-dark.png');

    await page.evaluate(() => {
      document.documentElement.setAttribute('data-theme', 'light');
    });
    await new Promise(r => setTimeout(r, 400));
    ctVol = await page.$('#ct-volume-container');
    await saveElement(ctVol, 'tomography-3d-volume-1440-light.png');
  }

  await browser.close();
  console.log('ALL FIXES CAPTURED BEAUTIFULLY!');
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
