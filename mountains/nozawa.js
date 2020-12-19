export class Nozawa {
  constructor(snowfallStr, depthStr, temperatureStr, updatedStr) {
    this.snowfallStr = snowfallStr;
    this.depthStr = depthStr;
    this.temperatureStr = temperatureStr;
    this.updatedStr = updatedStr;
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

  get snowfall() {
    return Number(this.snowfallStr.match(/\d+/, ''));
  }
  get depth() {
    return Number(this.depthStr.match(/\d+/, ''));
  }
  get temperature() {
    const text = '                      ℃';
    return Number(this.temperatureStr.replace(text, ''));
  }
  get updated() {
    // 取得できる文字列 'update：12/20 07:30                '
    // yyyy/mm/dd
    const str = `${new Date().getFullYear()}/${this.updatedStr.match(/\d+\/\d+/)[0]}`;
    return new Date(str);
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
