export const mountains = [
  {
    id: 'rusutsu',
    url: 'https://rusutsu.com/snow-and-weather-report/',
    snowfallXpath: '/html/body/main/article[4]/section/div[1]/div[2]/dl[2]/dd',
    depthXpath: '/html/body/main/article[4]/section/div[1]/div[2]/dl[1]/dd',
    tempretureXpath: '/html/body/main/article[4]/section/div[1]/div[1]/p[2]',
    updatedXpath: '/html/body/main/article[4]/section/h4'
  },
  {
    id: 'nozawa',
    url: 'http://nozawaski.com/winter/course/',
    snowfallXpath: '//*[@id="now_gelande"]/div/div[1]/table/tbody/tr[5]/td',
    depthXpath: '//*[@id="now_gelande"]/div/div[1]/table/tbody/tr[4]/td',
    tempretureXpath: '//*[@id="now_gelande"]/div/div[1]/table/tbody/tr[2]/td',
    updatedXpath: '//*[@id="now_gelande"]/div/div[1]/p'
  },
  // {
  //   id: '',
  //   url: '',
  //   snowfallXpath: '',
  //   depthXpath: '',
  //   tempretureXpath: '',
  //   updatedXpath: ''
  // },
]
