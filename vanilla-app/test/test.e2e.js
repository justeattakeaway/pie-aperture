describe('Vanilla App', () => {
    it('should navigate to the deployed application', async () => {
        await browser.url('/')
        await expect(await browser.getUrl()).toBe('https://main.d2vb6sjgivffb3.amplifyapp.com/');
    })
})

