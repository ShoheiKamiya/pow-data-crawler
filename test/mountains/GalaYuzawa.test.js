import { GalaYuzawa } from '../../functions/crawler/mountains/GalaYuzawa.js';

describe('parseSnowfall', () => {
  test('パースできる', () => {
    expect(GalaYuzawa.parseSnowfall(null)).toBe(null);
  });
});

// describe('parseDepth', () => {
//   test('パースできる', () => {
//     expect(GalaYuzawa.parseDepth(null)).toBe(null);
//   });
// });

describe('parseTemperature', () => {
  test('パースできる', () => {
    expect(GalaYuzawa.parseTemperature('-5.8')).toBe(-5.8);
    expect(GalaYuzawa.parseTemperature('3.1')).toBe(3.1);
  });
});

describe('parseUpdated', () => {
  test('パースできる', () => {
    expect(GalaYuzawa.parseUpdated('2021.01.19 更新')).toBe('2021-01-19');
    expect(GalaYuzawa.parseUpdated('2021.01.03 更新')).toBe('2021-01-03');
  });
});
