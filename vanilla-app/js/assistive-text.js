import '@justeattakeaway/pie-assistive-text';
import './utils/navigation.js';
import './shared.js';

document.querySelector('#app').innerHTML = `
    <pie-assistive-text>Assistive Text Default</pie-assistive-text>
    <pie-assistive-text variant="success">Assistive Text Success</pie-assistive-text>
    <pie-assistive-text variant="error">Assistive Text Error</pie-assistive-text>`;
