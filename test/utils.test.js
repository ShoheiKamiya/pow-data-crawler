import { formatDate } from '../utils';

test('test Date', () => {
  const date = new Date(2020, 12 - 1, 20);
  expect(formatDate(date)).toBe('2020-12-20');
});
