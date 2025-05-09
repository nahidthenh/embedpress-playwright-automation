const { test, expect } = require('@playwright/test');

test('Embed Gutenberg BoomPlay source', async ({ page }) => {
    await page.goto('https://embedpress.wpqa.site/gu-boomplay/');
    await expect(page.locator('iframe').contentFrame().locator('.header_bg > div')).toBeVisible();
    await expect(page.locator('iframe').contentFrame().getByRole('link', { name: 'Bolte Bolte Cholte Cholte' })).toBeVisible();
});

// As now we only have embed support

