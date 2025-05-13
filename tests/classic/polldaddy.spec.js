const { test, expect } = require('@playwright/test');

test('Embed Classic Polldaddy source', async ({ page }) => {
    await page.goto('https://embedpress.wpqa.site/cl-polldaddy/');
    await expect(page.getByRole('button', { name: 'Vote' })).toBeVisible();

});
// As now we only have embed support for Polldaddy
