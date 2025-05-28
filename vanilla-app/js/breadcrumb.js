import '@justeattakeaway/pie-webc/components/breadcrumb.js';
import '@justeattakeaway/pie-webc/components/breadcrumb-item.js';
import './utils/navigation.js';
import './shared.js';

document.querySelector('#app').innerHTML = `
    <pie-breadcrumb>
        <pie-breadcrumb-item href="/">Home</pie-breadcrumb-item>
        <pie-breadcrumb-item href="#">Breadcrumb</pie-breadcrumb-item>
    </pie-breadcrumb>`;

