import merge from 'deepmerge';
import sharedConf from '../wdio.conf.js';

const config = merge(sharedConf.config, {

    baseUrl: 'https://main.d2vb6sjgivffb3.amplifyapp.com/',

    specs: [
        './test/*.js'
    ],
});

export { config }