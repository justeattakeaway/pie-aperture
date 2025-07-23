import '@justeattakeaway/pie-webc/components/avatar.js';
import './utils/navigation.js';
import './shared.js';

document.querySelector('#app').innerHTML = `
    <h1> Avatar Static Initials </h1>
    <pie-avatar label="Ada Lovelace" tag="div"></pie-avatar>
    <h1> Avatar Fallback </h1>
    <pie-avatar tag="div"></pie-avatar>
    `;
