<template>
  <div>
    <section
      v-for="example in examples"
      :key="example.label"
      class="c-pagination-example">
      <h2>{{ example.label }}</h2>
      <pie-pagination
        :currentPage="example.currentPage"
        :totalPages="example.totalPages"
        :disabled="example.disabled">
      </pie-pagination>
    </section>
  </div>
</template>

<script setup lang="ts">
import { definePageMeta } from '#imports';
import '@justeattakeaway/pie-webc/components/pagination.js';

type PaginationExample = {
  label: string;
  currentPage: number;
  totalPages: number;
  disabled?: boolean;
};

const examples: PaginationExample[] = [
  { label: 'Default (page 1 of 5)', currentPage: 1, totalPages: 5 },
  { label: 'Middle page (page 3 of 5)', currentPage: 3, totalPages: 5 },
  { label: 'Last page (page 5 of 5)', currentPage: 5, totalPages: 5 },
  { label: 'Single page (page 1 of 1)', currentPage: 1, totalPages: 1 },
  { label: 'Many pages (page 1 of 20)', currentPage: 1, totalPages: 20 },
  { label: 'Many pages, middle (page 10 of 20)', currentPage: 10, totalPages: 20 },
  { label: 'Many pages, last (page 20 of 20)', currentPage: 20, totalPages: 20 },
  { label: 'Disabled', currentPage: 3, totalPages: 5, disabled: true },
];

definePageMeta({
  title: 'Pagination',
});
</script>

<style>
.c-pagination-example {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--dt-spacing-b);
  margin-block-end: var(--dt-spacing-e);
}
</style>
