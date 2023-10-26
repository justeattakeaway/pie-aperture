import { percyScreenshot } from '@percy/selenium-webdriver';

describe('Vanilla App', () => {
    it('should navigate to the deployed application', async () => {
        await browser.url('/');

        await expect(await browser.getTitle()).toBe('Vite App');
        await percyScreenshot('Vanilla App - Component Overview');
    })
})

