import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const ARTIFACT_DIR = 'C:\\Users\\Soumitra\\.gemini\\antigravity\\brain\\4684b366-da0a-402d-88c3-b3888bacd40d\\screenshots';
const LOCAL_DIR = path.resolve('public/screenshots');

async function saveElement(el, filename) {
  const localPath = path.join(LOCAL_DIR, filename);
  const artPath = path.join(ARTIFACT_DIR, filename);
  await el.screenshot({ path: localPath });
  fs.copyFileSync(localPath, artPath);
  console.log(`Saved: ${filename}`);
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
  // 1. VERIFY /about (Desktop 1440px - Video Showcase & Rabbit Holes)
  // =========================================================================
  console.log('Capturing /about reorganized sections...');
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('http://localhost:4321/about', { waitUntil: 'domcontentloaded' });
  await new Promise(r => setTimeout(r, 1000));
  await ensureVisible();

  // Fellowship Varta on /about
  let mediaSec = await page.$('#media');
  if (mediaSec) {
    await saveElement(mediaSec, 'about-fellowship-varta-1440-dark.png');
    await page.evaluate(() => {
      document.documentElement.setAttribute('data-theme', 'light');
    });
    await ensureVisible();
    mediaSec = await page.$('#media');
    await saveElement(mediaSec, 'about-fellowship-varta-1440-light.png');
  }

  // Interests Rabbit Holes on /about
  await page.evaluate(() => {
    document.documentElement.setAttribute('data-theme', 'dark');
  });
  await ensureVisible();
  let rabbitSec = await page.$('section[aria-label="Interests and Intellectual Rabbit Holes"]');
  if (rabbitSec) {
    await saveElement(rabbitSec, 'about-interests-1440-dark.png');
    await page.evaluate(() => {
      document.documentElement.setAttribute('data-theme', 'light');
    });
    await ensureVisible();
    rabbitSec = await page.$('section[aria-label="Interests and Intellectual Rabbit Holes"]');
    await saveElement(rabbitSec, 'about-interests-1440-light.png');
  }

  // =========================================================================
  // 2. VERIFY /leadership (Streamlined Institutional Governance)
  // =========================================================================
  console.log('Capturing /leadership streamlined governance...');
  await page.evaluate(() => {
    document.documentElement.setAttribute('data-theme', 'dark');
  });
  await page.goto('http://localhost:4321/leadership', { waitUntil: 'domcontentloaded' });
  await new Promise(r => setTimeout(r, 800));
  await ensureVisible();

  let leadContainer = await page.$('.monograph-container');
  if (leadContainer) {
    await page.screenshot({ path: path.join(LOCAL_DIR, 'leadership-streamlined-1440-dark.png'), fullPage: true });
    fs.copyFileSync(path.join(LOCAL_DIR, 'leadership-streamlined-1440-dark.png'), path.join(ARTIFACT_DIR, 'leadership-streamlined-1440-dark.png'));
    console.log('Saved: leadership-streamlined-1440-dark.png');

    await page.evaluate(() => {
      document.documentElement.setAttribute('data-theme', 'light');
    });
    await ensureVisible();
    await page.screenshot({ path: path.join(LOCAL_DIR, 'leadership-streamlined-1440-light.png'), fullPage: true });
    fs.copyFileSync(path.join(LOCAL_DIR, 'leadership-streamlined-1440-light.png'), path.join(ARTIFACT_DIR, 'leadership-streamlined-1440-light.png'));
    console.log('Saved: leadership-streamlined-1440-light.png');
  }

  await browser.close();
  console.log('ALL REORGANIZATION SCREENSHOTS CAPTURED!');
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
