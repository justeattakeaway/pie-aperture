<template>
    <pie-select :options="options"></pie-select>
</template>

<script setup lang="ts">
import { definePageMeta } from '#imports';
import '@justeattakeaway/pie-webc/components/select.js';

definePageMeta({
    title: 'Select',
});

const options = [
    {
        tag: 'optgroup',
        label: 'Animal',
        options: [
            {
                tag: 'option',
                text: 'Cat',
                value: 'cat',
            },
            {
                tag: 'option',
                text: 'Dog',
                value: 'dog',
            },
        ],
    },
];

</script>
