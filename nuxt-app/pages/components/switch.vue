<template>
  <div>
    <pie-switch id="story-switch" :label="`checked: ${switchStates['story-switch']}`" :checked="switchStates['story-switch']" @change="handleSwitchChange">
    </pie-switch>

    <pie-divider label="External labels"></pie-divider>

    <label class="switch-label" for="external-switch">Toggle via for attribute</label>
    <pie-switch id="external-switch" :checked="switchStates['external-switch']" @change="handleSwitchChange">
    </pie-switch>

    <pie-divider></pie-divider>

    <label style="display: flex; flex-direction: column; gap: 4px;">
      <span class="switch-label">Toggle via wrapping label</span>
      <pie-switch id="wrapping-switch" :checked="switchStates['wrapping-switch']" @change="handleSwitchChange">
      </pie-switch>
    </label>

    <pie-divider></pie-divider>

    <label class="switch-label" for="multi-label-switch">First label</label>
    <label class="switch-label" for="multi-label-switch">Second label</label>
    <pie-switch id="multi-label-switch" :checked="switchStates['multi-label-switch']" @change="handleSwitchChange">
    </pie-switch>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { definePageMeta } from '#imports';
import '@justeattakeaway/pie-webc/components/switch.js';

definePageMeta({
    title: 'Switch',
});

const switchStates = reactive<Record<string, boolean>>({
    'story-switch': false,
    'external-switch': false,
    'wrapping-switch': false,
    'multi-label-switch': false,
});

function handleSwitchChange(event: Event) {
  const switchId = (event.currentTarget as HTMLElement).id;

  switchStates[switchId] = !switchStates[switchId];
}

</script>
