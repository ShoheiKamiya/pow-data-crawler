import { Mountain } from '../Mountain.js';

export class Madarao extends Mountain {
  constructor(snowfallStr, depthStr, temperatureStr, updatedStr) {
    super(snowfallStr, depthStr, temperatureStr, updatedStr);
  }

  static get ID() {
    return 'madarao';
  }
  static get URL() {
    return 'http://www.madarao.jp/ski';
  }
  static get SELECTORS() {
    return {
      snowfall: '/html/body/section/div[1]/div[2]/div/dl[3]/dd/strong',
      depth: '/html/body/section/div[1]/div[2]/div/dl[2]/dd/strong',
      temperature: '/html/body/section/div[1]/div[2]/div/dl[5]/dd/strong',
      updated: '/html/body/section/div[1]/div[2]/div/dl[1]/dd',
    };
  }

  static parseSnowfall(snowfallStr) {
    const value = snowfallStr.match(/\d+/, '');
    return value ? Number(value) : null;
  }

  static parseDepth(depthStr) {
    const value = depthStr.match(/\d+/, '');
    return value ? Number(value) : null;
  }

  static parseTemperature(temperatureStr) {
    if (temperatureStr === '' || isNaN(Number(temperatureStr))) {
      return null;
    }

    return Number(temperatureStr);
  }

  static parseUpdated(updatedStr) {
    const str = updatedStr.match(/\d+\-\d+\-\d+/)[0];
    return super.formatDate(new Date(str));
  }

  get snowfall() {
    const value = this.snowfallStr.match(/\d+/, '');
    return value ? Number(value) : null;
  }
  get depth() {
    return Number(this.depthStr.match(/\d+/, ''));
  }
  get temperature() {
    const value = Number(this.temperatureStr);
    return isNaN(value) ? null : value;
  }
  get updated() {
    // スクレイピングで取得できる文字列 '2020-12-19 8:07 am'
    const str = this.updatedStr.match(/\d+\-\d+\-\d+/)[0];
    return super.formatDate(new Date(str));
  }

  get params() {
    return {
      id: Madarao.ID,
      snowfall: this.snowfall,
      depth: this.depth,
      temperature: this.temperature,
      updated: this.updated,
    };
  }
}
