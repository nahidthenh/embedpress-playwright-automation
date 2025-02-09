const { test, expect } = require('@playwright/test');

test.use({ storageState: 'playwright/.auth/user.json' });


test.describe('Dashboard Branding Tab', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://embedpress.wpqa.site/wp-admin/post.php?post=9507&action=edit');
    });
    test('Gutenberg source embed', async ({ page }) => {
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


