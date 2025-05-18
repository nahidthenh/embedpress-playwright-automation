const { test, expect } = require('@playwright/test');

test('Embed Gutenberg VideoPress source', async ({ page }) => {
    await page.goto('https://embedpress.wpqa.site/playwright-gutenberg/gu-videopress/');
});

// As now we only have embed support for this Source

