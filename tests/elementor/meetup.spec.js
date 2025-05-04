const { test, expect } = require('@playwright/test');

test('Embed Elementor MeetUp source', async ({ page }) => {
    await page.goto('https://embedpress.wpqa.site/playwright-elementor/elementor-meetup/');
    await page.goto('https://embedpress.wpqa.site/classic-meetup/');
    await expect(page.getByRole('link', { name: 'MasterClass: BrandBooster -' })).toBeVisible();
    await page.getByRole('img', { name: 'MasterClass: BrandBooster -' }).click();
    await expect(page.getByRole('heading', { name: 'Details' })).toBeVisible();
});

// As now we only have embed support for MeetUp

