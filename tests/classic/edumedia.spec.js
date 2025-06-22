const { test, expect } = require('@playwright/test');

test('Embed Classic Edumedia source', async ({ page }) => {
    await page.goto('https://embedpress.wpqa.site/classic-edumedia/');
    await expect(page.locator('iframe')).toBeVisible();
});

// As now we only have embed support 