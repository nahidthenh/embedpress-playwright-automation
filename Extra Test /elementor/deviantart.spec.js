const { test, expect } = require('@playwright/test');

test('Embed Elementor deviantart source', async ({ page }) => {
    await page.goto('https://embedpress.wpqa.site/playwright-elementor/elementor-deviantart/');
    await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible();
});
// As now we only have embed support for deviantart

