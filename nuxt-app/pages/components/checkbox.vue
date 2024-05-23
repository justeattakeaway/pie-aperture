<template>
  <div>
    <pie-checkbox :label="`checked: ${checked}`" :checked="checked" @change="handleCheckboxChange">
    </pie-checkbox>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { definePageMeta } from '#imports';
import '@justeattakeaway/pie-webc/components/checkbox.js';

definePageMeta({
    title: 'PIE Checkbox',
});

let checked = ref(false);

function handleCheckboxChange() {
  checked.value = !checked.value;
}

</script>
