<template>
    <div class="p-8">
        <form @submit.prevent="handleFormSubmit" @reset="handleFormReset">
            <!-- Original Non-Headless Component -->
            <h2 class="text-2xl font-bold mb-4">Original Radio Group</h2>
            <div class="card mb-8">
                <pie-radio-group name="favouriteTakeaway" @change="favouriteTakeaway = $event.target.value">
                    <pie-form-label>
                    Your favourite takeaway is: {{ favouriteTakeaway || 'not selected' }}
                    </pie-form-label>
                    <pie-radio
                        value="chinese">
                        Chinese
                    </pie-radio>
                    <pie-radio
                        value="shawarma">
                        Shawarma
                    </pie-radio>
                    <pie-radio
                        value="pizza">
                        Pizza
                    </pie-radio>
                </pie-radio-group>
            </div>

            <pie-button class="my-8">Some focusable element</pie-button>

            <hr class="my-16 border-t border-gray-200">

            <!-- New Headless Component Demos -->
            <h2 class="text-2xl font-bold mb-4">New Headless Radio Group Demos</h2>

            <!-- Demo 1: Vertical Layout -->
            <div class="card mb-8">
                <h3 class="text-xl font-semibold mb-2">Standard Layout (Vertical)</h3>
                <p class="text-gray-600 mb-4">A standard implementation with custom-styled radio indicators. Selected size: <strong class="text-blue-600">{{ selectedSize || 'none' }}</strong></p>
                <pie-headless-radio-group
                    name="size"
                    label="T-shirt Size"
                    :value="selectedSize"
                    @change="selectedSize = $event.target.value"
                    class="vertical-group">
                    <pie-headless-radio-button value="s">
                        <span class="radio-label">
                            <span class="custom-radio-indicator"></span>
                            Small
                        </span>
                    </pie-headless-radio-button>
                    <pie-headless-radio-button value="m">
                        <span class="radio-label">
                            <span class="custom-radio-indicator"></span>
                            Medium
                        </span>
                    </pie-headless-radio-button>
                    <pie-headless-radio-button value="l">
                        <span class="radio-label">
                            <span class="custom-radio-indicator"></span>
                            Large
                        </span>
                    </pie-headless-radio-button>
                    <pie-headless-radio-button value="xl" disabled>
                        <span class="radio-label">
                            <span class="custom-radio-indicator"></span>
                            X-Large (out of stock)
                        </span>
                    </pie-headless-radio-button>
                </pie-headless-radio-group>
            </div>

            <!-- Demo 2: Button Group Layout -->
            <div class="card mb-8">
                <h3 class="text-xl font-semibold mb-2">Button Group Layout (Horizontal)</h3>
                <p class="text-gray-600 mb-4">Styled to look like a segmented control. Selected view: <strong class="text-blue-600">{{ selectedView || 'none' }}</strong></p>
                <pie-headless-radio-group
                    name="view"
                    label="View Mode"
                    :value="selectedView"
                    @change="selectedView = $event.target.value"
                    class="button-group">
                    <pie-headless-radio-button value="list">
                        <span class="button-label">List</span>
                    </pie-headless-radio-button>
                    <pie-headless-radio-button value="grid">
                        <span class="button-label">Grid</span>
                    </pie-headless-radio-button>
                    <pie-headless-radio-button value="map">
                        <span class="button-label">Map</span>
                    </pie-headless-radio-button>
                </pie-headless-radio-group>
            </div>

            <!-- Demo 3: Card Layout -->
            <div class="card mb-8">
                 <h3 class="text-xl font-semibold mb-2">Card Layout</h3>
                 <p class="text-gray-600 mb-4">A complex layout where each option is a selectable card. Selected plan: <strong class="text-blue-600">{{ selectedPlan || 'none' }}</strong></p>
                 <pie-headless-radio-group
                    name="plan"
                    label="Subscription Plan"
                    :value="selectedPlan"
                    @change="selectedPlan = $event.target.value"
                    class="vertical-group">
                    <pie-headless-radio-button value="startup">
                        <div class="card-radio-label">
                            <span class="custom-radio-indicator"></span>
                            <div class="content">
                                <h4>Startup</h4>
                                <p>A plan that scales with your rapidly growing business.</p>
                            </div>
                            <span class="price">$25</span>
                        </div>
                    </pie-headless-radio-button>
                    <pie-headless-radio-button value="business">
                        <div class="card-radio-label">
                            <span class="custom-radio-indicator"></span>
                            <div class="content">
                                <h4>Business</h4>
                                <p>A plan that sets your business up for success.</p>
                            </div>
                            <span class="price">$50</span>
                        </div>
                    </pie-headless-radio-button>
                </pie-headless-radio-group>
            </div>

            <div class="form-actions mt-8">
                <pie-button type="submit">Submit</pie-button>
                <pie-button type="reset" variant="secondary" class="ml-4">Reset</pie-button>
            </div>

            <pre v-if="submittedData" class="form-output">{{ submittedData }}</pre>
        </form>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { definePageMeta } from '#imports';
import '@justeattakeaway/pie-webc/components/radio.js';
import '@justeattakeaway/pie-webc/components/radio-group.js';
import '@justeattakeaway/pie-webc/components/form-label.js';
import '@justeattakeaway/pie-webc/components/button.js';
import '@justeattakeaway/pie-headless-radio-group';

definePageMeta({
    title: 'Radio Group',
});

// State for original radio group
const favouriteTakeaway = ref('');

// State for new headless radio group demos
const selectedSize = ref('m');
const selectedView = ref('grid');
const selectedPlan = ref('startup');
const submittedData = ref('');

const handleFormSubmit = (event: Event) => {
    const formData = new FormData(event.target as HTMLFormElement);
    const data: { [key: string]: any } = {};
    formData.forEach((value, key) => { data[key] = value; });
    submittedData.value = JSON.stringify(data, null, 2);
};

const handleFormReset = () => {
    favouriteTakeaway.value = '';
    selectedSize.value = 'm';
    selectedView.value = 'grid';
    selectedPlan.value = 'startup';
    submittedData.value = '';
};

</script>

<style>
/* Scoped styles would not work on slotted web component content, so we use a global style block. */
/* Using a parent class to avoid conflicts if possible. */
.p-8 {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    color: #1a202c;
}

.card {
    background-color: white;
    padding: 1.5rem;
    border-radius: 0.5rem;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    max-width: 500px;
}

/* Base styles for labels and indicators */
.radio-label, .button-label, .card-radio-label {
    cursor: pointer;
    transition: all 0.2s ease-in-out;
}

pie-headless-radio-button[disabled] .radio-label,
pie-headless-radio-button[disabled] .button-label,
pie-headless-radio-button[disabled] .card-radio-label {
    opacity: 0.5;
    cursor: not-allowed;
    background-color: #edf2f7;
}

pie-headless-radio-button:not([disabled]):focus-within {
    outline: 2px solid #4299e1;
    outline-offset: 2px;
    border-radius: 4px;
}

/* Vertical Layout */
.vertical-group pie-headless-radio-button:not(:last-child) {
    display: block;
    margin-bottom: 0.5rem;
}

.radio-label {
    display: flex;
    align-items: center;
    padding: 0.75rem 1rem;
    border: 2px solid #e2e8f0;
    border-radius: 0.375rem;
    gap: 0.75rem;
}

pie-headless-radio-button[checked] .radio-label {
    border-color: #3182ce;
    background-color: #ebf8ff;
}

.custom-radio-indicator {
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 50%;
    border: 2px solid #cbd5e0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
}

.custom-radio-indicator::after {
    content: '';
    display: block;
    width: 0.75rem;
    height: 0.75rem;
    border-radius: 50%;
    background-color: #3182ce;
    transform: scale(0);
    transition: transform 0.15s ease-in-out;
}

pie-headless-radio-button[checked] .custom-radio-indicator {
    border-color: #3182ce;
}

pie-headless-radio-button[checked] .custom-radio-indicator::after {
    transform: scale(1);
}

/* Button Group Layout */
.button-group {
    display: flex;
    width: fit-content;
    align-items: start;
}

.button-group pie-headless-radio-button:not(:first-child) {
    margin-left: -1px;
}

.button-group .button-label {
    padding: 0.75rem 1rem;
    text-align: center;
    background-color: #fff;
    border: 1px solid #cbd5e0;
}

.button-group pie-headless-radio-button:first-child .button-label {
    border-top-left-radius: 0.375rem;
    border-bottom-left-radius: 0.375rem;
}

.button-group pie-headless-radio-button:last-child .button-label {
    border-top-right-radius: 0.375rem;
    border-bottom-right-radius: 0.375rem;
}

.button-group pie-headless-radio-button[checked] .button-label {
    background-color: #3182ce;
    color: white;
    border-color: #3182ce;
    z-index: 2;
}

/* Card Layout */
.card-radio-label {
    display: flex;
    padding: 1rem;
    border: 2px solid #e2e8f0;
    border-radius: 0.5rem;
    gap: 1rem;
    align-items: flex-start;
}

pie-headless-radio-button[checked] .card-radio-label {
    border-color: #3182ce;
    background-color: #ebf8ff;
}

.card-radio-label .content {
    flex-grow: 1;
}

.card-radio-label h4 {
    margin: 0 0 0.25rem 0;
    color: #2d3748;
    font-weight: 600;
}

.card-radio-label p {
    margin: 0;
    color: #718096;
    font-size: 0.875rem;
}

.card-radio-label .price {
    font-weight: 600;
    color: #2d3748;
}

.form-output {
    margin-top: 1.5rem;
    background-color: #f7fafc;
    border: 1px solid #e2e8f0;
    padding: 1rem;
    border-radius: 0.375rem;
    white-space: pre-wrap;
    max-width: 500px;
}
</style>

