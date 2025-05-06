const { test, expect } = require('@playwright/test');

test('Embed Gutenberg Instagram Reels Support', async ({ page }) => {
    await page.goto('https://embedpress.wpqa.site/gutenberg-instagram-reels-support/');
    await expect(page.getByText('Fetching content').contentFrame().getByText('me_tester23Original audioView')).toBeVisible();
});
// As now we only have embed support for Instagram reels