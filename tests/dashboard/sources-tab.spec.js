
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
        img: `${image_path}/airtable.png`,
        name: "Airtable",
        doc: "https://embedpress.com/docs/how-to-embed-airtable-in-wordpress/",
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
    },
    {
        img: `${image_path}/dailymotion.png`,
        name: "Dailymotion",
        doc: "https://embedpress.com/docs/embed-dailymotion-videos-wordpress/",
    },
    {
        img: `${image_path}/pdf.png`,
        name: "PDF",
        doc: "https://wpdeveloper.com/embed-pdf-documents-wordpress",
    },
    {
        img: `${image_path}/soundcloud.png`,
        name: "SoundCloud",
        doc: "https://embedpress.com/docs/embed-soundcloud-audio-wordpress/",
    },
    {
        img: `${image_path}/spotify.png`,
        name: "Spotify",
        doc: "https://embedpress.com/docs/embed-spotify-audios-wordpress/",
    },
    {
        img: `${image_path}/spreaker.png`,
        name: "Spreaker",
        doc: "https://embedpress.com/docs/how-to-embed-spreaker-podcasts-in-wordpress/",
    },
    {
        img: `${image_path}/opensea.png`,
        name: "OpenSea NFT",
        doc: "https://embedpress.com/docs/embed-opensea-nft-collections-wordpress/",
    },
    {
        img: `${image_path}/calendly.png`,
        name: "Calendly",
        doc: "https://embedpress.com/docs/how-to-embed-calendly-events-with-embedpress/",
    },
    {
        img: `${image_path}/google-docs.png`,
        name: "Google Docs",
        doc: "https://embedpress.com/docs/embed-google-docs-wordpress/",
    },
    {
        img: `${image_path}/google-slides.png`,
        name: "Google Slides",
        doc: "https://embedpress.com/docs/embed-google-slides-wordpress/",
    },
    {
        img: `${image_path}/google-forms.png`,
        name: "Google Forms",
        doc: "https://embedpress.com/docs/embed-google-forms-wordpress/",
    },
    {
        img: `${image_path}/google-maps.png`,
        name: "Google Maps",
        doc: "https://embedpress.com/docs/embed-google-maps-wordpress/",
    },
    {
        img: `${image_path}/google-sheets.png`,
        name: "Google Sheets",
        doc: "https://embedpress.com/docs/embed-google-sheets-wordpress/",
    },
    {
        img: `${image_path}/google-calendar.png`,
        name: "Google Calendar",
        doc: "https://embedpress.com/docs/embed-google-calendar-in-wordpress/",
    },
    {
        img: `${image_path}/google-drawings.png`,
        name: "Google Drawings",
        doc: "https://embedpress.com/docs/embed-google-drawings-wordpress/",
    },

    {
        img: `${image_path}/facebook.png`,
        name: "Facebook",
        doc: "https://embedpress.com/docs/embed-facebook-posts-wordpress/",
    },
    {
        img: `${image_path}/facebooklive.png`,
        name: "Facebook Live",
        doc: "https://embedpress.com/docs/embed-facebook-posts-wordpress/",
    },
    {
        img: `${image_path}/x.png`,
        name: "X",
        doc: "https://embedpress.com/docs/embed-twitter-tweets-wordpress/",
    },
    {
        img: `${image_path}/linkedin.png`,
        name: "LinkedIn",
        doc: "https://embedpress.com/docs/embed-linkedin-posts-in-wordpress/",
    },
    {
        img: `${image_path}/github.png`,
        name: "Github",
        doc: "https://embedpress.com/docs/embed-github-gist-snippets-wordpress/",
    },
    {
        img: `${image_path}/tumblr.png`,
        name: "Tumblr",
        doc: "https://embedpress.com/docs/embed-tumblr-wordpress/",
    },
    {
        img: `${image_path}/wordpress-tv.png`,
        name: "WordPress.tv",
        doc: "https://embedpress.com/docs/embed-wordpress-tv-videos-wordpress/",
    },
    {
        img: `${image_path}/rumble.png`,
        name: "Rumble Video",
        doc: "https://embedpress.com/docs/how-to-embed-rumble-video/",
    },
    {
        img: `${image_path}/deviantart.png`,
        name: "DeviantArt",
        doc: "https://embedpress.com/docs/embed-deviantart-image-wordpress/",
    },
    {
        img: `${image_path}/imgur-images.png`,
        name: "Imgur",
        doc: "https://embedpress.com/docs/embed-imgur-images-wordpress/",
    },
    {
        img: `${image_path}/scribd.png`,
        name: "Scribd",
        doc: "https://embedpress.com/docs/embed-scribd-document-wordpress/",
    },
    {
        img: `${image_path}/flickr-images.png`,
        name: "Flickr",
        doc: "https://embedpress.com/docs/embed-flickr-image-wordpress/",
    },
    {
        img: `${image_path}/slideshare.png`,
        name: "Slideshare",
        doc: "https://embedpress.com/docs/embed-slideshare-presentations-wordpress/",
    },
    {
        img: `${image_path}/giphy-gifs.png`,
        name: "Giphy",
        doc: "https://embedpress.com/docs/embed-giphy-gifs-wordpress/",
    },
    {
        img: `${image_path}/gumroad.png`,
        name: "Gumroad",
        doc: "https://embedpress.com/docs/embed-gumroad-product/",
    },
    {
        img: `${image_path}/meetup.png`,
        name: "Meetup",
        doc: "https://embedpress.com/docs/embed-meetup-groups-events-wordpress/",
    },
    {
        img: `${image_path}/wordwall.png`,
        name: "Wordwall",
        doc: "https://embedpress.com/docs/how-to-embed-wordwall-lessons-in-wordpress/",
    },
    {
        img: `${image_path}/smugmug.png`,
        name: "SmugMug",
        doc: "https://embedpress.com/docs/embed-smugmug-images-wordpress/",
    },
    {
        img: `${image_path}/kickstarter.png`,
        name: "Kickstarter",
        doc: "https://embedpress.com/docs/embed-kickstarter-videos-wordpress/",
    },
    {
        img: `${image_path}/getty-images.png`,
        name: "Getty Images",
        doc: "https://embedpress.com/docs/embed-getty-images-wordpress/",
    },
    {
        img: `${image_path}/matterport.png`,
        name: "Matterport 3D Scans",
        doc: "https://embedpress.com/docs/how-to-embed-matterport-3d-scans/",
    },
    {
        img: `${image_path}/codepen.png`,
        name: "CodePen",
        doc: "https://embedpress.com/docs/embed-codepen-codes-in-wordpress/",
    },
    {
        img: `${image_path}/padlet.png`,
        name: "Padlet",
        doc: "https://embedpress.com/docs/how-to-embed-padlet-in-wordpress/",
    },
    {
        img: `${image_path}/streamable.png`,
        name: "Streamable",
        doc: "https://embedpress.com/docs/how-to-embed-streamable-videos-in-wordpress/",
    },
    {
        img: `${image_path}/codesandbox.png`,
        name: "CodeSandbox",
        doc: "https://embedpress.com/docs/how-to-embed-codesandbox-codes-in-wordpress/",
    },
    {
        img: `${image_path}/gyazo.png`,
        name: "Gyazo",
        doc: "https://embedpress.com/docs/how-to-embed-gyazo/",
    },
    {
        img: `${image_path}/ifixit.png`,
        name: "iFixit",
        doc: "https://embedpress.com/docs/how-to-embed-ifixit-repair-manuals-in-wordpress/",
    },
    {
        img: `${image_path}/gloria-tv.png`,
        name: "Gloria.tv",
        doc: "https://embedpress.com/docs/how-to-embed-gloria-tv-videos-in-wordpress/",
    },
    {
        img: `${image_path}/boomplay.png`,
        name: "Boomplay Music",
        doc: "https://embedpress.com/docs/how-to-embed-boomplay-music/",
    },
    {
        img: `${image_path}/ted-videos.png`,
        name: "TED",
        doc: "https://embedpress.com/docs/embed-ted-videos-wordpress/",
    },
    {
        img: `${image_path}/gfycat.png`,
        name: "Gfycat",
        doc: "https://embedpress.com/docs/how-to-embed-gfycat-gifs-in-wordpress/",
    },
    {
        img: `${image_path}/mixcloud-audio.png`,
        name: "Mixcloud",
        doc: "https://embedpress.com/docs/embed-mixcloud-audio-wordpress/",
    },
    {
        img: `${image_path}/docdroid.png`,
        name: "DocDroid",
        doc: "https://embedpress.com/docs/embed-docdroid-documentation-in-wordpress/",
    },
    {
        img: `${image_path}/coub-videos.png`,
        name: "Coub",
        doc: "https://embedpress.com/docs/embed-coub-videos-iwordpress/",
    },
    {
        img: `${image_path}/speakerdeck.png`,
        name: "Speaker Deck",
        doc: "https://embedpress.com/docs/embed-speakerdeck-presentations-wordpress/",
    },
    {
        img: `${image_path}/reverbnation.png`,
        name: "ReverbNation",
        doc: "https://embedpress.com/docs/embed-reverbnation-audio-wordpress/",
    },
    {
        img: `${image_path}/vidyard.png`,
        name: "Vidyard",
        doc: "https://embedpress.com/docs/embed-vidyard-in-wordpress/",
    },
    {
        img: `${image_path}/learningapps.png`,
        name: "LearningApps",
        doc: "https://embedpress.com/docs/how-to-embed-learningapps-apps-in-wordpress/",
    },
    {
        img: `${image_path}/iHeartradio.png`,
        name: "iHeartRadio",
        doc: "https://embedpress.com/docs/how-to-embed-iheartradio-podcasts-in-wordpress/",
    },
    {
        img: `${image_path}/hearthis.png`,
        name: "Hearthis.at",
        doc: "https://embedpress.com/docs/how-to-embed-hearthis-audio-in-wordpress/",
    },
    {
        img: `${image_path}/flourish.png`,
        name: "Flourish",
        doc: "https://embedpress.com/docs/how-to-embed-flourish/",
    }
    // ,
    // {
    //     img: ``,
    //     name: "",
    //     doc: "",
    // },
    // {
    //     img: ``,
    //     name: "",
    //     doc: "",
    // },
    // {
    //     img: ``,
    //     name: "",
    //     doc: "",
    // },
    // {
    //     img: ``,
    //     name: "",
    //     doc: "",
    // },
    // {
    //     img: ``,
    //     name: "",
    //     doc: "",
    // },
    // {
    //     img: ``,
    //     name: "",
    //     doc: "",
    // },
    // {
    //     img: ``,
    //     name: "",
    //     doc: "",
    // },
    // {
    //     img: ``,
    //     name: "",
    //     doc: "",
    // },
    // {
    //     img: ``,
    //     name: "",
    //     doc: "",
    // },
    // {
    //     img: ``,
    //     name: "",
    //     doc: "",
    // },
    // {
    //     img: ``,
    //     name: "",
    //     doc: "",
    // },
    // {
    //     img: ``,
    //     name: "",
    //     doc: "",
    // },
    // {
    //     img: ``,
    //     name: "",
    //     doc: "",
    // },
    // {
    //     img: ``,
    //     name: "",
    //     doc: "",
    // },
    // {
    //     img: ``,
    //     name: "",
    //     doc: "",
    // },
    // {
    //     img: ``,
    //     name: "",
    //     doc: "",
    // },
    // {
    //     img: ``,
    //     name: "",
    //     doc: "",
    // },
    // {
    //     img: ``,
    //     name: "",
    //     doc: "",
    // },
    // {
    //     img: ``,
    //     name: "",
    //     doc: "",
    // },
    // {
    //     img: ``,
    //     name: "",
    //     doc: "",
    // },
    // {
    //     img: ``,
    //     name: "",
    //     doc: "",
    // },
    // {
    //     img: ``,
    //     name: "",
    //     doc: "",
    // },
    // {
    //     img: ``,
    //     name: "",
    //     doc: "",
    // },
    // {
    //     img: ``,
    //     name: "",
    //     doc: "",
    // },
    // {
    //     img: ``,
    //     name: "",
    //     doc: "",
    // },
    // {
    //     img: ``,
    //     name: "",
    //     doc: "",
    // },
    // {
    //     img: ``,
    //     name: "",
    //     doc: "",
    // },
    // {
    //     img: ``,
    //     name: "",
    //     doc: "",
    // },
    // {
    //     img: ``,
    //     name: "",
    //     doc: "",
    // }


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