<template>
  <div>
    <h3>Customised Tag using CSS parts</h3>
    <div class="c-tag-container c-tag-container--dark">
      <pie-tag class="custom-style custom-1">
          <icon-offer-filled slot="icon"></icon-offer-filled>
          <span>Label 1</span>
      </pie-tag>
    </div>
  </div>
</template>

<script setup lang="ts">
import { definePageMeta } from '#imports';
import '@justeattakeaway/pie-webc/components/tag.js';
import '@justeattakeaway/pie-webc/components/divider.js';
import '@justeattakeaway/pie-icons-webc/dist/IconOfferFilled.js';

definePageMeta({
    title: 'Tag',
});
</script>

<style>
.c-tag-container {
  display: flex;
  flex-wrap: wrap;
  gap: var(--dt-spacing-b);
}

.c-tag-container--dark {
  padding: var(--dt-spacing-b);
  background-color: var(--dt-color-container-dark);
}

pie-tag.custom-style {
    display: inline-flex;
}
pie-tag.custom-style::part(body) {
    all: initial;
    font-family: inherit;
    box-sizing: border-box;
    text-rendering: inherit;
    -webkit-font-smoothing: inherit;

    --custom-tag-whitespace: var(--dt-spacing-a);

    display: flex;
    align-items: center;
    gap: var(--custom-tag-whitespace);
    border-radius: var(--dt-radius-rounded-e);
    padding-inline-start: 0;
    padding-inline-end: var(--custom-tag-whitespace);
    padding-block: 0;
    font-size: calc(var(--dt-font-size-12) * 1px);
    font-variant-numeric: lining-nums tabular-nums;
    font-feature-settings: 'liga' off, 'clig' off;
    line-height: 1;
}
pie-tag.custom-style::part(icon) {
    all: initial;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    border-radius: 50%;
    aspect-ratio: 1/1;
}
pie-tag.custom-style .c-pieIcon {
    margin-inline-end: 0;
}
pie-tag.custom-1::part(body){
    color: var(--dt-color-white);
}
pie-tag.custom-1::part(icon) {
    --icon-size-override: 14px;

    color: var(--dt-color-content-dark-solid);
    background-color: var(--dt-color-support-brand-05);
    padding: 3px;
}
pie-tag.custom-1::part(body) {
    font-weight: var(--dt-font-weight-bold);
}
</style>