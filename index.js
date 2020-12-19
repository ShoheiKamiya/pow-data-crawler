import puppeteer from 'puppeteer';
import pkg from 'csv-writer';
import { mountains } from './mountains.js';
const { createObjectCsvWriter } = pkg;

const fetchWithXpath = async (page, xpath) => {
  if (!xpath) {
    return null;
  }
  const elements = await page.$x(xpath);
  return await (await elements[0].getProperty('textContent')).jsonValue();
};

const yyyymmdd = (date) => {
  return `${date.getFullYear()}${date.getMonth()+1}${date.getDate()}`
}

let array = [];
(async () => {
  const browser = await puppeteer.launch({ ignoreHTTPSErrors: true });
  const page = await browser.newPage();

  for await (let mountain of mountains) {
    console.log(`fetching ${mountain.id}......`)

    await page.goto(mountain.url, { waitUntil: 'networkidle0' });
    const snowfall = await fetchWithXpath(page, mountain.snowfallXpath);
    const depth = await fetchWithXpath(page, mountain.depthXpath);
    const tempreture = await fetchWithXpath(page, mountain.tempretureXpath);
    const updated = await fetchWithXpath(page, mountain.updatedXpath);

    const stats = { id: mountain.id, snowfall, depth, tempreture, updated };
    console.log('done')
    array.push(stats);
  }

  const csv = createObjectCsvWriter({
    path: `./stats/${yyyymmdd(new Date)}.csv`,
    header: [
      { id: 'id', title: 'id' },
      { id: 'snowfall', title: 'snowfall' },
      { id: 'depth', title: 'depth' },
      { id: 'tempreture', title: 'tempreture' },
      { id: 'updated', title: 'updated' },
    ],
  });
  csv.writeRecords(array).then(() => {
    console.log('*************************')
    console.log('DONE!! csv is exported!');
    console.log('*************************')
  });

  await browser.close();
})();
