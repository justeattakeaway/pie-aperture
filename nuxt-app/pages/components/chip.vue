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
        <pie-chip isSelected isDismissible>Close me</pie-chip>
      </div>
    </section>

    <pie-divider></pie-divider>

    <!-- Checkbox Group Example -->
    <section>
        <h2 style="font-size: 1.25rem; font-weight: bold; margin-bottom: 8px;">Checkbox Group</h2>
        <fieldset style="border: none; padding: 0;">
            <legend style="padding-bottom: 8px; font-weight: bold;">Select your interests</legend>
            <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                <pie-chip type="checkbox" @change="selectAction">Chip 1</pie-chip>
                <pie-chip type="checkbox" isSelected @change="selectAction">Chip 2</pie-chip>
                <pie-chip type="checkbox" disabled @change="selectAction">Chip 3 (Disabled)</pie-chip>
                <pie-chip type="checkbox" disabled isSelected @change="selectAction">Chip 4 (Disabled and Selected)</pie-chip>
                <pie-chip type="checkbox" @change="selectAction">
                    <icon-heart-filled slot="icon"></icon-heart-filled>
                    Chip 5
                </pie-chip>
                <pie-chip type="checkbox" isSelected @change="selectAction">
                    <icon-heart-filled slot="icon"></icon-heart-filled>
                    Chip 6
                </pie-chip>
            </div>
        </fieldset>
    </section>

    <pie-divider></pie-divider>

    <!-- Button Group Example -->
    <section>
        <h2 style="font-size: 1.25rem; font-weight: bold; margin-bottom: 8px;">Button Group</h2>
        <div style="display: flex; flex-wrap: wrap; gap: 8px;">
            <pie-chip type="button" @change="selectAction">Chip 1</pie-chip>
            <pie-chip type="button" @change="selectAction">Chip 2</pie-chip>
            <pie-chip type="button" disabled @change="selectAction">Chip 3 (Disabled)</pie-chip>
            <pie-chip type="button" @change="selectAction">
                <icon-heart-filled slot="icon"></icon-heart-filled>
                Chip 4
            </pie-chip>
            <pie-chip type="button" @change="selectAction">
                <icon-heart-filled slot="icon"></icon-heart-filled>
                Chip 5
            </pie-chip>
        </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { definePageMeta } from '#imports';
import '@justeattakeaway/pie-webc/components/chip.js';
import '@justeattakeaway/pie-webc/components/divider.js';
import '@justeattakeaway/pie-icons-webc/dist/IconHeartFilled.js';

definePageMeta({
    title: 'Chip',
});

const selectAction = (e: CustomEvent) => {
  console.log('Chip was selected', e);
};
</script>

