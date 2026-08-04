import { waitUntilPageLoad } from '../../../webdriver-helpers/wait-helper.js';
import { percyScreenshot } from '@percy/selenium-webdriver';

describe('Vanilla Aperture App', () => {
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
        { url: '/integrations/css-only-button.html', name: 'CSS Only Button' },
        { url: '/integrations/css-only-radio.html', name: 'CSS Only Radio' },
        { url: '/integrations/form.html', name: 'Form' },
        { url: '/integrations/typography-classes.html', name: 'Typography Demo (CSS Classes)' },
        { url: '/integrations/typography-mixins.html', name: 'Typography Demo (Mixins)' },
        { url: '/components/form-label.html', name: 'Form Label' },
        { url: '/components/icon.html', name: 'Icon' },
        { url: '/components/icon-button.html', name: 'Icon Button' },
        { url: '/components/link.html', name: 'Link' },
        { url: '/components/list.html', name: 'List' },
        { url: '/components/lottie-player.html', name: 'Lottie Player', pauseBeforeScreenshot: true },
        { url: '/components/modal.html', name: 'Modal' },
        { url: '/components/notification.html', name: 'Notification' },
        { url: '/components/radio.html', name: 'Radio' },
        { url: '/components/radio-group.html', name: 'Radio Group' },
        { url: '/components/list-item-radio-selection.html', name: 'List Item Radio Selection' },
        { url: '/components/list-item-switch-selection.html', name: 'List Item Switch Selection' },
        { url: '/components/list-item-checkbox-selection.html', name: 'List Item Checkbox Selection' },
        { url: '/components/list-item-link.html', name: 'List Item Link' },
        { url: '/components/list-item-button.html', name: 'List Item Button' },
        { url: '/components/spinner.html', name: 'Spinner' },
        { url: '/components/switch.html', name: 'Switch' },
        { url: '/components/select.html', name: 'Select' },
        { url: '/components/tag.html', name: 'Tag' },
        { url: '/components/text-input.html', name: 'Text Input' },
        { url: '/components/textarea.html', name: 'Textarea' },
        { url: '/components/toast.html', name: 'Toast' },
        { url: '/components/thumbnail.html', name: 'Thumbnail' }
    ];

    pages.forEach((page) => {
        it(`should navigate to the ${page.name} page.`, async () => {
            await browser.url(`${page.url}?PERCY=true`);
            await waitUntilPageLoad();
            // Some components might require extra time to mount and load its dependencies.
            // Delaying the screenshot helps to avoid false negatives in diffs.
            // The pause is longer here due to no SSR on the vanilla app. So we wait longer to mitigate rendering race conditions in Percy tests.
            if (page.pauseBeforeScreenshot) await browser.pause(10000);
            await percyScreenshot(page.name, { fullPage: true });
        });
    });
});
