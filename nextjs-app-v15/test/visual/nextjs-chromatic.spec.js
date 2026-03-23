import { test, expect, takeSnapshot } from '@chromatic-com/playwright';

function escapeRegExp(value) {
    return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

const pages = [
    { url: '/', name: 'PIE Aperture' },
    { url: '/components/assistive-text', name: 'Assistive Text' },
    { url: '/components/avatar', name: 'Avatar' },
    { url: '/components/breadcrumb', name: 'Breadcrumb' },
    { url: '/components/button', name: 'Button' },
    { url: '/components/card', name: 'Card' },
    { url: '/components/checkbox', name: 'Checkbox' },
    { url: '/components/checkbox-group', name: 'Checkbox Group' },
    { url: '/components/chip', name: 'Chip', pauseBeforeScreenshot: true },
    { url: '/components/cookie-banner', name: 'Cookie Banner' },
    { url: '/components/divider', name: 'Divider' },
    { url: '/integrations/css-only-radio', name: 'CSS Only Radio' },
    { url: '/integrations/uncontrolled-form', name: 'Uncontrolled Form' },
    { url: '/integrations/controlled-form', name: 'Controlled Form' },
    { url: '/integrations/typography-classes', name: 'Typography Demo (CSS Classes)' },
    { url: '/integrations/typography-mixins', name: 'Typography Demo (Mixins)' },
    { url: '/components/form-label', name: 'Form Label' },
    { url: '/components/icon', name: 'Icon' },
    { url: '/components/icon-button', name: 'Icon Button' },
    { url: '/components/link', name: 'Link' },
    { url: '/components/lottie-player', name: 'Lottie Player', pauseBeforeScreenshot: true },
    { url: '/components/modal', name: 'Modal' },
    { url: '/components/notification', name: 'Notification' },
    { url: '/components/radio', name: 'Radio' },
    { url: '/components/radio-group', name: 'Radio Group' },
    { url: '/components/select', name: 'Select' },
    { url: '/components/spinner', name: 'Spinner', pauseBeforeScreenshot: true },
    { url: '/components/switch', name: 'Switch' },
    { url: '/components/tag', name: 'Tag' },
    { url: '/components/text-input', name: 'Text Input' },
    { url: '/components/textarea', name: 'Textarea' },
    { url: '/components/toast', name: 'Toast' },
    { url: '/components/thumbnail', name: 'Thumbnail' }
];

pages.forEach((pageConfig) => {
    test(`should navigate to the ${pageConfig.name} page.`, async ({ page }, testInfo) => {
        await page.goto(pageConfig.url);

        await expect(page).toHaveTitle(new RegExp(escapeRegExp(pageConfig.name), 'i'));
        await page.waitForLoadState('networkidle');

        if (pageConfig.pauseBeforeScreenshot) {
            await page.waitForTimeout(5000);
        }

        await takeSnapshot(page, pageConfig.name, testInfo);
    });
});
