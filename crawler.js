import puppeteer from 'puppeteer';
import { mountains } from './mountains.js';

(async () => {
  const browser = await puppeteer.launch({ ignoreHTTPSErrors: true });
  const page = await browser.newPage();

  for await (let mountain of mountains) {
    await page.goto(mountain.url, { waitUntil: 'networkidle0' });
    console.log(`<< ${mountain.id} >>`);

    if (mountain.snowfallXpath) {
      const snowfallElements = await page.$x(mountain.snowfallXpath);
      const snowfall = await (await snowfallElements[0].getProperty('textContent')).jsonValue();
      console.log({ snowfall });
    }

    if (mountain.depthXpath) {
      const depthElements = await page.$x(mountain.depthXpath);
      const depth = await (await depthElements[0].getProperty('textContent')).jsonValue();
      console.log({ depth });
    }

    if (mountain.tempretureXpath) {
      const tempretureElements = await page.$x(mountain.tempretureXpath);
      const tempreture = await (await tempretureElements[0].getProperty('textContent')).jsonValue();
      console.log({ tempreture });
    }

    if (mountain.tempretureXpath) {
      const updatedElements = await page.$x(mountain.updatedXpath);
      const updated = await (await updatedElements[0].getProperty('textContent')).jsonValue();
      console.log({ updated });
    }
  }

  await browser.close();
})();
