# PIE Aperture

PIE Aperture is designed to be a testbed repo for the [PIE Web component library](https://github.com/justeattakeaway/pie). This repo houses test applications currently for NextJS, Nuxt and vanilla JS. These applications import the web components and ensure that they work as expected when installed in a variety of different frameworks.

## Aperture deployment links
[Nuxt application](https://aperture-nuxt.pie.design/)
[NextJS 13 application](https://aperture-nextjs-v13.pie.design/)
[NextJS 14 application](https://aperture-nextjs-v14.pie.design/)
[Vanilla application](https://aperture-vanilla.pie.design/)


## Automated Testing
We utilise both Playwright and WebDriverIO to facilitate automation testing in PIE Aperture.

### WebDriverIO
WebDriverIO is a widely-used testing framework that is used for executing our Percy visual tests. In contrast to the PIE monorepo, these tests aim to verify the visual accuracy of our components across various popular web frameworks.

PIE Aperture leverages Percy Automate, a new feature in Percy that allows for the execution of visual tests across an array of desktop operating systems, browser versions, and mobile devices.

At present, WebDriverIO is the only framework we're familiar with that offers an SDK for this capability. In future, we will look to transition to Playwright when an Automate SDK becomes available.

#### Tests
All Visual tests can be found in a `test/visual` folder within the application root directory.

Tests can be run by executing the following command at the root of the monorepo:

```
# Run all visual tests
yarn test:visual

# Run visual tests for a specific project
# app-name - can be one of the following: nextjs-app-v13, nuxt-app, vanilla-app
yarn test:visual --filter=<app-name>
```

#### Devices & Browsers
A list of our tested browsers and devices can be found in the [WebDriverIO configuration](https://github.com/justeattakeaway/pie-aperture/blob/main/wdio.conf.js#L3-L15)


### Playwright
Playwright is used to facilitate system testing. This ensures that components function as expected when integrated into web applications.

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
# app-name - can be one of the following: nextjs-app-v13, nuxt-app, vanilla-app
yarn playwright:show-report --filter=<app-name>
```

##### CI
Unlike the local dev server that utilises Server-Side Rendering (SSR), we currently only deploy to AWS via Static-Site Generation (SSG). It's worth noting this _may_ result in different behaviour when executing tests.