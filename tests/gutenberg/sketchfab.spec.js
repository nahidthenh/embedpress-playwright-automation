const { test, expect } = require('@playwright/test');

test('Embed Gutenberg Sketchfab source', async ({ page }) => {
    await page.goto('https://embedpress.wpqa.site/playwright-gutenberg/gu-sketchfab/');
  
   
});

// As now we only have embed support for this Source
