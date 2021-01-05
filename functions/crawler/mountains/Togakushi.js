import { Mountain } from '../Mountain.js';

export class Togakushi extends Mountain {
  constructor(snowfallStr, depthStr, temperatureStr, updatedStr) {
    super(snowfallStr, depthStr, temperatureStr, updatedStr);
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
  static get NAME() {
    return '戸隠スキー場';
  }
  static get PREFECTURE() {
    return '長野県';
  }

  static parseSnowfall(snowfallStr) {
    return null;
  }

  static parseDepth(depthStr) {
    return Number(depthStr);
  }

  static parseTemperature(temperatureStr) {
    return Number(temperatureStr);
  }

  static parseUpdated(updatedStr) {
    const str = `${new Date().getFullYear()}/${updatedStr}`;
    return super.formatDate(new Date(str));
  }

  get snowfall() {
    return Togakushi.parseSnowfall(this.snowfallStr);
  }
  get depth() {
    return Togakushi.parseDepth(this.depthStr);
  }
  get temperature() {
    return Togakushi.parseTemperature(this.temperatureStr);
  }
  get updated() {
    return Togakushi.parseUpdated(this.updatedStr);
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
