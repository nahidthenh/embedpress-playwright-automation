const { test, expect } = require('@playwright/test');

test('Embed Gutenberg Gloria TV source', async ({ page }) => {
    await page.goto('https://embedpress.wpqa.site/gu-gloria-tv/');
    await expect(page.locator('iframe').contentFrame().locator('.play')).toBeVisible();
});
// As now we only have embed support

