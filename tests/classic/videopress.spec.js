const { test, expect } = require('@playwright/test');

test('Embed Classic VideoPress source', async ({ page }) => {
    await page.goto('http://embedpress.wpqa.site/playwright-classic-editor/cl-videopress/');
});

// As now we only have embed support for this Source

