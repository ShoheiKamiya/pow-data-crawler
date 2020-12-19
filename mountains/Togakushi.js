export class Togakushi {
  constructor(snowfallStr, depthStr, temperatureStr, updatedStr) {
    this.snowfallStr = snowfallStr;
    this.depthStr = depthStr;
    this.temperatureStr = temperatureStr;
    this.updatedStr = updatedStr;
  }

  static get ID() {
    return 'togakushi';
  }
  static get URL() {
    return 'https://www.togakusi.com/ski/';
  }
  static get SELECTORS() {
    return {
      snowfall: null,
      depth: '//*[@id="top"]/main/div[1]/div[2]/div/div[3]/div/p[2]/span[1]',
      temperature: '//*[@id="top"]/main/div[1]/div[2]/div/div[3]/div/p[1]/span[1]',
      updated: '//*[@id="view_date"]',
    };
  }

  get snowfall() {
    return null;
  }
  get depth() {
    return Number(this.depthStr);
  }
  get temperature() {
    return Number(this.temperatureStr);
  }
  get updated() {
    // スクレイピングで取得できる文字列 '12/20'
    const str = `${new Date().getFullYear()}/${this.updatedStr}`;
    return new Date(str);
  }

  get params() {
    return {
      id: Togakushi.ID,
      snowfall: this.snowfall,
      depth: this.depth,
      temperature: this.temperature,
      updated: this.updated,
    };
  }
}
