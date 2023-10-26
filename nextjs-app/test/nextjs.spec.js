const { percyScreenshot } = require('@percy/selenium-webdriver');

describe('NextJS App', () => {
    it('should navigate to the deployed application', async () => {
        await browser.url('/')
        await expect(await browser.getTitle()).toBe('PIE Aperture');
        await percyScreenshot('Next JS - Component Overview Page');
    })
})

