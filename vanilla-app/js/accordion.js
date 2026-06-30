import '@justeattakeaway/pie-webc/components/accordion.js';
import '@justeattakeaway/pie-icons-webc/dist/IconPie.js';
import '@justeattakeaway/pie-icons-webc/dist/IconRocketShip.js';
import './shared.js';
import './utils/navigation.js';

let isFirstOpen = true;
let isSecondOpen = false;

document.querySelector('#app').innerHTML = `
    <pie-accordion
        id="accordion-1"
        headingLabel="What is PIE?"
        isOpen>
        <icon-pie slot="icon" size="m"></icon-pie>
        PIE is the design system used across Just Eat Takeaway products. It provides a consistent set of components and styles.
    </pie-accordion>

    <pie-accordion
        id="accordion-2"
        headingLabel="How do I get started?"
        secondaryLabel="Installation and setup guide"
        isDividerHidden>
        <icon-rocket-ship slot="icon" size="m"></icon-rocket-ship>
        Install the pie-webc package and import the components you need. See the documentation for more details.
    </pie-accordion>`;

document.querySelector('#accordion-1').addEventListener('pie-accordion-toggle', (event) => {
    event.target.isOpen = !event.detail.isOpen;
});

document.querySelector('#accordion-2').addEventListener('pie-accordion-toggle', (event) => {
    event.target.isOpen = !event.detail.isOpen;
});
