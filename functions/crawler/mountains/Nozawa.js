import { Mountain } from '../Mountain.js';

export class Nozawa extends Mountain {
  constructor(snowfallStr, depthStr, temperatureStr, updatedStr) {
    super(snowfallStr, depthStr, temperatureStr, updatedStr);
  }

  static get ID() {
    return 'nozawa';
  }
  static get URL() {
    return 'http://nozawaski.com/winter/course/';
  }
  static get SELECTORS() {
    return {
      snowfall: '//*[@id="now_gelande"]/div/div[1]/table/tbody/tr[5]/td',
      depth: '//*[@id="now_gelande"]/div/div[1]/table/tbody/tr[4]/td',
      temperature: '//*[@id="now_gelande"]/div/div[1]/table/tbody/tr[2]/td',
      updated: '//*[@id="now_gelande"]/div/div[1]/p',
    };
  }
  static get NAME() {
    return '野沢温泉スキー場';
  }
  static get PREFECTURE() {
    return '長野県';
  }

  static parseSnowfall(snowfallStr) {
    if (snowfallStr === null) {
      return null;
    }

    return Number(snowfallStr.match(/\d+/, ''));
  }

  static parseDepth(depthStr) {
    return Number(depthStr.match(/\d+/, ''));
  }

  static parseTemperature(temperatureStr) {
    const text = '                      ℃';
    return Number(temperatureStr.replace(text, ''));
  }

  static parseUpdated(updatedStr) {
    const str = `${new Date().getFullYear()}/${updatedStr.match(/\d+\/\d+/)[0]}`;
    return super.formatDate(new Date(str));
  }

  get snowfall() {
    return Nozawa.parseSnowfall(this.snowfallStr);
  }
  get depth() {
    return Nozawa.parseDepth(this.depthStr);
  }
  get temperature() {
    return Nozawa.parseTemperature(this.temperatureStr);
  }
  get updated() {
    return Nozawa.parseUpdated(this.updatedStr);
  }

  get params() {
    return {
      id: Nozawa.ID,
      snowfall: this.snowfall,
      depth: this.depth,
      temperature: this.temperature,
      updated: this.updated,
    };
  }
}
