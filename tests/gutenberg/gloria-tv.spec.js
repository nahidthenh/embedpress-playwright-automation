const { test, expect } = require('@playwright/test');

test('Embed Gutenberg Gloria TV source', async ({ page }) => {
    await page.goto('https://embedpress.wpqa.site/gu-gloria-tv/');
    // await expect(page.locator('iframe').contentFrame().locator('.play')).toBeVisible();
    // Source embedding problem with Gloria TV, so we are not able to test it
});
// As now we only have embed support

