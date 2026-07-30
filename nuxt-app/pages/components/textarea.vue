<template>
    <div>
        <pie-textarea value="foo"></pie-textarea>
        <pie-divider></pie-divider>
        <pie-textarea resize="manual" value="foo"></pie-textarea>
        <pie-divider></pie-divider>
        <pie-form-label :trailing="`${count} / ${maxLength}`">Label</pie-form-label>
        <pie-textarea
            :value="textAreaInput"
            :maxlength="maxLength"
            @input="handleInput"
        ></pie-textarea>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { definePageMeta } from '#imports';
import '@justeattakeaway/pie-webc/components/textarea.js';
import '@justeattakeaway/pie-webc/components/divider.js';
import '@justeattakeaway/pie-webc/components/form-label.js';

definePageMeta({
    title: 'Textarea',
});

const maxLength = 20;
const textAreaInput = ref('');
const count = ref(0);

function handleInput(e: Event) {
    textAreaInput.value = (e.target as HTMLTextAreaElement).value;
    count.value = textAreaInput.value.length;
}
</script>
