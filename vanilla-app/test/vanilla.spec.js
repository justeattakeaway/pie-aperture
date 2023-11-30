import { waitUntilPageLoad } from '../../webdriver-helpers/wait-helper.js';
import { percyScreenshot } from '@percy/selenium-webdriver';

describe('Vanilla App', () => {
    it('should navigate to the component overview page.', async () => {
        await browser.url('/');
        await waitUntilPageLoad();
        await expect(await browser.getTitle()).toBe('PIE Aperture');
        await percyScreenshot('Vanilla App - Component Overview');
    })

    it('should navigate to the component overview page.', async () => {
        await browser.url('/icons.html');
        await waitUntilPageLoad();
        await expect(await browser.getTitle()).toBe('PIE Aperture');
        await percyScreenshot('Vanilla App - Icons Page');
    })
})

