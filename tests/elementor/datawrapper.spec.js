const { test, expect } = require('@playwright/test');

test('Embed Elementor datawrapper source', async ({ page }) => {
    await page.goto('https://ep-automation.wpqa.site/playwright-elementor/el-datawrapper/');
    await page.locator('.elementor-element').first().click();
    await page.locator('iframe[title="\\35 6\\% of Icelanders live in their capital Reykjavík "]').contentFrame().locator('div').filter({ hasText: /^65\.3%$/ }).first().click();
});
// As now we only have embed support for datawrapper

