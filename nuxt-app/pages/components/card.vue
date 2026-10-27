<template>
  <div>
    <pie-card
      tag="button"
      padding="c"
      :aria="{
        label: 'View restaurant',
        description: 'Opens the restaurant details',
        haspopup: 'dialog'
      }"
      @click="openModal">
      <div
        data-test-id="slot-content"
        style="font-size: calc(var(--dt-font-body-l-size) * 1px); font-family: var(--dt-font-interactive-l-family);">
        <h2 style="margin-top: 0"> Card title </h2>
        <p style="margin-bottom: 8px"> Card content with an action </p>
        <div style="display: flex; align-items: center; gap: 8px;">
          <pie-icon-button
            data-test-id="card-action"
            variant="ghost-secondary"
            :aria="{ label: isFavourited ? 'Remove from favourites' : 'Add to favourites' }"
            :style="overlayStyle"
            @click="toggleFavourited">
            <icon-heart-filled
              v-if="isFavourited"
              data-test-id="icon-heart-filled"
              style="color: var(--dt-color-content-error);"></icon-heart-filled>
            <icon-heart v-else data-test-id="icon-heart-outline"></icon-heart>
          </pie-icon-button>
          <pie-icon-button
            data-test-id="card-action-capture"
            variant="ghost-secondary"
            :aria="{ label: 'Share restaurant' }"
            :style="overlayStyle"
            @click.capture="shareRestaurant">
            <icon-share data-test-id="icon-share"></icon-share>
          </pie-icon-button>
          <pie-link
            href="https://pie.design"
            target="_blank"
            :style="overlayStyle">
            View menu
          </pie-link>
        </div>
        <p aria-live="polite" data-test-id="share-count" style="margin-bottom: 0;">
          Shared {{ shareCount }} {{ shareCount === 1 ? 'time' : 'times' }}
        </p>
      </div>
    </pie-card>
    <pie-modal
      :isOpen="isModalOpen"
      heading="Restaurant details"
      isDismissible
      @pie-modal-close="closeModal">
      <p>This modal was opened by clicking the card, showing that the card's own click interaction remains independent of the slotted controls.</p>
    </pie-modal>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { definePageMeta } from '#imports';
import '@justeattakeaway/pie-webc/components/card.js';
import '@justeattakeaway/pie-webc/components/icon-button.js';
import '@justeattakeaway/pie-webc/components/link.js';
import '@justeattakeaway/pie-webc/components/modal.js';
import '@justeattakeaway/pie-icons-webc/dist/IconHeart.js';
import '@justeattakeaway/pie-icons-webc/dist/IconHeartFilled.js';
import '@justeattakeaway/pie-icons-webc/dist/IconShare.js';

definePageMeta({
    title: 'Card',
});

const isModalOpen = ref(false);
const isFavourited = ref(false);
const shareCount = ref(0);

const overlayStyle = {
    position: 'relative',
    zIndex: 'calc(var(--card-overlay-z-index) + 1)',
};

function openModal() {
    isModalOpen.value = true;
}

function closeModal() {
    isModalOpen.value = false;
}

function toggleFavourited() {
    isFavourited.value = !isFavourited.value;
}

function shareRestaurant() {
    shareCount.value += 1;
}
</script>
