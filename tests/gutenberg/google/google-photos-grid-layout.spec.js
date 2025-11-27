const { test, expect } = require('@playwright/test');


test('Visibility of Google Photos Grid Layout in Gutenberg', async ({ page }) => {

    await page.goto('https://ep-automation.obayedmamur.com/gu-google-photos-grid-layout/');

    await expect(page.getByRole('heading', { name: 'Gu Google Photos – Grid Layout' })).toBeVisible();

    // Grid layout visibility 
    const grid = page.locator('.google-photos-gallery-grid-widget');
    await expect(grid).toBeVisible();

    await expect(page.getByRole('heading', { name: 'Startise Pitha Utshob 5.0 –' })).toBeVisible();
    await expect(page.locator('#photo-c4c389e29d69c63787aba1e1fb448a5d > img')).toBeVisible();
    await expect(page.locator('#photo-fe3a9f5230123699055972327c853a39').getByRole('img', { name: 'Photo' })).toBeVisible();
    await page.locator('#photo-fe3a9f5230123699055972327c853a39').getByRole('img', { name: 'Photo' }).click();
    await expect(page.locator('#close-btn').getByRole('img')).toBeVisible();
    await expect(page.locator('#next-btn')).toBeVisible();
    await expect(page.locator('#prev-btn')).toBeVisible();
});