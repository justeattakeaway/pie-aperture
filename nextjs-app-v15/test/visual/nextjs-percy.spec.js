import percySnapshot from '@percy/playwright';
import { test, expect } from '../../../test/playwright/browserstack/fixture.js';
import { getPercyPages } from '../../../test/playwright/visual/percy-pages.js';
import { definePercyVisualSuite } from '../../../test/playwright/visual/register-percy-suite.js';

const { percyScreenshot } = percySnapshot;

definePercyVisualSuite({
    test,
    expect,
    percyScreenshot,
    pages: getPercyPages('nextjs-app-v15'),
});