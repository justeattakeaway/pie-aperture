import { test, expect, takeSnapshot } from '@chromatic-com/playwright';

function escapeRegExp(value) {
    return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

const pages = [
    { url: '/index.html', name: 'PIE Aperture' },
    { url: '/components/assistive-text.html', name: 'Assistive Text' },
    { url: '/components/avatar.html', name: 'Avatar' },
    { url: '/components/button.html', name: 'Button' },
    { url: '/components/breadcrumb.html', name: 'Breadcrumb' },
    { url: '/components/card.html', name: 'Card' },
    { url: '/components/checkbox.html', name: 'Checkbox' },
    { url: '/components/checkbox-group.html', name: 'Checkbox Group' },
    { url: '/components/chip.html', name: 'Chip' },
    { url: '/components/cookie-banner.html', name: 'Cookie Banner' },
    { url: '/components/custom-tag.html', name: 'Custom Tag' },
    { url: '/components/divider.html', name: 'Divider' },
    { url: '/integrations/css-only-radio.html', name: 'CSS Only Radio' },
    { url: '/integrations/form.html', name: 'Form' },
    { url: '/integrations/typography-classes.html', name: 'Typography Demo (CSS Classes)' },
    { url: '/integrations/typography-mixins.html', name: 'Typography Demo (Mixins)' },
    { url: '/components/form-label.html', name: 'Form Label' },
    { url: '/components/icon.html', name: 'Icon' },
    { url: '/components/icon-button.html', name: 'Icon Button' },
    { url: '/components/link.html', name: 'Link' },
    { url: '/components/lottie-player.html', name: 'Lottie Player', pauseBeforeScreenshot: true },
    { url: '/components/modal.html', name: 'Modal' },
    { url: '/components/notification.html', name: 'Notification' },
    { url: '/components/radio.html', name: 'Radio' },
    { url: '/components/radio-group.html', name: 'Radio Group' },
    { url: '/components/spinner.html', name: 'Spinner' },
    { url: '/components/switch.html', name: 'Switch' },
    { url: '/components/select.html', name: 'Select' },
    { url: '/components/tag.html', name: 'Tag' },
    { url: '/components/text-input.html', name: 'Text Input' },
    { url: '/components/textarea.html', name: 'Textarea' },
    { url: '/components/toast.html', name: 'Toast' },
    { url: '/components/thumbnail.html', name: 'Thumbnail' }
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
