const { test, expect } = require('@playwright/test');

let slug = 'modern-pdf';
let heading = 'Gutenberg Modern pdf';


test.describe("Gutenberg Modern PDF", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto(slug);
        await expect.soft(page.getByRole('heading', { name: heading, exact: true })).toBeVisible();
    });

    // test('To Enable All Controls', async ({ page }) => {
    //     await expect(page.frameLocator('#embedpress-pdf-1721988006079 iframe[title="sample_pdf"]').getByRole('button', { name: 'Zoom In' })).toBeVisible();
    //     await expect(page.frameLocator('#embedpress-pdf-1721988006079 iframe[title="sample_pdf"]').getByRole('button', { name: 'Zoom Out' })).toBeVisible();
    //     await expect(page.frameLocator('#embedpress-pdf-1721988006079 iframe[title="sample_pdf"]').locator('#scaleSelect')).toBeVisible();
    //     await expect(page.frameLocator('iframe[title="sample_pdf"]').nth(0).getByRole('radio', { name: 'Text' })).toBeVisible();
    //     await expect(page.frameLocator('iframe[title="sample_pdf"]').nth(0).getByRole('radio', { name: 'Draw' })).toBeVisible();
    //     await expect(page.frameLocator('iframe[title="sample_pdf"]').nth(0).getByRole('radio', { name: 'Add or edit images' })).toBeVisible();
    //     await expect(page.frameLocator('iframe[title="sample_pdf"]').nth(0).getByRole('button', { name: 'Presentation Mode' })).toBeVisible();
    //     await expect(page.frameLocator('iframe[title="sample_pdf"]').nth(0).getByRole('button', { name: 'Print' })).toBeVisible();
    //     await expect(page.frameLocator('iframe[title="sample_pdf"]').nth(0).getByRole('button', { name: 'Save' })).toBeVisible();
    //     await expect(page.frameLocator('iframe[title="sample_pdf"]').nth(0).locator('#scaleSelect')).toBeVisible();
    //     await expect(page.frameLocator('iframe[title="sample_pdf"]').nth(0).getByRole('button', { name: 'Zoom In' })).toBeVisible();
    //     await expect(page.frameLocator('iframe[title="sample_pdf"]').nth(0).getByRole('button', { name: 'Zoom Out' })).toBeVisible();
    //     await expect(page.frameLocator('iframe[title="sample_pdf"]').nth(0).getByRole('button', { name: 'Toggle Sidebar' })).toBeVisible();
    //     await expect(page.frameLocator('iframe[title="sample_pdf"]').nth(0).getByRole('button', { name: 'Find' })).toBeVisible();
    //     await expect(page.frameLocator('iframe[title="sample_pdf"]').nth(0).getByRole('button', { name: 'Next' })).toBeVisible();
    //     await expect(page.frameLocator('iframe[title="sample_pdf"]').nth(0).getByRole('spinbutton', { name: 'Page' })).toBeVisible();
    //     await expect(page.frameLocator('iframe[title="sample_pdf"]').nth(0).getByText('of ⁨4⁩')).toBeVisible();
    //     await expect(page.getByText('Powered By EmbedPress')).toBeVisible();
    //     await page.frameLocator('iframe[title="sample_pdf"]').nth(0).getByRole('button', { name: 'Tools' }).click();
    //     await expect(page.frameLocator('iframe[title="sample_pdf"]').nth(0).locator('#secondaryPrint')).toBeVisible();
    //     await expect(page.frameLocator('iframe[title="sample_pdf"]').nth(0).locator('#secondaryDownload')).toBeVisible();
    //     await expect(page.frameLocator('iframe[title="sample_pdf"]').nth(0).getByRole('link', { name: 'Current Page' })).toBeVisible();
    //     await expect(page.frameLocator('iframe[title="sample_pdf"]').nth(0).getByRole('button', { name: 'Go to Last Page' })).toBeVisible();
    //     await expect(page.frameLocator('iframe[title="sample_pdf"]').nth(0).getByRole('button', { name: 'Rotate Clockwise' })).toBeVisible();
    //     await expect(page.frameLocator('iframe[title="sample_pdf"]').nth(0).getByRole('button', { name: 'Rotate Counterclockwise' })).toBeVisible();
    //     await expect(page.frameLocator('iframe[title="sample_pdf"]').nth(0).getByRole('radio', { name: 'Text Selection Tool' })).toBeVisible();
    //     await expect(page.frameLocator('iframe[title="sample_pdf"]').nth(0).getByRole('radio', { name: 'Hand Tool' })).toBeVisible();
    //     await expect(page.frameLocator('iframe[title="sample_pdf"]').nth(0).getByRole('radio', { name: 'Page Scrolling' })).toBeVisible();
    //     await expect(page.frameLocator('iframe[title="sample_pdf"]').nth(0).getByRole('radio', { name: 'Vertical Scrolling' })).toBeVisible();
    //     await expect(page.frameLocator('iframe[title="sample_pdf"]').nth(0).getByRole('radio', { name: 'Horizontal Scrolling' })).toBeVisible();
    //     await expect(page.frameLocator('iframe[title="sample_pdf"]').nth(0).getByRole('radio', { name: 'Wrapped Scrolling' })).toBeVisible();
    //     await expect(page.frameLocator('iframe[title="sample_pdf"]').nth(0).getByRole('radio', { name: 'No Spreads' })).toBeVisible();
    //     await expect(page.frameLocator('iframe[title="sample_pdf"]').nth(0).getByRole('radio', { name: 'Odd Spreads' })).toBeVisible();
    //     await expect(page.frameLocator('iframe[title="sample_pdf"]').nth(0).getByRole('radio', { name: 'Even Spreads' })).toBeVisible();
    //     await expect(page.frameLocator('iframe[title="sample_pdf"]').nth(0).getByRole('button', { name: 'Document Properties…' })).toBeVisible();
    //     await page.frameLocator('iframe[title="sample_pdf"]').nth(0).getByRole('button', { name: 'Document Properties…' }).click();
    //     await expect(page.frameLocator('iframe[title="sample_pdf"]').nth(0).getByText('File name: sample_pdf.pdf File size: ⁨86.2⁩ KB (⁨88,226⁩ bytes) Title: PDF')).toBeVisible();
    // });

    test('To Enable All Controls', async ({ page }) => {
        const frameSelector = '#embedpress-pdf-1721988006079 iframe[title="sample_pdf"]';
        const mainFrame = page.frameLocator(frameSelector);

        const controls = [
            { role: 'button', name: 'Zoom In' },
            { role: 'button', name: 'Zoom Out' },
            { role: 'button', name: 'Presentation Mode' },
            { role: 'button', name: 'Print' },
            { role: 'button', name: 'Save' },
            { role: 'button', name: 'Toggle Sidebar' },
            { role: 'button', name: 'Find' },
            { role: 'button', name: 'Next' },
            { role: 'spinbutton', name: 'Page' },
        ];

        const extraElements = [
            { selector: '#scaleSelect' },
            { text: 'of ⁨4⁩' },
            { text: 'Powered By EmbedPress' },
            { selector: '#secondaryPrint' },
            { selector: '#secondaryDownload' },
            { text: 'File name: sample_pdf.pdf File size: ⁨86.2⁩ KB (⁨88,226⁩ bytes) Title: PDF' },
        ];

        // Check visibility of all controls
        for (const control of controls) {
            await expect(mainFrame.getByRole(control.role, { name: control.name })).toBeVisible();
        }


        // Check visibility of extra elements
        for (const element of extraElements) {
            if (element.selector) {
                await expect(mainFrame.locator(element.selector)).toBeVisible();
            } else if (element.text) {
                await expect(mainFrame.getByText(element.text)).toBeVisible();
            }
        }

        // Perform additional actions
        await mainFrame.getByRole('button', { name: 'Tools' }).click();

        const toolsControls = [
            { role: 'button', name: 'Tools' },
            { role: 'link', name: 'Current Page' },
            { role: 'button', name: 'Go to Last Page' },
            { role: 'button', name: 'Rotate Clockwise' },
            { role: 'button', name: 'Rotate Counterclockwise' },
            { role: 'radio', name: 'Text Selection Tool' },
            { role: 'radio', name: 'Hand Tool' },
            { role: 'radio', name: 'Page Scrolling' },
            { role: 'radio', name: 'Vertical Scrolling' },
            { role: 'radio', name: 'Horizontal Scrolling' },
            { role: 'radio', name: 'Wrapped Scrolling' },
            { role: 'radio', name: 'No Spreads' },
            { role: 'radio', name: 'Odd Spreads' },
            { role: 'radio', name: 'Even Spreads' },
            { role: 'button', name: 'Document Properties…' },
        ];
        // Check visibility of all controls
        for (const toolsTontrol of toolsControls) {
            await expect(mainFrame.getByRole(toolsTontrol.role, { name: toolsTontrol.name })).toBeVisible();
        }


        await mainFrame.getByRole('button', { name: 'Document Properties…' }).click();
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