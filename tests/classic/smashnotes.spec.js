const { test, expect } = require('@playwright/test');

test('Embed Classic smash notes source', async ({ page }) => {
    await page.goto('https://ep-automation.wpqa.site/playwright-classic-editor/cl-smash-notes/');
    await expect(page.locator('iframe').first().contentFrame().getByRole('button', { name: 'Play episode' })).toBeVisible();
});

// As now we only have embed support for this Source

