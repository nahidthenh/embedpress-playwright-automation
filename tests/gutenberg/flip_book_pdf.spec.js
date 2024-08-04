const { test, expect } = require('@playwright/test');

let slug = 'flip-book-pdf';
let heading = 'Gutenberg Modern pdf';


test.describe("Gutenberg Modern PDF", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto(slug);
        await expect(page.getByRole('heading', { name: 'Flip Book Pdf' })).toBeVisible();
    });

    test('To Enable All Controls', async ({ page }) => {

        await expect(page.getByRole('heading', { name: 'Enable All Controls – Toolbar' })).toBeVisible();
        await expect(page.frameLocator('#embedpress-pdf-1722764697745 iframe[title="sample_pdf"]').frameLocator('iframe[title="View"]').getByRole('link', { name: 'Next page' }).first()).toBeVisible();
        await expect(page.frameLocator('#embedpress-pdf-1722764697745 iframe[title="sample_pdf"]').frameLocator('iframe[title="View"]').getByRole('link', { name: 'Previous page' })).toBeVisible();
        await expect(page.frameLocator('#embedpress-pdf-1722764697745 iframe[title="sample_pdf"]').frameLocator('iframe[title="View"]').locator('li').filter({ hasText: 'Smart pan Single page Sounds' }).getByRole('link')).toBeVisible();
        await expect(page.frameLocator('#embedpress-pdf-1722764697745 iframe[title="sample_pdf"]').frameLocator('iframe[title="View"]').getByRole('link', { name: 'Full screen' })).toBeVisible();
        await expect(page.frameLocator('#embedpress-pdf-1722764697745 iframe[title="sample_pdf"]').frameLocator('iframe[title="View"]').getByRole('link', { name: 'Print' })).toBeVisible();
        await expect(page.frameLocator('#embedpress-pdf-1722764697745 iframe[title="sample_pdf"]').frameLocator('iframe[title="View"]').getByRole('link', { name: 'Download' })).toBeVisible();
        await expect(page.frameLocator('#embedpress-pdf-1722764697745 iframe[title="sample_pdf"]').frameLocator('iframe[title="View"]').getByRole('list').getByRole('link', { name: 'Next page' })).toBeVisible();
        await expect(page.frameLocator('#embedpress-pdf-1722764697745 iframe[title="sample_pdf"]').frameLocator('iframe[title="View"]').locator('li:nth-child(5) > a')).toBeVisible();
        await expect(page.frameLocator('#embedpress-pdf-1722764697745 iframe[title="sample_pdf"]').frameLocator('iframe[title="View"]').getByRole('link', { name: 'Table of contents' })).toBeVisible();
        await expect(page.frameLocator('#embedpress-pdf-1722764697745 iframe[title="sample_pdf"]').frameLocator('iframe[title="View"]').getByRole('link', { name: 'Fit view' })).toBeVisible();
        await expect(page.frameLocator('#embedpress-pdf-1722764697745 iframe[title="sample_pdf"]').frameLocator('iframe[title="View"]').getByRole('link', { name: 'Zoom out' })).toBeVisible();
        await expect(page.frameLocator('#embedpress-pdf-1722764697745 iframe[title="sample_pdf"]').frameLocator('iframe[title="View"]').getByRole('link', { name: 'Zoom in' })).toBeVisible();
        await page.frameLocator('#embedpress-pdf-1722764697745 iframe[title="sample_pdf"]').frameLocator('iframe[title="View"]').locator('div:nth-child(5) > div').click();
        await expect(page.frameLocator('#embedpress-pdf-1722764697745 iframe[title="sample_pdf"]').frameLocator('iframe[title="View"]').locator('div:nth-child(5) > div')).toBeVisible();
        await page.frameLocator('#embedpress-pdf-1722764697745 iframe[title="sample_pdf"]').frameLocator('iframe[title="View"]').locator('li').filter({ hasText: 'Smart pan Single page Sounds' }).getByRole('link').click();
        await expect(page.frameLocator('#embedpress-pdf-1722764697745 iframe[title="sample_pdf"]').frameLocator('iframe[title="View"]').getByRole('link', { name: 'Single page' })).toBeVisible();
        await expect(page.frameLocator('#embedpress-pdf-1722764697745 iframe[title="sample_pdf"]').frameLocator('iframe[title="View"]').getByRole('link', { name: 'Sounds' })).toBeVisible();
        await expect(page.getByText('Powered By EmbedPress')).toBeVisible();
        await page.frameLocator('#embedpress-pdf-1722764697745 iframe[title="sample_pdf"]').frameLocator('iframe[title="View"]').getByRole('link', { name: 'Next page' }).first().click();
        await page.frameLocator('#embedpress-pdf-1722764697745 iframe[title="sample_pdf"]').frameLocator('iframe[title="View"]').getByRole('link', { name: 'Zoom in' }).click();
        await page.frameLocator('#embedpress-pdf-1722764697745 iframe[title="sample_pdf"]').frameLocator('iframe[title="View"]').getByRole('link', { name: 'Zoom out' }).click();
        await page.frameLocator('#embedpress-pdf-1722764697745 iframe[title="sample_pdf"]').frameLocator('iframe[title="View"]').getByRole('link', { name: 'Table of contents' }).click();
        // await expect(page.frameLocator('#embedpress-pdf-1722764697745 iframe[title="sample_pdf"]').frameLocator('iframe[title="View"]').locator('.item > a').first()).toBeVisible();
        await expect(page.frameLocator('#embedpress-pdf-1722764697745 iframe[title="sample_pdf"]').frameLocator('iframe[title="View"]').locator('.thumbnails > div:nth-child(2) > a')).toBeVisible();
        await page.frameLocator('#embedpress-pdf-1722764697745 iframe[title="sample_pdf"]').frameLocator('iframe[title="View"]').getByRole('link', { name: 'Table of contents' }).click();
        await page.frameLocator('#embedpress-pdf-1722764697745 iframe[title="sample_pdf"]').frameLocator('iframe[title="View"]').getByRole('link', { name: 'Previous page' }).click();
        const downloadPromise = page.waitForEvent('download');
        await page.frameLocator('#embedpress-pdf-1722764697745 iframe[title="sample_pdf"]').frameLocator('iframe[title="View"]').getByRole('link', { name: 'Download' }).click();
        const download = await downloadPromise;
        await page.frameLocator('#embedpress-pdf-1722764697745 iframe[title="sample_pdf"]').frameLocator('iframe[title="View"]').getByRole('link', { name: 'Print' }).click();
        await page.frameLocator('#embedpress-pdf-1722764697745 iframe[title="sample_pdf"]').frameLocator('iframe[title="View"]').locator('li').filter({ hasText: 'Smart pan Single page Sounds' }).getByRole('link').click();
        await page.frameLocator('#embedpress-pdf-1722764697745 iframe[title="sample_pdf"]').frameLocator('iframe[title="View"]').getByRole('link', { name: 'Single page' }).click();
        await page.frameLocator('#embedpress-pdf-1722764697745 iframe[title="sample_pdf"]').frameLocator('iframe[title="View"]').locator('li').filter({ hasText: 'Smart pan Single page Sounds' }).getByRole('link').click();
        await page.frameLocator('#embedpress-pdf-1722764697745 iframe[title="sample_pdf"]').frameLocator('iframe[title="View"]').getByRole('link', { name: 'Sounds' }).click();
        await page.frameLocator('#embedpress-pdf-1722764697745 iframe[title="sample_pdf"]').frameLocator('iframe[title="View"]').getByRole('link', { name: 'Next page' }).first().click();
        await page.frameLocator('#embedpress-pdf-1722764697745 iframe[title="sample_pdf"]').frameLocator('iframe[title="View"]').getByRole('link', { name: 'Previous page' }).click();
    });

    test('To Enable Few Controls', async ({ page }) => {
        await expect(page.getByRole('heading', { name: 'Enable Few Controls Toolbar' })).toBeVisible();
        await page.frameLocator('#embedpress-pdf-1722764800761 iframe[title="sample_pdf"]').frameLocator('iframe[title="View"]').getByRole('link', { name: 'Next page' }).first().click();
        await expect(page.frameLocator('#embedpress-pdf-1722764800761 iframe[title="sample_pdf"]').frameLocator('iframe[title="View"]').getByRole('link', { name: 'Next page' }).first()).toBeVisible();
        await expect(page.frameLocator('#embedpress-pdf-1722764800761 iframe[title="sample_pdf"]').frameLocator('iframe[title="View"]').getByRole('link', { name: 'Previous page' })).toBeVisible();
        await expect(page.frameLocator('#embedpress-pdf-1722764800761 iframe[title="sample_pdf"]').frameLocator('iframe[title="View"]').getByRole('list')).toBeVisible();
        await expect(page.frameLocator('#embedpress-pdf-1722764800761 iframe[title="sample_pdf"]').frameLocator('iframe[title="View"]').locator('li').filter({ hasText: 'Smart pan Single page Sounds' }).getByRole('link')).toBeVisible();
        await expect(page.frameLocator('#embedpress-pdf-1722764800761 iframe[title="sample_pdf"]').frameLocator('iframe[title="View"]').getByRole('list').getByRole('link', { name: 'Next page' })).toBeVisible();
        await expect(page.frameLocator('#embedpress-pdf-1722764800761 iframe[title="sample_pdf"]').frameLocator('iframe[title="View"]').locator('li:nth-child(4) > a').first()).toBeVisible();
        await expect(page.frameLocator('#embedpress-pdf-1722764800761 iframe[title="sample_pdf"]').frameLocator('iframe[title="View"]').getByRole('link', { name: 'Table of contents' })).toBeVisible();
        await expect(page.frameLocator('#embedpress-pdf-1722764800761 iframe[title="sample_pdf"]').frameLocator('iframe[title="View"]').getByRole('link', { name: 'Zoom in' })).toBeVisible();
        await expect(page.frameLocator('#embedpress-pdf-1722764800761 iframe[title="sample_pdf"]').frameLocator('iframe[title="View"]').getByRole('link', { name: 'Fit view' })).toBeVisible();
        await page.frameLocator('#embedpress-pdf-1722764800761 iframe[title="sample_pdf"]').frameLocator('iframe[title="View"]').getByRole('link', { name: 'Next page' }).first().click();
        await page.frameLocator('#embedpress-pdf-1722764800761 iframe[title="sample_pdf"]').frameLocator('iframe[title="View"]').getByRole('link', { name: 'Previous page' }).click();
        await page.frameLocator('#embedpress-pdf-1722764800761 iframe[title="sample_pdf"]').frameLocator('iframe[title="View"]').locator('li').filter({ hasText: 'Smart pan Single page Sounds' }).getByRole('link').click();
        await expect(page.frameLocator('#embedpress-pdf-1722764800761 iframe[title="sample_pdf"]').frameLocator('iframe[title="View"]').getByRole('link', { name: 'Single page' })).toBeVisible();
        await expect(page.frameLocator('#embedpress-pdf-1722764800761 iframe[title="sample_pdf"]').frameLocator('iframe[title="View"]').getByRole('link', { name: 'Sounds' })).toBeVisible();
    })
});