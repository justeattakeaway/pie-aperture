<template>
    <div>
        <h1>PIE Form Test Page</h1>
        <form class="form" id="testForm">
            <label for="username">
                Username:
            </label>
            <input
                class="form__field"
                id="username"
                name="username"
                type="text" />
        
            <label for="email">
                Email:
            </label>
            <input
                class="form__field"
                id="email"
                name="email"
                type="email" />
            
            <label for="password">
                Password:
            </label>
            <input
                class="form__field"
                id="password"
                name="password"
                type="password" />
        
            <label for="passwordConfirmation">
                Confirm Password:
            </label>
            <input
                class="form__field"
                id="passwordConfirmation"
                name="passwordConfirmation"
                type="password" />
        
            <div class="form__controls">
                <pie-switch
                    label="Approve settings"
                    id="approveSettings"
                    name="approveSettings"
                    required></pie-switch>
                <pie-switch
                    label="Enable Notifications"
                    id="notifications"
                    name="notifications"></pie-switch>
            </div>
            <div class="form__btns">
                <pie-button class="form__btn" variant="secondary" type="reset">Reset</pie-button>
                <pie-button class="form__btn" type="submit">Submit</pie-button>
            </div>
        </form>
    </div>
</template>

<script setup>
import { PieButton } from '@justeattakeaway/pie-button'
import { PieSwitch } from '@justeattakeaway/pie-switch'
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