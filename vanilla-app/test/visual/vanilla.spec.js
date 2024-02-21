import { waitUntilPageLoad } from '../../../webdriver-helpers/wait-helper.js';
import { percyScreenshot } from '@percy/selenium-webdriver';

describe('Vanilla App', () => {

    const pageUrls = [
        { url: '/index.html', title: 'PIE Aperture' },
        { url: '/integrations/icons.html', title: 'PIE Aperture | Vanilla | Icons' },
        { url: '/integrations/form.html', title: 'PIE Aperture | Vanilla | Form' },
        { url: '/components/assistive-text.html', title: 'PIE Aperture | Vanilla | Assistive Text' },
        { url: '/components/button.html', title: 'PIE Aperture | Vanilla | Button' },
        { url: '/components/card.html', title: 'PIE Aperture | Vanilla | Card' },
        { url: '/components/chip.html', title: 'PIE Aperture | Vanilla | Chip' },
        { url: '/components/cookie-banner.html', title: 'PIE Aperture | Vanilla | Cookie Banner' },
        { url: '/components/form-label.html', title: 'PIE Aperture | Vanilla | Form Label' },
        { url: '/components/icon-button.html', title: 'PIE Aperture | Vanilla | Icon Button' },
        { url: '/components/link.html', title: 'PIE Aperture | Vanilla | Link' },
        { url: '/components/modal.html', title: 'PIE Aperture | Vanilla | Modal' },
        { url: '/components/spinner.html', title: 'PIE Aperture | Vanilla | Spinner' },
        { url: '/components/switch.html', title: 'PIE Aperture | Vanilla | Switch' },
        { url: '/components/tag.html', title: 'PIE Aperture | Vanilla | Tag' },
    ];

    pageUrls.forEach((page) => {
        it(`should navigate to the ${url} page.`, async () => {
            await browser.url(page.url);
            await waitUntilPageLoad();
            await expect(await browser.getTitle()).toBe(page.title);
            await percyScreenshot(page.title);
        });
    
    });
});

