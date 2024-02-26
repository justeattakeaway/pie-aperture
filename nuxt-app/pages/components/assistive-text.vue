<template>
	<div>
		<pie-assistive-text variant="default">Assistive Text Default</pie-assistive-text>
		<pie-assistive-text variant="success">Assistive Text Success</pie-assistive-text>
		<pie-assistive-text variant="error">Assistive Text Error</pie-assistive-text>
	</div>
</template>

<script setup lang="ts">
import { definePageMeta, onBeforeMount } from '#imports';
import { PieAssistiveText } from '@justeattakeaway/pie-assistive-text';

definePageMeta({
    title: 'PIE Assistive Text',
});
</script>
