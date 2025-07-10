const { test, expect } = require('@playwright/test');


test('Visibility of Google Photos justify Layout in Gutenberg', async ({ page }) => {

    await page.goto('gu-google-photos-justify-layout/');

    await expect(page.getByRole('heading', { name: 'GU Google Photos Justify' })).toBeVisible();


    // justify layout visibility 
    const justify = page.locator('.google-photos-gallery-justify-widget');
    await expect(justify).toBeVisible();


    await expect(page.getByRole('heading', { name: 'Startise Pitha Utshob 5.0 –' })).toBeVisible();
    await page.locator('#photo-c4c389e29d69c63787aba1e1fb448a5d').getByRole('img', { name: 'Photo' }).click();
    await expect(page.locator('#close-btn').getByRole('img')).toBeVisible();
    await expect(page.locator('#next-btn')).toBeVisible();
    await expect(page.locator('#prev-btn')).toBeVisible();
});