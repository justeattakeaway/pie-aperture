<template>
	<div>
	<h1>Avatar Static Initials</h1>
		<pie-avatar label="Ada Lovelace" tag="div"></pie-avatar>
	<h1> Avatar with no label </h1>
		<pie-avatar tag="div"></pie-avatar>
	<h1> Avatar with a broken image </h1>
		<pie-avatar src="broken.jpg" label="Ada Lovelace" tag="button"></pie-avatar>
	<h1> Avatar image as button </h1>
		<pie-avatar src="https://webc.pie.design/static/images/pie-avatar--static-image.jpg" label="Ada Lovelace" tag="button"></pie-avatar>
	<h1> Avatar initials as button </h1>
		<pie-avatar label="Ada Lovelace" tag="button"></pie-avatar>
	</div>
</template>

<script setup lang="ts">
import { definePageMeta } from '#imports';
import '@justeattakeaway/pie-webc/components/avatar.js';
definePageMeta({
    title: 'PIE Avatar',
});
</script>
