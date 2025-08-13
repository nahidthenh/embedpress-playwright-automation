const { test, expect } = require('@playwright/test');

test.use({ storageState: 'playwright/.auth/user.json' });


test.describe('Elementor source embed TestCases', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://ep-automation.wpqa.site/wp-admin/post.php?post=9540&action=elementor');
    });

    test('Elementor source embed', async ({ page }) => {
        await page.getByPlaceholder('Search Widget...').click();
        await page.getByPlaceholder('Search Widget...').fill('embedpress');
        await page.getByRole('button', { name: 'EmbedPress', exact: true }).click();
        await page.getByPlaceholder('Enter your Link').click();

        await page.getByPlaceholder('Enter your Link').fill('https://youtu.be/e5TVOrm2e38');
        await page.keyboard.press('Enter');
        await page.getByLabel('Add Element').click();
        await page.getByPlaceholder('Search Widget...').click();
        await page.getByPlaceholder('Search Widget...').fill('embedpress');
        await page.getByRole('button', { name: 'EmbedPress PDF' }).click();
        await page.getByTitle('Upload').locator('i').click();
        await page.getByLabel('university-life-impact-').click();
        await page.getByRole('button', { name: 'Select', exact: true }).click();

        await page.waitForTimeout(3000);
        await page.getByRole('button', { name: 'Publish' }).click();
        await page.waitForTimeout(3000);
        await page.goto('https://ep-automation.wpqa.site/playwright-elementor/elementor-source-embed-test-cases/');
        await page.waitForLoadState()

        // Check Embeded Content Visibility 
        await expect(page.locator('iframe[title="নো সাকিবিয়ান-নো তামিমিয়ান-নো মাশরাফিয়ান\\, শুধু বাংলাদেশ \\: তামিম ইকবাল \\| T Sports"]').contentFrame().getByRole('link', { name: 'নো সাকিবিয়ান-নো তামিমিয়ান-নো মাশরাফিয়ান, শুধু বাংলাদেশ : তামিম ইকবাল | T' })).toBeVisible();
        await expect(page.locator('iframe[title="university-life-impact-report_196he6m"]').contentFrame().getByText('Toggle Sidebar Find Previous Next of ⁨17⁩ Highlight Text Draw Add or edit')).toBeVisible();
        // Remove all embeded content
        await page.getByRole('link', { name: ' Edit with Elementor' }).click();
        await page.waitForTimeout(3000);
        await page.locator('iframe[title="Preview"]').contentFrame().getByRole('listitem', { name: 'Delete Container' }).locator('i').click();
        await page.waitForTimeout(3000);
        await page.getByRole('button', { name: 'Publish' }).click();
    });
});
