<template>
	<div>
		<pie-assistive-text variant="default" message="Assistive Text Default"></pie-assistive-text>
		<pie-assistive-text variant="success" message="Assistive Text Success"></pie-assistive-text>
		<pie-assistive-text variant="error" message="Assistive Text Error"></pie-assistive-text>
	</div>
</template>

<script setup lang="ts">
import { definePageMeta } from '#imports';
import '@justeattakeaway/pie-webc/components/assistive-text.js';

definePageMeta({
    title: 'Assistive Text',
});
</script>
