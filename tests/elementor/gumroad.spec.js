const { test, expect } = require('@playwright/test');

test('Embed Gutenberg Gumroad source', async ({ page }) => {
    await page.goto('https://embedpress.wpqa.site/playwright-elementor/elementor-gumroad/');
    await expect(page.locator('iframe').contentFrame().locator('.preview').first()).toBeVisible();
    await expect(page.locator('iframe').contentFrame().getByLabel('Product information bar').getByRole('link', { name: 'Buy this' })).toBeVisible();
    await expect(page.locator('iframe').contentFrame().getByText('$').first()).toBeVisible();
});

// As now we only have embed support for Gumroad

