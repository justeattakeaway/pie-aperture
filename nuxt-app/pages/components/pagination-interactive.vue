<template>
  <div>
    <section class="c-pagination-interactive">
      <h2>Interactive pagination with mock data</h2>

      <pie-pagination
        data-test-id="interactive-pagination"
        :currentPage="currentPage"
        :totalPages="totalPages"
        :aria="{ label: 'Mock items pages' }"
        @pie-pagination-page-change="handlePageChange">
      </pie-pagination>

      <p data-test-id="pagination-status">Page {{ currentPage }} of {{ totalPages }}</p>

      <ul class="c-pagination-interactive__list" data-test-id="pagination-items">
        <li v-for="item in visibleItems" :key="item.id" data-test-id="pagination-item">{{ item.name }}</li>
      </ul>
    </section>
  </div>
</template>

<script setup lang="ts">
import { definePageMeta } from '#imports';
import { ref, computed } from 'vue';
import '@justeattakeaway/pie-webc/components/pagination.js';

const PAGE_SIZE = 10;
const TOTAL_ITEMS = 100;
const TOTAL_PAGES = Math.ceil(TOTAL_ITEMS / PAGE_SIZE);

// Fake in-memory dataset so the demo does not depend on a backend.
const mockItems = Array.from({ length: TOTAL_ITEMS }, (_, index) => ({
  id: index + 1,
  name: `Item ${index + 1}`,
}));

const currentPage = ref(1);
const totalPages = TOTAL_PAGES;

const visibleItems = computed(() => {
  const startIndex = (currentPage.value - 1) * PAGE_SIZE;
  return mockItems.slice(startIndex, startIndex + PAGE_SIZE);
});

const handlePageChange = (event: CustomEvent) => {
  currentPage.value = event.detail.currentPage;
};

definePageMeta({
  title: 'Pagination (Interactive)',
});
</script>

<style>
.c-pagination-interactive {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--dt-spacing-b);
  margin-block-end: var(--dt-spacing-e);
}

.c-pagination-interactive__list {
  display: flex;
  flex-direction: column;
  gap: var(--dt-spacing-b);
  margin: 0;
  padding: 0;
  list-style: none;
}
</style>
