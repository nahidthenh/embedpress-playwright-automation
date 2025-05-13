const { test, expect } = require('@playwright/test');

test('Embed Gutenberg Sway source', async ({ page }) => {
    await page.goto('https://embedpress.wpqa.site/playwright-gutenberg/gu-sway/');
   
});

// As now we only have embed support 