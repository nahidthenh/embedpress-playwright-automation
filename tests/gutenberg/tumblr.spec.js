const { test, expect } = require('@playwright/test');

test('Embed Gutenberg Tumblr source', async ({ page }) => {
    await page.goto('https://embedpress.wpqa.site/tumblr-guteberg/');
    await expect(page.locator('iframe[title="Tumblr post"]').contentFrame().getByRole('link', { name: 'nahidwpd', exact: true })).toBeVisible();
});
// As now we only have embed support for Tumblr