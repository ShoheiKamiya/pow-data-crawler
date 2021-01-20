import { Mountain } from '../Mountain.js';
export class GalaYuzawa extends Mountain {
  constructor(snowfallStr, depthStr, temperatureStr, updatedStr) {
    super(snowfallStr, depthStr, temperatureStr, updatedStr);
  }

  static get ID() {
    return 'gala_yuzawa';
  }
  static get URL() {
    return 'https://gala.co.jp/winter/';
  }
  static get SELECTORS() {
    return {
      snowfall: null,
      depth: '//*[@id="page_cont"]/div[2]/div[4]/table/tbody/tr[1]/td/span',
      temperature: '//*[@id="page_cont"]/div[2]/div[3]/p[2]/span',
      updated: '//*[@id="page_cont"]/div[2]/div[1]/p[3]',
    };
  }
  static get NAME() {
    return 'GALA湯沢スノーリゾート';
  }
  static get PREFECTURE() {
    return '新潟県';
  }

  static parseSnowfall(snowfallStr) {
    return null;
  }

  static parseDepth(depthStr) {
    if (depthStr === null || depthStr === '') {
      return null;
    }

    return Number(depthStr);
  }

  static parseTemperature(temperatureStr) {
    return Number(temperatureStr);
  }

  static parseUpdated(updatedStr) {
    return updatedStr.replace(' 更新', '').split('.').join('-');
  }

  get snowfall() {
    return GalaYuzawa.parseSnowfall(this.snowfallStr);
  }
  get depth() {
    return GalaYuzawa.parseDepth(this.depthStr);
  }
  get temperature() {
    return GalaYuzawa.parseTemperature(this.temperatureStr);
  }
  get updated() {
    return GalaYuzawa.parseUpdated(this.updatedStr);
  }

  get params() {
    return {
      id: GalaYuzawa.ID,
      snowfall: this.snowfall,
      depth: this.depth,
      temperature: this.temperature,
      updated: this.updated,
    };
  }
}
