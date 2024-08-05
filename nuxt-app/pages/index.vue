<template>
	<div>
		<h3>Demo Integrations</h3>
		<ul>
			<li><pie-link href="/integrations/form">Form Demo</pie-link></li>
		</ul>
		<h3>Component Pages</h3>
		<ul>
			<li><pie-link href="/components/assistive-text">Assistive Text</pie-link></li>
			<li><pie-link href="/components/button">Button</pie-link></li>
			<li><pie-link href="/components/card">Card</pie-link></li>
			<li><pie-link href="/components/checkbox">Checkbox</pie-link></li>
			<li><pie-link href="/components/chip">Chip</pie-link></li>
			<li><pie-link href="/components/cookie-banner">Cookie Banner</pie-link></li>
			<li><pie-link href="/components/form-label">Form Label</pie-link></li>
			<li><pie-link href="/components/icon">Icon</pie-link></li>
			<li><pie-link href="/components/icon-button">Icon Button</pie-link></li>
			<li><pie-link href="/components/link">Link</pie-link></li>
			<li><pie-link href="/components/modal">Modal</pie-link></li>
			<li><pie-link href="/components/notification">Notification</pie-link></li>
			<li><pie-link href="/components/spinner">Spinner</pie-link></li>
			<li><pie-link href="/components/switch">Switch</pie-link></li>
			<li><pie-link href="/components/tag">Tag</pie-link></li>
			<li><pie-link href="/components/text-input">Text Input</pie-link></li>
			<li><pie-link href="/components/textarea">Textarea</pie-link></li>
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
