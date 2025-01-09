import '@justeattakeaway/pie-webc/components/toast-provider.js';
import '@justeattakeaway/pie-webc/components/button.js';
import '@justeattakeaway/pie-webc/components/tag.js';
import { toaster } from '@justeattakeaway/pie-webc/components/toast-provider.js';

import './utils/navigation.js';
import './shared.js';

document.querySelector('#app').innerHTML = `
    <pie-toast-provider id="toast-provider" isDismissible="true"></pie-toast-provider>

    <pie-tag id="toast-queue-length" data-test-id="toast-queue-length" variant="information" style="margin-top: 16px;">
        Toast Queue Length: 0
    </pie-tag>

    <div style="margin-top: 16px; display: flex; gap: 16px; flex-wrap: wrap;">
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
