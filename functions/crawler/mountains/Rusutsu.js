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
  static get NAME() {
    return 'ルスツリゾートスキー場';
  }
  static get PREFECTURE() {
    return '北海道';
  }

  static parseSnowfall(snowfallStr) {
    return Number(snowfallStr.match(/\d+/, ''));
  }

  static parseDepth(depthStr) {
    return Number(depthStr.match(/\d+/, ''));
  }

  static parseTemperature(temperatureStr) {
    return Number(temperatureStr.replace('℃', ''));
  }

  static parseUpdated(updatedStr) {
    const str = updatedStr.match(/\d+\/\d+\/\d+/)[0];
    return super.formatDate(new Date(str));
  }

  get snowfall() {
    return Rusutsu.parseSnowfall(this.snowfallStr);
  }
  get depth() {
    return Rusutsu.parseDepth(this.depthStr);
  }
  get temperature() {
    return Rusutsu.parseTemperature(this.temperatureStr);
  }
  get updated() {
    return Rusutsu.parseUpdated(this.updatedStr);
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
