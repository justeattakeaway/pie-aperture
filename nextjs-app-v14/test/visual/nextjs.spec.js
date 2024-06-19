const { waitForPageTitleToBe } = require('../../../webdriver-helpers/wait-helper.js');
const { percyScreenshot } = require('@percy/selenium-webdriver');

describe('NextJS Aperture App', () => {
    const pages = [
        { url: '/', name: 'PIE Aperture' },
        { url: '/integrations/icons', name: 'Icons' },
        { url: '/integrations/form', name: 'Form' },
        { url: '/components/assistive-text', name: 'Assistive Text' },
        { url: '/components/button', name: 'Button' },
        { url: '/components/card', name: 'Card' },
        { url: '/components/chip', name: 'Chip' },
        { url: '/components/cookie-banner', name: 'Cookie Banner' },
        { url: '/components/form-label', name: 'Form Label' },
        { url: '/components/icon-button', name: 'Icon Button' },
        { url: '/components/link', name: 'Link' },
        { url: '/components/modal', name: 'Modal' },
        { url: '/components/spinner', name: 'Spinner', percyCSS: '--spinner-animation-speed: 999s;' },
        { url: '/components/switch', name: 'Switch' },
        { url: '/components/tag', name: 'Tag' },
        { url: '/components/text-input', name: 'Text Input' },
    ];

    pages.forEach(({ name, url, percyCSS }) => {
        it(`should navigate to the ${name} page.`, async () => {
            await browser.url(url);
            await waitForPageTitleToBe(name);
            await percyScreenshot(name, { percyCSS });
        });
    });
});
