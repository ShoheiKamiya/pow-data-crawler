import { formatDate } from '../functions/crawler/utils';

test('フォーマットすること', () => {
  const date1 = new Date(2020, 12 - 1, 20);
  expect(formatDate(date1)).toBe('2020-12-20');
});

test('0埋めすること', () => {
  const date1 = new Date(2020, 3 - 1, 10);
  expect(formatDate(date1)).toBe('2020-03-10');
});
