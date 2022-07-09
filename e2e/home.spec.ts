import { test, expect } from '@playwright/test';

test('page should have title of "קהילת Pull Request"', async ({page}) => {
  await page.goto('http://localhost:3000/')
  const title = await page.title()
  expect(title).toBe('קהילת Pull Request')
});

test('page should have a button called "addMeButton" with value of "הוסיפו אותי"', async ({page}) => {
  await page.goto('http://localhost:3000/')
  await expect(page.locator('.addMeButton')).toHaveText('הוסיפו אותי')
});

test('a div with "personCard" class should have a "Mentor" text label', async ({page}) => {
  await page.goto('http://localhost:3000/')
  await expect(page.locator('.personCard', {
      hasText: 'בנימין גרינבאום'
  })).toHaveText(/Mentor/)
});
