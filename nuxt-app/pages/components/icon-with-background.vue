<template>
  <div>
    <h2 style="padding: 8px 0;">PIE Icon With Background - Default</h2>
    <div style="display: flex; gap: 16px; align-items: flex-end; flex-wrap: wrap; padding: 8px 0;">
      <div style="display: flex; flex-direction: column; align-items: center; gap: 4px;">
        <pie-icon-with-background data-test-id="default"></pie-icon-with-background>
        <span style="font-size: 12px;">default</span>
      </div>
      <div style="display: flex; flex-direction: column; align-items: center; gap: 4px;">
        <pie-icon-with-background data-test-id="with-icon">
          <icon-close></icon-close>
        </pie-icon-with-background>
        <span style="font-size: 12px;">with icon</span>
      </div>
    </div>

    <h2 style="padding: 8px 0;">PIE Icon With Background - Shapes</h2>
    <div style="display: flex; gap: 16px; align-items: flex-end; flex-wrap: wrap; padding: 8px 0;">
      <div style="display: flex; flex-direction: column; align-items: center; gap: 4px;">
        <pie-icon-with-background data-test-id="shape-circle" shape="circle"><icon-close></icon-close></pie-icon-with-background>
        <span style="font-size: 12px;">circle</span>
      </div>
      <div style="display: flex; flex-direction: column; align-items: center; gap: 4px;">
        <pie-icon-with-background data-test-id="shape-square" shape="square"><icon-close></icon-close></pie-icon-with-background>
        <span style="font-size: 12px;">square</span>
      </div>
    </div>

    <h2 style="padding: 8px 0;">PIE Icon With Background - Sizes</h2>
    <div style="display: flex; gap: 16px; align-items: flex-end; flex-wrap: wrap; padding: 8px 0;">
      <div style="display: flex; flex-direction: column; align-items: center; gap: 4px;">
        <pie-icon-with-background data-test-id="size-small" size="small"><icon-close></icon-close></pie-icon-with-background>
        <span style="font-size: 12px;">small</span>
      </div>
      <div style="display: flex; flex-direction: column; align-items: center; gap: 4px;">
        <pie-icon-with-background data-test-id="size-medium" size="medium"><icon-close></icon-close></pie-icon-with-background>
        <span style="font-size: 12px;">medium</span>
      </div>
      <div style="display: flex; flex-direction: column; align-items: center; gap: 4px;">
        <pie-icon-with-background data-test-id="size-large" size="large"><icon-close></icon-close></pie-icon-with-background>
        <span style="font-size: 12px;">large</span>
      </div>
      <div style="display: flex; flex-direction: column; align-items: center; gap: 4px;">
        <pie-icon-with-background data-test-id="size-xlarge" size="xlarge"><icon-close></icon-close></pie-icon-with-background>
        <span style="font-size: 12px;">xlarge</span>
      </div>
    </div>

    <h2 style="padding: 8px 0;">PIE Icon With Background - Variants</h2>
    <div style="display: flex; gap: 16px; align-items: flex-end; flex-wrap: wrap; padding: 8px 0;">
      <div style="display: flex; flex-direction: column; align-items: center; gap: 4px;">
        <pie-icon-with-background data-test-id="variant-neutral" variant="neutral"><icon-close></icon-close></pie-icon-with-background>
        <span style="font-size: 12px;">neutral</span>
      </div>
      <div style="display: flex; flex-direction: column; align-items: center; gap: 4px;">
        <pie-icon-with-background data-test-id="variant-neutral-alt" variant="neutral-alternative"><icon-close></icon-close></pie-icon-with-background>
        <span style="font-size: 12px;">neutral-alt</span>
      </div>
      <div style="display: flex; flex-direction: column; align-items: center; gap: 4px;">
        <pie-icon-with-background data-test-id="variant-information" variant="information"><icon-close></icon-close></pie-icon-with-background>
        <span style="font-size: 12px;">information</span>
      </div>
      <div style="display: flex; flex-direction: column; align-items: center; gap: 4px;">
        <pie-icon-with-background data-test-id="variant-success" variant="success"><icon-close></icon-close></pie-icon-with-background>
        <span style="font-size: 12px;">success</span>
      </div>
      <div style="display: flex; flex-direction: column; align-items: center; gap: 4px;">
        <pie-icon-with-background data-test-id="variant-error" variant="error"><icon-close></icon-close></pie-icon-with-background>
        <span style="font-size: 12px;">error</span>
      </div>
      <div style="display: flex; flex-direction: column; align-items: center; gap: 4px;">
        <pie-icon-with-background data-test-id="variant-warning" variant="warning"><icon-close></icon-close></pie-icon-with-background>
        <span style="font-size: 12px;">warning</span>
      </div>
      <div style="display: flex; flex-direction: column; align-items: center; gap: 4px;">
        <pie-icon-with-background data-test-id="variant-brand-02" variant="brand-02"><icon-close></icon-close></pie-icon-with-background>
        <span style="font-size: 12px;">brand-02</span>
      </div>
      <div style="display: flex; flex-direction: column; align-items: center; gap: 4px;">
        <pie-icon-with-background data-test-id="variant-brand-03" variant="brand-03"><icon-close></icon-close></pie-icon-with-background>
        <span style="font-size: 12px;">brand-03</span>
      </div>
      <div style="display: flex; flex-direction: column; align-items: center; gap: 4px;">
        <pie-icon-with-background data-test-id="variant-brand-04" variant="brand-04"><icon-close></icon-close></pie-icon-with-background>
        <span style="font-size: 12px;">brand-04</span>
      </div>
      <div style="display: flex; flex-direction: column; align-items: center; gap: 4px;">
        <pie-icon-with-background data-test-id="variant-brand-05" variant="brand-05"><icon-close></icon-close></pie-icon-with-background>
        <span style="font-size: 12px;">brand-05</span>
      </div>
      <div style="display: flex; flex-direction: column; align-items: center; gap: 4px;">
        <pie-icon-with-background data-test-id="variant-brand-06" variant="brand-06"><icon-close></icon-close></pie-icon-with-background>
        <span style="font-size: 12px;">brand-06</span>
      </div>
      <div style="display: flex; flex-direction: column; align-items: center; gap: 4px;">
        <pie-icon-with-background data-test-id="variant-brand-08" variant="brand-08"><icon-close></icon-close></pie-icon-with-background>
        <span style="font-size: 12px;">brand-08</span>
      </div>
    </div>

    <h2 style="padding: 8px 0;">PIE Icon With Background - isStrong</h2>
    <div style="display: flex; gap: 16px; align-items: flex-end; flex-wrap: wrap; padding: 8px 0;">
      <div style="display: flex; flex-direction: column; align-items: center; gap: 4px;">
        <pie-icon-with-background data-test-id="is-strong" variant="neutral" :isStrong="true"><icon-close></icon-close></pie-icon-with-background>
        <span style="font-size: 12px;">neutral isStrong</span>
      </div>
      <div style="display: flex; flex-direction: column; align-items: center; gap: 4px;">
        <pie-icon-with-background data-test-id="is-strong-neutral-alt" variant="neutral-alternative" :isStrong="true"><icon-close></icon-close></pie-icon-with-background>
        <span style="font-size: 12px;">neutral-alt isStrong</span>
      </div>
      <div style="display: flex; flex-direction: column; align-items: center; gap: 4px;">
        <pie-icon-with-background data-test-id="is-strong-success" variant="success" :isStrong="true"><icon-close></icon-close></pie-icon-with-background>
        <span style="font-size: 12px;">success isStrong</span>
      </div>
      <div style="display: flex; flex-direction: column; align-items: center; gap: 4px;">
        <pie-icon-with-background data-test-id="is-strong-error" variant="error" :isStrong="true"><icon-close></icon-close></pie-icon-with-background>
        <span style="font-size: 12px;">error isStrong</span>
      </div>
    </div>

    <h2 style="padding: 8px 0;">PIE Icon With Background - isDimmed</h2>
    <div style="display: flex; gap: 16px; align-items: flex-end; flex-wrap: wrap; padding: 8px 0;">
      <div style="display: flex; flex-direction: column; align-items: center; gap: 4px;">
        <pie-icon-with-background data-test-id="is-dimmed-neutral" variant="neutral" :isDimmed="true"><icon-close></icon-close></pie-icon-with-background>
        <span style="font-size: 12px;">neutral isDimmed</span>
      </div>
      <div style="display: flex; flex-direction: column; align-items: center; gap: 4px;">
        <pie-icon-with-background data-test-id="is-dimmed-success" variant="success" :isDimmed="true"><icon-close></icon-close></pie-icon-with-background>
        <span style="font-size: 12px;">success isDimmed</span>
      </div>
      <div style="display: flex; flex-direction: column; align-items: center; gap: 4px;">
        <pie-icon-with-background data-test-id="is-dimmed-error" variant="error" :isDimmed="true"><icon-close></icon-close></pie-icon-with-background>
        <span style="font-size: 12px;">error isDimmed</span>
      </div>
      <div style="display: flex; flex-direction: column; align-items: center; gap: 4px;">
        <pie-icon-with-background data-test-id="is-dimmed-information" variant="information" :isDimmed="true"><icon-close></icon-close></pie-icon-with-background>
        <span style="font-size: 12px;">information isDimmed</span>
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
