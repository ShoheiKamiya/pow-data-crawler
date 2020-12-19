export class Rusutsu {
  constructor(snowfallStr, depthStr, temperatureStr, updatedStr) {
    this.snowfallStr = snowfallStr;
    this.depthStr = depthStr;
    this.temperatureStr = temperatureStr;
    this.updatedStr = updatedStr;
  }

  static get ID() {
    return 'rusutsu';
  }
  static get URL() {
    return 'https://rusutsu.com/snow-and-weather-report/'
  }
  static get SELECTORS() {
    return {
      snowfall: '/html/body/main/article[4]/section/div[1]/div[2]/dl[2]/dd',
      depth: '/html/body/main/article[4]/section/div[1]/div[2]/dl[1]/dd',
      temperature: '/html/body/main/article[4]/section/div[1]/div[1]/p[2]',
      updated: '/html/body/main/article[4]/section/h4',
    };
  }

  get snowfall() {
    return Number(this.snowfallStr.match(/\d+/, ''));
  }
  get depth() {
    return Number(this.snowfallStr.match(/\d+/, ''));
  }
  get temperature() {
    return Number(this.temperatureStr.replace('℃', ''))
  }
  get updated() {
    // TODO: yyyy-mm-ddの形式に変換する
    return this.updatedStr;
  }

  get params() {
    return {
      snowfall: this.snowfall,
      depth: this.depth,
      temperature: this.temperature,
      updated: this.updated,
    }
  }
}
