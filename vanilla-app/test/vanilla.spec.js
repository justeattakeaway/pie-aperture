import { waitUntilPageLoad } from '../../webdriver-helpers/wait-helper.js';
import { percyScreenshot } from '@percy/selenium-webdriver';

describe('Vanilla App', () => {
    it('should navigate to the component overview page.', async () => {
        await browser.url('/');
        await waitUntilPageLoad();
        await expect(await browser.getTitle()).toBe('PIE Aperture');
        await percyScreenshot('Vanilla App - Component Overview');
    })

    // TODO: Uncomment when icons page is properly set up to be deployed
    // it('should navigate to the component overview page.', async () => {
    //     await browser.url('/icons.html');
    //     await waitUntilPageLoad();
    //     await expect(await browser.getTitle()).toBe('PIE Aperture | Icons');
    //     await percyScreenshot('Vanilla App - Icons Page');
    // })
})

