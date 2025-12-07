/* scripts/visual-smoke-test.js

Lightweight Puppeteer script that:
- visits a set of pages on localhost:5174
- measures header element computed padding-top and h1 boundingClientRect.top
- prints a small JSON report

Run with: npm run test:visual

*/

import puppeteer from 'puppeteer';

const PAGES = [
  { name: 'About', path: '/about' },
  { name: 'Blog', path: '/blog' },
  { name: 'Work', path: '/work' },
  { name: 'Project (first)', path: '/work' },
];

const BASE = process.env.BASE_URL || 'http://localhost:5174';

(async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  const results = [];

  for (const p of PAGES) {
    const url = new URL(p.path, BASE).toString();
    try {
      await page.goto(url, { waitUntil: 'networkidle2', timeout: 20000 });

      // Wait for hero elements
      await page.waitForTimeout(500);

      // Evaluate metrics
      const metrics = await page.evaluate(() => {
        const header = document.querySelector('header');
        const h1 = document.querySelector('h1');
        const bodyRect = document.body.getBoundingClientRect();

        const headerStyle = header ? window.getComputedStyle(header) : null;
        const headerPaddingTop = headerStyle ? parseFloat(headerStyle.paddingTop) : null;
        const headerPaddingBottom = headerStyle ? parseFloat(headerStyle.paddingBottom) : null;
        const headerTop = header ? header.getBoundingClientRect().top : null;
        const h1Top = h1 ? h1.getBoundingClientRect().top : null;

        return {
          headerPaddingTop,
          headerPaddingBottom,
          headerTop,
          h1Top,
        };
      });

      results.push({ page: p.name, url, metrics });
    } catch (err) {
      results.push({ page: p.name, url, error: String(err) });
    }
  }

  console.log(JSON.stringify({ base: BASE, results }, null, 2));
  await browser.close();
  process.exit(0);
})();
