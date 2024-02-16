<template>
    <div>
        <form class="form" id="testForm" @submit="handleSubmit">
            <pie-form-label for="username">
                Username:
            </pie-form-label>
            <pie-input
                :value="username"
                @input="handleUsernameInput"
                class="form-field"
                id="username"
                data-test-id="username"
                name="username"
                type="text"></pie-input>
        
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
                    @change="handleApproveSettingsChange"
                    :checked="approveSettings"></pie-switch>
                <pie-switch
                    label="Enable Notifications"
                    id="notifications"
                    data-test-id="enableNotifications"
                    name="notifications"
                    @change="handleNotificationsChange"
                    :checked="notifications"></pie-switch>
            </div>
            <div class="form-btns">
                <pie-button class="form-btn" data-test-id="reset-btn" variant="secondary" type="reset">Reset</pie-button>
                <pie-button class="form-btn" data-test-id="submit-btn" type="submit">Submit</pie-button>
            </div>
        </form>
        <div id="output" data-test-id="output">
            <h2>Form Data</h2>
            <pre data-test-id="outputData">
                {{ formDataDisplay }}
            </pre>
        </div>
    </div>
</template>

<script setup lang="ts">
import '@justeattakeaway/pie-button';
import '@justeattakeaway/pie-form-label';
import '@justeattakeaway/pie-input';
import '@justeattakeaway/pie-switch';
import { defineModel} from 'vue';
import { definePageMeta } from '#imports';

definePageMeta({
    title: 'Form Demo',
});

const username = defineModel('username', { default: '' });
const email = defineModel('email', { default: '' });
const password = defineModel('password', { default: '' });
const passwordConfirmation = defineModel('passwordConfirmation', { default: '' });
const approveSettings = defineModel('approveSettings', { default: false });
const notifications = defineModel('notifications', { default: false });

const formDataDisplay = defineModel('formDataDisplay');

function handleSubmit(event) {
    event.preventDefault();
    formDataDisplay.value = JSON.stringify({
        username: username.value,
        email: email.value,
        password: password.value,
        passwordConfirmation: passwordConfirmation.value,
        approveSettings: approveSettings.value,
        enableNotifications: notifications.value
    }, null, 2);
}

function handleUsernameInput(event) {
    username.value = event.target.value;
}

function handleNotificationsChange(event) {
    notifications.value = event.target.checked;
}

function handleApproveSettingsChange(event) {
    approveSettings.value = event.target.checked;
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