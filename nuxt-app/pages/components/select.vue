<template>
        <pie-select>
            <pie-option-group label="Animal">
                <pie-option value="cat">Cat</pie-option>
                <pie-option value="dog">Dog</pie-option>
            </pie-option-group>
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
