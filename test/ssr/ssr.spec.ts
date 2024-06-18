import { test, expect } from '@playwright/test';
import http from 'http';
import { getEnvironmentBaseUrl } from '../../playwright-helpers/configuration-helper';

const APP_NAME = process.env.APP_NAME;

const baseUrl = getEnvironmentBaseUrl(APP_NAME);

// TODO - Is there a better way to define this list?
// TODO - uncomment the components when we are ready to test them
const components = [
    'assistive-text',
    'button',
    'card',
    // 'checkbox',
    'chip',
    // 'cookie-banner',
    'form-label',
    'icon-button',
    // 'link',
    // 'modal',
    'spinner',
    // 'switch',
    // 'tag',
    // 'notification'
];

const getComponentPageUrl = (component: string, baseUrl: string) => `${baseUrl}/components/${component}`;

async function fetchHtml(url: string): Promise<string> {
    return new Promise<string>((resolve, reject) => {
        http.get(url, (response) => {
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

function createComponentRegex(componentName: string) {
    const prefixedComponentName = `pie-${componentName}`;
    return new RegExp(`<${prefixedComponentName}[\\s\\S]*?<\\/${prefixedComponentName}>`);
}

// Visit each page in the SSR apps at /components/<component> and take a snapshot of the HTML returned from the server
components.forEach((component) => {
    test(`SSR: ${APP_NAME}: ${component}`, async () => {
        // Arrange
        const url = getComponentPageUrl(component, baseUrl);
        // used to ensure the shadow dom markup is rendered correctly, we don't need to worry about attribute order
        const shadowDomRegex = /<template\s+(shadowroot="open"\s+shadowrootmode="open"|shadowrootmode="open"\s+shadowroot="open")>/;
        const styleRegex = /<style>[\s\S]*?<\/style>/;
        const componentRegex = createComponentRegex(component);

        // Act
        const rawHtml = await fetchHtml(url);

        // Extract the first <pie-[component]> element using a regular expression
        const pieComponentMatch = rawHtml.match(componentRegex);
        const pieComponentHtml = pieComponentMatch ? pieComponentMatch[0] : null;

        // Assert
        expect(pieComponentHtml).not.toBeNull();
        expect(pieComponentHtml).toMatch(shadowDomRegex);
        expect(pieComponentHtml).toMatch(styleRegex);
        expect(pieComponentHtml).toMatchSnapshot();
    });
});
