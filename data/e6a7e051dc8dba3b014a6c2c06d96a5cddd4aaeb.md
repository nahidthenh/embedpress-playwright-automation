# Test info

- Name: Embed Gutenberg Geographic UK source
- Location: /home/runner/work/embedpress-playwright-automation/embedpress-playwright-automation/tests/gutenberg/geographic_uk.spec.js:3:1

# Error details

```
Error: Timed out 5000ms waiting for expect(locator).toBeVisible()

Locator: getByRole('link', { name: 'The Ferry to Shepperton' })
Expected: visible
Received: <element(s) not found>
Call log:
  - expect.toBeVisible with timeout 5000ms
  - waiting for getByRole('link', { name: 'The Ferry to Shepperton' })

    at /home/runner/work/embedpress-playwright-automation/embedpress-playwright-automation/tests/gutenberg/geographic_uk.spec.js:5:75
```

# Page snapshot

```yaml
- link "Skip to content":
  - /url: "#main"
- banner:
  - navigation "Primary Navigation":
    - list:
      - listitem:
        - link "Home":
          - /url: https://embedpress.wpqa.site/
      - listitem:
        - link "Playwright GU":
          - /url: https://embedpress.wpqa.site/playwright-gutenberg/
        - button "Child menu of Playwright GU"
      - listitem:
        - link "Playwright El":
          - /url: https://embedpress.wpqa.site/playwright-elementor/
        - button "Child menu of Playwright El"
      - listitem:
        - link "Playwright Classic":
          - /url: https://embedpress.wpqa.site/playwright-classic-editor/
        - button "Child menu of Playwright Classic"
      - listitem:
        - link "Random Test":
          - /url: "#"
        - button "Child menu of Random Test"
      - listitem:
        - link "Md. Nahid Hasan":
          - /url: https://embedpress.wpqa.site/wp-admin
  - paragraph
  - search "Search form":
    - searchbox "Search input"
    - textbox "Search autocomplete" [disabled]
  - button "Search magnifier":
    - img
  - paragraph
- banner:
  - banner:
    - heading "CL – Geographic UK" [level=1]
- main:
  - article:
    - paragraph:
      - link "https://www.geograph.org.uk/photo/8045557":
        - /url: https://www.geograph.org.uk/photo/8045557
- contentinfo:
  - paragraph: © 2025 EmbedPress Automation Testing WPDeveloper SQA Team
```

# Test source

```ts
  1 | const { test, expect } = require('@playwright/test');
  2 |
  3 | test('Embed Gutenberg Geographic UK source', async ({ page }) => {
  4 |     await page.goto('https://embedpress.wpqa.site/playwright-classic-editor/cl-geographic-uk/')
> 5 | await expect(page.getByRole('link', { name: 'The Ferry to Shepperton' })).toBeVisible();
    |                                                                           ^ Error: Timed out 5000ms waiting for expect(locator).toBeVisible()
  6 | });
  7 | // As now we only have embed support
  8 |
  9 |
```