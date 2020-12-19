import puppeteer from 'puppeteer';
import { mountains } from './mountains.js';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto(mountains[0].url);
  const depthElements = await page.$x(mountains[0].depthXpath);
  const snowfallElements = await page.$x(mountains[0].snowfallXpath);
  const tempretureElements = await page.$x(mountains[0].tempretureXpath);
  const updatedElements = await page.$x(mountains[0].updatedXpath);

  const depth = await (await depthElements[0].getProperty('textContent')).jsonValue();
  const snowfall = await (await snowfallElements[0].getProperty('textContent')).jsonValue();
  const tempreture = await (await tempretureElements[0].getProperty('textContent')).jsonValue();
  const updated = await (await updatedElements[0].getProperty('textContent')).jsonValue();

  console.log({ depth });
  console.log({ snowfall });
  console.log({ tempreture });
  console.log({ updated });

  await browser.close();
})();
