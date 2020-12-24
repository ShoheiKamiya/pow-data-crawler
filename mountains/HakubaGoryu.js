import { Mountain } from '../Mountain.js';

export class HakubaGoryu extends Mountain {
  constructor(snowfallStr, depthStr, temperatureStr, updatedStr) {
    super(snowfallStr, depthStr, temperatureStr, updatedStr);
  }

  static get ID() {
    return 'hakuba_goryu';
  }
  static get URL() {
    return 'https://www.hakubaescal.com/winter/';
  }
  static get SELECTORS() {
    return {
      snowfall: '//*[@id="firstLine"]/div/div[1]/div/div[2]/div[2]/ul/li[3]',
      depth: '//*[@id="firstLine"]/div/div[1]/div/div[2]/div[2]/ul/li[2]',
      temperature: '//*[@id="firstLine"]/div/div[1]/div/div[2]/div[2]/ul/li[1]',
      updated: '//*[@id="firstLine"]/div/div[1]/div/div[1]/div[2]/p/text()',
    };
  }

  static parseSnowfall(snowfallStr) {
    const value = snowfallStr.match(/\d+/, '');
    if (value === '' || value === null) {
      return null;
    }

    return Number(value);
  }

  static parseDepth(parseDepth) {
    const value = parseDepth.match(/\d+/, '');
    if (value === '' || value === null) {
      return null;
    }

    return Number(value);
  }

  static parseTemperature(temperatureStr) {
    if (temperatureStr === '' || temperatureStr === null) {
      return null;
    }

    const value = temperatureStr.split('　')[1].replace('℃', '');
    return Number(value);
  }

  static parseUpdated(updatedStr) {
    const str = updatedStr.match(/\d+\-\d+\-\d+/)[0];
    return super.formatDate(new Date(str));
  }

  get snowfall() {
    return Number(this.snowfallStr.match(/\d+/, ''));
  }
  get depth() {
    return Number(this.depthStr.match(/\d+/, ''));
  }
  get temperature() {
    return Number(this.temperatureStr.split('　')[1].replace('℃', ''));
  }
  get updated() {
    // スクレイピングで取得できる文字列 '2020-12-20 07:43:55'
    const str = this.updatedStr.match(/\d+\-\d+\-\d+/)[0];
    return super.formatDate(new Date(str));
  }

  get params() {
    return {
      id: HakubaGoryu.ID,
      snowfall: this.snowfall,
      depth: this.depth,
      temperature: this.temperature,
      updated: this.updated,
    };
  }
}
