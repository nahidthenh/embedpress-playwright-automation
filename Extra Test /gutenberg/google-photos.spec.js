const { test, expect } = require('@playwright/test');

let slug = 'playwright-elementor/gutenberg-google-photos';


test.describe("Google Photos", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto(slug);
        await page.waitForLoadState('networkidle');
    });

    test('Google Photos Carousel', async ({ page }) => {
        await expect(page.getByText('Google Photos Carousel')).toBeVisible();
        await expect(page.locator('iframe').first().contentFrame().locator('.jx-imageset').first()).toBeVisible();
    });

    test('Pro - Google Photos Gallery Player', async ({ page }) => {
        await expect(page.getByRole('heading', { name: 'Pro – Google Photos Gallery Player', exact: true })).toBeVisible();
        await expect(page.locator('iframe').nth(1).contentFrame().locator('.jx-imageset').first()).toBeVisible();
        await expect(page.locator('iframe').nth(1).contentFrame().locator('div:nth-child(8) > .jx-svg-image > svg')).toBeVisible();
        await page.locator('iframe').nth(1).contentFrame().locator('div:nth-child(7) > .jx-svg-image > svg').click();
        await expect(page.locator('iframe').nth(1).contentFrame().locator('div:nth-child(2) > .jx-imageset > div > img:nth-child(2)')).toBeVisible();
        await expect(page.locator('iframe').nth(1).contentFrame().locator('div:nth-child(7)')).toBeVisible();
        await expect(page.locator('iframe').nth(1).contentFrame().locator('.jx-carousel-arrow > .jx-svg-image > svg').first()).toBeVisible();
        await page.locator('iframe').nth(1).contentFrame().locator('.jx-carousel-arrow > .jx-svg-image > svg').first().click();
        await expect(page.locator('iframe').nth(1).contentFrame().locator('.jx-imageset').first()).toBeVisible();
    });

    test('Pro - Google Photos Gallery Player - Auto Play & Repeat On', async ({ page }) => {
        await expect(page.getByRole('heading', { name: 'Pro – Google Photos Gallery Player – Auto Play & Repeat On' })).toBeVisible();
        await expect(page.locator('iframe').nth(2).contentFrame().locator('div:nth-child(4) > .jx-imageset')).toBeVisible();
        await expect(page.locator('iframe').nth(2).contentFrame().locator('div:nth-child(2) > .jx-imageset > div > img:nth-child(2)')).toBeVisible();
        await expect(page.locator('iframe').nth(2).contentFrame().locator('div:nth-child(3) > .jx-imageset > div > img:nth-child(2)')).toBeVisible();
        await expect(page.locator('iframe').nth(2).contentFrame().locator('div:nth-child(4) > .jx-imageset > div > img:nth-child(2)')).toBeVisible();
        await expect(page.locator('iframe').nth(2).contentFrame().locator('img:nth-child(2)').first()).toBeVisible();
        await expect(page.locator('iframe').nth(2).contentFrame().locator('div:nth-child(8) > .jx-svg-image > svg')).toBeVisible();
    });

    test('Single Photo - With Color', async ({ page }) => {
        await expect(page.getByRole('heading', { name: 'Single Photo – With Color' })).toBeVisible();
        await page.locator('iframe').nth(3).contentFrame().getByRole('img').nth(1).click();
        await expect(page.locator('iframe').nth(3).contentFrame().getByRole('link', { name: 'New item by Md. Nahid Hasan' })).toBeVisible();
        await page.locator('iframe').nth(3).contentFrame().locator('div:nth-child(7)').click();
    });



});

