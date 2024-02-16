<template>
  <div>
    <pie-switch :label="`checked: ${checked}`" :checked="checked" @change="handleSwitchChange">
    </pie-switch>

    <pie-divider></pie-divider>
  </div>
</template>

<script setup lang="ts">
import '@justeattakeaway/pie-divider';
import '@justeattakeaway/pie-link';
import '@justeattakeaway/pie-switch';
import { ref } from 'vue';

let checked = ref(false);

function handleSwitchChange() {
  checked.value = !checked.value;
}

</script>
