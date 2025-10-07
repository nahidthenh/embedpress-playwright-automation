const { test, expect } = require('@playwright/test');

test('Embed Elementor Instagram Reels Support', async ({ page }) => {
    await page.goto('https://ep-automation.wpqa.site/playwright-elementor/elementor-instagram-reels-support/');
    await expect(page.locator('#ep-elements-id-527c1a6').getByText('Fetching content').contentFrame().getByRole('link', { name: 'Instagram post shared by @' })).toBeVisible();
});
// As now we only have embed support for Instagram reels