<template>
  <div>
    <h2>Single interaction</h2>
    <pie-card
      data-test-id="single-interaction-card"
      tag="button"
      padding="a"
      :aria="{
        label: 'View card details',
        description: 'Opens the card details',
        haspopup: 'dialog'
      }"
      @click="openDefaultModal">
      <h2 style="margin-top: 0">Default Card</h2>
      <p style="margin-bottom: 0">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Fugiat dolore dolorem maxime, quod, in minima esse fugit
        distinctio, officia et soluta dicta consequuntur commodi
        officiis tempora asperiores aspernatur atque quas.
      </p>
    </pie-card>

    <h2>Slotted controls</h2>
    <pie-card
      data-test-id="slotted-controls-card"
      tag="button"
      padding="c"
      :aria="{
        label: 'View restaurant',
        description: 'Opens the restaurant details',
        haspopup: 'dialog'
      }"
      @click="openRestaurantModal">
      <div
        data-test-id="slot-content"
        style="font-size: calc(var(--dt-font-body-l-size) * 1px); font-family: var(--dt-font-interactive-l-family);">
        <h2 style="margin-top: 0"> Card title </h2>
        <p style="margin-bottom: var(--dt-spacing-b)"> Card content with an action </p>
        <div style="display: flex; align-items: center; gap: var(--dt-spacing-b);">
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
          <pie-link
            href="https://pie.design"
            target="_blank"
            :style="overlayStyle"
            @click="stopPropagation">
            View menu
          </pie-link>
        </div>
      </div>
    </pie-card>

    <pie-modal
      data-test-id="card-details-modal"
      :isOpen="isDefaultModalOpen"
      heading="Card details"
      isDismissible
      @pie-modal-close="isDefaultModalOpen = false">
      <p>This modal was opened by a single interaction card, where the whole card is one click target.</p>
    </pie-modal>
    <pie-modal
      data-test-id="restaurant-modal"
      :isOpen="isRestaurantModalOpen"
      heading="Restaurant details"
      isDismissible
      @pie-modal-close="isRestaurantModalOpen = false">
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

definePageMeta({
    title: 'Card',
});

const isDefaultModalOpen = ref(false);
const isRestaurantModalOpen = ref(false);
const isFavourited = ref(false);

const overlayStyle = {
    position: 'relative',
    zIndex: 'calc(var(--card-overlay-z-index) + 1)',
};

function openDefaultModal() {
    isDefaultModalOpen.value = true;
}

function openRestaurantModal() {
    isRestaurantModalOpen.value = true;
}

function toggleFavourited(event: Event) {
    // Slotted children must stop propagation so their clicks do not also trigger the card interaction.
    event.stopPropagation();
    isFavourited.value = !isFavourited.value;
}

function stopPropagation(event: Event) {
    event.stopPropagation();
}
</script>
