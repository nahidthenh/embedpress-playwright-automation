const { test, expect } = require('@playwright/test');

test('Embed Classic Sway source', async ({ page }) => {
    await page.goto('https://embedpress.wpqa.site/playwright-classic-editor/cl-sway/');
});

// As now we only have embed support 