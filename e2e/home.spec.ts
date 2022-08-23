import { test, expect } from '@playwright/test';

test('page should have title of "קהילת Pull Request"', async ({ page, baseURL }) => {
  await page.goto(baseURL);
  const title = await page.title();
  expect(title).toBe('קהילת Pull Request');
});
