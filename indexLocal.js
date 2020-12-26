import puppeteer from 'puppeteer';
import pkg from 'csv-writer';
const { createObjectCsvWriter } = pkg;
import { GrandHirafu } from './mountains/GrandHirafu.js';
import { HakubaGoryu } from './mountains/HakubaGoryu.js';
import { Madarao } from './mountains/Madarao.js';
import { Nozawa } from './mountains/Nozawa.js';
import { Rusutsu } from './mountains/Rusutsu.js';
import { Togakushi } from './mountains/Togakushi.js';

const fetchWithXpath = async (page, xpath) => {
  if (!xpath) {
    return null;
  }
  const elements = await page.$x(xpath);
  return await (await elements[0].getProperty('textContent')).jsonValue();
};

const yyyymmdd = (date) => {
  return `${date.getFullYear()}${date.getMonth() + 1}${date.getDate()}`;
};

const mountains = [
  GrandHirafu,
  HakubaGoryu,
  Madarao,
  Nozawa,
  Rusutsu,
  Togakushi,
];

let array = [];
(async () => {
  const browser = await puppeteer.launch({ ignoreHTTPSErrors: true });
  const page = await browser.newPage();

  for await (let mountain of mountains) {
    console.log(`fetching ${mountain.ID}......`);

    await page.goto(mountain.URL, { waitUntil: 'networkidle0' });
    const snowfall = await fetchWithXpath(page, mountain.SELECTORS.snowfall);
    const depth = await fetchWithXpath(page, mountain.SELECTORS.depth);
    const temperature = await fetchWithXpath(page, mountain.SELECTORS.temperature);
    const updated = await fetchWithXpath(page, mountain.SELECTORS.updated);

    console.log({ snowfall, depth, temperature, updated });
    const m = new mountain(snowfall, depth, temperature, updated);
    console.log('done');
    array.push(m.params);
  }

  const csv = createObjectCsvWriter({
    path: `${yyyymmdd(new Date())}.csv`,
    header: [
      { id: 'id', title: 'id' },
      { id: 'snowfall', title: 'snowfall' },
      { id: 'depth', title: 'depth' },
      { id: 'temperature', title: 'temperature' },
      { id: 'updated', title: 'updated' },
    ],
  });
  csv.writeRecords(array).then(() => {
    console.log('*************************');
    console.log('DONE!! csv is exported!');
    console.log('*************************');
  });

  await browser.close();
})();
