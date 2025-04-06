const { test, expect } = require('@playwright/test');

test('Embed Gutenberg Gumroad source', async ({ page }) => {
    await page.goto('https://embedpress.wpqa.site/playwright-elementor/elementor-meetup/');
    await expect(page.getByRole('link', { name: 'Scrum Master product Owner' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Hosted By Dhirender Verma S.' })).toBeVisible();
    await expect(page.getByRole('img', { name: 'Scrum Master product Owner' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Details' })).toBeVisible();
});

// As now we only have embed support for Gumroad

