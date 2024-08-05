import { test, expect } from '@playwright/test';
import http from 'http';
import https from 'https';
import { URL } from 'url';
import { getEnvironmentBaseUrl } from '../../playwright-helpers/configuration-helper';

const APP_NAME = process.env.APP_NAME;

const baseUrl = getEnvironmentBaseUrl(APP_NAME);

// TODO - Is there a better way to define this list?
// TODO - uncomment the components when we are ready to test them
const components = [
    'assistive-text',
    'button',
    'card',
    'checkbox',
    'chip',
    'cookie-banner',
    'form-label',
    'icon',
    'icon-button',
    'link',
    'modal',
    'notification',
    'spinner',
    'switch',
    'tag',
    'text-input',
];

const getComponentPageUrl = (component: string, baseUrl: string): string => `${baseUrl}/components/${component}`;

async function fetchHtml(url: string): Promise<string> {
    return new Promise<string>((resolve, reject) => {
        const parsedUrl = new URL(url);
        const protocol = parsedUrl.protocol === 'https:' ? https : http;

        protocol.get(url, (response) => {
            let data = '';

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
    components.forEach((component) => {
        test(`SSR: ${APP_NAME}: ${component}`, async () => {
            // Arrange
            const url = getComponentPageUrl(component, baseUrl);

            // used to ensure the shadow dom markup is rendered correctly, we don't need to worry about attribute order
            const shadowDomRegex = /<template\s+([^>]*shadowroot="open"[^>]*shadowrootmode="open"[^>]*|[^>]*shadowrootmode="open"[^>]*shadowroot="open"[^>]*)>/;
            const styleRegex = /<style>[\s\S]*?<\/style>/;
            const componentRegex = createComponentRegex(component);

            // Act
            const rawHtml = await fetchHtml(url);

            // Extract the first <pie-[component]> element using a regular expression
            const pieComponentMatch = rawHtml.match(componentRegex);

            if (!pieComponentMatch) {
                console.warn('Get component page baseURL output: ', baseUrl)
                console.warn('Get component page URL output: ', url)
                console.warn('Failed to find component in the SSR html: ', rawHtml)
            }

            const pieComponentHtml = pieComponentMatch ? pieComponentMatch[0] : null;

            // Assert
            expect(pieComponentHtml).not.toBeNull();
            expect(pieComponentHtml).toMatch(shadowDomRegex);
            expect(pieComponentHtml).toMatch(styleRegex);
        });
    });
});
