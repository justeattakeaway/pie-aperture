const merge = require('deepmerge');
const sharedConf = require('../wdio.conf.js');

exports.config = merge(sharedConf.config, {

    baseUrl: 'https://main.d1106vmj1ozg8d.amplifyapp.com/',

    specs: [
        './test/*.js'
    ]
});