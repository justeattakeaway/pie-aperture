import '@justeattakeaway/pie-webc/components/button.js';
import '@justeattakeaway/pie-icons-webc/dist/IconSearch.js';
import './utils/navigation.js';
import './shared.js';

document.querySelector('#app').innerHTML = `
    <pie-button id="counter" type="button"></pie-button>
    <pie-divider></pie-divider>
    <h2>PIE Button – with icon and text</h2>
    <pie-button>
        <icon-search slot="icon"></icon-search>
        Search
    </pie-button>`;

setupCounter(document.querySelector('#counter'));

export function setupCounter (element) {
    let counter = 0;
    const setCounter = (count) => {
        counter = count;
        element.innerHTML = `count is ${counter}`;
    };
    element.addEventListener('click', () => setCounter(counter + 1));
    setCounter(0);
}
