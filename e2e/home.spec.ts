import { test, expect } from '@playwright/test'

test('page should have title of "קהילת Pull Request"', async ({page}) => {
    await page.goto('http://localhost:3000/')
    const title = await page.title()
    expect(title).toBe('קהילת Pull Request')
});

