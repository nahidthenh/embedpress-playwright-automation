const { test, expect } = require('@playwright/test');

test('Embed Classic Canva source', async ({ page }) => {
    await page.goto('https://embedpress.wpqa.site/gu-canva/');
    await expect(page.locator('iframe[title="Accounting Service Website in Black and White Photographic Style"]').contentFrame().locator('div:nth-child(2) > .uk_25A > .Izwocg')).toBeVisible();
    await expect(page.locator('iframe[title="Accounting Service Website in Black and White Photographic Style"]').contentFrame().getByText('EmbedPress')).toBeVisible();
});

// As now we only have embed support 