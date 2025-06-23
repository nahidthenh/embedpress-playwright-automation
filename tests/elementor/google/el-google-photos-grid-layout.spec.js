const { test, expect } = require('@playwright/test');


test('Visibility of Google Photos Grid Layout in Elementor', async ({ page }) => {

    await page.goto('https://embedpress.wpqa.site/playwright-elementor/el-google-photos-grid-layout/');

    // Grid layout visibility 
    const grid = page.locator('.google-photos-gallery-grid-widget');
    await expect(grid).toBeVisible();

    await expect(page.getByRole('heading', { name: 'Startise Pitha Utshob 5.0 -' })).toBeVisible();
    await page.locator('#photo-bfc8a4c887b0f14a75c646d939422f4c').getByRole('img', { name: 'Photo' }).click();
    await expect(page.locator('#close-btn').getByRole('img')).toBeVisible();
    await expect(page.locator('#next-btn')).toBeVisible();
    await expect(page.locator('#prev-btn')).toBeVisible();
});