import { formatDate } from './utils.js';

export class Mountain {
  constructor(snowfallStr, depthStr, temperatureStr, updatedStr) {
    this.snowfallStr = snowfallStr;
    this.depthStr = depthStr;
    this.temperatureStr = temperatureStr;
    this.updatedStr = updatedStr;
  }

  formatDate(date) {
    return formatDate(date)
  }
}
