import { Mountain } from '../Mountain.js';
export class GrandHirafu extends Mountain {
  constructor(snowfallStr, depthStr, temperatureStr, updatedStr) {
    super(snowfallStr, depthStr, temperatureStr, updatedStr);
  }

  static get ID() {
    return 'grand_hirafu';
  }
  static get URL() {
    return 'https://www.grand-hirafu.jp/winter/gelande/business_hours/';
  }
  static get SELECTORS() {
    return {
      snowfall: null,
      depth: '//*[@id="yWeather_8KuHUsi4MLcfzRXG"]/td[5]',
      temperature: '//*[@id="yWeather_8KuHUsi4MLcfzRXG"]/td[3]',
      updated: '//*[@id="weather_update_time"]',
    };
  }

  get snowfall() {
    return null;
  }
  get depth() {
    return Number(this.depthStr.match(/\d+/, ''));
  }
  get temperature() {
    return Number(this.temperatureStr.replace(' °C', ''));
  }
  get updated() {
    // スクレイピングで取得できる文字列 '更新日時： 2020/12/19/07:29'
    const str = this.updatedStr.match(/\d+\/\d+\/\d+/)[0];
    return super.formatDate(new Date(str));
  }

  get params() {
    return {
      id: GrandHirafu.ID,
      snowfall: this.snowfall,
      depth: this.depth,
      temperature: this.temperature,
      updated: this.updated,
    };
  }
}
