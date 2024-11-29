import '@justeattakeaway/pie-webc/components/toast-provider.js';
import '@justeattakeaway/pie-webc/components/button.js';
import { toaster } from '@justeattakeaway/pie-webc/components/toast-provider.js';

import './utils/navigation.js';
import './shared.js';

document.querySelector('#app').innerHTML = `
    <pie-toast-provider id="toast-provider" is-dismissible="true"></pie-toast-provider>
    <div style="margin-top: 16px; display: flex; gap: 16px; flex-wrap: wrap;">
        <pie-button id="trigger-info-toast">Trigger Info Toast</pie-button>
        <pie-button id="trigger-warning-toast">Trigger Warning Toast</pie-button>
        <pie-button id="trigger-error-toast">Trigger Error Toast</pie-button>
        <pie-button id="clear-toasts">Clear All Toasts</pie-button>
    </div>
`;

const toastProvider = document.getElementById('toast-provider');

toastProvider.addEventListener('pie-toast-open', () => {
    console.log('Toast Opened');
});

toastProvider.addEventListener('pie-toast-close', () => {
    console.log('Toast Closed');
});

toastProvider.addEventListener('pie-toast-leading-action-click', () => {
    console.log('Leading Action Clicked');
});

document.getElementById('trigger-info-toast').addEventListener('click', () => {
    toaster.create({
        message: 'This is an info toast.',
        variant: 'info',
        duration: 3000
    });
});

document.getElementById('trigger-warning-toast').addEventListener('click', () => {
    toaster.create({
        message: 'This is a warning toast.',
        variant: 'warning',
        duration: 3000
    });
});

document.getElementById('trigger-error-toast').addEventListener('click', () => {
    toaster.create({
        message: 'This is an error toast.',
        variant: 'error',
        duration: 3000
    });
});

document.getElementById('clear-toasts').addEventListener('click', () => {
    toaster.clearAll();
});
