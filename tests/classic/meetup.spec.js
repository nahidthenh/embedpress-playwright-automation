const { test, expect } = require('@playwright/test');

test('Embed Classic MeetUp source', async ({ page }) => {
    await page.goto('https://ep-automation.wpqa.site/classic-meetup/');
    await expect(page.getByRole('link', { name: 'Newark Tech Week' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Events - Graph Database' })).toBeVisible();
    await expect(page.locator('.ep-single-event > .ep-event-content').first()).toBeVisible();
});

// As now we only have embed support for MeetUp

