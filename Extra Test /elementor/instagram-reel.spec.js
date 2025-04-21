const { test, expect } = require('@playwright/test');

test('Embed Elementor Instagram Reels Support', async ({ page }) => {
    await page.goto('https://embedpress.wpqa.site/playwright-elementor/elementor-instagram-reels-support/');
    await expect(page.getByText('Fetching content').contentFrame().getByText('me_tester23Original audioView')).toBeVisible();
});
// As now we only have embed support for Instagram reels