const { test, expect } = require('@playwright/test');

test('Embed Classic Canva source', async ({ page }) => {
    await page.goto('https://embedpress.wpqa.site/classic-codesandbox/');
    await expect(page.locator('iframe').contentFrame().locator('#root div').filter({ hasText: 'Open Sandboxindex.html12345<!' }).nth(1)).toBeVisible();
});

// As now we only have embed support 