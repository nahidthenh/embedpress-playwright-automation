const { test, expect } = require('@playwright/test');


test('Visibility of Google Photos justify Layout in Elementor', async ({ page }) => {

    await page.goto('https://embedpress.wpqa.site/playwright-elementor/el-google-photos-justify-layout/');

    // justify layout visibility 
    const justify = page.locator('.google-photos-gallery-justify-widget');
    await expect(justify).toBeVisible();


    await expect(page.getByRole('heading', { name: 'Startise Pitha Utshob 5.0 -' })).toBeVisible();
    await page.locator('#photo-bd5594752c9442b1fe75d06a0732f8e3').getByRole('img', { name: 'Photo' }).click();
    await expect(page.locator('#close-btn').getByRole('img')).toBeVisible();
    await expect(page.locator('#next-btn')).toBeVisible();
    await expect(page.locator('#prev-btn')).toBeVisible();
});