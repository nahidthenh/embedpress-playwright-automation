const { test, expect } = require('@playwright/test');

test.use({ storageState: 'playwright/.auth/user.json' });

test.beforeEach(async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();

    // Navigate to the WordPress plugins page
    await page.goto('https://embedpress.wpqa.site/wp-admin/plugins.php?plugin_status=all&paged=1&s');

    // Locator for the Classic Editor plugin row
    const pluginRow = page.locator('tr[data-slug="classic-editor"]');

    // Check if the "Deactivate" button is visible (meaning the plugin is already active)
    const isActive = await pluginRow.locator('a:has-text("Deactivate")').isVisible();

    if (!isActive) {
        // If inactive, activate the Classic Editor plugin
        await pluginRow.locator('a:has-text("Activate")').click();

        // Ensure the plugin is activated
        await expect(pluginRow.locator('a:has-text("Deactivate")')).toBeVisible();
    }

    await page.close(); // Close the setup page to avoid test interference
});

// Test case 1: Open Classic Editor and Check YT Video Embed
test('Open Classic Editor and Check YT Video Embed', async ({ page }) => {
    await page.goto('https://embedpress.wpqa.site/wp-admin/post.php?post=9610&action=edit&classic-editor');

    // Fill YouTube embed code with a new line in between
    await page.locator('#content').fill('[embedpress]https://youtu.be/x-hxSgtO_Zw[/embedpress]\n[embedpress_pdf]https://embedpress.wpqa.site/wp-content/uploads/2024/07/sample_pdf.pdf[/embedpress_pdf]');

    await page.getByRole('button', { name: 'Update' }).click();
    await page.getByRole('link', { name: 'View page' }).click();

    const frame = page.locator('iframe[title*="Ruqyah DUA"]').contentFrame();
    await expect(frame.getByRole('link', { name: 'Powerful Ruqyah DUA Against' })).toBeVisible();

    await page.waitForTimeout(2000);
    await page.getByRole('menuitem', { name: ' Edit Page' }).click();

    // Select & clear the embed text
    await page.locator('#content').press('ControlOrMeta+a');
    await page.locator('#content').fill('');

    await page.getByRole('button', { name: 'Update' }).click();
});

// Test case 2: Open Classic Editor and Check Modern PDF Embed
test('Open Classic Editor and Check Modern PDF Embed', async ({ page }) => {
    await page.goto('https://embedpress.wpqa.site/wp-admin/post.php?post=9610&action=edit&classic-editor');

    // Fill PDF embed code
    await page.locator('#content').fill('[embedpress_pdf]https://embedpress.wpqa.site/wp-content/uploads/2024/07/sample_pdf.pdf[/embedpress_pdf]');

    await page.getByRole('button', { name: 'Update' }).click();
    await page.getByRole('link', { name: 'View page' }).click();

    const pdfFrame = page.locator('iframe[title="sample_pdf"]').contentFrame();
    await expect(pdfFrame.getByText('PDF B', { exact: true })).toBeVisible();

    await page.waitForTimeout(2000);
    await page.getByRole('menuitem', { name: ' Edit Page' }).click();

    // Select & clear the embed text
    await page.locator('#content').press('ControlOrMeta+a');
    await page.locator('#content').fill('');

    await page.getByRole('button', { name: 'Update' }).click();
});
