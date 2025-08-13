const { test, expect } = require('@playwright/test');

test('Embed Classic Matterport source', async ({ page }) => {
    await page.goto('https://ep-automation.wpqa.site/playwright-classic-editor/classic-matterport/');
    await expect(page.locator('iframe[title="Shoppable Home Office"]').contentFrame().locator('#tint')).toBeVisible();
    await expect(page.locator('iframe[title="Shoppable Home Office"]').contentFrame().getByRole('heading', { name: 'Shoppable Home Office' })).toBeVisible();
    await expect(page.locator('iframe[title="Shoppable Home Office"]').contentFrame().getByRole('button', { name: 'Play' })).toBeVisible();
});

// As now we only have embed support

