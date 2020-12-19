import puppeteer from 'puppeteer';
import { mountains } from './mountains.js';

(async () => {
  const browser = await puppeteer.launch({ ignoreHTTPSErrors: true });
  const page = await browser.newPage();

  for await (let mountain of mountains) {
    await page.goto(mountain.url);
    const depthElements = await page.$x(mountain.depthXpath);
    const snowfallElements = await page.$x(mountain.snowfallXpath);
    const tempretureElements = await page.$x(mountain.tempretureXpath);
    const updatedElements = await page.$x(mountain.updatedXpath);

    const depth = await (await depthElements[0].getProperty('textContent')).jsonValue();
    const snowfall = await (await snowfallElements[0].getProperty('textContent')).jsonValue();
    const tempreture = await (await tempretureElements[0].getProperty('textContent')).jsonValue();
    const updated = await (await updatedElements[0].getProperty('textContent')).jsonValue();

    console.log(`<< ${mountain.id} >>`);
    console.log({ depth });
    console.log({ snowfall });
    console.log({ tempreture });
    console.log({ updated });
  }

  await browser.close();
})();
