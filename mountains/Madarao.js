export class Madarao {
  constructor(snowfallStr, depthStr, temperatureStr, updatedStr) {
    this.snowfallStr = snowfallStr;
    this.depthStr = depthStr;
    this.temperatureStr = temperatureStr;
    this.updatedStr = updatedStr;
  }

  static get ID() {
    return 'madarao';
  }
  static get URL() {
    return 'http://www.madarao.jp/ski'
  }
  static get SELECTORS() {
    return {
      snowfall: '/html/body/section/div[1]/div[2]/div/dl[3]/dd/strong',
      depth: '/html/body/section/div[1]/div[2]/div/dl[2]/dd/strong',
      temperature: '/html/body/section/div[1]/div[2]/div/dl[5]/dd/strong',
      updated: '/html/body/section/div[1]/div[2]/div/dl[1]/dd',
    };
  }

  get snowfall() {
    return Number(this.snowfallStr.match(/\d+/, ''));
  }
  get depth() {
    return Number(this.depthStr.match(/\d+/, ''));
  }
  get temperature() {
    return Number(this.temperatureStr)
  }
  get updated() {
    // スクレイピングで取得できる文字列 '2020-12-19 8:07 am'
    const str = this.updatedStr.match(/\d+\-\d+\-\d+/)[0]
    return new Date(str)
  }

  get params() {
    return {
      id: Madarao.ID,
      snowfall: this.snowfall,
      depth: this.depth,
      temperature: this.temperature,
      updated: this.updated,
    }
  }
}
