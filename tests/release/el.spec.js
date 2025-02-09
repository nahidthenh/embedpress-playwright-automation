const { test, expect } = require('@playwright/test');

test.use({ storageState: 'playwright/.auth/user.json' });


test.describe('Elementor source embed TestCases', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://embedpress.wpqa.site/wp-admin/post.php?post=9540&action=elementor');
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

        await page.getByRole('button', { name: 'Publish' }).click();
        await page.goto('https://embedpress.wpqa.site/playwright-elementor/elementor-source-embed-test-cases/');
        await page.waitForLoadState()

        await expect(page.locator('iframe[title="নো সাকিবিয়ান-নো তামিমিয়ান-নো মাশরাফিয়ান\\, শুধু বাংলাদেশ \\: তামিম ইকবাল \\| T Sports"]').contentFrame().getByRole('link', { name: 'নো সাকিবিয়ান-নো তামিমিয়ান-নো মাশরাফিয়ান, শুধু বাংলাদেশ : তামিম ইকবাল | T' })).toBeVisible();
        await expect(page.locator('iframe[title="university-life-impact-report_196he6m"]').contentFrame().getByText('THE DIVISION OF')).toBeVisible();
        await page.getByRole('link', { name: ' Edit with Elementor' }).click();
        await page.locator('iframe[title="Preview"]').contentFrame().getByLabel('Delete Container').click();
        await page.getByRole('button', { name: 'Publish' }).click();

        await page.goto('https://embedpress.wpqa.site/playwright-elementor/elementor-source-embed-test-cases/');

        await expect(page.locator('iframe[title="নো সাকিবিয়ান-নো তামিমিয়ান-নো মাশরাফিয়ান\\, শুধু বাংলাদেশ \\: তামিম ইকবাল \\| T Sports"]').contentFrame().getByRole('link', { name: 'নো সাকিবিয়ান-নো তামিমিয়ান-নো মাশরাফিয়ান, শুধু বাংলাদেশ : তামিম ইকবাল | T' })).toBeHidden();
        await expect(page.locator('iframe[title="university-life-impact-report_196he6m"]').contentFrame().getByText('THE DIVISION OF')).toBeHidden();
    });
});


