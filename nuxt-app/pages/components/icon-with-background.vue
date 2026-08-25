<template>
  <div>
    <h2 class="c-icon-with-background-heading">PIE Icon With Background - Default</h2>
    <div class="c-icon-with-background-container">
      <div class="c-icon-with-background-item">
        <pie-icon-with-background data-test-id="default"></pie-icon-with-background>
        <span class="c-icon-with-background-label">default</span>
      </div>
      <div class="c-icon-with-background-item">
        <pie-icon-with-background data-test-id="with-icon">
          <icon-close></icon-close>
        </pie-icon-with-background>
        <span class="c-icon-with-background-label">with icon</span>
      </div>
    </div>

    <h2 class="c-icon-with-background-heading">PIE Icon With Background - Shapes</h2>
    <div class="c-icon-with-background-container">
      <div class="c-icon-with-background-item">
        <pie-icon-with-background data-test-id="shape-circle" shape="circle"><icon-close></icon-close></pie-icon-with-background>
        <span class="c-icon-with-background-label">circle</span>
      </div>
      <div class="c-icon-with-background-item">
        <pie-icon-with-background data-test-id="shape-square" shape="square"><icon-close></icon-close></pie-icon-with-background>
        <span class="c-icon-with-background-label">square</span>
      </div>
    </div>

    <h2 class="c-icon-with-background-heading">PIE Icon With Background - Sizes</h2>
    <div class="c-icon-with-background-container">
      <div class="c-icon-with-background-item">
        <pie-icon-with-background data-test-id="size-small" size="small"><icon-close></icon-close></pie-icon-with-background>
        <span class="c-icon-with-background-label">small</span>
      </div>
      <div class="c-icon-with-background-item">
        <pie-icon-with-background data-test-id="size-medium" size="medium"><icon-close></icon-close></pie-icon-with-background>
        <span class="c-icon-with-background-label">medium</span>
      </div>
      <div class="c-icon-with-background-item">
        <pie-icon-with-background data-test-id="size-large" size="large"><icon-close></icon-close></pie-icon-with-background>
        <span class="c-icon-with-background-label">large</span>
      </div>
      <div class="c-icon-with-background-item">
        <pie-icon-with-background data-test-id="size-xlarge" size="xlarge"><icon-close></icon-close></pie-icon-with-background>
        <span class="c-icon-with-background-label">xlarge</span>
      </div>
    </div>

    <h2 class="c-icon-with-background-heading">PIE Icon With Background - Variants</h2>
    <div class="c-icon-with-background-container">
      <div class="c-icon-with-background-item">
        <pie-icon-with-background data-test-id="variant-neutral" variant="neutral"><icon-close></icon-close></pie-icon-with-background>
        <span class="c-icon-with-background-label">neutral</span>
      </div>
      <div class="c-icon-with-background-item">
        <pie-icon-with-background data-test-id="variant-neutral-alt" variant="neutral-alternative"><icon-close></icon-close></pie-icon-with-background>
        <span class="c-icon-with-background-label">neutral-alt</span>
      </div>
      <div class="c-icon-with-background-item">
        <pie-icon-with-background data-test-id="variant-information" variant="information"><icon-close></icon-close></pie-icon-with-background>
        <span class="c-icon-with-background-label">information</span>
      </div>
      <div class="c-icon-with-background-item">
        <pie-icon-with-background data-test-id="variant-success" variant="success"><icon-close></icon-close></pie-icon-with-background>
        <span class="c-icon-with-background-label">success</span>
      </div>
      <div class="c-icon-with-background-item">
        <pie-icon-with-background data-test-id="variant-error" variant="error"><icon-close></icon-close></pie-icon-with-background>
        <span class="c-icon-with-background-label">error</span>
      </div>
      <div class="c-icon-with-background-item">
        <pie-icon-with-background data-test-id="variant-warning" variant="warning"><icon-close></icon-close></pie-icon-with-background>
        <span class="c-icon-with-background-label">warning</span>
      </div>
      <div class="c-icon-with-background-item">
        <pie-icon-with-background data-test-id="variant-brand-02" variant="brand-02"><icon-close></icon-close></pie-icon-with-background>
        <span class="c-icon-with-background-label">brand-02</span>
      </div>
      <div class="c-icon-with-background-item">
        <pie-icon-with-background data-test-id="variant-brand-03" variant="brand-03"><icon-close></icon-close></pie-icon-with-background>
        <span class="c-icon-with-background-label">brand-03</span>
      </div>
      <div class="c-icon-with-background-item">
        <pie-icon-with-background data-test-id="variant-brand-04" variant="brand-04"><icon-close></icon-close></pie-icon-with-background>
        <span class="c-icon-with-background-label">brand-04</span>
      </div>
      <div class="c-icon-with-background-item">
        <pie-icon-with-background data-test-id="variant-brand-05" variant="brand-05"><icon-close></icon-close></pie-icon-with-background>
        <span class="c-icon-with-background-label">brand-05</span>
      </div>
      <div class="c-icon-with-background-item">
        <pie-icon-with-background data-test-id="variant-brand-06" variant="brand-06"><icon-close></icon-close></pie-icon-with-background>
        <span class="c-icon-with-background-label">brand-06</span>
      </div>
      <div class="c-icon-with-background-item">
        <pie-icon-with-background data-test-id="variant-brand-08" variant="brand-08"><icon-close></icon-close></pie-icon-with-background>
        <span class="c-icon-with-background-label">brand-08</span>
      </div>
    </div>

    <h2 class="c-icon-with-background-heading">PIE Icon With Background - isStrong</h2>
    <div class="c-icon-with-background-container">
      <div class="c-icon-with-background-item">
        <pie-icon-with-background data-test-id="is-strong" variant="neutral" :isStrong="true"><icon-close></icon-close></pie-icon-with-background>
        <span class="c-icon-with-background-label">neutral isStrong</span>
      </div>
      <div class="c-icon-with-background-item">
        <pie-icon-with-background data-test-id="is-strong-neutral-alt" variant="neutral-alternative" :isStrong="true"><icon-close></icon-close></pie-icon-with-background>
        <span class="c-icon-with-background-label">neutral-alt isStrong</span>
      </div>
      <div class="c-icon-with-background-item">
        <pie-icon-with-background data-test-id="is-strong-success" variant="success" :isStrong="true"><icon-close></icon-close></pie-icon-with-background>
        <span class="c-icon-with-background-label">success isStrong</span>
      </div>
      <div class="c-icon-with-background-item">
        <pie-icon-with-background data-test-id="is-strong-error" variant="error" :isStrong="true"><icon-close></icon-close></pie-icon-with-background>
        <span class="c-icon-with-background-label">error isStrong</span>
      </div>
    </div>

    <h2 class="c-icon-with-background-heading">PIE Icon With Background - isDimmed</h2>
    <div class="c-icon-with-background-container">
      <div class="c-icon-with-background-item">
        <pie-icon-with-background data-test-id="is-dimmed-neutral" variant="neutral" :isDimmed="true"><icon-close></icon-close></pie-icon-with-background>
        <span class="c-icon-with-background-label">neutral isDimmed</span>
      </div>
      <div class="c-icon-with-background-item">
        <pie-icon-with-background data-test-id="is-dimmed-success" variant="success" :isDimmed="true"><icon-close></icon-close></pie-icon-with-background>
        <span class="c-icon-with-background-label">success isDimmed</span>
      </div>
      <div class="c-icon-with-background-item">
        <pie-icon-with-background data-test-id="is-dimmed-error" variant="error" :isDimmed="true"><icon-close></icon-close></pie-icon-with-background>
        <span class="c-icon-with-background-label">error isDimmed</span>
      </div>
      <div class="c-icon-with-background-item">
        <pie-icon-with-background data-test-id="is-dimmed-information" variant="information" :isDimmed="true"><icon-close></icon-close></pie-icon-with-background>
        <span class="c-icon-with-background-label">information isDimmed</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { definePageMeta } from '#imports';
import '@justeattakeaway/pie-webc/components/icon-with-background.js';
import '@justeattakeaway/pie-icons-webc/dist/IconClose.js';

definePageMeta({
    title: 'Icon With Background',
});
</script>

<style>
.c-icon-with-background-heading {
  padding: var(--dt-spacing-b) 0;
}

.c-icon-with-background-container {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  gap: var(--dt-spacing-d);
  padding: var(--dt-spacing-b) 0;
}

.c-icon-with-background-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--dt-spacing-a);
}

.c-icon-with-background-label {
  font-size: calc(var(--dt-font-size-12) * 1px);
}
</style>
