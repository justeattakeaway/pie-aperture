<template>
  <div>
    <pie-card>
      <h2>Default Card</h2>
      <p>Lorem ipsum dolor sit amet
        consectetur adipisicing elit.
        Fugiat dolore dolorem maxime,
        quod, in minima esse fugit
        distinctio, officia et soluta
        dicta consequuntur commodi officiis
        tempora asperiores aspernatur atque quas.</p>
    </pie-card>
  </div>
</template>

<script setup lang="ts">
import '@justeattakeaway/pie-card';
import { definePageMeta } from '#imports';

definePageMeta({
    title: 'PIE Card',
});
</script>
