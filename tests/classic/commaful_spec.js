const { test, expect } = require('@playwright/test');

test('Embed Classic Commaful source', async ({ page }) => {
    await page.goto('https://embedpress.wpqa.site/playwright-classic-editor/cl-commaful/');
    
});

// As now we only have embed support 