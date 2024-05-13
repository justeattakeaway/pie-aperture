<template>
  <div>
    <pie-switch :label="`checked: ${checked}`" :checked="checked" @change="handleSwitchChange">
    </pie-switch>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { definePageMeta } from '#imports';
import '@justeattakeaway/pie-webc/components/switch.js';

definePageMeta({
    title: 'PIE Switch',
});

let checked = ref(false);

function handleSwitchChange() {
  checked.value = !checked.value;
}

</script>
