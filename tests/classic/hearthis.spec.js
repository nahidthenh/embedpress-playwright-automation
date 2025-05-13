const { test, expect } = require('@playwright/test');

test('Embed Classic Hearthis source', async ({ page }) => {
    await page.goto('https://embedpress.wpqa.site/playwright-classic-editor/classic-hearthis/');
    await expect(page.locator('iframe[title="breakfast with samsie on jfsr friday 9\\,5\\,25 another 2 hour disco special requested by the listeners"]').contentFrame().getByText('privacy Paul Samsbreakfast')).toBeVisible();
});

// As now we only have embed support for this Source

