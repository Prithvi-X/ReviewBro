const puppeteer = require('puppeteer');
const path = require('path');

async function run() {
  console.log('Launching Edge browser via Puppeteer...');
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu']
  });

  const page = await browser.newPage();

  const viewports = [
    { name: 'desktop-1440', width: 1440, height: 900, isMobile: false },
    { name: 'mobile-390', width: 390, height: 844, isMobile: true },
    { name: 'mobile-430', width: 430, height: 932, isMobile: true },
    { name: 'tablet-768', width: 768, height: 1024, isMobile: false },
    { name: 'laptop-1024', width: 1024, height: 768, isMobile: false },
    { name: 'desktop-1280', width: 1280, height: 800, isMobile: false },
    { name: 'desktop-1440', width: 1440, height: 900, isMobile: false },
    { name: 'large-desktop-1920', width: 1920, height: 1080, isMobile: false }
  ];

  let anyOverflow = false;

  for (const vp of viewports) {
    console.log(`Setting viewport: ${vp.name} (${vp.width}x${vp.height})`);
    await page.setViewport({
      width: vp.width,
      height: vp.height,
      isMobile: vp.isMobile,
      deviceScaleFactor: 2
    });

    await page.goto('http://localhost:5173/', { waitUntil: 'networkidle2' });
    await page.evaluateHandle('document.fonts.ready');
    await new Promise(r => setTimeout(r, 1000));

    // Check horizontal scroll
    const hasHorizontalScroll = await page.evaluate(() => {
      return document.documentElement.scrollWidth > window.innerWidth;
    });
    console.log(`Viewport ${vp.name} horizontal scroll: ${hasHorizontalScroll ? 'YES (OVERFLOW!)' : 'NO (CLEAN)'}`);
    if (hasHorizontalScroll) anyOverflow = true;

    const outFile = path.join(__dirname, `screenshot-${vp.name}.png`);
    await page.screenshot({ path: outFile, fullPage: false });
    console.log(`Captured: ${outFile}`);

    // Capture full page for primary key viewports
    if (vp.name === 'desktop-1440' || vp.name === 'mobile-390') {
      const fullOutFile = path.join(__dirname, `screenshot-${vp.name}-full.png`);
      await page.screenshot({ path: fullOutFile, fullPage: true });
      console.log(`Captured full: ${fullOutFile}`);
    }
  }

  await browser.close();
  if (anyOverflow) {
    console.error('FAILED: Horizontal overflow detected in one or more viewports!');
    process.exit(1);
  }
  console.log('All 6 viewports verified with ZERO horizontal overflow!');
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
