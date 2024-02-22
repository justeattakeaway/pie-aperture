const merge = require('deepmerge');
const sharedConf = require('../wdio.conf.js');
const { getEnvironmentBaseUrl } = require('../webdriver-helpers/configuration-helper.js');

process.env.APP_NAME = 'NextJS';

exports.config = merge(sharedConf.config, {

    baseUrl: getEnvironmentBaseUrl(process.env.APP_NAME),

    specs: [
        '../test/visual/*.js'
    ]
});