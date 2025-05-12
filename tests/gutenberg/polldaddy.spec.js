const { test, expect } = require('@playwright/test');

test('Embed Gutenberg Polldaddy source', async ({ page }) => {
    await page.goto('https://embedpress.wpqa.site/gu-polldaddy/');
    await expect(page.locator('body')).toBeVisible();
});
// As now we only have embed support for Polldaddy

