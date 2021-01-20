import { hello } from './handler';

test('sample test', async () => {
  const result = await hello();
  expect(result).toBe(undefined);
});
