import puppeteer from 'puppeteer-core';

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

async function test() {
  const browser = await puppeteer.launch({ executablePath: CHROME_PATH, headless: true });
  const page = await browser.newPage();
  await page.goto('http://localhost:4321/', { waitUntil: 'networkidle0' });

  // Click the theme toggle button directly!
  await page.click('#theme-toggle-btn');
  await new Promise(r => setTimeout(r, 300));

  const res = await page.evaluate(() => {
    const el = document.querySelector('.icon-moon');
    const sun = document.querySelector('.icon-sun');
    return {
      themeAttr: document.documentElement.getAttribute('data-theme'),
      moonColor: window.getComputedStyle(el).color,
      moonOpacity: window.getComputedStyle(el).opacity,
      sunColor: window.getComputedStyle(sun).color,
      sunOpacity: window.getComputedStyle(sun).opacity
    };
  });

  console.log('Toggle after click:', res);
  await browser.close();
}

test().catch(console.error);
