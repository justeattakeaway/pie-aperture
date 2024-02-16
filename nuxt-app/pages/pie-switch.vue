<template>
  <div>
    <pie-switch :label="`checked: ${checked}`" :checked="checked" @change="handleSwitchChange">
    </pie-switch>

    <pie-divider></pie-divider>
  </div>
</template>

<script setup lang="ts">
import '@justeattakeaway/pie-switch';
import { ref } from 'vue';
import { definePageMeta } from '#imports';

definePageMeta({
    title: 'PIE Switch',
});

let checked = ref(false);

function handleSwitchChange() {
  checked.value = !checked.value;
}

</script>
