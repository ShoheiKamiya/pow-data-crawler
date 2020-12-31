exports.handler = async (event) => {
  const className = event.mountain;
  const module = await import('./mountains/' + className + '.js');
  const mountain = module[className];
  const chromium = require('chrome-aws-lambda');

  const fetchWithXpath = async (page, xpath) => {
    if (!xpath) {
      return null;
    }
    const elements = await page.$x(xpath);

    return await (await elements[0].getProperty('textContent')).jsonValue();
  };

  // puppeteer
  const browser = await chromium.puppeteer.launch({
    args: [...chromium.args, '--single-process'],
    defaultViewport: chromium.defaultViewport,
    executablePath: await chromium.executablePath,
    headless: chromium.headless,
    ignoreHTTPSErrors: true,
  });
  const page = await browser.newPage();
  await page.emulateTimezone('Asia/Tokyo');

  await page.goto(mountain.URL, {
    waitUntil: 'networkidle0',
  });
  const snowfall = await fetchWithXpath(page, mountain.SELECTORS.snowfall);
  const depth = await fetchWithXpath(page, mountain.SELECTORS.depth);
  const temperature = await fetchWithXpath(page, mountain.SELECTORS.temperature);
  const updated = await fetchWithXpath(page, mountain.SELECTORS.updated);
  const m = new mountain(snowfall, depth, temperature, updated);

  browser.close();

  return m.params;
};
