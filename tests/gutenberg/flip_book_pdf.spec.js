const { test, expect } = require('@playwright/test');

let slug = 'flip-book-pdf';


test.describe("Gutenberg Flip Book PDF", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto(slug);
        await expect(page.getByRole('heading', { name: 'Flip Book Pdf' })).toBeVisible();
    });

    test('To Enable All Controls', async ({ page }) => {
        const frameSelector = '#embedpress-pdf-1722764697745 iframe[title="sample_pdf"]';
        const viewFrame = page.frameLocator(frameSelector).frameLocator('iframe[title="View"]');

        await expect(page.getByRole('heading', { name: 'Enable All Controls – Toolbar' })).toBeVisible();

        const controls = [
            { name: 'Next page', locator: viewFrame.getByRole('link', { name: 'Next page' }).first() },
            { name: 'Previous page', locator: viewFrame.getByRole('link', { name: 'Previous page' }) },
            { name: 'Full screen', locator: viewFrame.getByRole('link', { name: 'Full screen' }) },
            { name: 'Print', locator: viewFrame.getByRole('link', { name: 'Print' }) },
            { name: 'Download', locator: viewFrame.getByRole('link', { name: 'Download' }) },
            { name: 'Table of contents', locator: viewFrame.getByRole('link', { name: 'Table of contents' }) },
            { name: 'Fit view', locator: viewFrame.getByRole('link', { name: 'Fit view' }) },
            { name: 'Zoom out', locator: viewFrame.getByRole('link', { name: 'Zoom out' }) },
            { name: 'Zoom in', locator: viewFrame.getByRole('link', { name: 'Zoom in' }) },
            { name: 'Smart pan Single page Sounds', locator: viewFrame.locator('li').filter({ hasText: 'Smart pan Single page Sounds' }).getByRole('link') },
        ];

        for (const control of controls) {
            await expect(control.locator).toBeVisible();
        }

        await viewFrame.locator('div:nth-child(5) > div').click();
        await expect(viewFrame.locator('div:nth-child(5) > div')).toBeVisible();
        await controls[9].locator.click();

        const extraControls = [
            { name: 'Single page', locator: viewFrame.getByRole('link', { name: 'Single page' }) },
            { name: 'Sounds', locator: viewFrame.getByRole('link', { name: 'Sounds' }) },
        ];

        for (const control of extraControls) {
            await expect(control.locator).toBeVisible();
        }

        await expect(page.getByText('Powered By EmbedPress')).toBeVisible();

        await viewFrame.getByRole('link', { name: 'Next page' }).first().click();
        await viewFrame.getByRole('link', { name: 'Previous page' }).click();
        await viewFrame.getByRole('link', { name: 'Zoom in' }).click();
        await viewFrame.getByRole('link', { name: 'Zoom out' }).click();
        await viewFrame.getByRole('link', { name: 'Table of contents' }).click();

        const downloadPromise = page.waitForEvent('download');
        await viewFrame.getByRole('link', { name: 'Download' }).click();
        const download = await downloadPromise;

        await viewFrame.getByRole('link', { name: 'Print' }).click();
        await controls[9].locator.click();
        await viewFrame.getByRole('link', { name: 'Single page' }).click();
        await controls[9].locator.click();
        await viewFrame.getByRole('link', { name: 'Sounds' }).click();
    });

    test('To Enable Few Controls', async ({ page }) => {
        const frameSelector = '#embedpress-pdf-1722764800761 iframe[title="sample_pdf"]';
        const viewFrame = page.frameLocator(frameSelector).frameLocator('iframe[title="View"]');

        await expect(page.getByRole('heading', { name: 'Enable Few Controls Toolbar' })).toBeVisible();

        const controls = [
            { name: 'Next page', locator: viewFrame.getByRole('link', { name: 'Next page' }).first() },
            { name: 'Previous page', locator: viewFrame.getByRole('link', { name: 'Previous page' }) },
            { name: 'Smart pan Single page Sounds', locator: viewFrame.locator('li').filter({ hasText: 'Smart pan Single page Sounds' }).getByRole('link') },
            { name: 'Table of contents', locator: viewFrame.getByRole('link', { name: 'Table of contents' }) },
            { name: 'Zoom in', locator: viewFrame.getByRole('link', { name: 'Zoom in' }) },
            { name: 'Fit view', locator: viewFrame.getByRole('link', { name: 'Fit view' }) },
        ];

        for (const control of controls) {
            await expect(control.locator).toBeVisible();
        }

        await viewFrame.getByRole('link', { name: 'Next page' }).first().click();
        await viewFrame.getByRole('link', { name: 'Previous page' }).click();
        await controls[2].locator.click();

        const extraControls = [
            { name: 'Single page', locator: viewFrame.getByRole('link', { name: 'Single page' }) },
            { name: 'Sounds', locator: viewFrame.getByRole('link', { name: 'Sounds' }) },
        ];

        for (const control of extraControls) {
            await expect(control.locator).toBeVisible();
        }
    });
});