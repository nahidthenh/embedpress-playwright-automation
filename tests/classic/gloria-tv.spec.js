const { test, expect } = require('@playwright/test');

test('Embed Classic Gloria TV source', async ({ page }) => {
    await page.goto('https://embedpress.wpqa.site/playwright-classic-editor/classic-gloria-tv/');
    await expect(page.locator('iframe').contentFrame().locator('.play')).toBeVisible();
});
// As now we only have embed support

