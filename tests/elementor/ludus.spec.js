const { test, expect } = require('@playwright/test');

test('Embed Elementor Ludus source', async ({ page }) => {
    await page.goto('https://embedpress.wpqa.site/elementor-ludus/');
    await page.waitForTimeout(6000);
    await expect(page.locator('iframe[title="User guide"]').contentFrame().getByText('User guide01/39CloneDownload')).toBeVisible();
});
// As now we only have embed support