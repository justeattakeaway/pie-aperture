<template>
    <div>
        <form class="form" id="testForm" @submit.prevent="handleSubmit">
            <pie-form-label for="username">
                Username:
            </pie-form-label>
            <pie-text-input
                :value="username"
                @input="username = $event.target.value"
                class="form-field"
                id="username"
                data-test-id="username"
                name="username"
                type="text">
                <icon-user slot="leadingIcon"></icon-user>
            </pie-text-input>

            <pie-form-label for="favouriteNumber">
                Favourite Number:
            </pie-form-label>
            <pie-text-input
                :value="favouriteNumber"
                @input="handleFavouriteNumberInput"
                :assistiveText="favouriteNumberValidationMessage"
                :status="favouriteNumberValidationMessage.length ? 'error' : 'default'"
                class="form-field"
                id="favouriteNumber"
                data-test-id="favouriteNumber"
                name="favouriteNumber"
                :min="-5"
                :max="200"
                type="number">
                <icon-number-symbol slot="leadingIcon"></icon-number-symbol>
            </pie-text-input>

            <pie-form-label for="email">
                Email:
            </pie-form-label>
            <pie-text-input
                :value="email"
                @input="email = $event.target.value"
                class="form-field"
                id="email"
                data-test-id="email"
                name="email"
                type="email">
                <icon-email slot="leadingIcon"></icon-email>
            </pie-text-input>

            <pie-form-label for="url">
                Website:
            </pie-form-label>
            <pie-text-input
                :value="url"
                @input="url = $event.target.value"
                class="form-field"
                id="url"
                data-test-id="url"
                name="url"
                type="url">
                <icon-laptop slot="leadingIcon"></icon-laptop>
            </pie-text-input>

            <pie-form-label for="tel">
                Telephone:
            </pie-form-label>
            <pie-text-input
                :value="tel"
                @input="tel = $event.target.value"
                class="form-field"
                id="tel"
                data-test-id="tel"
                name="tel"
                type="tel">
                <icon-phone slot="leadingIcon"></icon-phone>
            </pie-text-input>

            <pie-form-label for="password">
                Password:
            </pie-form-label>
            <pie-text-input
                :value="password"
                @input="password = $event.target.value"
                class="form-field"
                id="password"
                data-test-id="password"
                name="password"
                type="password">
                <icon-key slot="leadingIcon"></icon-key>
            </pie-text-input>

            <pie-form-label for="description">
                Description:
            </pie-form-label>
            <pie-textarea
                :value="description"
                placeholder="Write something about yourself..."
                @input="description = $event.target.value"
                class="form-field"
                id="description"
                data-test-id="description"
                name="description">
            </pie-textarea>

            <div class="form-controls">
                <pie-form-label for="approveSettings">
                    Approve settings
                </pie-form-label>
                <pie-switch
                    id="approveSettings"
                    data-test-id="approveSettings"
                    name="approveSettings"
                    @change="approveSettings = $event.target.checked"
                    :checked="approveSettings"></pie-switch>
                <pie-switch
                    label="Enable Notifications"
                    id="notifications"
                    data-test-id="enableNotifications"
                    name="notifications"
                    @change="notifications = $event.target.checked"
                    :checked="notifications"></pie-switch>
                <pie-checkbox
                    id="newsletter"
                    data-test-id="newsletterSignup"
                    name="newsletter"
                    @change="newsletter = $event.target.checked"
                    :checked="newsletter">
                    Receive discounts, loyalty offers and other updates via email
                </pie-checkbox>

                <pie-radio-group name="favouriteTakeaway" @change="favouriteTakeaway = $event.target.value">
                    <pie-form-label>
                    Your favourite takeaway
                    </pie-form-label>
                    <pie-radio
                        value="chinese">
                        Chinese
                    </pie-radio>
                    <pie-radio
                        data-test-id="shawarma"
                        value="shawarma">
                        Shawarma
                    </pie-radio>
                </pie-radio-group>

                <pie-checkbox-group>
                    <pie-form-label slot="label">Choose the way we can contact you:</pie-form-label>
                    <pie-checkbox
                        id="contactByEmail"
                        name="contactByEmail"
                        data-test-id="contactByEmail"
                        @change="contactByEmail = $event.target.checked"
                        :checked="contactByEmail">
                        Contact By Email
                    </pie-checkbox>
                    <pie-checkbox
                        id="contactByPhone"
                        name="contactByPhone"
                        data-test-id="contactByPhone"
                        @change="contactByPhone = $event.target.checked"
                        :checked="contactByPhone">
                        Contact By Phone
                    </pie-checkbox>
                </pie-checkbox-group>
            </div>
            <div class="form-btns">
                <pie-button class="form-btn" data-test-id="reset-btn" variant="secondary" type="reset">Reset</pie-button>
                <pie-button class="form-btn" data-test-id="submit-btn" type="submit">Submit</pie-button>
            </div>
        </form>
        <div id="output" v-if="formDataDisplay.length" data-test-id="output">
            <h2>Form Data</h2>
            <pre data-test-id="outputData">
                {{ formDataDisplay }}
            </pre>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { definePageMeta } from "#imports";
import '@justeattakeaway/pie-webc/components/button.js';
import '@justeattakeaway/pie-webc/components/form-label.js';
import '@justeattakeaway/pie-webc/components/text-input.js';
import '@justeattakeaway/pie-webc/components/textarea.js';
import '@justeattakeaway/pie-webc/components/radio.js';
import '@justeattakeaway/pie-webc/components/radio-group.js';
import '@justeattakeaway/pie-webc/components/switch.js';
import '@justeattakeaway/pie-webc/components/checkbox.js';
import '@justeattakeaway/pie-webc/components/checkbox-group.js';
import '@justeattakeaway/pie-icons-webc/dist/IconEmail.js';
import '@justeattakeaway/pie-icons-webc/dist/IconLaptop.js';
import '@justeattakeaway/pie-icons-webc/dist/IconPhone.js';
import '@justeattakeaway/pie-icons-webc/dist/IconUser.js';
import '@justeattakeaway/pie-icons-webc/dist/IconNumberSymbol.js';
import '@justeattakeaway/pie-icons-webc/dist/IconKey.js';

definePageMeta({
    title: 'Form Test Page',
});

const username = ref('');
const email = ref('');
const tel = ref('');
const url = ref('');
const password = ref('');
const approveSettings = ref(false);
const notifications = ref(false);
const favouriteNumber = ref('');
const favouriteNumberValidationMessage = ref('');
const newsletter = ref(false);
const description = ref('');
const favouriteTakeaway = ref('');

const contactByEmail = ref(false);
const contactByPhone = ref(false);

const formDataDisplay = ref('');

function handleFavouriteNumberInput(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const value = inputElement.value;
    favouriteNumber.value = value;

    let validationMessage = '';
    if (inputElement.validity.rangeUnderflow) {
        validationMessage = 'The favourite number is too low. Please pick a number between -5 and 200.';
    } else if (inputElement.validity.rangeOverflow) {
        validationMessage = 'The favourite number is too high. Please pick a number between -5 and 200.';
    }

    favouriteNumberValidationMessage.value = validationMessage;
}

function handleSubmit() {
    formDataDisplay.value = JSON.stringify({
        username: username.value,
        email: email.value,
        tel: tel.value,
        url: url.value,
        favouriteTakeaway: favouriteTakeaway.value,
        password: password.value,
        approveSettings: approveSettings.value,
        enableNotifications: notifications.value,
        favouriteNumber: favouriteNumber.value,
        newsletterSignup: newsletter.value,
        description: description.value,
        contactByEmail: contactByEmail.value,
        contactByPhone: contactByPhone.value,
    }, null, 2);
}
</script>
<style scoped>
     /* Form Styles */
    .form {
        display: flex;
        flex-direction: column;
    }

    .form-field {
        margin-bottom: var(--dt-spacing-b);
    }

    .form-controls {
        margin-top: var(--dt-spacing-e);
        > * {
            display: block;
        }

        > * + * {
            margin-top: var(--dt-spacing-b);
        }
    }

    .form-btns {
        margin-top: var(--dt-spacing-c);
        display: flex;
        gap: var(--dt-spacing-a)
    }

    .form-btns > .form-btn:first-of-type {
        margin-left: auto;
    }
</style>