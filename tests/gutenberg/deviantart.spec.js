const { test, expect } = require('@playwright/test');

test('Embed Gutenberg deviantart source', async ({ page }) => {
    await page.goto('https://ep-automation.wpqa.site/gutenberg-deviantart/');
    await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible();
});
// As now we only have embed support for deviantart

