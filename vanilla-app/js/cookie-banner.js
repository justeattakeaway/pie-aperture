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


document.querySelector('#app').innerHTML = `
    <pie-cookie-banner
        language="da"
        country="dk"
        hasPrimaryActionsOnly
        cookieTechnologiesLink="https://justeattakeaway.com"
        cookieStatementLink="https://justeattakeaway.com"></pie-cookie-banner>

    <pie-divider></pie-divider>

    <pie-cookie-banner
        language="fr"
        country="ca"
        hasPrimaryActionsOnly
        cookieTechnologiesLink="https://justeattakeaway.com"
        cookieStatementLink="https://justeattakeaway.com"></pie-cookie-banner>

    <pie-divider></pie-divider>

    <pie-cookie-banner
        language="en"
        country="ca"
        hasPrimaryActionsOnly
        cookieTechnologiesLink="https://justeattakeaway.com"
        cookieStatementLink="https://justeattakeaway.com"></pie-cookie-banner>
`;