# PIE Aperture

PIE Aperture is designed to be a testbed repo for the [PIE Web component library](https://github.com/justeattakeaway/pie). This repo houses test applications currently for NextJS, Nuxt and vanilla JS. These applications import the web components and ensure that they work as expected when installed in a variety of different frameworks.

## Aperture deployment links
[Nuxt application](https://aperture-nuxt.pie.design/)
[NextJS 14 application](https://aperture-nextjs-v14.pie.design/)
[NextJS 15 application](https://aperture-nextjs-v15.pie.design/)
[Vanilla application](https://aperture-vanilla.pie.design/)


## Automated Testing
We use Playwright for automation testing in PIE Aperture — system, SSR, and visual (Percy) tests.

### Visual testing (Percy)
Visual tests use Playwright to drive a standard desktop Chromium and the `@percy/playwright` SDK to capture each page. Percy renders the captured DOM across the desktop/mobile widths and browsers configured in the Percy **web project** dashboard.

#### Browser and device coverage

**These tests no longer run against real devices or older browser versions.**

The previous setup (WebDriverIO + Percy Automate on BrowserStack) screenshotted each page on a number of real device / OS combinations. The current setup captures the DOM once from a desktop Chromium and hands that snapshot to Percy, which re-renders it in its own browsers at the configured widths. In practice, this ensures consistency with PIE, but at the expense of:

- **No real devices.** Mobile widths are emulated by rendering narrower, not run on iOS or Android hardware. Device-specific behaviour — iOS Safari quirks, touch interaction, real viewport and safe-area handling — is not covered.
- **No pinned older browser versions.** Percy renders in current browsers only, so a regression that only shows up on an older Safari, Chrome, Edge or Firefox will not be caught.

If cross-browser or real-device testing is needed for a change, it has to come from somewhere other than this suite, such as a PIE consumer's own test suite, or a manual check against the deployed Aperture apps with Browserstack Live.

#### Tests
All visual tests are defined in a single spec, `test/visual/visual.spec.ts`, which is parametrised by `APP_NAME` and driven by the shared page list in `playwright-helpers/visual-pages.ts`.

Tests can be run by executing the following command at the root of the monorepo:

```
# Run all visual tests
yarn test:visual

# Run visual tests for a specific project
# app-name - can be one of the following: nextjs-app-v14, nextjs-app-v15, nuxt-app, vanilla-app
yarn test:visual --filter=<app-name>
```


### Playwright (system & SSR)
Playwright also powers our system and SSR tests, ensuring components function and render correctly when integrated into web applications.

Given that the goal of this repo is to ensure consistent implementation of our components, we follow an approach where a single test can be executed across our test applications. This has a number of key benefits such as reduced duplication of tests and consistent DOM structure of our implemented components.

#### Tests
We have two kinds of testing that are shared between applications. These are `system` and `ssr`. These can be found in `test/system` and `test/ssr` respectively at the root of the monorepo..

The system tests are to test the functionality of components working together, potentially in an E2E fashion. An example could be filling in and submitting a form.

The SSR tests are to test that when the components are rendered on the server in our different applications, they are rendered correctly (have a template with shadow DOM attributes and styles).

The only application that does not get SSR tested is the vanilla application, as it does not have server-side rendering.

Should you need to add a test for a specific application due to implementation differences, these can be added to the `test/system` folder within the application root directory.

##### Running Tests Locally
When running test locally, Playwright will automatically execute the `yarn dev` command to start the server (if not already running). The server process will be killed as part of the test teardown.

##### Viewing Test Reports
After test execution, if you wish to view a test report (for example on test failure), you can execute the following command from the root of the monorepo:

```
# app-name - can be one of the following: nextjs-app-v14, nextjs-app-v15, nuxt-app, vanilla-app
yarn playwright:show-report --filter=<app-name>
```

##### CI
Unlike the local dev server that utilises Server-Side Rendering (SSR), we currently only deploy to AWS via Static-Site Generation (SSG). It's worth noting this _may_ result in different behaviour when executing tests.
