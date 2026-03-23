function escapeRegExp(value) {
    return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function withQueryString(url, queryString) {
    if (!queryString) {
        return url;
    }

    return url.includes('?') ? `${url}&${queryString}` : `${url}?${queryString}`;
}

export function definePercyVisualSuite({ test, expect, percyScreenshot, pages, queryString = 'PERCY=true' }) {
    pages.forEach((pageConfig) => {
        test(`should navigate to the ${pageConfig.name} page.`, async ({ page }) => {
            await page.goto(withQueryString(pageConfig.url, queryString));
            await expect(page).toHaveTitle(new RegExp(escapeRegExp(pageConfig.name), 'i'));
            await page.waitForLoadState('networkidle');

            if (pageConfig.pauseBeforeScreenshot) {
                await page.waitForTimeout(5000);
            }

            await percyScreenshot(page, pageConfig.name, { fullPage: true });
        });
    });
}