const { test, expect } = require('@playwright/test');

let slug = 'modern-pdf';
let heading = 'Gutenberg Modern pdf';


test.describe("Gutenberg Modern PDF", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto(slug);
        await expect.soft(page.getByRole('heading', { name: heading, exact: true })).toBeVisible();
    });

    test('To Enable All Controls', async ({ page }) => {

        await expect(page.frameLocator('iframe[title="sample_pdf"]').nth(0).getByRole('radio', { name: 'Text' })).toBeVisible();
        await expect(page.frameLocator('iframe[title="sample_pdf"]').nth(0).getByRole('radio', { name: 'Draw' })).toBeVisible();
        await expect(page.frameLocator('iframe[title="sample_pdf"]').nth(0).getByRole('radio', { name: 'Add or edit images' })).toBeVisible();
        await expect(page.frameLocator('iframe[title="sample_pdf"]').nth(0).getByRole('button', { name: 'Presentation Mode' })).toBeVisible();
        await expect(page.frameLocator('iframe[title="sample_pdf"]').nth(0).getByRole('button', { name: 'Print' })).toBeVisible();
        await expect(page.frameLocator('iframe[title="sample_pdf"]').nth(0).getByRole('button', { name: 'Save' })).toBeVisible();
        await expect(page.frameLocator('iframe[title="sample_pdf"]').nth(0).locator('#scaleSelect')).toBeVisible();
        await expect(page.frameLocator('iframe[title="sample_pdf"]').nth(0).getByRole('button', { name: 'Zoom In' })).toBeVisible();
        await expect(page.frameLocator('iframe[title="sample_pdf"]').nth(0).getByRole('button', { name: 'Zoom Out' })).toBeVisible();
        await expect(page.frameLocator('iframe[title="sample_pdf"]').nth(0).getByRole('button', { name: 'Toggle Sidebar' })).toBeVisible();
        await expect(page.frameLocator('iframe[title="sample_pdf"]').nth(0).getByRole('button', { name: 'Find' })).toBeVisible();
        await expect(page.frameLocator('iframe[title="sample_pdf"]').nth(0).getByRole('button', { name: 'Next' })).toBeVisible();
        await expect(page.frameLocator('iframe[title="sample_pdf"]').nth(0).getByRole('spinbutton', { name: 'Page' })).toBeVisible();
        await expect(page.frameLocator('iframe[title="sample_pdf"]').nth(0).getByText('of ⁨4⁩')).toBeVisible();
        await expect(page.getByText('Powered By EmbedPress')).toBeVisible();
        await page.frameLocator('iframe[title="sample_pdf"]').nth(0).getByRole('button', { name: 'Tools' }).click();
        await expect(page.frameLocator('iframe[title="sample_pdf"]').nth(0).locator('#secondaryPrint')).toBeVisible();
        await expect(page.frameLocator('iframe[title="sample_pdf"]').nth(0).locator('#secondaryDownload')).toBeVisible();
        await expect(page.frameLocator('iframe[title="sample_pdf"]').nth(0).getByRole('link', { name: 'Current Page' })).toBeVisible();
        await expect(page.frameLocator('iframe[title="sample_pdf"]').nth(0).getByRole('button', { name: 'Go to Last Page' })).toBeVisible();
        await expect(page.frameLocator('iframe[title="sample_pdf"]').nth(0).getByRole('button', { name: 'Rotate Clockwise' })).toBeVisible();
        await expect(page.frameLocator('iframe[title="sample_pdf"]').nth(0).getByRole('button', { name: 'Rotate Counterclockwise' })).toBeVisible();
        await expect(page.frameLocator('iframe[title="sample_pdf"]').nth(0).getByRole('radio', { name: 'Text Selection Tool' })).toBeVisible();
        await expect(page.frameLocator('iframe[title="sample_pdf"]').nth(0).getByRole('radio', { name: 'Hand Tool' })).toBeVisible();
        await expect(page.frameLocator('iframe[title="sample_pdf"]').nth(0).getByRole('radio', { name: 'Page Scrolling' })).toBeVisible();
        await expect(page.frameLocator('iframe[title="sample_pdf"]').nth(0).getByRole('radio', { name: 'Vertical Scrolling' })).toBeVisible();
        await expect(page.frameLocator('iframe[title="sample_pdf"]').nth(0).getByRole('radio', { name: 'Horizontal Scrolling' })).toBeVisible();
        await expect(page.frameLocator('iframe[title="sample_pdf"]').nth(0).getByRole('radio', { name: 'Wrapped Scrolling' })).toBeVisible();
        await expect(page.frameLocator('iframe[title="sample_pdf"]').nth(0).getByRole('radio', { name: 'No Spreads' })).toBeVisible();
        await expect(page.frameLocator('iframe[title="sample_pdf"]').nth(0).getByRole('radio', { name: 'Odd Spreads' })).toBeVisible();
        await expect(page.frameLocator('iframe[title="sample_pdf"]').nth(0).getByRole('radio', { name: 'Even Spreads' })).toBeVisible();
        await expect(page.frameLocator('iframe[title="sample_pdf"]').nth(0).getByRole('button', { name: 'Document Properties…' })).toBeVisible();
        await page.frameLocator('iframe[title="sample_pdf"]').nth(0).getByRole('button', { name: 'Document Properties…' }).click();
        await expect(page.frameLocator('iframe[title="sample_pdf"]').nth(0).getByText('File name: sample_pdf.pdf File size: ⁨86.2⁩ KB (⁨88,226⁩ bytes) Title: PDF')).toBeVisible();
    });

    test('To Enable Few Controls', async ({ page }) => {

        await expect(page.frameLocator('#some_control_disable iframe[title="sample_pdf"]').getByRole('radio', { name: 'Text' })).toBeVisible();
        await expect(page.frameLocator('#some_control_disable iframe[title="sample_pdf"]').getByRole('radio', { name: 'Text' })).toBeVisible();

        await expect(page.frameLocator('#some_control_disable iframe[title="sample_pdf"]').getByRole('radio', { name: 'Draw' })).toBeVisible();
        await expect(page.frameLocator('#some_control_disable iframe[title="sample_pdf"]').getByRole('radio', { name: 'Add or edit images' })).toBeVisible();
        await expect(page.frameLocator('#some_control_disable iframe[title="sample_pdf"]').locator('#scaleSelect')).toBeVisible();
        await expect(page.frameLocator('#some_control_disable iframe[title="sample_pdf"]').getByRole('button', { name: 'Zoom In' })).toBeVisible();
        await expect(page.frameLocator('#some_control_disable iframe[title="sample_pdf"]').getByRole('button', { name: 'Zoom Out' })).toBeVisible();
        await expect(page.frameLocator('#some_control_disable iframe[title="sample_pdf"]').getByRole('button', { name: 'Toggle Sidebar' })).toBeVisible();
        await expect(page.frameLocator('#some_control_disable iframe[title="sample_pdf"]').getByRole('button', { name: 'Find' })).toBeVisible();
        await expect(page.frameLocator('#some_control_disable iframe[title="sample_pdf"]').getByRole('button', { name: 'Next' })).toBeVisible();
        await expect(page.frameLocator('#some_control_disable iframe[title="sample_pdf"]').getByRole('spinbutton', { name: 'Page' })).toBeVisible();
        await expect(page.frameLocator('#some_control_disable iframe[title="sample_pdf"]').getByText('of ⁨4⁩')).toBeVisible();
        await page.frameLocator('#some_control_disable iframe[title="sample_pdf"]').getByRole('button', { name: 'Tools' }).click();
        await expect(page.frameLocator('#some_control_disable iframe[title="sample_pdf"]').getByRole('link', { name: 'Current Page' })).toBeVisible();
        await expect(page.frameLocator('#some_control_disable iframe[title="sample_pdf"]').getByRole('button', { name: 'Go to Last Page' })).toBeVisible();
        await expect(page.frameLocator('#some_control_disable iframe[title="sample_pdf"]').getByRole('button', { name: 'Rotate Clockwise' })).toBeVisible();
        await expect(page.frameLocator('#some_control_disable iframe[title="sample_pdf"]').getByRole('button', { name: 'Rotate Counterclockwise' })).toBeVisible();
        await expect(page.frameLocator('#some_control_disable iframe[title="sample_pdf"]').getByRole('radio', { name: 'Text Selection Tool' })).toBeVisible();
        await expect(page.frameLocator('#some_control_disable iframe[title="sample_pdf"]').getByRole('radio', { name: 'Hand Tool' })).toBeVisible();
        await expect(page.frameLocator('#some_control_disable iframe[title="sample_pdf"]').getByRole('radio', { name: 'Page Scrolling' })).toBeVisible();
        await expect(page.frameLocator('#some_control_disable iframe[title="sample_pdf"]').getByRole('radio', { name: 'Vertical Scrolling' })).toBeVisible();
        await expect(page.frameLocator('#some_control_disable iframe[title="sample_pdf"]').getByRole('radio', { name: 'Horizontal Scrolling' })).toBeVisible();
        await expect(page.frameLocator('#some_control_disable iframe[title="sample_pdf"]').getByRole('radio', { name: 'Wrapped Scrolling' })).toBeVisible();
        await expect(page.frameLocator('#some_control_disable iframe[title="sample_pdf"]').getByRole('radio', { name: 'No Spreads' })).toBeVisible();
        await expect(page.frameLocator('#some_control_disable iframe[title="sample_pdf"]').getByRole('radio', { name: 'Odd Spreads' })).toBeVisible();
        await expect(page.frameLocator('#some_control_disable iframe[title="sample_pdf"]').getByRole('radio', { name: 'Even Spreads' })).toBeVisible();
        await expect(page.frameLocator('#some_control_disable iframe[title="sample_pdf"]').getByRole('button', { name: 'Document Properties…' })).toBeVisible();
        await page.frameLocator('#some_control_disable iframe[title="sample_pdf"]').getByRole('button', { name: 'Document Properties…' }).click();
        await expect(page.frameLocator('#some_control_disable iframe[title="sample_pdf"]').getByText('File name: sample_pdf.pdf File size: ⁨86.2⁩ KB (⁨88,226⁩ bytes) Title: PDF')).toBeVisible();
    })
});