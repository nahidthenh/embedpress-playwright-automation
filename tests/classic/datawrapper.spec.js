const { test, expect } = require('@playwright/test');

test('Embed Classic datawrapper source', async ({ page }) => {
    await page.goto('https://embedpress.wpqa.site/cl-datawrapper/');
    await page.locator('iframe[title="\\35 6\\% of Icelanders live in their capital Reykjavík "]').contentFrame().locator('div').filter({ hasText: /^Japan \(Tokyo\)$/ }).click();

});
// As now we only have embed support for datawrapper 

