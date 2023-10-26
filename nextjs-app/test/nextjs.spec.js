const { waitUntilPageLoad } = require('../../webdriver-helpers/wait-helper.js');
const { percyScreenshot } = require('@percy/selenium-webdriver');

describe('NextJS App', () => {
    it('should navigate to the component overview page.', async () => {
        await browser.url('/components');
        await waitUntilPageLoad();
        await expect(await browser.getTitle()).toBe('PIE Aperture');
        await percyScreenshot('Next JS - Component Overview Page');
    })
})

