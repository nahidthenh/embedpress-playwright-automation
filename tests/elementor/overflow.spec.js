const { test, expect } = require('@playwright/test');

test('Embed Elementor Overflow source', async ({ page }) => {
    await page.goto('https://ep-automation.wpqa.site/el-overflow/')
    // await expect(page.locator('iframe').contentFrame().getByText('Eid Ul Azha GOAT CAMELCOW')).toBeVisible();
    await expect(page.locator('iframe').contentFrame().getByRole('heading', { name: 'Publication preview' })).toBeVisible();
});
// As now we only have embed support for Overflow

