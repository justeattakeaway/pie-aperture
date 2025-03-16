<template>
        <pie-select>
            <pie-option-group>Animal</pie-option-group>
            <pie-option value="cat">Cat</pie-option>
        </pie-select>
</template>

<script setup lang="ts">
import { definePageMeta } from '#imports';
import '@justeattakeaway/pie-webc/components/select.js';
import '@justeattakeaway/pie-webc/components/option.js';
import '@justeattakeaway/pie-webc/components/option-group.js';

definePageMeta({
    title: 'Select',
});

</script>
