import '@justeattakeaway/pie-webc/components/toast-provider.js';
import '@justeattakeaway/pie-webc/components/button.js';
import '@justeattakeaway/pie-webc/components/tag.js';
import '@justeattakeaway/pie-webc/components/chip.js';
import { toaster, positions } from '@justeattakeaway/pie-webc/components/toast-provider.js';

import './utils/navigation.js';
import './shared.js';

let selectedPosition = 'default';

document.querySelector('#app').innerHTML = `
    <pie-toast-provider id="toast-provider" isDismissible="true" position="${selectedPosition}"></pie-toast-provider>

    <pie-tag id="toast-queue-length" data-test-id="toast-queue-length" variant="information" style="margin-top: var(--dt-spacing-d);">
        Toast Queue Length: 0
    </pie-tag>

    <div id="position-controls" style="margin-top: var(--dt-spacing-d); display: flex; align-items: center; gap: var(--dt-spacing-d); flex-wrap: wrap;">
        <h3>Position:</h3>
        ${positions.map((position) => `
            <pie-chip
                data-position="${position}"
                ${position === selectedPosition ? 'isSelected' : ''}>
                ${position}
            </pie-chip>
        `).join('')}
    </div>

    <div style="margin-top: var(--dt-spacing-d); display: flex; gap: var(--dt-spacing-d); flex-wrap: wrap;">
        <pie-button id="info-toast-btn" data-test-id="info-toast-btn">
            Trigger Info Toast
        </pie-button>
        <pie-button id="warning-toast-btn" data-test-id="warning-toast-btn">
            Trigger Warning Toast
        </pie-button>
        <pie-button id="error-toast-btn" data-test-id="error-toast-btn">
            Trigger Error Toast
        </pie-button>
        <pie-button id="clear-toasts-btn" data-test-id="clear-toasts-btn" variant="secondary">
            Clear All Toasts
        </pie-button>
    </div>
`;

let queueLength = 0;
const toastProvider = document.getElementById('toast-provider');
const queueLengthTag = document.getElementById('toast-queue-length');
const positionControls = document.getElementById('position-controls');

positionControls.addEventListener('click', (event) => {
    const chip = event.target.closest('pie-chip');
    if (!chip) return;

    const position = chip.dataset.position;
    if (position) {
        selectedPosition = position;
        toastProvider.setAttribute('position', selectedPosition);

        const allChips = positionControls.querySelectorAll('pie-chip');
        allChips.forEach((c) => {
            if (c.dataset.position === selectedPosition) {
                c.setAttribute('isSelected', '');
            } else {
                c.removeAttribute('isSelected');
            }
        });
    }
});

toastProvider.addEventListener('pie-toast-open', () => {
    console.log('Toast Opened');
});

toastProvider.addEventListener('pie-toast-close', () => {
    console.log('Toast Closed');
});

toastProvider.addEventListener('pie-toast-leading-action-click', () => {
    console.log('Leading Action Clicked');
});

/**
 * Queue update event - update the displayed queue length
 */
toastProvider.addEventListener('pie-toast-provider-queue-update', (event) => {
    queueLength = event.detail.length || 0;
    queueLengthTag.textContent = `Toast Queue Length: ${queueLength}`;
});

/**
 * Button events
 */
document.getElementById('info-toast-btn').addEventListener('click', () => {
    toaster.create({
        message: 'This is an info toast (Low Priority)',
        variant: 'info'
    });
});

document.getElementById('warning-toast-btn').addEventListener('click', () => {
    toaster.create({
        message: 'This is a warning toast (Medium Priority)',
        variant: 'warning'
    });
});

document.getElementById('error-toast-btn').addEventListener('click', () => {
    toaster.create({
        message: 'This is an error toast (High Priority)',
        variant: 'error'
    });
});

document.getElementById('clear-toasts-btn').addEventListener('click', () => {
    toaster.clearAll();
});
