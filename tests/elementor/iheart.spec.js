const { test, expect } = require('@playwright/test');

test('Embed Elementor iheart source', async ({ page }) => {
    await page.goto('https://ep-automation.wpqa.site/playwright-elementor/el-iheart/');
    await expect(page.locator('iframe[title="Bad Luck\\, Mary - Murder on the Towpath with Soledad O’Brien"]').contentFrame().locator('div').filter({ hasText: 'Murder on the Towpath with Soledad O’Brien •iHeartBad Luck, Mary - Murder on' }).nth(1)).toBeVisible();
});

// As now we only have embed support for this Source

