const { test, expect } = require('@playwright/test');

test('Embed Classic Songlink source', async ({ page }) => {
    await page.goto('https://embedpress.wpqa.site/playwright-classic-editor/cl-songlink/');
    
});

// As now we only have embed support for this Source

