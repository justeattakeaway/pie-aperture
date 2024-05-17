import '@justeattakeaway/pie-webc/components/cookie-banner.js';
import daDK from '@justeattakeaway/pie-cookie-banner/locales/dk-dk.json';
import './utils/navigation.js';
import './shared.js';

document.querySelector('#app').innerHTML = `
    <pie-cookie-banner
        locale='${JSON.stringify(daDK)}'
        hasPrimaryActionsOnly
        cookieTechnologiesLink="https://justeattakeaway.com"
        cookieStatementLink="https://justeattakeaway.com"></pie-cookie-banner>`;
