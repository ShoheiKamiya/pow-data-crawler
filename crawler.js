import puppeteer from 'puppeteer';
import { mountains } from './mountains.js';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(mountains[0].url);
  await page.screenshot({ path: 'example.png' });

  await browser.close();
})();
