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
