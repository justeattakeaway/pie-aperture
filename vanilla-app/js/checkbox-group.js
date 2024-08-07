import '@justeattakeaway/pie-webc/components/checkbox.js';
import '@justeattakeaway/pie-webc/components/checkbox-group.js';
import '@justeattakeaway/pie-webc/components/form-label.js';
import './shared.js';
import './utils/navigation.js';

let contactByEmail = false;
let contactByPhone = false;

function handleChangeContactByEmail() {
    contactByEmail = !contactByEmail;

    const pieCheckboxPhone = document.getElementById('contactByEmail');
    pieCheckboxPhone.checked = contactByEmail;
}

function handleChangeContactByPhone() {
    contactByPhone = !contactByPhone;

    const pieCheckboxPhone = document.getElementById('contactByPhone');
    pieCheckboxPhone.checked = contactByPhone;
}

// Set initial HTML structure
document.querySelector('#app').innerHTML = `
    <pie-checkbox-group>
        <pie-form-label slot="label">Choose the way we can contact you:</pie-form-label>
        <pie-checkbox id="contactByEmail">Contact By Email</pie-checkbox>
        <pie-checkbox id="contactByPhone">Contact By Phone</pie-checkbox>
    </pie-checkbox-group>
`;

// Add event listener to pie-switch for change events
document.getElementById('contactByPhone').addEventListener('change', handleChangeContactByPhone);
document.getElementById('contactByEmail').addEventListener('change', handleChangeContactByEmail);
