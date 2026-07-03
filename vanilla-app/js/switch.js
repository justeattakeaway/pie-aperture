import '@justeattakeaway/pie-webc/components/switch.js';
import './shared.js';
import './utils/navigation.js';

const state = {
    'story-switch': false,
    'external-switch': false,
    'wrapping-switch': false,
    'multi-label-switch': false,
};

function handleSwitchChange(event) {
    const switchId = event.currentTarget.id;
    state[switchId] = !state[switchId];

    const pieSwitch = document.querySelector(`#${switchId}`);

    if (switchId === 'story-switch') {
        pieSwitch.setAttribute('label', `checked: ${state[switchId]}`);
    }

    pieSwitch.checked = state[switchId];
}

// Set initial HTML structure
document.querySelector('#app').innerHTML = `
    <pie-switch id="story-switch" label="checked: ${state['story-switch']}"></pie-switch>

    <pie-divider label="External labels"></pie-divider>

    <label class="switch-label" for="external-switch">Toggle via for attribute</label>
    <pie-switch id="external-switch"></pie-switch>

    <pie-divider></pie-divider>

    <label style="display: flex; flex-direction: column; gap: 4px;">
        <span class="switch-label">Toggle via wrapping label</span>
        <pie-switch id="wrapping-switch"></pie-switch>
    </label>

    <pie-divider></pie-divider>

    <label class="switch-label" for="multi-label-switch">First label</label>
    <label class="switch-label" for="multi-label-switch">Second label</label>
    <pie-switch id="multi-label-switch"></pie-switch>
`;

Object.keys(state).forEach((key) => {
    const pieSwitch = document.querySelector(`#${key}`);
    pieSwitch.checked = state[key];
    pieSwitch.addEventListener('change', handleSwitchChange);
});
