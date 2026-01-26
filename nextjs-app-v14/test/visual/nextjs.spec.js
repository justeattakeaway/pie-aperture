import { test, expect, takeSnapshot } from "@chromatic-com/playwright";

const pages = [
        { url: '/', name: 'PIE Aperture' },
        { url: '/components/assistive-text', name: 'Assistive Text' },
        { url: '/components/avatar', name: 'Avatar' },
        { url: '/components/button', name: 'Button' },
        { url: '/components/breadcrumb', name: 'Breadcrumb' },
        { url: '/components/card', name: 'Card' },
        { url: '/components/checkbox', name: 'Checkbox' },
        { url: '/components/checkbox-group', name: 'Checkbox Group' },
        { url: '/components/chip', name: 'Chip' },
        { url: '/components/cookie-banner', name: 'Cookie Banner' },
        { url: '/components/custom-tag', name: 'Custom Tag' },
        { url: '/components/divider', name: 'Divider' },
        { url: '/integrations/uncontrolled-form', name: 'Uncontrolled Form' },
        { url: '/integrations/controlled-form', name: 'Controlled Form' },
        { url: '/components/form-label', name: 'Form Label' },
        { url: '/components/icon', name: 'Icon' },
        { url: '/components/icon-button', name: 'Icon Button' },
        { url: '/components/link', name: 'Link' },
        { url: '/components/lottie-player', name: 'Lottie Player', pauseBeforeScreenshot: true },
        { url: '/components/modal', name: 'Modal' },
        { url: '/components/notification', name: 'Notification' },
        { url: '/components/radio', name: 'Radio' },
        { url: '/components/radio-group', name: 'Radio Group' },
        { url: '/components/spinner', name: 'Spinner' },
        { url: '/components/switch', name: 'Switch' },
        { url: '/components/select', name: 'Select' },
        { url: '/components/tag', name: 'Tag' },
        { url: '/components/text-input', name: 'Text Input' },
        { url: '/components/textarea', name: 'Textarea' },
        { url: '/components/toast', name: 'Toast' },
        { url: '/components/thumbnail', name: 'Thumbnail' }
    ];

    pages.forEach((pageConfig) => {
        test(`should navigate to the ${pageConfig.name} page.`, async ({ page }, testInfo) => {
            await page.goto(pageConfig.url);


            // Wait for page to load and verify title
            await expect(page).toHaveTitle(new RegExp(pageConfig.name, 'i'));

            // Wait for page to be fully loaded
            await page.waitForLoadState('networkidle');

            // Some components might require extra time to mount and load its dependencies.
            // Delaying the screenshot helps to avoid false negatives in diffs.
            if (pageConfig.pauseBeforeScreenshot) {
                await page.waitForTimeout(5000);
            }

            // Chromatic will automatically capture snapshots during Playwright tests
            // Using toHaveScreenshot() creates an explicit snapshot that Chromatic will capture
            // await expect(page).toHaveScreenshot(`${pageConfig.name.toLowerCase().replace(/\s+/g, '-')}.png`, {
            //     fullPage: true
            // });

            // Use takeSnapshot to capture a snapshot at this point in the test
            await takeSnapshot(page, pageConfig.name, testInfo);
        });
    });

