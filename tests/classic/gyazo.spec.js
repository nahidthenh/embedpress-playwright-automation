const { test, expect } = require('@playwright/test');

test('Embed Classic Gyazo source', async ({ page }) => {
    await page.goto('https://ep-automation.obayedmamur.com/classic-gyazo/');
    await expect(page.locator('#post-10595 img')).toBeVisible();
});

// As now we only have embed support 