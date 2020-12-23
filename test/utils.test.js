import { formatDate } from '../utils';

test('test Date', () => {
  const date = new Date(2020, 12 - 1, 20);
  console.log(date);
  expect(formatDate(date)).toBe('2020-12-20');
});
