const { test, expect } = require('@playwright/test');

test('Embed Gutenberg Commaful source', async ({ page }) => {
  await page.goto('https://embedpress.wpqa.site/playwright-gutenberg/gu-commaful/');
  await expect(page.locator('iframe').contentFrame().locator('.controls > div:nth-child(2)')).toBeVisible();
});

// As now we only have embed support 
