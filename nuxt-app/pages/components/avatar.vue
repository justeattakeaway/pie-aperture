<template>
	<div>
	<h1> Avatar Static Initials </h1>
		<pie-avatar label="Ada Lovelace" tag="div"></pie-avatar>
	<h1> Avatar Fallback </h1>
		<pie-avatar tag="div"></pie-avatar>
	</div>
</template>

<script setup lang="ts">
import { definePageMeta } from '#imports';
import '@justeattakeaway/pie-webc/components/avatar.js';

definePageMeta({
    title: 'PIE Avatar',
});
</script>
