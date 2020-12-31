import { Rusutsu } from '../../src/crawler/mountains/Rusutsu.js';

// snowfall: '+5cm',
// depth: '150cm',
// temperature: '-4℃',
// updated: '更新日時 : 2020/12/24(木) 7:14'

test('parseSnowfall', () => {
  expect(Rusutsu.parseSnowfall('+5cm')).toBe(5);
  expect(Rusutsu.parseSnowfall('0cm')).toBe(0);
});

test('parseDepth', () => {
  expect(Rusutsu.parseDepth('150cm')).toBe(150);
  expect(Rusutsu.parseDepth('0cm')).toBe(0);
});

test('parseTemperature', () => {
  expect(Rusutsu.parseTemperature('-4℃')).toBe(-4);
  expect(Rusutsu.parseTemperature('4℃')).toBe(4);
});

test('parseUpdated', () => {
  expect(Rusutsu.parseUpdated('更新日時 : 2020/12/24(木) 7:14')).toBe(`2020-12-24`);
  expect(Rusutsu.parseUpdated('更新日時 : 2021/01/01(木) 7:14')).toBe(`2021-01-01`);
  expect(Rusutsu.parseUpdated('更新日時 : 2021/1/1(木) 7:14')).toBe(`2021-01-01`);
});
