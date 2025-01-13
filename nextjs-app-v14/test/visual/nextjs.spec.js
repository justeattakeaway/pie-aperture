const { waitForPageTitleToBe } = require('../../../webdriver-helpers/wait-helper.js');
const { percyScreenshot } = require('@percy/selenium-webdriver');

describe('NextJS Aperture App', () => {
    const pages = [
        { url: '/', name: 'PIE Aperture' },
        { url: '/components/assistive-text', name: 'Assistive Text' },
        { url: '/components/button', name: 'Button' },
        { url: '/components/card', name: 'Card' },
        { url: '/components/checkbox', name: 'Checkbox' },
        { url: '/components/checkbox-group', name: 'Checkbox Group' },
        { url: '/components/chip', name: 'Chip' },
        { url: '/components/cookie-banner', name: 'Cookie Banner' },
        { url: '/integrations/form', name: 'Form' },
        { url: '/components/form-label', name: 'Form Label' },
        { url: '/components/icon', name: 'Icon' },
        { url: '/components/icon-button', name: 'Icon Button' },
        { url: '/components/link', name: 'Link' },
        { url: '/components/lottie-player', name: 'Lottie Player', pauseBeforeScreenshot: true },
        { url: '/components/modal', name: 'Modal' },
        { url: '/components/notification', name: 'Notification' },
        { url: '/components/radio', name: 'Radio' },
        { url: '/components/radio-group', name: 'Radio Group' },
        { url: '/components/spinner', name: 'Spinner' },
        { url: '/components/switch', name: 'Switch' },
        { url: '/components/tag', name: 'Tag' },
        { url: '/components/text-input', name: 'Text Input' },
        { url: '/components/textarea', name: 'Textarea' },
        { url: '/components/toast', name: 'Toast' },
        { url: '/components/thumbnail', name: 'Thumbnail' }
    ];

    pages.forEach((page) => {
        it(`should navigate to the ${page.name} page.`, async () => {
            await browser.url(`${page.url}?PERCY=true`);
            await waitForPageTitleToBe(page.name);
            // Some components might require extra time to mount and load its dependencies.
            // Delaying the screenshot helps to avoid false negatives in diffs.
            if (page.pauseBeforeScreenshot) await browser.pause(5000);
            await percyScreenshot(page.name);
        });
    });
});
