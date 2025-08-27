<template>
	<div>
	<h1>Avatar Static Initials</h1>
		<pie-avatar label="Ada Lovelace" tag="div"></pie-avatar>
	<h1> Avatar Fallback </h1>
		<pie-avatar tag="div"></pie-avatar>
	<h1> Avatar Static Image </h1>
		<pie-avatar tag="div" :src="imageUrl"></pie-avatar>
	</div>
</template>

<script setup lang="ts">
import { definePageMeta } from '#imports';
import '@justeattakeaway/pie-webc/components/avatar.js';

const imageUrl = 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

definePageMeta({
    title: 'PIE Avatar',
});
</script>