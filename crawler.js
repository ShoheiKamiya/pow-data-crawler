import puppeteer from 'puppeteer';
import { mountains } from './mountains.js';

const fetchWithXpath = async (page, xpath) => {
  if (!xpath) {
    return null;
  }
  const elements = await page.$x(xpath);
  return await (await elements[0].getProperty('textContent')).jsonValue();
};

(async () => {
  const browser = await puppeteer.launch({ ignoreHTTPSErrors: true });
  const page = await browser.newPage();

  for await (let mountain of mountains) {
    await page.goto(mountain.url, { waitUntil: 'networkidle0' });

    console.log(`<< ${mountain.id} >>`);
    const snowfall = await fetchWithXpath(page, mountain.snowfallXpath);
    const depth = await fetchWithXpath(page, mountain.depthXpath);
    const tempreture = await fetchWithXpath(page, mountain.tempretureXpath);
    const updated = await fetchWithXpath(page, mountain.updatedXpath);

    console.log({ snowfall });
    console.log({ depth });
    console.log({ tempreture });
    console.log({ updated });
  }

  await browser.close();
})();
