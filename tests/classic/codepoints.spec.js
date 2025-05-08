const { test, expect } = require('@playwright/test');

test('Embed Classic Codepoints source', async ({ page }) => {
    await page.goto('https://embedpress.wpqa.site/playwright-classic-editor/cl-codepoints/');
    await expect(page.getByRole('paragraph').filter({ hasText: 'https://codepoints.net/U+' })).toBeVisible();
});

// As now we only have embed support 