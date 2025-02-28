<template>
  <div>
    <pie-button @click="setCounter" variant="primary-alternative">
      Counter: {{ counter }}
    </pie-button>

    <pie-divider></pie-divider>

    <h2>PIE Button - with Icon and text</h2>
    <pie-button>
        <icon-search slot="icon"></icon-search>
        Search
    </pie-button>

    <pie-divider></pie-divider>

    <h2>PIE Button - multi-line content</h2>
    <pie-button>
        This button has a long text that will wrap to the next line. It‘s very long
    </pie-button>

    <pie-divider></pie-divider>

    <h2>PIE Button - truncated content</h2>
    <pie-button isFullWidth>
        Thisisawordthatdoesntactuallyexistsothatwecanseehowthecontentistruncated
    </pie-button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { definePageMeta } from '#imports';
import '@justeattakeaway/pie-webc/components/button.js';
import '@justeattakeaway/pie-webc/components/divider.js';
import '@justeattakeaway/pie-icons-webc/dist/IconSearch.js';

definePageMeta({
    title: 'Button',
});

let counter = ref(0);

function setCounter() {
  counter.value++;
}
</script>
