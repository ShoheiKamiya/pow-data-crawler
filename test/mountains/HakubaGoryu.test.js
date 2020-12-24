import { HakubaGoryu } from '../../mountains/HakubaGoryu.js';

// snowfall: '降雪 : 　0cm',
// depth: '積雪 : 　190cm',
// temperature: '気温 : 　-2℃',
// updated: ' 2020-12-24 14:26:24'

test('parseSnowfall', () => {
  expect(HakubaGoryu.parseSnowfall('降雪 : 　0cm')).toBe(0);
  expect(HakubaGoryu.parseSnowfall('降雪 : 　30cm')).toBe(30);
  expect(HakubaGoryu.parseSnowfall('降雪 : 　30')).toBe(30);
  expect(HakubaGoryu.parseSnowfall('')).toBe(null);
  expect(HakubaGoryu.parseSnowfall('変なテキスト')).toBe(null);
  expect(HakubaGoryu.parseSnowfall('数字が混じった17変なテキスト')).toBe(17);
});

test('parseDepth', () => {
  expect(HakubaGoryu.parseDepth('積雪 : 　190cm')).toBe(190);
  expect(HakubaGoryu.parseDepth('積雪 : 　0cm')).toBe(0);
  expect(HakubaGoryu.parseDepth('')).toBe(null);
  expect(HakubaGoryu.parseDepth('変なテキスト')).toBe(null);
  expect(HakubaGoryu.parseDepth('数字が混じった17変なテキスト')).toBe(17);
});

test('parseTemperature', () => {
  expect(HakubaGoryu.parseTemperature('気温 : 　-2℃')).toBe(-2);
  expect(HakubaGoryu.parseTemperature('気温 : 　2℃')).toBe(2);
  expect(HakubaGoryu.parseTemperature('')).toBe(null);
  expect(HakubaGoryu.parseTemperature(null)).toBe(null);
});

test('parseUpdated', () => {
  expect(HakubaGoryu.parseUpdated(' 2020-12-24 14:26:24')).toBe('2020-12-24');
  expect(HakubaGoryu.parseUpdated(' 2021-1-1 14:26:24')).toBe('2021-01-01');
  expect(HakubaGoryu.parseUpdated(' 2021-01-01 14:26:24')).toBe('2021-01-01');
});
