const { test, expect } = require('@playwright/test');

test('Embed Gutenberg Voxsnap source', async ({ page }) => {
    await page.goto('https://embedpress.wpqa.site/gu-voxsnap/');
});
// As now we only have embed support for Voxsnap 