import pkg from 'csv-writer';
const { createObjectCsvWriter } = pkg;
import AWS from 'aws-sdk';
import fs from 'fs';
import { GrandHirafu } from './mountains/GrandHirafu.js';
import { HakubaGoryu } from './mountains/HakubaGoryu.js';
import { Madarao } from './mountains/Madarao.js';
import { Nozawa } from './mountains/Nozawa.js';
import { Rusutsu } from './mountains/Rusutsu.js';
import { Togakushi } from './mountains/Togakushi.js';

const chromium = require('chrome-aws-lambda');

exports.handler = async (event, context, callback) => {
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

  let result = null;
  let browser = null;

  try {
    browser = await chromium.puppeteer.launch({
      args: chromium.args,
      defaultViewport: chromium.defaultViewport,
      executablePath: await chromium.executablePath,
      headless: chromium.headless,
      ignoreHTTPSErrors: true,
    });

    let page = await browser.newPage();

    // ===リクエスト
    let array = [];
    for await (let mountain of mountains) {
      await page.goto(mountain.URL, { waitUntil: 'networkidle0' });
      const snowfall = await fetchWithXpath(page, mountain.SELECTORS.snowfall);
      const depth = await fetchWithXpath(page, mountain.SELECTORS.depth);
      const temperature = await fetchWithXpath(page, mountain.SELECTORS.temperature);
      const updated = await fetchWithXpath(page, mountain.SELECTORS.updated);

      const m = new mountain(snowfall, depth, temperature, updated);
      array.push(m.params);
    }
    // =======

    const fileName = yyyymmdd(new Date());
    const path = `/tmp/${fileName}.csv`;
    const csv = createObjectCsvWriter({
      path,
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

    const s3 = new AWS.S3();
    const bucketName = 'pow-data-csv';
    const keyName = `${fileName}.csv`;

    s3.putObject({
      Bucket: bucketName,
      Key: keyName,
      Body: fs.readFileSync(path),
    })
      .promise()
      .then((data) => {
        console.log('successs');
        console.log(data);
      })
      .catch((err) => {
        console.log('error');
        console.log(err);
      });

    result = array;
  } catch (error) {
    return callback(error);
  } finally {
    if (browser !== null) {
      await browser.close();
    }
  }

  return callback(null, result);
};
