const { test, expect } = require('@playwright/test');

test('Embed Elementor Polldaddy source', async ({ page }) => {
    await page.goto('https://embedpress.wpqa.site/el-polldaddy/');
   
    
});
// As now we only have embed support for Polldaddy

