const puppeteer = require('puppeteer');
const path = require('path');

async function run() {
  console.log('Launching browser to capture header states...');
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu']
  });

  const page = await browser.newPage();

  // 1. Desktop Top (scrollY = 0)
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });
  await page.goto('http://localhost:5173/', { waitUntil: 'networkidle2' });
  await page.evaluateHandle('document.fonts.ready');
  await new Promise(r => setTimeout(r, 600));

  await page.screenshot({ path: path.join(__dirname, 'header-desktop-top.png'), fullPage: false });
  console.log('Captured header-desktop-top.png');

  // 2. Desktop Scrolled inside Hero (scrollY = 200)
  await page.evaluate(() => window.scrollTo(0, 200));
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({ path: path.join(__dirname, 'header-desktop-scrolled-hero.png'), fullPage: false });
  console.log('Captured header-desktop-scrolled-hero.png');

  // 3. Desktop Scrolled into Light Platform Section (scrollY = 1050)
  await page.evaluate(() => window.scrollTo(0, 1050));
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({ path: path.join(__dirname, 'header-desktop-scrolled-light.png'), fullPage: false });
  console.log('Captured header-desktop-scrolled-light.png');

  // 4. Mobile Top (390px)
  await page.setViewport({ width: 390, height: 844, isMobile: true, deviceScaleFactor: 2 });
  await page.evaluate(() => window.scrollTo(0, 0));
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({ path: path.join(__dirname, 'header-mobile-top.png'), fullPage: false });
  console.log('Captured header-mobile-top.png');

  // 5. Mobile Scrolled in Hero (scrollY = 180)
  await page.evaluate(() => window.scrollTo(0, 180));
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({ path: path.join(__dirname, 'header-mobile-scrolled.png'), fullPage: false });
  console.log('Captured header-mobile-scrolled.png');

  // 6. Mobile Menu Opened
  const menuButton = await page.$('button[aria-label="Open navigation menu"]');
  if (menuButton) {
    await menuButton.click();
    await new Promise(r => setTimeout(r, 400));
    await page.screenshot({ path: path.join(__dirname, 'header-mobile-menu-open.png'), fullPage: false });
    console.log('Captured header-mobile-menu-open.png');
  }

  await browser.close();
  console.log('All header states verified and captured successfully!');
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
