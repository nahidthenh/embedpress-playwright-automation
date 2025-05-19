const { test, expect } = require('@playwright/test');

test('Embed Classic smash notes source', async ({ page }) => {
    await page.goto('https://embedpress.wpqa.site/playwright-classic-editor/cl-smash-notes/');
    await expect(page.locator('iframe').first().contentFrame().getByRole('button', { name: 'Play episode' })).toBeVisible();
    await expect(page.locator('iframe[title="The Good Whale - Ep\\. 6 - Serial"]').contentFrame().getByText(':00 36:58')).toBeVisible();
});

// As now we only have embed support for this Source

