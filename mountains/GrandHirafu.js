export class GrandHirafu {
  constructor(snowfallStr, depthStr, temperatureStr, updatedStr) {
    this.snowfallStr = snowfallStr;
    this.depthStr = depthStr;
    this.temperatureStr = temperatureStr;
    this.updatedStr = updatedStr;
  }

  static get ID() {
    return 'grand_hirafu';
  }
  static get URL() {
    return 'https://www.grand-hirafu.jp/winter/gelande/business_hours/'
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
    return Number(this.temperatureStr.replace(' °C', ''))
  }
  get updated() {
    // TODO: yyyy-mm-ddの形式に変換する
    return this.updatedStr;
  }

  get params() {
    return {
      id: GrandHirafu.ID,
      snowfall: this.snowfall,
      depth: this.depth,
      temperature: this.temperature,
      updated: this.updated,
    }
  }
}
