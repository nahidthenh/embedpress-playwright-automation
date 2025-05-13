const { test, expect } = require('@playwright/test');

test('Embed Classic Polldaddy source', async ({ page }) => {
    await page.goto('https://embedpress.wpqa.site/cl-polldaddy/');
   
});
// As now we only have embed support for Polldaddy

