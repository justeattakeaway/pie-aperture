import { test, expect } from '@playwright/test';
import { http, https } from 'follow-redirects';
import { URL } from 'url';
import { getEnvironmentBaseUrl } from '../../playwright-helpers/configuration-helper';

const APP_NAME = process.env.APP_NAME;

const baseUrl = getEnvironmentBaseUrl(APP_NAME);

// Sometimes we need additional pages for the same component.
// In these cases we want to provide a tag name and page to visit so the url and component name logic does not break.
// An example is the custom-tag page, which just contains pie-tag instances.
type componentConfiguration = {
    selector: string,
    page: string
}

const componentConfigs: componentConfiguration[] = [
    { selector: 'accordion', page: 'accordion' },
    { selector: 'assistive-text', page: 'assistive-text' },
    { selector: 'avatar', page: 'avatar' },
    { selector: 'breadcrumb', page: 'breadcrumb' },
    { selector: 'button', page: 'button' },
    { selector: 'card', page: 'card' },
    { selector: 'checkbox', page: 'checkbox' },
    { selector: 'checkbox-group', page: 'checkbox-group' },
    { selector: 'chip', page: 'chip' },
    { selector: 'cookie-banner', page: 'cookie-banner' },
    { selector: 'tag', page: 'custom-tag' },
    { selector: 'divider', page: 'divider' },
    { selector: 'form-label', page: 'form-label' },
    { selector: 'icon', page: 'icon' },
    { selector: 'icon-button', page: 'icon-button' },
    { selector: 'icon-with-background', page: 'icon-with-background' },
    { selector: 'link', page: 'link' },
    { selector: 'list', page: 'list' },
    { selector: 'lottie-player', page: 'lottie-player' },
    { selector: 'modal', page: 'modal' },
    { selector: 'notification', page: 'notification' },
    { selector: 'radio', page: 'radio' },
    { selector: 'radio-group', page: 'radio-group' },
    { selector: 'select', page: 'select' },
    { selector: 'spinner', page: 'spinner' },
    { selector: 'switch', page: 'switch' },
    { selector: 'tag', page: 'tag' },
    { selector: 'text-input', page: 'text-input' },
    { selector: 'textarea', page: 'textarea' },
    { selector: 'thumbnail', page: 'thumbnail' },
    { selector: 'toast', page: 'toast' },
    { selector: 'toast-provider', page: 'toast-provider' }
];

const getComponentPageUrl = (component: string, baseUrl: string): string => `${baseUrl}/components/${component}`;

async function fetchHtml(url: string): Promise<string> {
    return new Promise<string>((resolve, reject) => {
        const parsedUrl = new URL(url);
        const protocol = parsedUrl.protocol === 'https:' ? https : http;

        protocol.get(url, (response) => {
            let data = '';

            console.info('Getting', url);
            console.info('Status:', response.statusCode);

            response.on('data', (chunk) => {
                data += chunk;
            });

            response.on('end', () => {
                resolve(data);
            });
        }).on('error', (err) => {
            reject(err);
        });
    });
}

function createComponentRegex(componentName: string): RegExp {
    if (componentName === 'icon') {
        return /<icon-[\w-]+[\s\S]*?<\/icon-[\w-]+>/;
    }

    const prefixedComponentName = `pie-${componentName}`;

    return new RegExp(`<${prefixedComponentName}[\\s\\S]*?<\\/${prefixedComponentName}>`);
}

// Visit each page in the SSR apps at /components/<component> and take a snapshot of the HTML returned from the server
test.describe('SSR - Components render with shadow dom and styles', () => {
    componentConfigs.forEach((config : componentConfiguration) => {
        test(`SSR: ${APP_NAME}: ${config.page}`, async () => {
            // Arrange
            const url = getComponentPageUrl(config.selector, baseUrl);

            // used to ensure the shadow dom markup is rendered correctly, we don't need to worry about attribute order
            const shadowDomRegex = /<template\s+([^>]*shadowroot="open"[^>]*shadowrootmode="open"[^>]*|[^>]*shadowrootmode="open"[^>]*shadowroot="open"[^>]*)>/;
            const styleRegex = /<style>[\s\S]*?<\/style>/;
            const componentRegex = createComponentRegex(config.selector);

            console.log('REGEX: ', componentRegex)
            console.log('PAGE: ', config.page)


            // Act
            const rawHtml = await fetchHtml(url);

            // Extract the first <pie-[component]> element using a regular expression
            const pieComponentMatch = rawHtml.match(componentRegex);

            if (!pieComponentMatch) {
                console.warn('Get component page baseURL output:', baseUrl);
                console.warn('Get component page URL output:', url);
                console.warn('Failed to find component in the SSR html:', rawHtml);
            }

            const pieComponentHtml = pieComponentMatch ? pieComponentMatch[0] : null;

            // Assert
            expect(pieComponentHtml).not.toBeNull();
            expect(pieComponentHtml).toMatch(shadowDomRegex);
            expect(pieComponentHtml).toMatch(styleRegex);
        });
    });

    // The selectable-list pages are multi-component (a `pie-radio-group` hosting `pie-list-item`
    // rows), so the page URL does not match a single `pie-<tag>` like the entries above. Assert
    // directly that the `pie-list-item` server-renders with shadow DOM and styles - this is the
    // component that carries the `@lit/context` provider/consumer whose SSR safety we care about.
    test(`SSR: ${APP_NAME}: list-item-radio-selection`, async () => {
        // Arrange
        const shadowDomRegex = /<template\s+([^>]*shadowroot="open"[^>]*shadowrootmode="open"[^>]*|[^>]*shadowrootmode="open"[^>]*shadowroot="open"[^>]*)>/;
        const styleRegex = /<style>[\s\S]*?<\/style>/;

        // Act
        const rawHtml = await fetchHtml(getComponentPageUrl('list-item-radio-selection', baseUrl));
        const pieComponentMatch = rawHtml.match(createComponentRegex('list-item'));

        if (!pieComponentMatch) {
            console.warn('Failed to find pie-list-item in the SSR html:', rawHtml);
        }

        const pieComponentHtml = pieComponentMatch ? pieComponentMatch[0] : null;

        // Assert
        expect(pieComponentHtml).not.toBeNull();
        expect(pieComponentHtml).toMatch(shadowDomRegex);
        expect(pieComponentHtml).toMatch(styleRegex);
    });

    // The link page hosts `pie-list-item`s with `interactionType="link"` and a slotted anchor. As with the radio
    // page, assert directly that `pie-list-item` server-renders with shadow DOM and styles.
    test(`SSR: ${APP_NAME}: list-item-link`, async () => {
        // Arrange
        const shadowDomRegex = /<template\s+([^>]*shadowroot="open"[^>]*shadowrootmode="open"[^>]*|[^>]*shadowrootmode="open"[^>]*shadowroot="open"[^>]*)>/;
        const styleRegex = /<style>[\s\S]*?<\/style>/;

        // Act
        const rawHtml = await fetchHtml(getComponentPageUrl('list-item-link', baseUrl));
        const pieComponentMatch = rawHtml.match(createComponentRegex('list-item'));

        if (!pieComponentMatch) {
            console.warn('Failed to find pie-list-item in the SSR html:', rawHtml);
        }

        const pieComponentHtml = pieComponentMatch ? pieComponentMatch[0] : null;

        // Assert
        expect(pieComponentHtml).not.toBeNull();
        expect(pieComponentHtml).toMatch(shadowDomRegex);
        expect(pieComponentHtml).toMatch(styleRegex);
    });

    // The checkbox page is a `pie-checkbox-group` hosting `pie-list-item` rows, mirroring the radio
    // page. Same direct assertion that `pie-list-item` server-renders with shadow DOM and styles, so
    // the four interaction types are covered symmetrically at the SSR layer.
    test(`SSR: ${APP_NAME}: list-item-checkbox-selection`, async () => {
        // Arrange
        const shadowDomRegex = /<template\s+([^>]*shadowroot="open"[^>]*shadowrootmode="open"[^>]*|[^>]*shadowrootmode="open"[^>]*shadowroot="open"[^>]*)>/;
        const styleRegex = /<style>[\s\S]*?<\/style>/;

        // Act
        const rawHtml = await fetchHtml(getComponentPageUrl('list-item-checkbox-selection', baseUrl));
        const pieComponentMatch = rawHtml.match(createComponentRegex('list-item'));

        if (!pieComponentMatch) {
            console.warn('Failed to find pie-list-item in the SSR html:', rawHtml);
        }

        const pieComponentHtml = pieComponentMatch ? pieComponentMatch[0] : null;

        // Assert
        expect(pieComponentHtml).not.toBeNull();
        expect(pieComponentHtml).toMatch(shadowDomRegex);
        expect(pieComponentHtml).toMatch(styleRegex);
    });

    // Switches have no group, so this page is a plain `pie-list` hosting `pie-list-item` rows.
    // As with the radio page, assert directly that the `pie-list-item` server-renders with shadow
    // DOM and styles - it carries the `@lit/context` provider/consumer whose SSR safety we care about.
    test(`SSR: ${APP_NAME}: list-item-switch-selection`, async () => {
        // Arrange
        const shadowDomRegex = /<template\s+([^>]*shadowroot="open"[^>]*shadowrootmode="open"[^>]*|[^>]*shadowrootmode="open"[^>]*shadowroot="open"[^>]*)>/;
        const styleRegex = /<style>[\s\S]*?<\/style>/;

        // Act
        const rawHtml = await fetchHtml(getComponentPageUrl('list-item-switch-selection', baseUrl));
        const pieComponentMatch = rawHtml.match(createComponentRegex('list-item'));

        if (!pieComponentMatch) {
            console.warn('Failed to find pie-list-item in the SSR html:', rawHtml);
        }

        const pieComponentHtml = pieComponentMatch ? pieComponentMatch[0] : null;

        // Assert
        expect(pieComponentHtml).not.toBeNull();
        expect(pieComponentHtml).toMatch(shadowDomRegex);
        expect(pieComponentHtml).toMatch(styleRegex);
    });

    // Button rows render an internal native `<button>` inside `pie-list-item`; assert directly that
    // the item server-renders with shadow DOM and styles, as with the other list-item interaction pages.
    test(`SSR: ${APP_NAME}: list-item-button`, async () => {
        // Arrange
        const shadowDomRegex = /<template\s+([^>]*shadowroot="open"[^>]*shadowrootmode="open"[^>]*|[^>]*shadowrootmode="open"[^>]*shadowroot="open"[^>]*)>/;
        const styleRegex = /<style>[\s\S]*?<\/style>/;

        // Act
        const rawHtml = await fetchHtml(getComponentPageUrl('list-item-button', baseUrl));
        const pieComponentMatch = rawHtml.match(createComponentRegex('list-item'));

        if (!pieComponentMatch) {
            console.warn('Failed to find pie-list-item in the SSR html:', rawHtml);
        }

        const pieComponentHtml = pieComponentMatch ? pieComponentMatch[0] : null;

        // Assert
        expect(pieComponentHtml).not.toBeNull();
        expect(pieComponentHtml).toMatch(shadowDomRegex);
        expect(pieComponentHtml).toMatch(styleRegex);
    });
});
