import '@justeattakeaway/pie-webc/components/cookie-banner.js';
import './utils/navigation.js';
import './shared.js';

document.querySelector('#app').innerHTML = `
    <pie-cookie-banner
        language="da"
        country="dk"
        hasPrimaryActionsOnly
        cookieTechnologiesLink="https://justeattakeaway.com"
        cookieStatementLink="https://justeattakeaway.com"></pie-cookie-banner>`;
