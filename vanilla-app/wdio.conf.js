import merge from 'deepmerge';
import sharedConf from '../wdio.conf.js';
import { getEnvironmentBaseUrl } from '../webdriver-helpers/configuration-helper.js';

process.env.APP_NAME = 'Vanilla';

exports.config = merge(sharedConf.config, {

    baseUrl: getEnvironmentBaseUrl(process.env.APP_NAME),

    specs: [
        '../test/visual/*.js'
    ],
});

export { config }