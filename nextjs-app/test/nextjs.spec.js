import { expect, browser, $ } from '@wdio/globals';

describe('NextJS App', () => {
    it('should navigate to the deployed application', async () => {
        await browser.url('/')
        await expect(await browser.getUrl()).toBe('https://main.d1106vmj1ozg8d.amplifyapp.com/');
    })
})

