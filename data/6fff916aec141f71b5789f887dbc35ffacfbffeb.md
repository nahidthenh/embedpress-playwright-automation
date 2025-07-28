# Test info

- Name: Embed Classic Voxsnap
- Location: /home/runner/work/embedpress-playwright-automation/embedpress-playwright-automation/tests/classic/voxsnap.spec.js:3:1

# Error details

```
Error: Timed out 5000ms waiting for expect(locator).toBeVisible()

Locator: locator('iframe').contentFrame().locator('.player_controls')
Expected: visible
Received: <element(s) not found>
Call log:
  - expect.toBeVisible with timeout 5000ms
  - waiting for locator('iframe').contentFrame().locator('.player_controls')

    at /home/runner/work/embedpress-playwright-automation/embedpress-playwright-automation/tests/classic/voxsnap.spec.js:5:85
```

# Page snapshot

```yaml
- heading "Error establishing a database connection" [level=1]
```

# Test source

```ts
  1 | const { test, expect } = require('@playwright/test');
  2 |
  3 | test('Embed Classic Voxsnap', async ({ page }) => {
  4 |     await page.goto('https://embedpress.wpqa.site/playwright-classic-editor/cl-voxsnap/')
> 5 |     await expect(page.locator('iframe').contentFrame().locator('.player_controls')).toBeVisible();
    |                                                                                     ^ Error: Timed out 5000ms waiting for expect(locator).toBeVisible()
  6 | });
  7 | // As now we only have embed support for this source 
```