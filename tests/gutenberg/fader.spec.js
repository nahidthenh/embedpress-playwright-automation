const { test, expect } = require('@playwright/test');

test('Embed Gutenberg Fader source', async ({ page }) => {
    await page.goto('https://embedpress.wpqa.site/gutenberg-fader/');
    await expect(page.locator('iframe').contentFrame().locator('footer > div > div > div')).toBeVisible();
});
// As now we only have embed support 

