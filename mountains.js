export const mountains = [
  {
    id: 'grand_hirafu',
    url: 'https://www.grand-hirafu.jp/winter/gelande/business_hours/',
    snowfallXpath: null,
    depthXpath: '//*[@id="yWeather_8KuHUsi4MLcfzRXG"]/td[5]',
    temperatureXpath: '//*[@id="yWeather_8KuHUsi4MLcfzRXG"]/td[3]',
    updatedXpath: '//*[@id="weather_update_time"]',
  },
  {
    id: 'rusutsu',
    url: 'https://rusutsu.com/snow-and-weather-report/',
    snowfallXpath: '/html/body/main/article[4]/section/div[1]/div[2]/dl[2]/dd',
    depthXpath: '/html/body/main/article[4]/section/div[1]/div[2]/dl[1]/dd',
    temperatureXpath: '/html/body/main/article[4]/section/div[1]/div[1]/p[2]',
    updatedXpath: '/html/body/main/article[4]/section/h4',
  },
  {
    id: 'nozawa',
    url: 'http://nozawaski.com/winter/course/',
    snowfallXpath: '//*[@id="now_gelande"]/div/div[1]/table/tbody/tr[5]/td',
    depthXpath: '//*[@id="now_gelande"]/div/div[1]/table/tbody/tr[4]/td',
    temperatureXpath: '//*[@id="now_gelande"]/div/div[1]/table/tbody/tr[2]/td',
    updatedXpath: '//*[@id="now_gelande"]/div/div[1]/p',
  },
  {
    id: 'madarao',
    url: 'http://www.madarao.jp/ski',
    snowfallXpath: '/html/body/section/div[1]/div[2]/div/dl[3]/dd/strong',
    depthXpath: '/html/body/section/div[1]/div[2]/div/dl[2]/dd/strong',
    temperatureXpath: '/html/body/section/div[1]/div[2]/div/dl[5]/dd/strong',
    updatedXpath: '/html/body/section/div[1]/div[2]/div/dl[1]/dd',
  },
  {
    id: 'togakushi',
    url: 'https://www.togakusi.com/ski/',
    snowfallXpath: null,
    depthXpath: '//*[@id="top"]/main/div[1]/div[2]/div/div[3]/div/p[2]/span[1]',
    temperatureXpath: '//*[@id="top"]/main/div[1]/div[2]/div/div[3]/div/p[1]/span[1]',
    updatedXpath: '//*[@id="view_date"]',
  },
  {
    id: 'hakuba_goryu',
    url: 'https://www.hakubaescal.com/winter/',
    snowfallXpath: '//*[@id="firstLine"]/div/div[1]/div/div[2]/div[2]/ul/li[3]',
    depthXpath: '//*[@id="firstLine"]/div/div[1]/div/div[2]/div[2]/ul/li[2]',
    temperatureXpath: '//*[@id="firstLine"]/div/div[1]/div/div[2]/div[2]/ul/li[1]',
    updatedXpath: '//*[@id="firstLine"]/div/div[1]/div/div[1]/div[2]/p/text()'
  },
  // {
  //   id: '',
  //   url: '',
  //   snowfallXpath: '',
  //   depthXpath: '',
  //   temperatureXpath: '',
  //   updatedXpath: ''
  // },
];
