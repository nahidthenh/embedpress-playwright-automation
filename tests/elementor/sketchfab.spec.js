const { test, expect } = require('@playwright/test');

test('Embed Elementor sketchfab source', async ({ page }) => {
    await page.goto('https://embedpress.wpqa.site/el-sketchfab/') 
});

// As now we only have embed support for this Source

