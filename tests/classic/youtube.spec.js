const { test, expect } = require('@playwright/test');

let slug = 'elementor-youtube-2';


test.describe("Elementor YouTube", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto(slug);
    });

    test('Default YouTube', async ({ page }) => {

    });

    test('Custom Player Preset 1', async ({ page }) => {

    });

    test('Custom Player Preset 2 Disable Few Controls', async ({ page }) => {

    });

    test('Enable Custom Player and Thumbnail', async ({ page }) => {

    });
});