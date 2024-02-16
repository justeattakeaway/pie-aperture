<template>
	<div>
		<h3>Demo Integrations</h3>
		<ul>
			<li><pie-link href="/form">Form Demo</pie-link></li>
		</ul>
		<h3>Component Pages</h3>
		<ul>
			<li><pie-link href="/pie-assistive-text">Assistive Text</pie-link></li>
			<li><pie-link href="/pie-button">Button</pie-link></li>
			<li><pie-link href="/pie-card">Card</pie-link></li>
			<li><pie-link href="/pie-chip">Chip</pie-link></li>
			<li><pie-link href="/pie-cookie-banner">Cookie Banner</pie-link></li>
			<li><pie-link href="/pie-form-label">Form Label</pie-link></li>
			<li><pie-link href="/pie-icon-button">Icon Button</pie-link></li>
			<li><pie-link href="/pie-link">Link</pie-link></li>
			<li><pie-link href="/pie-modal">Modal</pie-link></li>
			<li><pie-link href="/pie-switch">Switch</pie-link></li>
			<li><pie-link href="/pie-tag">Tag</pie-link></li>
		</ul>
	</div>
</template>

<script setup lang="ts">
import { definePageMeta } from '#imports';

definePageMeta({
    title: 'PIE Aperture',
});
</script>

<style>
ul {
	list-style-type: none;
}
</style>  