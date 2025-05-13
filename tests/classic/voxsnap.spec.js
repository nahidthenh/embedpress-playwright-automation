const { test, expect } = require('@playwright/test');

test('Embed Classic Voxsnap', async ({ page }) => {
    await page.goto('https://embedpress.wpqa.site/playwright-classic-editor/cl-voxsnap/');
});
// As now we only have embed support for this source 