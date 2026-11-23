import '@justeattakeaway/pie-webc/components/skeleton.js';
import './shared.js';
import './utils/navigation.js';

document.querySelector('#app').innerHTML = `
    <div>
        <pie-skeleton variant="circle" height="40px"></pie-skeleton>
        <pie-skeleton variant="text" height="font-body-l" lines="3"></pie-skeleton>
        <pie-skeleton variant="star" stars="5"></pie-skeleton>
    </div>`;
