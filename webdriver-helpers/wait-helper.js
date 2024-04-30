exports.waitUntilPageLoad = async (timeout = null, timeoutMsg = null) => {
    await browser.waitUntil(
        () => browser.execute(async () => document.readyState === 'complete'),
        {
            timeout: timeout ? timeout : 60 * 1000,
            timeoutMsg: timeoutMsg ? timeoutMsg : `Page did not load in ${timeout}ms`
        }
    );
}

exports.waitForPageTitleToBe = async (title, timeout = null, timeoutMsg = null) => {
    await browser.waitUntil(async function () {
        return (await browser.getTitle()) === title
    },
    {
        timeout: timeout ? timeout : 60 * 1000,
        timeoutMsg: timeoutMsg ? timeoutMsg : `Could not find the page title: ${title} in ${timeout}ms`
    });
}