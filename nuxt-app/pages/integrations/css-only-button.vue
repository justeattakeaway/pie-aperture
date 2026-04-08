<template>
    <div class="button-examples">
        <h2 class="u-font-heading-l">Variants</h2>
        <div class="button-group">
            <div class="c-button c-button--primary c-button--medium">Primary</div>
            <div class="c-button c-button--primary-alternative c-button--medium">Primary Alternative</div>
            <div class="c-button c-button--primary-alternative-dark c-button--medium">Primary Alternative Dark</div>
            <div class="c-button c-button--secondary c-button--medium">Secondary</div>
            <div class="c-button c-button--outline c-button--medium">Outline</div>
            <div class="c-button c-button--ghost c-button--medium">Ghost</div>
            <div class="c-button c-button--ghost-dark c-button--medium">Ghost Dark</div>
            <div class="c-button c-button--destructive c-button--medium">Destructive</div>
            <div class="c-button c-button--destructive-ghost c-button--medium">Destructive Ghost</div>
        </div>
        <div class="button-group button-group--inverse">
            <div class="c-button c-button--inverse c-button--medium">Inverse</div>
            <div class="c-button c-button--outline-inverse c-button--medium">Outline Inverse</div>
            <div class="c-button c-button--ghost-inverse c-button--medium">Ghost Inverse</div>
            <div class="c-button c-button--ghost-inverse-light c-button--medium">Ghost Inverse Light</div>
        </div>

        <pie-divider></pie-divider>

        <h2 class="u-font-heading-l">Sizes</h2>
        <div class="button-group">
            <div class="c-button c-button--primary c-button--xsmall">Xsmall</div>
            <div class="c-button c-button--primary c-button--small-productive">Small Productive</div>
            <div class="c-button c-button--primary c-button--small-expressive">Small Expressive</div>
            <div class="c-button c-button--primary c-button--medium">Medium</div>
            <div class="c-button c-button--primary c-button--large">Large</div>
        </div>

        <pie-divider></pie-divider>

        <h2 class="u-font-heading-l">Disabled</h2>
        <div class="button-group">
            <div class="c-button c-button--primary c-button--medium is-disabled">Primary Disabled</div>
            <div class="c-button c-button--secondary c-button--medium is-disabled">Secondary Disabled</div>
            <div class="c-button c-button--outline c-button--medium is-disabled">Outline Disabled</div>
            <div class="c-button c-button--ghost c-button--medium is-disabled">Ghost Disabled</div>
            <div class="c-button c-button--destructive c-button--medium is-disabled">Destructive Disabled</div>
        </div>

        <pie-divider></pie-divider>

        <h2 class="u-font-heading-l">Full Width</h2>
        <div class="button-group">
            <div class="c-button c-button--primary c-button--medium c-button--fullWidth">Full Width Primary</div>
            <div class="c-button c-button--secondary c-button--medium c-button--fullWidth">Full Width Secondary</div>
        </div>

        <pie-divider></pie-divider>

        <h2 class="u-font-heading-l">Truncated</h2>
        <div class="button-group">
            <div style="max-width: 200px;">
                <div class="c-button c-button--primary c-button--medium c-button--fullWidth c-button--truncate">
                    <span>This label is too long and will be truncated with an ellipsis</span>
                </div>
            </div>
        </div>

        <pie-divider></pie-divider>

        <h2 class="u-font-heading-l">Icons</h2>
        <div class="button-group">
            <div class="c-button c-button--primary c-button--medium">
                <icon-plus-circle></icon-plus-circle>
                Leading icon
            </div>
            <div class="c-button c-button--primary c-button--medium">
                Trailing icon
                <icon-plus-circle></icon-plus-circle>
            </div>
        </div>

        <pie-divider></pie-divider>

        <h2 class="u-font-heading-l">Responsive</h2>
        <div class="button-group">
            <div class="c-button c-button--primary c-button--xsmall c-button--responsive">Responsive</div>
            <div class="c-button c-button--primary c-button--xsmall c-button--responsive c-button--expressive">Responsive Expressive</div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { definePageMeta } from "#imports";
import '@justeattakeaway/pie-css/dist/components/button.css';
import '@justeattakeaway/pie-webc/components/divider.js';
import '@justeattakeaway/pie-icons-webc/dist/IconPlusCircle.js';

definePageMeta({
    title: 'CSS Only Button',
});
</script>

<style scoped>
.button-examples {
    max-width: 500px;
    font-family: var(--dt-font-family-primary);
}

.button-group {
    display: flex;
    flex-wrap: wrap;
    gap: var(--dt-spacing-d);
    align-items: center;
}

.button-group--inverse {
    background-color: var(--dt-color-interactive-brand);
    padding: var(--dt-spacing-d);
    border-radius: var(--dt-radius-rounded-c);
}
</style>
