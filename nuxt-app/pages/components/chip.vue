<template>
  <div style="display: flex; flex-direction: column; gap: 16px;">
    <!-- Default Chip Variants -->
    <section>
      <h2 style="font-size: 1.25rem; font-weight: bold; margin-bottom: 8px;">Variants</h2>
      <div style="display: flex; align-items: center; gap: 16px; flex-wrap: wrap;">
        <pie-chip>PIE Chip Default</pie-chip>
        <pie-chip variant="outline">PIE Chip Outline</pie-chip>
        <pie-chip variant="ghost">PIE Chip Ghost</pie-chip>
        <pie-chip isLoading>PIE Chip Ghost</pie-chip>
        <pie-chip isSelected isDismissible @close="logClose">Close me</pie-chip>
      </div>
    </section>

    <pie-divider />

    <!-- Interactive Checkbox Group Example -->
    <section>
        <h2 style="font-size: 1.25rem; font-weight: bold; margin-bottom: 8px;">Checkbox Group (Multi-select)</h2>
        <fieldset style="border: none; padding: 0;">
            <legend style="padding-bottom: 8px; font-weight: bold;">Select your interests</legend>
            <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                <pie-chip
                    v-for="chip in checkboxChips"
                    :key="chip.id"
                    type="checkbox"
                    :isSelected="chip.isSelected"
                    :disabled="chip.disabled"
                    @change="handleCheckboxChange(chip.id)">
                    <icon-heart-filled v-if="chip.hasIcon" slot="icon" />
                    {{ chip.label }}
                </pie-chip>
            </div>
        </fieldset>
    </section>

    <pie-divider />

    <!-- Interactive Button Group Example -->
    <section>
        <h2 style="font-size: 1.25rem; font-weight: bold; margin-bottom: 8px;">Button Group (Single-select)</h2>
        <div style="display: flex; flex-wrap: wrap; gap: 8px;">
            <pie-chip
                v-for="chip in buttonChipsData"
                :key="chip.id"
                type="button"
                :isSelected="selectedButtonId === chip.id"
                :disabled="chip.disabled"
                @click="handleButtonClick(chip.id)">
                <icon-heart-filled v-if="chip.hasIcon" slot="icon" />
                {{ chip.label }}
            </pie-chip>
        </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { definePageMeta } from '#imports';
import '@justeattakeaway/pie-webc/components/chip.js';
import '@justeattakeaway/pie-webc/components/divider.js';
import '@justeattakeaway/pie-icons-webc/dist/IconHeartFilled.js';

definePageMeta({
    title: 'Chip',
});

// State for the multi-select checkbox group
const checkboxChips = ref([
    { id: 'c1', label: 'Chip 1', isSelected: false, hasIcon: false },
    { id: 'c2', label: 'Chip 2', isSelected: true, hasIcon: false },
    { id: 'c3', label: 'Chip 3 (Disabled)', isSelected: false, hasIcon: false, disabled: true },
    { id: 'c4', label: 'Chip 4 (Disabled and Selected)', isSelected: true, hasIcon: false, disabled: true },
    { id: 'c5', label: 'Chip 5', isSelected: false, hasIcon: true },
    { id: 'c6', label: 'Chip 6', isSelected: true, hasIcon: true },
]);

// Data for the single-select button group (state is managed by selectedButtonId)
const buttonChipsData = [
    { id: 'b1', label: 'Chip 1', hasIcon: false },
    { id: 'b2', label: 'Chip 2', hasIcon: false },
    { id: 'b3', label: 'Chip 3 (Disabled)', hasIcon: false, disabled: true },
    { id: 'b4', label: 'Chip 4', hasIcon: true },
    { id: 'b5', label: 'Chip 5', hasIcon: true },
];

// State for the single-select button group
const selectedButtonId = ref<string | null>('b2');

/**
 * Handles the state change for the multi-select checkbox group.
 */
const handleCheckboxChange = (chipIdToToggle: string) => {
    const chip = checkboxChips.value.find(c => c.id === chipIdToToggle);
    if (chip) {
        chip.isSelected = !chip.isSelected;
        console.log(`Checkbox chip with id "${chipIdToToggle}" was changed.`);
    }
};

/**
 * Handles the state change for the single-select button group.
 */
const handleButtonClick = (chipIdToSelect: string) => {
    selectedButtonId.value = selectedButtonId.value === chipIdToSelect ? null : chipIdToSelect;
    console.log(`Button chip with id "${chipIdToSelect}" was clicked. New selection: ${selectedButtonId.value}`);
};

const logClose = () => {
    console.log('Dismissible chip closed!');
};
</script>
