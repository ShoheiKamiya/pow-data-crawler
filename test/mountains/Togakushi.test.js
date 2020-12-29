import { Togakushi } from '../../src/mountains/Togakushi.js';

// snowfall: null,
// depth: '125',
// temperature: '-3',
// updated: '12/24'

test('parseSnowfall', () => {
  expect(Togakushi.parseSnowfall('+5cm')).toBe(null);
  expect(Togakushi.parseSnowfall(null)).toBe(null);
});

test('parseDepth', () => {
  expect(Togakushi.parseDepth('150')).toBe(150);
  expect(Togakushi.parseDepth('0')).toBe(0);
});

test('parseTemperature', () => {
  expect(Togakushi.parseTemperature('-4')).toBe(-4);
  expect(Togakushi.parseTemperature('4')).toBe(4);
});

test('parseUpdated', () => {
  const yyyy = new Date().getFullYear();
  expect(Togakushi.parseUpdated('12/24')).toBe(`${yyyy}-12-24`);
  expect(Togakushi.parseUpdated('01/01')).toBe(`${yyyy}-01-01`);
  expect(Togakushi.parseUpdated('1/1')).toBe(`${yyyy}-01-01`);
});
