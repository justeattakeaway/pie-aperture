import merge from 'deepmerge';
import sharedConf from '../wdio.conf.js';
import { getEnvironmentBaseUrl } from '../webdriver-helpers/configuration-helper.js';

const config = merge(sharedConf.config, {

    baseUrl: getEnvironmentBaseUrl('vanilla-app'),

    specs: [
        '../test/visual/*.js'
    ],
});

export { config }