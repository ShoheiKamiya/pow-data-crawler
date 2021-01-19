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
      depth: '', // TODO
      temperature: '', // TODO
      updated: '', // TODO
    };
  }
  static get NAME() {
    return 'GALA湯沢スノーリゾート';
  }
  static get PREFECTURE() {
    return '新潟県';
  }

  static parseSnowfall(snowfallStr) {}

  static parseDepth(depthStr) {}

  static parseTemperature(temperatureStr) {}

  static parseUpdated(updatedStr) {}

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
