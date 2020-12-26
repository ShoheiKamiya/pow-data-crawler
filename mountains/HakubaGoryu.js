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
      snowfall: '//*[@id="snow_snow_accumulation_difference_text_alps"]',
      depth: '//*[@id="snow_accumulation_text_alps"]',
      temperature: '//*[@id="temperature_text_alps"]',
      // 存在しないのでとりあえず「アルプス平ゲレンデ」のDOMを指定
      updated: '//*[@id="y-course-weather"]/table/tbody/tr[1]/th',
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

    const removedText = '℃';
    return Number(temperatureStr.replace(removedText, ''));
  }

  static parseUpdated(updatedStr) {
    return super.formatDate(new Date());
  }

  get snowfall() {
    return HakubaGoryu.parseSnowfall(this.snowfallStr);
  }
  get depth() {
    return HakubaGoryu.parseDepth(this.depthStr);
  }
  get temperature() {
    return HakubaGoryu.parseTemperature(this.temperatureStr);
  }
  get updated() {
    return HakubaGoryu.parseUpdated(this.updatedStr);
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
