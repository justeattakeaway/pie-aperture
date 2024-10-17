<template>
  <div>
    <pie-checkbox :checked="checked" @change="handleCheckboxChange">
      {{ `checked: ${checked}` }}
    </pie-checkbox>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { definePageMeta } from '#imports';
import '@justeattakeaway/pie-webc/components/checkbox.js';

definePageMeta({
    title: 'Checkbox',
});

let checked = ref(false);

function handleCheckboxChange() {
  checked.value = !checked.value;
}

</script>
