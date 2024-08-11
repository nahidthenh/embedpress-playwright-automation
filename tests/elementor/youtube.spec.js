const { test, expect } = require('@playwright/test');

let slug = 'elementor-youtube-2';


test.describe("Elementor YouTube", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto(slug);
    });

    test('Default YouTube', async ({ page }) => {
        const heading = page.getByRole('heading', { name: 'Default YouTube' });
        await heading.scrollIntoViewIfNeeded();
        await expect(heading).toBeVisible();
        await expect(page.getByText('Copy URL Form Right-click on')).toBeVisible();
        await expect(page.frameLocator('iframe[title="শ্রেষ্ঠ মানুষেরা - \\[পর্ব ৮\\] - ইবরাহিম \\(আঃ\\)"]').locator('.ytp-cued-thumbnail-overlay-image')).toBeVisible();
        await expect(page.frameLocator('iframe[title="শ্রেষ্ঠ মানুষেরা - \\[পর্ব ৮\\] - ইবরাহিম \\(আঃ\\)"]').getByRole('button', { name: 'Share' })).toBeVisible();
        await expect(page.frameLocator('iframe[title="শ্রেষ্ঠ মানুষেরা - \\[পর্ব ৮\\] - ইবরাহিম \\(আঃ\\)"]').getByLabel('Play', { exact: true })).toBeVisible();
        await expect(page.frameLocator('iframe[title="শ্রেষ্ঠ মানুষেরা - \\[পর্ব ৮\\] - ইবরাহিম \\(আঃ\\)"]').locator('div').filter({ hasText: 'শ্রেষ্ঠ মানুষেরা - [পর্ব ৮] - ইবরাহিম (আঃ)' }).nth(4)).toBeVisible();
        await expect(page.frameLocator('iframe[title="শ্রেষ্ঠ মানুষেরা - \\[পর্ব ৮\\] - ইবরাহিম \\(আঃ\\)"]').getByRole('link', { name: 'Watch on YouTube' })).toBeVisible();
    });

    test('Custom Player Preset 1', async ({ page }) => {
        const heading = page.getByRole('heading', { name: 'Custom Player Preset 1' });
        await heading.scrollIntoViewIfNeeded();
        await expect(heading).toBeVisible();
        await expect(page.getByText('Copy URL Form URL Box On Top')).toBeVisible();
        await expect(page.locator('.plyr__poster').first()).toBeVisible();
        await expect(page.locator('#ep-elements-id-23222a0 button').filter({ hasText: /^Play$/ })).toBeVisible();
        await expect(page.locator('#ep-elements-id-23222a0').getByText('PausePlay')).toBeVisible();
        await expect(page.locator('#ep-elements-id-23222a0').getByRole('button', { name: 'Settings' })).toBeVisible();
        await expect(page.locator('#ep-elements-id-23222a0').getByRole('button', { name: 'Restart' })).toBeVisible();
        await expect(page.locator('#ep-elements-id-23222a0').getByRole('button', { name: 'Mute' })).toBeVisible();
    });

    test('Custom Player Preset 2 Disable Few Controls', async ({ page }) => {
        const heading = page.getByRole('heading', { name: 'Custom Player Preset 2' });
        await heading.scrollIntoViewIfNeeded();
        await expect(heading).toBeVisible();
        await expect(page.getByText('Copy URL Form Share Icon')).toBeVisible();
        await expect(page.locator('[id="\\39 7765ca"] > .plyr > .plyr__video-wrapper > .plyr__poster')).toBeVisible();
        await expect(page.locator('#ep-elements-id-97765ca button').filter({ hasText: /^Play$/ })).toBeVisible();
        await expect(page.locator('#ep-elements-id-97765ca').getByRole('button', { name: 'Restart' })).toBeVisible();
        await expect(page.locator('#ep-elements-id-97765ca').getByRole('button', { name: 'Forward 10s' })).toBeVisible();
        await expect(page.locator('#ep-elements-id-97765ca').getByRole('button', { name: 'Settings' })).toBeVisible();
        await expect(page.locator('#ep-elements-id-97765ca').getByRole('button', { name: 'Rewind 10s' })).toBeVisible();
    });

    test('Enable Custom Player and Thumbnail', async ({ page }) => {
        const heading = page.getByRole('heading', { name: 'Enable Custom Player and' });
        await heading.scrollIntoViewIfNeeded();
        await expect(heading).toBeVisible();
        await expect(page.getByText('Copy URL Form Embed Code')).toBeVisible();
        await expect(page.locator('#ep-elements-id-27221be').getByText('PausePlay')).toBeVisible();
        await expect(page.locator('#ep-elements-id-27221be').getByRole('button', { name: 'Mute' })).toBeVisible();
        await expect(page.locator('#ep-elements-id-27221be').getByRole('button', { name: 'Settings' })).toBeVisible();
        await expect(page.locator('#ep-elements-id-27221be').getByRole('button', { name: 'Fullscreen' })).toBeVisible();
    });
});