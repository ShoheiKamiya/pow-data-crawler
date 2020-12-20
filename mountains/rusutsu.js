import { Mountain } from '../Mountain.js';

export class Rusutsu extends Mountain {
  constructor(snowfallStr, depthStr, temperatureStr, updatedStr) {
    super(snowfallStr, depthStr, temperatureStr, updatedStr);
  }

  static get ID() {
    return 'rusutsu';
  }
  static get URL() {
    return 'https://rusutsu.com/snow-and-weather-report/';
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
    return Number(this.depthStr.match(/\d+/, ''));
  }
  get temperature() {
    return Number(this.temperatureStr.replace('℃', ''));
  }
  get updated() {
    // スクレイピングで取得できる文字列 '更新日時 : 2020/12/20(日) 7:35'
    const str = this.updatedStr.match(/\d+\/\d+\/\d+/)[0];
    return super.formatDate(new Date(str));
  }

  get params() {
    return {
      id: Rusutsu.ID,
      snowfall: this.snowfall,
      depth: this.depth,
      temperature: this.temperature,
      updated: this.updated,
    };
  }
}
