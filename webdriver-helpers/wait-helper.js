exports.waitUntilPageLoad = async (timeout = null, timeoutMsg = null) => {
    await browser.waitUntil(
        () => browser.execute(async () => document.readyState === 'complete'),
        {
            timeout: timeout ? timeout : 60 * 1000,
            timeoutMsg: timeoutMsg ? timeoutMsg : `Page did not load in ${timeout}ms`
        }
    );
}