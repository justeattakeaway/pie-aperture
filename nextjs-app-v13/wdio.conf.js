const merge = require('deepmerge');
const sharedConf = require('../wdio.conf.js');
const { getEnvironmentBaseUrl } = require('../webdriver-helpers/configuration-helper.js');

exports.config = merge(sharedConf.config, {

    baseUrl: getEnvironmentBaseUrl('nextjs-app'),

    specs: [
        './test/visual/*.js'
    ]
});