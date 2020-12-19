export class Nozawa {
  constructor(snowfallStr, depthStr, tempretureStr, updatedStr) {
    this.snowfallStr = snowfallStr;
    this.depthStr = depthStr;
    this.tempretureStr = tempretureStr;
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
      tempreture: '//*[@id="now_gelande"]/div/div[1]/table/tbody/tr[2]/td',
      updated: '//*[@id="now_gelande"]/div/div[1]/p',
    };
  }

  get snowfall() {
    return Number(this.snowfallStr.match(/\d+/, ''));
  }
  get depth() {
    return Number(this.depthStr.match(/\d+/, ''));
  }
  get tempreture() {
    const text = '                      ℃'
    return Number(this.tempretureStr.replace(text, ''));
  }
  get updated() {
    // TODO: yyyy-mm-ddの形式に変換する
    return this.updatedStr;
  }

  get params() {
    return {
      snowfall: this.snowfall,
      depth: this.depth,
      tempreture: this.tempreture,
      updated: this.updated,
    }
  }
}
