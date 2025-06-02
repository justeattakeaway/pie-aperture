<template>
	<pie-breadcrumb>
		<pie-breadcrumb-item href="/">Home</pie-breadcrumb-item>
		<pie-breadcrumb-item href="#">Breadcrumb</pie-breadcrumb-item>
	</pie-breadcrumb>
</template>

<script setup lang="ts">
import { definePageMeta } from '#imports';
import '@justeattakeaway/pie-webc/components/breadcrumb.js';
import '@justeattakeaway/pie-webc/components/breadcrumb-item.js';

definePageMeta({
    title: 'Breadcrumb',
});
</script>
