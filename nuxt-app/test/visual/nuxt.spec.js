import { waitUntilPageLoad } from '../../../webdriver-helpers/wait-helper.js';
import { percyScreenshot } from '@percy/selenium-webdriver';

describe('Nuxt Aperture App', () => {
    const pages = [
        { url: '/index.html', name: 'PIE Aperture' },
        { url: '/integrations/icons.html', name: 'Icons' },
        { url: '/integrations/form.html', name: 'Form' },
        { url: '/components/assistive-text.html', name: 'Assistive Text' },
        { url: '/components/button.html', name: 'Button' },
        { url: '/components/card.html', name: 'Card' },
        { url: '/components/chip.html', name: 'Chip' },
        { url: '/components/cookie-banner.html', name: 'Cookie Banner' },
        { url: '/components/form-label.html', name: 'Form Label' },
        { url: '/components/icon-button.html', name: 'Icon Button' },
        { url: '/components/link.html', name: 'Link' },
        { url: '/components/modal.html', name: 'Modal' },
        { url: '/components/spinner.html', name: 'Spinner' },
        { url: '/components/switch.html', name: 'Switch' },
        { url: '/components/tag.html', name: 'Tag' },
        { url: '/components/text-input.html', name: 'Text Input' },
        { url: '/components/checkbox.html', name: 'Checkbox' },
    ];

    pages.forEach((page) => {
        it.skip(`should navigate to the ${page.name} page.`, async () => {
            await browser.url(page.url);
            await waitUntilPageLoad();
            await expect(await browser.getTitle()).toContain(page.name);
            await percyScreenshot(page.name);
        });
    });
});
