const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

async function createOgImage() {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1200, height: 630, deviceScaleFactor: 1 });

  const logoBase64 = fs.readFileSync(path.join(__dirname, 'public/brand/logo-mark.png')).toString('base64');

  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;700;800&display=swap" rel="stylesheet">
      <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
          width: 1200px;
          height: 630px;
          background: #071615;
          background-image: radial-gradient(ellipse 80% 60% at 50% 20%, #0f241e 0%, #071615 80%);
          font-family: 'Plus Jakarta Sans', -apple-system, sans-serif;
          color: white;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 60px 80px;
          position: relative;
          overflow: hidden;
        }
        .border-ring {
          position: absolute;
          inset: 16px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 20px;
          pointer-events: none;
        }
        .header {
          display: flex;
          align-items: center;
          gap: 16px;
        }
        .logo-img {
          width: 48px;
          height: 48px;
        }
        .brand-name {
          font-size: 28px;
          font-weight: 800;
          letter-spacing: -0.5px;
        }
        .brand-name span {
          color: #64788e;
        }
        .eyebrow {
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: #899db0;
          margin-bottom: 16px;
        }
        .headline {
          font-size: 64px;
          font-weight: 800;
          line-height: 1.1;
          letter-spacing: -1.5px;
        }
        .headline .accent {
          color: #64788e;
        }
        .footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-top: 1px solid rgba(255, 255, 255, 0.12);
          padding-top: 24px;
        }
        .tagline {
          font-size: 18px;
          color: #c1ccc7;
          font-weight: 500;
        }
        .domain-pill {
          background: rgba(100, 120, 142, 0.2);
          border: 1px solid rgba(100, 120, 142, 0.4);
          color: #899db0;
          font-size: 15px;
          font-weight: 700;
          padding: 8px 22px;
          border-radius: 9999px;
        }
      </style>
    </head>
    <body>
      <div class="border-ring"></div>
      <div class="header">
        <img class="logo-img" src="data:image/png;base64,${logoBase64}" alt="ReviewBro Logo" />
        <div class="brand-name">Review<span>Bro</span></div>
      </div>
      <div class="main-content">
        <div class="eyebrow">REPUTATION MANAGEMENT, REIMAGINED</div>
        <div class="headline">
          Your Reviews.<br>Your Reputation.<br><span class="accent">One Bro.</span>
        </div>
      </div>
      <div class="footer">
        <div class="tagline">Everything businesses need to manage, improve, and grow reputation.</div>
        <div class="domain-pill">ReviewBro.in</div>
      </div>
    </body>
    </html>
  `;

  await page.setContent(html, { waitUntil: 'networkidle0' });
  await page.evaluateHandle('document.fonts.ready');
  const outFile = path.join(__dirname, 'public/og-image.png');
  await page.screenshot({ path: outFile });
  console.log('Open Graph image successfully generated at:', outFile);
  await browser.close();
}

createOgImage().catch(err => {
  console.error(err);
  process.exit(1);
});
