# EmbedPress-test-automation
Testing the EmbedPress Plugin Using Playwright

## Getting Started

Install playwright using the following command:

# About EmbedPress

EMBEDPRESS – EMBED FROM UNLIMITED SOURCES – EMBED PDF WITH 3D FLIPBOOK VIEWER, EMBED YOUTUBE, SOCIAL FEEDS, GOOGLE DOCS, MAPS, VIMEO, WISTIA, SPOTIFY, ETC WITHOUT CODING & DISPLAY IN WEBSITES CREATED WITH ELEMENTOR, GUTENBERG BLOCK EDITOR, OR OTHER PAGE BUILDERS

EmbedPress enhances the interactive storytelling on your WordPress website by offering one-click embeds of videos, social feeds, maps, PDFs, 3D flipbooks, posts, pages, documents, and much more from unlimited multimedia content sources.

Fuel up your website’s engagement and make it aesthetically pleasing by embedding content directly in Classic Editor, Gutenberg Block Editor, Elementor, or by using EmbedPress shortcodes on other WordPress page builders with ease.

## How to Use it?

### Step 1 - Clone this repo
```bash
git clone git@github.com:nahidthenh/embedpress-playwright-automation.git

```
### Step 2 - Install NPM
```bash
npm install -f

```
### Step 3 - Running the Script
```bash
npx playwright test
```

### Step 3.1 - Running a Specific Test
```bash
npx playwright test tests/modern_pdf.spec.js
```

### Step 3.2 - Running a Specific Test on a Specific Browser
```bash
npx playwright test tests/modern_pdf.spec.js --project chromium
```

### Step 3.3 - Running a Specific Test on a Specific Browser with headed mode
```bash
npx playwright test tests/modern_pdf.spec.js --project chromium --headed
```