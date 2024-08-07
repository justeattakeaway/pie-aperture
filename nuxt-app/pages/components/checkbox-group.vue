<template>
  <pie-checkbox-group>
    <pie-form-label slot="label">Choose the way we can contact you:</pie-form-label>
    <pie-checkbox
        id="contactByEmail"
        @change="contactByEmail = $event.target.checked"
        :checked="contactByEmail">
      Contact By Email
    </pie-checkbox>
    <pie-checkbox
        id="contactByPhone"
        @change="contactByPhone = $event.target.checked"
        :checked="contactByPhone">
      Contact By Phone
    </pie-checkbox>
  </pie-checkbox-group>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { definePageMeta } from '#imports';
import '@justeattakeaway/pie-webc/components/checkbox.js';
import '@justeattakeaway/pie-webc/components/checkbox-group.js';
import '@justeattakeaway/pie-webc/components/form-label.js';

definePageMeta({
  title: 'PIE Checkbox Group',
});

const contactByEmail = ref(false);
const contactByPhone = ref(false);

</script>
