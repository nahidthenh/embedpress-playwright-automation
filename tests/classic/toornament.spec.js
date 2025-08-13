const { test, expect } = require('@playwright/test');

test('Embed Classic Toornament source', async ({ page }) => {
    await page.goto('https://ep-automation.wpqa.site/classic-toornament/');
    await expect(page.locator('iframe')).toBeVisible();
});

// As now we only have embed support 