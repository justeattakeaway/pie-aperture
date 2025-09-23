import merge from 'deepmerge';
import sharedConf from '../wdio.conf.js';
import { getEnvironmentBaseUrl } from '../webdriver-helpers/configuration-helper.js';

export const config = merge(sharedConf.config, {

    baseUrl: getEnvironmentBaseUrl('nextjs-app-v15'),

    specs: [
        './test/visual/*.js'
    ]
});