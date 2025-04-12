import { waitForPageTitleToBe } from '../../../webdriver-helpers/wait-helper.js';
import { percyScreenshot } from '@percy/selenium-webdriver';

describe('Vanilla Aperture App', () => {
    const pages = [
        { url: '/index.html', name: 'PIE Aperture' },
        { url: '/components/assistive-text.html', name: 'Assistive Text' },
        { url: '/components/button.html', name: 'Button' },
        { url: '/components/card.html', name: 'Card' },
        { url: '/components/checkbox.html', name: 'Checkbox' },
        { url: '/components/checkbox-group.html', name: 'Checkbox Group' },
        { url: '/components/chip.html', name: 'Chip' },
        { url: '/components/cookie-banner.html', name: 'Cookie Banner' },
        { url: '/integrations/form.html', name: 'Form' },
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

    pages.forEach((page) => {
        it(`should navigate to the ${page.name} page.`, async () => {
            await browser.url(`${page.url}?PERCY=true`);
            await waitForPageTitleToBe(page.name);
            // Some components might require extra time to mount and load its dependencies.
            // Delaying the screenshot helps to avoid false negatives in diffs.
            if (page.pauseBeforeScreenshot) await browser.pause(5000);
            await percyScreenshot(page.name);
        });
    });
});
