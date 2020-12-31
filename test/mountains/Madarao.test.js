import { Madarao } from '../../functions/crawler/mountains/Madarao.js';

// snowfall: '-',
// depth: '160',
// temperature: '-',
// updated: '2020-12-24 8:14 am'

test('parseSnowfall', () => {
  expect(Madarao.parseSnowfall('30')).toBe(30);
  expect(Madarao.parseSnowfall('0')).toBe(0);
  expect(Madarao.parseSnowfall('-')).toBe(null);
  expect(Madarao.parseSnowfall('')).toBe(null);
});

test('parseDepth', () => {
  expect(Madarao.parseDepth('30')).toBe(30);
  expect(Madarao.parseDepth('0')).toBe(0);
  expect(Madarao.parseDepth('-')).toBe(null);
  expect(Madarao.parseDepth('')).toBe(null);
});

test('parseTemperature', () => {
  expect(Madarao.parseTemperature('2')).toBe(2);
  expect(Madarao.parseTemperature('-2')).toBe(-2);
  expect(Madarao.parseTemperature('-')).toBe(null);
  expect(Madarao.parseTemperature('')).toBe(null);
});

test('parseUpdated', () => {
  expect(Madarao.parseUpdated('2020-12-24 8:14 am')).toBe('2020-12-24');
  expect(Madarao.parseUpdated('2021-1-1 8:14 am')).toBe('2021-01-01');
  expect(Madarao.parseUpdated('2021-02-03 8:14 am')).toBe('2021-02-03');
});
