
const { test, expect } = require('@playwright/test');

const image_path =
    "https://embedpress.wpqa.site/wp-content/plugins/embedpress/EmbedPress/Ends/Back/Settings/assets/img/sources/icons";

const data = [
    {
        img: `${image_path}/google-photos.png`,
        name: "Google Photos",
        doc: "https://embedpress.com/docs/embed-google-photos-in-wordpress/",
    },
    {
        img: `${image_path}/instagram.png`,
        name: "Instagram",
        doc: "https://embedpress.com/docs/embed-instagram-wordpress/",
    },
    {
        img: `${image_path}/youtube.png`,
        name: "YouTube",
        doc: "https://embedpress.com/docs/embed-youtube-wordpress/",
    },
    {
        img: `${image_path}/youtubelive.png`,
        name: "YouTube Live",
        doc: "https://embedpress.com/docs/embed-youtube-wordpress/",
    },
    {
        img: `${image_path}/vimeo.png`,
        name: "Vimeo",
        doc: "https://embedpress.com/docs/embed-vimeo-videos-wordpress/",
    },
    {
        img: `${image_path}/wistia.png`,
        name: "Wistia",
        doc: "https://embedpress.com/docs/embed-wistia-videos-wordpress/",
    },
    {
        img: `${image_path}/twitch.png`,
        name: "Twitch",
        doc: "https://embedpress.com/docs/embed-twitch-streams-chat/",
    }
];

test.describe("imgur embedding test", () => {
    test("elementor widget", async ({ browser }) => {
        const context = await browser.newContext({ storageState: "playwright/.auth/user.json" });
        const page = await context.newPage();
        await page.goto("/wp-admin/admin.php?page=embedpress&page_type=sources");

        for (let i = 0; i < data.length; i++) {
            const item = page.locator("div.tab-content-section div.source-item").nth(i);
            await expect(item.locator("div.icon img")).toHaveAttribute("src", data[i].img);
            await expect(item.locator("span.source-name")).toContainText(data[i].name);
            await expect(item.locator("div.source-right a").last()).toHaveAttribute("href", data[i].doc);
        }

        await context.close();
    });
});