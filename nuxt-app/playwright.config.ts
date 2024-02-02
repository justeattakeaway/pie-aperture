import merge from 'deepmerge';
import sharedConf from '../playwright.config';
import { getEnvironmentBaseUrl } from '../playwright-helpers/configuration-helper.js';

import { defineConfig } from '@playwright/test';

const mergedConfig = merge(sharedConf, {
  use: {
    baseURL: getEnvironmentBaseUrl('nuxt-app'),
  }
});

export default defineConfig(mergedConfig);