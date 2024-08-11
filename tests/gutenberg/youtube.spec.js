const { test, expect } = require('@playwright/test');

let slug = 'gutenberg-youtube';


test.describe("Gutenberg YouTube", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto(slug);
    });



    test('Default YouTube', async ({ page }) => {
        const framelocator = page.frameLocator('iframe[title="শ্রেষ্ঠ মানুষেরা - \\[পর্ব ৮\\] - ইবরাহিম \\(আঃ\\)"]')
        await expect(page.getByRole('heading', { name: 'Default YouTube' })).toBeVisible();
        await expect(page.getByText('Copy URL Form Right-click on')).toBeVisible();
        await expect(page.locator('.ep-embed-content-wraper').first()).toBeVisible();
        await expect(framelocator.getByLabel('Play', { exact: true })).toBeVisible();
        await expect(framelocator.getByRole('button', { name: 'Share' })).toBeVisible();
        await expect(framelocator.locator('div').filter({ hasText: 'শ্রেষ্ঠ মানুষেরা - [পর্ব ৮] - ইবরাহিম (আঃ)' }).nth(4)).toBeVisible();
        await expect(framelocator.getByRole('link', { name: 'Watch on YouTube' })).toBeVisible();
    });
});