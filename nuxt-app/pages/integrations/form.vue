<template>
    <div>
        <form class="form" id="testForm" @submit.prevent="handleSubmit">
            <pie-form-label for="username">
                Username:
            </pie-form-label>
            <pie-input
                :value="username"
                @input="username = $event.target.value"
                class="form-field"
                id="username"
                data-test-id="username"
                name="username"
                type="text"></pie-input>

            <pie-form-label for="favouriteNumber">
                Favourite Number:
            </pie-form-label>
            <pie-input
                :value="favouriteNumber"
                @input="handleFavouriteNumberInput"
                :assistiveText="favouriteNumberValidationMessage"
                :status="favouriteNumberValidationMessage.length ? 'error' : undefined"
                class="form-field"
                id="favouriteNumber"
                data-test-id="favouriteNumber"
                name="favouriteNumber"
                :min="-5"
                :max="200"
                type="number"></pie-input>
            <label for="email">
                Email:
            </label>
            <input
                class="form-field"
                id="email"
                data-test-id="email"
                name="email"
                v-model="email"
                type="email" />

            <label for="password">
                Password:
            </label>
            <input
                class="form-field"
                id="password"
                data-test-id="password"
                name="password"
                v-model="password"
                type="password" />

            <label for="passwordConfirmation">
                Confirm Password:
            </label>
            <input
                class="form-field"
                id="passwordConfirmation"
                data-test-id="passwordConfirmation"
                name="passwordConfirmation"
                v-model="passwordConfirmation"
                type="password" />

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
import '@justeattakeaway/pie-webc/components/button.js';
import '@justeattakeaway/pie-form-label';
import '@justeattakeaway/pie-input';
import '@justeattakeaway/pie-switch';

const username = ref('');
const email = ref('');
const password = ref('');
const passwordConfirmation = ref('');
const approveSettings = ref(false);
const notifications = ref(false);
const favouriteNumber = ref('');
const favouriteNumberValidationMessage = ref('');

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
        password: password.value,
        passwordConfirmation: passwordConfirmation.value,
        approveSettings: approveSettings.value,
        enableNotifications: notifications.value,
        favouriteNumber: favouriteNumber.value
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