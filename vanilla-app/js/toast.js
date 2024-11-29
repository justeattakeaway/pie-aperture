import '@justeattakeaway/pie-webc/components/toast.js';

import './utils/navigation.js';
import './shared.js';

document.querySelector('#app').innerHTML = `
    <pie-toast message="This is a message" isDismissible></pie-toast>`;