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

  static parseSnowfall(snowfallStr) {
    return null;
  }

  static parseDepth(depthStr) {
    const value = depthStr.match(/\d+/, '');
    return value ? Number(value) : null;
  }

  static parseTemperature(temperatureStr) {
    const value = temperatureStr.replace(' °C', '');
    if (value === '' || isNaN(Number(value))) {
      return null;
    }

    return Number(value);
  }

  static parseUpdated(updatedStr) {
    const str = updatedStr.match(/\d+\/\d+\/\d+/)[0];
    return super.formatDate(new Date(str));
  }

  get snowfall() {
    return GrandHirafu.parseSnowfall(this.snowfallStr);
  }
  get depth() {
    return GrandHirafu.parseDepth(this.depthStr);
  }
  get temperature() {
    return GrandHirafu.parseTemperature(this.temperatureStr);
  }
  get updated() {
    return GrandHirafu.parseUpdated(this.updatedStr);
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
