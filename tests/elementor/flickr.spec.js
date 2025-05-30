const { test, expect } = require('@playwright/test');

test('Embed Elementor Flickr source', async ({ page }) => {
    await page.goto('https://embedpress.wpqa.site/playwright-elementor/elementor-flickr/');
    await expect(page.getByRole('link', { name: 'The Sledge' })).toBeVisible();
});
// As now we only have embed support for Flickr

