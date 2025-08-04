# Test info

- Name: Classic Google Slides >> Classic Google Slides
- Location: /home/runner/work/embedpress-playwright-automation/embedpress-playwright-automation/tests/classic/google/google-slides.spec.js:11:5

# Error details

```
Error: Timed out 5000ms waiting for expect(locator).toBeVisible()

Locator: getByRole('heading', { name: 'Classic Google Slides' })
Expected: visible
Received: <element(s) not found>
Call log:
  - expect.toBeVisible with timeout 5000ms
  - waiting for getByRole('heading', { name: 'Classic Google Slides' })

    at /home/runner/work/embedpress-playwright-automation/embedpress-playwright-automation/tests/classic/google/google-slides.spec.js:13:84
```

# Page snapshot

```yaml
- heading "Error establishing a database connection" [level=1]
```

# Test source

```ts
   1 | const { test, expect } = require('@playwright/test');
   2 |
   3 | const slug = 'playwright-classic-editor/classic-google-slides';
   4 |
   5 | test.describe("Classic Google Slides", () => {
   6 |     test.beforeEach(async ({ page }) => {
   7 |         await page.goto(slug);
   8 |         await page.waitForLoadState('networkidle');
   9 |     });
  10 |
  11 |     test('Classic Google Slides', async ({ page }) => {
  12 |         // Check iframe visibility        
> 13 |         await expect(page.getByRole('heading', { name: 'Classic Google Slides' })).toBeVisible();
     |                                                                                    ^ Error: Timed out 5000ms waiting for expect(locator).toBeVisible()
  14 |
  15 |         // Check iframe visibility
  16 |         const iframe = page.locator('iframe').contentFrame().locator('.sketchyViewerContainer');
  17 |         await expect(iframe).toBeVisible();
  18 |
  19 |         // Check dimensions height & width
  20 |         const { height, width } = await iframe.evaluate(iframe => iframe.getBoundingClientRect());
  21 |         expect(height).toBeCloseTo(793, 1);
  22 |         expect(width).toBeCloseTo(1168, 1);
  23 |     });
  24 | });
  25 |
```