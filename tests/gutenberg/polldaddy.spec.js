const { test, expect } = require('@playwright/test');

test('Embed Gutenberg Polldaddy source', async ({ page }) => {
    await page.goto('https://embedpress.wpqa.site/gu-polldaddy/');
    
});
// As now we only have embed support for Polldaddy

