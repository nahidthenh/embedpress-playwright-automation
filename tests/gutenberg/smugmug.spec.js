const { test, expect } = require('@playwright/test');

test('Embed Gutenberg smugmug source', async ({ page }) => {
    await page.goto('https://embedpress.wpqa.site/smugmug-gutenberg/');
    await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible();
});

// As now we only have embed support for this Source
