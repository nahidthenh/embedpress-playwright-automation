# Test info

- Name: Embed Classic Voxsnap
- Location: /home/runner/work/embedpress-playwright-automation/embedpress-playwright-automation/tests/classic/voxsnap.spec.js:3:1

# Error details

```
Error: page.goto: net::ERR_ABORTED; maybe frame was detached?
Call log:
  - navigating to "https://embedpress.wpqa.site/playwright-classic-editor/cl-voxsnap/", waiting until "load"

    at /home/runner/work/embedpress-playwright-automation/embedpress-playwright-automation/tests/classic/voxsnap.spec.js:4:16
```

# Test source

```ts
  1 | const { test, expect } = require('@playwright/test');
  2 |
  3 | test('Embed Classic Voxsnap', async ({ page }) => {
> 4 |     await page.goto('https://embedpress.wpqa.site/playwright-classic-editor/cl-voxsnap/')
    |                ^ Error: page.goto: net::ERR_ABORTED; maybe frame was detached?
  5 |     await expect(page.locator('iframe').contentFrame().locator('.player_controls')).toBeVisible();
  6 | });
  7 | // As now we only have embed support for this source 
```