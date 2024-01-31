<template>
    <div>
        <h1>PIE Form Test Page</h1>
        <form class="form" id="testForm" @submit="handleSubmit">
            <label for="username">
                Username:
            </label>
            <input
                class="form__field"
                id="username"
                name="username"
                v-model="username"
                type="text" />
        
            <label for="email">
                Email:
            </label>
            <input
                class="form__field"
                id="email"
                name="email"
                v-model="email"
                type="email" />
            
            <label for="password">
                Password:
            </label>
            <input
                class="form__field"
                id="password"
                name="password"
                v-model="password"
                type="password" />
        
            <label for="passwordConfirmation">
                Confirm Password:
            </label>
            <input
                class="form__field"
                id="passwordConfirmation"
                name="passwordConfirmation"
                v-model="passwordConfirmation"
                type="password" />
        
            <div class="form__controls">
                <pie-switch
                    label="Approve settings"
                    id="approveSettings"
                    name="approveSettings"
                    @change="handleApproveSettingsChange"
                    :checked="approveSettings"
                    required></pie-switch>
                <pie-switch
                    label="Enable Notifications"
                    id="notifications"
                    name="notifications"
                    @change="handleNotificationsChange"
                    :checked="notifications"></pie-switch>
            </div>
            <div class="form__btns">
                <pie-button class="form__btn" variant="secondary" type="reset">Reset</pie-button>
                <pie-button class="form__btn" type="submit">Submit</pie-button>
            </div>
        </form>
        <div id="output">
            <h2>Form Data</h2>
            <pre>
                {{ formDataDisplay }}
            </pre>
        </div>
    </div>
</template>

<script setup>
import { PieButton } from '@justeattakeaway/pie-button';
import { PieSwitch } from '@justeattakeaway/pie-switch';

import { defineModel } from 'vue';

const username = defineModel('username');
const email = defineModel('email');
const password = defineModel('password');
const passwordConfirmation = defineModel('passwordConfirmation');
const approveSettings = defineModel('approveSettings', { default: true });
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
        notifications: notifications.value
    }, null, 2);
}

function handleNotificationsChange(event) {
    console.log(event.target.checked)
    notifications.value = event.target.checked;
}

function handleApproveSettingsChange(event) {
    console.log(event.target.checked)
    approveSettings.value = event.target.checked;
}

</script>

<style scoped>
     /* Form Styles */
    .form {
        display: flex;
        flex-direction: column;
    }

    .form__field {
        margin-bottom: var(--dt-spacing-b);
    }

    .form__controls {
        margin-top: var(--dt-spacing-e);
        > * {
            display: block;
        }

        > * + * {
            margin-top: var(--dt-spacing-b);
        }
    }

    .form__btns {
        margin-top: var(--dt-spacing-c);
        display: flex;
        gap: var(--dt-spacing-a)
    }

    .form__btns > .form__btn:first-of-type {
        margin-left: auto;
    }
</style>