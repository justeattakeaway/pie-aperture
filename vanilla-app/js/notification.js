import '@justeattakeaway/pie-button';
import '@justeattakeaway/pie-notification';
import '@justeattakeaway/pie-divider';
import './shared.js';
import './utils/navigation.js';

document.querySelector('#app').innerHTML = `
    <pie-button id="toggle-notification" type="button"><span id="notification-action-text"></span> Notification</pie-button>
    <pie-divider></pie-divider>
    <pie-notification
        id="notification"
        isOpen="true"
        variant="info"
        heading="Title"
        leadingAction='${JSON.stringify({
          text: 'Confirm',
          ariaLabel: 'Descriptive confirmation text',
        })}'
        supportingAction='${JSON.stringify({
          text: 'Cancel',
          ariaLabel: 'Descriptive cancellation text',
        })}'
      >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet tincidunt est, vitae vulputate turpis. Cras pretium venenatis elementum. Duis tristique neque non varius tempor. In hac habitasse platea dictumst. Aenean accumsan vehicula urna.
    </pie-notification>`;

const $notification = document.querySelector('#notification');
const $notificationActionText = document.querySelector('#notification-action-text');

function isValidOpen(selector) {
  return typeof selector === 'string'
}

document.querySelector('#toggle-notification').addEventListener('click', () => {
  $notification.toggleAttribute('isOpen');

  if (isValidOpen($notification.getAttribute('isOpen'))) {
    $notificationActionText.innerHTML = 'Close';
  }  else {
    $notificationActionText.innerHTML = 'Open';
  }
});

$notification.addEventListener('pie-notification-close', () => {
  $notificationActionText.innerHTML = 'Open'; 
  $notification.removeAttribute('isOpen');
});

$notification.addEventListener('pie-notification-open', () => {
  $notificationActionText.innerHTML = 'Close';
});

$notification.addEventListener('pie-notification-supporting-action-click', (event) => {
  alert(`${event.type} clicked`);
});

$notification.addEventListener('pie-notification-leading-action-click', (event) => {
  alert(`${event.type} clicked`);
});
