<template>
    <div>
        <pie-radio-group name="favouriteTakeaway" @change="favouriteTakeaway = $event.target.value">
            <pie-form-label>
            Your favourite takeaway is: {{ favouriteTakeaway }}
            </pie-form-label>
            <pie-radio
                value="chinese">
                Chinese
            </pie-radio>
            <pie-radio
                value="gyros"
                disabled>
                Gyros
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
        
        <pie-button>Some focusable element</pie-button>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { definePageMeta } from '#imports';
import '@justeattakeaway/pie-webc/components/radio.js';
import '@justeattakeaway/pie-webc/components/radio-group.js';
import '@justeattakeaway/pie-webc/components/form-label.js';
import '@justeattakeaway/pie-webc/components/button.js';

definePageMeta({
    title: 'Radio Group',
});

const favouriteTakeaway = ref('');
</script>
