const { test, expect } = require('@playwright/test');


test('Visibility of Google Photos Masonry Layout in Gutenberg', async ({ page }) => {

    await page.goto('https://ep-automation.wpqa.site/playwright-gutenberg/gu-google-photos-masonry-layout/');

    await expect(page.getByRole('heading', { name: 'GU Google Photos Masonry' })).toBeVisible();

    // masonry layout visibility 
    const masonry = page.locator('.google-photos-gallery-masonary-widget');
    await expect(masonry).toBeVisible();


    await expect(page.getByRole('heading', { name: 'Startise Pitha Utshob 5.0 –' })).toBeVisible();
    await page.locator('#photo-c4c389e29d69c63787aba1e1fb448a5d').getByRole('img', { name: 'Photo' }).click();
    await expect(page.locator('#close-btn').getByRole('img')).toBeVisible();
    await expect(page.locator('#next-btn')).toBeVisible();
    await expect(page.locator('#prev-btn')).toBeVisible();
});