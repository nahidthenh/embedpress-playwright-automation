const { test, expect } = require('@playwright/test');

test('Embed Gutenberg Flickr source', async ({ page }) => {
    await page.goto('https://embedpress.wpqa.site/gutenberg-flickr/');
    await expect(page.getByRole('link', { name: 'The Sledge' })).toBeVisible();
});
// As now we only have embed support for Flickr

