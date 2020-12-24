import { Nozawa } from '../../mountains/Nozawa.js';

// snowfall: '0                      cm',
// depth: '175                      cm',
// temperature: '3                      ℃',
// updated: 'update：12/24 15:43                '

test('parseSnowfall', () => {
  expect(Nozawa.parseSnowfall('0                      cm')).toBe(0);
  expect(Nozawa.parseSnowfall(null)).toBe(null);
});

test('parseDepth', () => {
  expect(Nozawa.parseDepth('175                      cm')).toBe(175);
});

test('parseTemperature', () => {
  expect(Nozawa.parseTemperature('3                      ℃')).toBe(3);
  expect(Nozawa.parseTemperature('-3                      ℃')).toBe(-3);
});

test('parseUpdated', () => {
  const yyyy = new Date().getFullYear();
  expect(Nozawa.parseUpdated('update：12/24 15:43                ')).toBe(`${yyyy}-12-24`);
  expect(Nozawa.parseUpdated('update：1/1 15:43                ')).toBe(`${yyyy}-01-01`);
  expect(Nozawa.parseUpdated('update：01/01 15:43                ')).toBe(`${yyyy}-01-01`);
});
