const { test, expect } = require('@playwright/test');

test.use({ storageState: 'playwright/.auth/user.json' });

test.describe('Gutenberg source embed TestCases', () => {
    test.beforeEach(async ({ browser }) => {
        const context = await browser.newContext();
        const page = await context.newPage();

        // Navigate to the WordPress plugins page
        await page.goto('https://ep-automation.wpqa.site/wp-admin/plugins.php?plugin_status=all&paged=1&s');

        // Locator for the Classic Editor plugin row
        const pluginRow = page.locator('tr[data-slug="classic-editor"]');

        // Check if the "Deactivate" button is visible (meaning the plugin is active)
        const isActive = await pluginRow.locator('a:has-text("Deactivate")').isVisible();

        if (isActive) {
            // If Classic Editor is active, deactivate it
            await pluginRow.locator('a:has-text("Deactivate")').click();
            await expect(pluginRow.locator('a:has-text("Activate")')).toBeVisible();
        }

        await page.close(); // Close to prevent session interference
    });
    test('Gutenberg source embed', async ({ page }) => {
        await page.goto('https://ep-automation.wpqa.site/wp-admin/post.php?post=9507&action=edit');
        // Wait for the editor to load
        await page.waitForSelector('.edit-post-layout');

        // Add a new block
        await page.getByLabel('Add default block').click();
        await page.getByLabel('Empty block; start writing or').fill('/embedpress');
        await page.waitForTimeout(100)
        await page.keyboard.press('Enter');
        await page.getByPlaceholder('Enter URL to embed here…').click();
        await page.getByPlaceholder('Enter URL to embed here…').fill('https://youtu.be/e5TVOrm2e38');
        await page.getByRole('button', { name: 'Embed', exact: true }).click();
        await page.waitForTimeout(300)
        await expect(page.getByLabel('Block: EmbedPress').locator('div').nth(3)).toBeVisible();
        await page.getByRole('button', { name: 'Save', exact: true }).click();
        await page.getByTestId('snackbar').getByRole('link', { name: 'View Page' }).click();
        await expect(page.locator('iframe[title="নো সাকিবিয়ান-নো তামিমিয়ান-নো মাশরাফিয়ান\\, শুধু বাংলাদেশ \\: তামিম ইকবাল \\| T Sports"]').contentFrame().getByRole('link', { name: 'নো সাকিবিয়ান-নো তামিমিয়ান-নো মাশরাফিয়ান, শুধু বাংলাদেশ : তামিম ইকবাল | T' })).toBeVisible();
        await expect(page.getByRole('menuitem', { name: ' Edit Page' })).toBeVisible();
        await page.getByRole('menuitem', { name: ' Edit Page' }).click();
        await page.getByLabel('Block: EmbedPress').locator('div').nth(3).click();
        await page.getByLabel('Block tools').getByLabel('Options').click();
        await page.getByRole('menuitem', { name: 'Delete ⌃⌥Z' }).click();
        await page.getByRole('button', { name: 'Save', exact: true }).click();
        await page.getByTestId('snackbar').getByRole('link', { name: 'View Page' }).click();
        await expect(page.locator('iframe[title="নো সাকিবিয়ান-নো তামিমিয়ান-নো মাশরাফিয়ান\\, শুধু বাংলাদেশ \\: তামিম ইকবাল \\| T Sports"]').contentFrame().getByRole('link', { name: 'নো সাকিবিয়ান-নো তামিমিয়ান-নো মাশরাফিয়ান, শুধু বাংলাদেশ : তামিম ইকবাল | T' })).toBeHidden();
    });

    // Gutenberg PDF source embed

    test('Gutenberg PDF source embed', async ({ page }) => {
        await page.goto('https://ep-automation.wpqa.site/wp-admin/post.php?post=9507&action=edit');
        await page.getByLabel('Add default block').click();
        await page.getByLabel('Empty block; start writing or').fill('/embedpress pdf');
        await page.keyboard.press('Backspace');
        await page.keyboard.press('Enter');
        await page.getByRole('button', { name: 'Media Library' }).click();
        await page.getByLabel('university-life-impact-').click();
        await page.getByRole('button', { name: 'Select', exact: true }).click();
        await expect(page.getByLabel('Block: EmbedPress PDF').locator('div').nth(3)).toBeVisible();
        await page.waitForTimeout(300)
        await expect(page.getByLabel('Block: EmbedPress PDF').locator('div').nth(3)).toBeVisible();
        await page.getByRole('button', { name: 'Save', exact: true }).click();
        await page.getByTestId('snackbar').getByRole('link', { name: 'View Page' }).click();
        await expect(page.locator('iframe[title="university-life-impact-report_196he6m"]').contentFrame().getByText('Toggle Sidebar Find Previous Next of ⁨17⁩ Highlight Text Draw Add or edit')).toBeVisible();
        await expect(page.getByRole('menuitem', { name: ' Edit Page' })).toBeVisible();
        await page.getByRole('menuitem', { name: ' Edit Page' }).click();
        await page.getByLabel('Block: EmbedPress PDF').locator('div').nth(3).click();
        await page.getByLabel('Block tools').getByLabel('Options').click();
        await page.getByRole('menuitem', { name: 'Delete ⌃⌥Z' }).click();
        await page.getByRole('button', { name: 'Save', exact: true }).click();
        await page.getByTestId('snackbar').getByRole('link', { name: 'View Page' }).click();
        await expect(page.locator('iframe[title="university-life-impact-report_196he6m"]').contentFrame().getByText('Toggle Sidebar Find Previous Next of ⁨17⁩ Highlight Text Draw Add or edit')).toBeHidden();
    });
});
