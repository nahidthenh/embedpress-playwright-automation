const { test, expect } = require('@playwright/test');

test.use({ storageState: 'playwright/.auth/user.json' });

test.beforeAll(async ({ page }) => {
    // Navigate to the WordPress plugins page
    await page.goto('https://embedpress.wpqa.site/wp-admin/plugins.php?plugin_status=all&paged=1&s');

    // Locator for the Classic Editor plugin row
    const pluginRow = page.locator('tr[data-slug="classic-editor"]');

    // Check if the "Deactivate" button is visible (meaning the plugin is already active)
    const isActive = await pluginRow.locator('a', { hasText: 'Deactivate' }).isVisible();

    if (!isActive) {
        // If inactive, activate the Classic Editor plugin
        const activateButton = pluginRow.locator('a', { hasText: 'Activate' });
        await activateButton.click();

        // Ensure the plugin is activated
        await expect(pluginRow.locator('a', { hasText: 'Deactivate' })).toBeVisible();
    }
});

// Test case 1: Open Classic Editor
test('Open Classic Editor and Check YT Video Embed', async ({ page }) => {
    await page.goto('https://embedpress.wpqa.site/wp-admin/post.php?post=9610&action=edit&classic-editor');
    await page.locator('#content').click();
    await page.locator('#content').fill('[embedpress]https://youtu.be/x-hxSgtO_Zw[/embedpress]');

    await page.getByRole('button', { name: 'Update' }).click();
    await page.getByRole('link', { name: 'View page' }).click();
    await expect(page.locator('iframe[title="Powerful Ruqyah DUA Against Bad Evil Eye\\, Black magic Sihir\\, Jinns\\,  \\& Jealousy"]').contentFrame().getByRole('link', { name: 'Powerful Ruqyah DUA Against' })).toBeVisible();
    await page.waitForTimeout(2000);
    await page.getByRole('menuitem', { name: ' Edit Page' }).click();

    await page.getByText('[embedpress]https://youtu.be/').click();
    await page.getByText('[embedpress]https://youtu.be/').press('ControlOrMeta+a');
    await page.getByText('[embedpress]https://youtu.be/').fill('');
    await page.getByRole('button', { name: 'Update' }).click();
});

test('Open Classic Editor and Check Modern PDF Embed', async ({ page }) => {
    await page.goto('https://embedpress.wpqa.site/wp-admin/post.php?post=9610&action=edit&classic-editor');
    await page.locator('#content').click();
    await page.locator('#content').fill('[embedpress_pdf]https://embedpress.wpqa.site/wp-content/uploads/2024/07/sample_pdf.pdf[/embedpress_pdf]');
    await page.getByRole('button', { name: 'Update' }).click();
    await page.getByRole('link', { name: 'View page' }).click();
    await expect(page.locator('iframe[title="sample_pdf"]').contentFrame().getByText('PDF B', { exact: true })).toBeVisible();
    await page.waitForTimeout(2000);
    await page.getByRole('menuitem', { name: ' Edit Page' }).click();

    await page.getByText('[embedpress_pdf]https://embedpress.wpqa.site').click();
    await page.getByText('[embedpress_pdf]https://embedpress.wpqa.site').press('ControlOrMeta+a');
    await page.getByText('[embedpress_pdf]https://embedpress.wpqa.site').fill('');
    await page.getByRole('button', { name: 'Update' }).click();
});