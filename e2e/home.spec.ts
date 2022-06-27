import { test, expect } from '@playwright/test';

test('page title should have the value of "קהילת Pull Request"', async ({page}) => {
  await page.goto('http://localhost:3000/');
  const title = await page.title();
  expect(title).toBe('קהילת Pull Request');
});