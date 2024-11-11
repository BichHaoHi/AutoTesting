import { test, expect } from '@playwright/test';

test.describe(`Examples`, async () => {
  test('Test case pass', async ({ }) => {
    const numb = 1;
    expect(numb).toEqual(1);
  });

  test('Test case fail', async ({ }) => {
    const numb = 1;
    test.fail(numb == 1)
  });

  test('Test case skip', async ({ }) => {
    const numb = 1;
    test.skip(numb == 1)
  });
})