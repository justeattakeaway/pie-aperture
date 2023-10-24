describe('NextJS App', () => {
    it('should navigate to the deployed application', async () => {
        await browser.url('/')
        await expect(await browser.getTitle()).toBe('PIE Aperture');
    })
})

