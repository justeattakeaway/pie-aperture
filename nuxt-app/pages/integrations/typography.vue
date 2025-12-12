<template>
    <div>
        <section>
            <h1 class="u-font-heading-xxl">Main Title (XXL)</h1>
            <h2 class="u-font-heading-xl">Section Heading (XL)</h2>
            <h3 class="u-font-heading-l">Sub-Section Heading (L)</h3>
            <h4 class="u-font-heading-m">Content Block Title (M)</h4>
            <h5 class="u-font-heading-s">Small Header (S)</h5>
            <h6 class="u-font-heading-xs">Tiny Header (XS)</h6>

            <h1 class="u-font-heading-xxl-italic">Main Title Italic (XXL)</h1>
            <h2 class="u-font-heading-xl-italic">Section Heading Italic (XL)</h2>
            <h3 class="u-font-heading-l-italic">Sub-Section Heading Italic (L)</h3>
            <h4 class="u-font-heading-m-italic">Content Block Title Italic (M)</h4>
            <h5 class="u-font-heading-s-italic">Small Header Italic (S)</h5>
            <h6 class="u-font-heading-xs-italic">Tiny Header Italic (XS)</h6>

            <hr>

            <p class="u-font-subheading-l">This is a prominent subheading, perhaps introducing a new section of body text (L).</p>
            <p class="u-font-subheading-s">This is a smaller subheading, useful for brief context or labels (S).</p>

            <hr>

            <p class="u-font-body-l">This is a main paragraph of body text (L). It's intended for long-form reading, like an article or detailed description.
                <a href="#" class="u-font-body-l-link">This is a link within the body text.</a>
            </p>

            <p class="u-font-body-s">This is a smaller paragraph of body text (S). Used for secondary content or compact information.
                <a href="#" class="u-font-body-s-link">This is a small link in the secondary body text.</a>
            </p>

            <p class="u-font-body-strong-l">This is strong body text (L), highlighting a key takeaway or important warning.
                <a href="#" class="u-font-body-strong-l-link">Strong link here.</a>
            </p>

            <p class="u-font-body-strong-s">This is strong body text (S), for emphasis in smaller contexts.
                <a href="#" class="u-font-body-strong-s-link">Strong small link here.</a>
            </p>

            <hr>

            <p>
                <button class="u-font-interactive-l">Large Interactive Button Text</button>
                <button class="u-font-interactive-s">Small Interactive Text</button>
                <button class="u-font-interactive-xs">Extra-Small Interactive Text</button>
            </p>

            <hr>

            <p class="u-font-caption">This is a standard caption, used for image descriptions, metadata, or footnotes.
                <a href="#" class="u-font-caption-link">Caption link example.</a>
            </p>

            <p class="u-font-caption-strong">This is a strong caption, useful for crucial metadata or brief labels.
                <a href="#" class="u-font-caption-strong-link">Strong caption link.</a>
            </p>
        </section>
    </div>
</template>

<script setup lang="ts">
import { definePageMeta } from '#imports';

definePageMeta({
    title: 'Typography'
});
</script>
