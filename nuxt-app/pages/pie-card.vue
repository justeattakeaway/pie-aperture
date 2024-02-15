<template>
  <h1>Nuxt - PIE Card</h1>

  <pie-link href="/">Home Page</pie-link>

  <pie-divider></pie-divider>
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
  <pie-divider></pie-divider>
</template>

<script setup lang="ts">
  import '@justeattakeaway/pie-card';
  import '@justeattakeaway/pie-divider';
  import '@justeattakeaway/pie-link';
</script>
