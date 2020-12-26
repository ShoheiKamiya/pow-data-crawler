import { HakubaGoryu } from '../../mountains/HakubaGoryu.js';

// snowfall: '25㎝',
// depth: '210㎝',
// temperature: '-5℃',
// updated: 'アルプス平'

test('parseSnowfall', () => {
  expect(HakubaGoryu.parseSnowfall('25㎝')).toBe(25);
  expect(HakubaGoryu.parseSnowfall('0㎝')).toBe(0);
  expect(HakubaGoryu.parseSnowfall('')).toBe(null);
  expect(HakubaGoryu.parseSnowfall('変なテキスト')).toBe(null);
  expect(HakubaGoryu.parseSnowfall('数字が混じった17変なテキスト')).toBe(17);
});

test('parseDepth', () => {
  expect(HakubaGoryu.parseDepth('225㎝')).toBe(225);
  expect(HakubaGoryu.parseDepth('0㎝')).toBe(0);
  expect(HakubaGoryu.parseDepth('')).toBe(null);
  expect(HakubaGoryu.parseDepth('変なテキスト')).toBe(null);
  expect(HakubaGoryu.parseDepth('数字が混じった17変なテキスト')).toBe(17);
});

test('parseTemperature', () => {
  expect(HakubaGoryu.parseTemperature('-5℃')).toBe(-5);
  expect(HakubaGoryu.parseTemperature('5')).toBe(5);
  expect(HakubaGoryu.parseTemperature('')).toBe(null);
  expect(HakubaGoryu.parseTemperature(null)).toBe(null);
});

test('parseUpdated', () => {
  // 常に実行日時を yyyy-mm-ddを返すのでテストスキップ
  // utils.js のformatDateメソッドでテストされている
});
