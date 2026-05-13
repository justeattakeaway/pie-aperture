import '@justeattakeaway/pie-webc/components/checkbox.js';
import './shared.js';
import './utils/navigation.js';

const state = {
    cb1: false,
    cb2: false,
    cb3: false,
    cb4: false,
};

function createHandler(key) {
    return () => {
        state[key] = !state[key];
        const el = document.querySelector(`#${key}`);
        el.innerHTML = `checked: ${state[key]}`;
        el.checked = state[key];
    };
}

// Set initial HTML structure
document.querySelector('#app').innerHTML = `
    <h2>Default (trailing, hug)</h2>
    <pie-checkbox id="cb1">checked: ${state.cb1}</pie-checkbox>

    <br />
    <h2>labelPosition="leading", labelFit="hug"</h2>
    <pie-checkbox id="cb2" labelPosition="leading">checked: ${state.cb2}</pie-checkbox>

    <br />
    <h2>labelPosition="leading", labelFit="fill"</h2>
    <pie-checkbox id="cb3" labelPosition="leading" labelFit="fill">checked: ${state.cb3}</pie-checkbox>

    <br />
    <h2>labelPosition="trailing", labelFit="fill"</h2>
    <pie-checkbox id="cb4" labelFit="fill">checked: ${state.cb4}</pie-checkbox>
`;

// Add individual event listeners
Object.keys(state).forEach((key) => {
    document.querySelector(`#${key}`).addEventListener('change', createHandler(key));
});
