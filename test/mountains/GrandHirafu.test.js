import { GrandHirafu } from '../../src/mountains/GrandHirafu.js';

// {
//   snowfall: null,
//   depth: '195 cm',
//   temperature: '-3 °C',
//   updated: '更新日時： 2020/12/24/07:36'
// }

describe('parseSnowfall', () => {
  test('パースできる', () => {
    expect(GrandHirafu.parseSnowfall(null)).toBe(null);
  });
});

describe('parseDepth', () => {
  test('パースできる', () => {
    expect(GrandHirafu.parseDepth('195 cm')).toBe(195);
    expect(GrandHirafu.parseDepth('195')).toBe(195);
    expect(GrandHirafu.parseDepth('0 cm')).toBe(0);
    expect(GrandHirafu.parseDepth('-')).toBe(null);
    expect(GrandHirafu.parseDepth('')).toBe(null);
  });
});

describe('parseTemperature', () => {
  test('パースできる', () => {
    expect(GrandHirafu.parseTemperature('-3 °C')).toBe(-3);
    expect(GrandHirafu.parseTemperature('-11 °C')).toBe(-11);
    expect(GrandHirafu.parseTemperature('3 °C')).toBe(3);
    expect(GrandHirafu.parseTemperature('10 °C')).toBe(10);
    expect(GrandHirafu.parseTemperature('- °C')).toBe(null);
    expect(GrandHirafu.parseTemperature('-')).toBe(null);
    expect(GrandHirafu.parseTemperature('')).toBe(null);
  });
});

describe('parseUpdated', () => {
  test('パースできる', () => {
    expect(GrandHirafu.parseUpdated('更新日時： 2020/12/24/07:36')).toBe('2020-12-24');
    expect(GrandHirafu.parseUpdated('更新日時： 2020/01/24/07:36')).toBe('2020-01-24');
    expect(GrandHirafu.parseUpdated('更新日時： 2020/1/1/07:36')).toBe('2020-01-01');
  });
});
