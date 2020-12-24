import { formatDate } from './utils.js';

export class Mountain {
  constructor(snowfallStr, depthStr, temperatureStr, updatedStr) {
    this.snowfallStr = snowfallStr;
    this.depthStr = depthStr;
    this.temperatureStr = temperatureStr;
    this.updatedStr = updatedStr;
  }

  static formatDate(date) {
    return formatDate(date);
  }

  formatDate(date) {
    return formatDate(date);
  }
}
