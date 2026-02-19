<template>
    <div>
        <section>
            <h1 class="test-font-heading-xxl">Main Title (XXL)</h1>
            <h2 class="test-font-heading-xl">Section Heading (XL)</h2>
            <h3 class="test-font-heading-l">Sub-Section Heading (L)</h3>
            <h4 class="test-font-heading-m">Content Block Title (M)</h4>
            <h5 class="test-font-heading-s">Small Header (S)</h5>
            <h6 class="test-font-heading-xs">Tiny Header (XS)</h6>

            <h1 class="test-font-heading-xxl-italic">Main Title Italic (XXL)</h1>
            <h2 class="test-font-heading-xl-italic">Section Heading Italic (XL)</h2>
            <h3 class="test-font-heading-l-italic">Sub-Section Heading Italic (L)</h3>
            <h4 class="test-font-heading-m-italic">Content Block Title Italic (M)</h4>
            <h5 class="test-font-heading-s-italic">Small Header Italic (S)</h5>
            <h6 class="test-font-heading-xs-italic">Tiny Header Italic (XS)</h6>

            <hr>

            <p class="test-font-subheading-l">This is a prominent subheading, perhaps introducing a new section of body text (L).</p>
            <p class="test-font-subheading-s">This is a smaller subheading, useful for brief context or labels (S).</p>

            <hr>

            <p class="test-font-body-l">This is a main paragraph of body text (L). It's intended for long-form reading, like an article or detailed description.
                <a href="#" class="test-font-body-l-link">This is a link within the body text.</a>
            </p>

            <p class="test-font-body-s">This is a smaller paragraph of body text (S). Used for secondary content or compact information.
                <a href="#" class="test-font-body-s-link">This is a small link in the secondary body text.</a>
            </p>

            <p class="test-font-body-strong-l">This is strong body text (L), highlighting a key takeaway or important warning.
                <a href="#" class="test-font-body-strong-l-link">Strong link here.</a>
            </p>

            <p class="test-font-body-strong-s">This is strong body text (S), for emphasis in smaller contexts.
                <a href="#" class="test-font-body-strong-s-link">Strong small link here.</a>
            </p>

            <hr>

            <p>
                <button class="test-font-interactive-l">Large Interactive Button Text</button>
                <button class="test-font-interactive-s">Small Interactive Text</button>
                <button class="test-font-interactive-xs">Extra-Small Interactive Text</button>
            </p>

            <hr>

            <p class="test-font-caption">This is a standard caption, used for image descriptions, metadata, or footnotes.
                <a href="#" class="test-font-caption-link">Caption link example.</a>
            </p>

            <p class="test-font-caption-strong">This is a strong caption, useful for crucial metadata or brief labels.
                <a href="#" class="test-font-caption-strong-link">Strong caption link.</a>
            </p>
        </section>
    </div>
</template>

<script setup lang="ts">
import { definePageMeta } from '#imports';

definePageMeta({
    title: 'Typography Demo (Mixins)'
});
</script>

<style lang="scss" scoped>
@use '@justeattakeaway/pie-css/scss/mixins' as *;

// Typography utility classes using font-theme mixin

// Heading classes
.test-font-heading-xs {
    @include font-theme('font-heading-xs');
}
.test-font-heading-s {
    @include font-theme('font-heading-s');
}
.test-font-heading-m {
    @include font-theme('font-heading-m');
}
.test-font-heading-l {
    @include font-theme('font-heading-l');
}
.test-font-heading-xl {
    @include font-theme('font-heading-xl');
}
.test-font-heading-xxl {
    @include font-theme('font-heading-xxl');
}

// Heading italic classes
.test-font-heading-xs-italic {
    @include font-theme('font-heading-xs-italic');
}
.test-font-heading-s-italic {
    @include font-theme('font-heading-s-italic');
}
.test-font-heading-m-italic {
    @include font-theme('font-heading-m-italic');
}
.test-font-heading-l-italic {
    @include font-theme('font-heading-l-italic');
}
.test-font-heading-xl-italic {
    @include font-theme('font-heading-xl-italic');
}
.test-font-heading-xxl-italic {
    @include font-theme('font-heading-xxl-italic');
}

// Subheading classes
.test-font-subheading-l {
    @include font-theme('font-subheading-l');
}
.test-font-subheading-s {
    @include font-theme('font-subheading-s');
}

// Body text classes
.test-font-body-l {
    @include font-theme('font-body-l');
}
.test-font-body-l-link {
    @include font-theme('font-body-l-link');
}
.test-font-body-s {
    @include font-theme('font-body-s');
}
.test-font-body-s-link {
    @include font-theme('font-body-s-link');
}

// Strong body text classes
.test-font-body-strong-l {
    @include font-theme('font-body-strong-l');
}
.test-font-body-strong-l-link {
    @include font-theme('font-body-strong-l-link');
}
.test-font-body-strong-s {
    @include font-theme('font-body-strong-s');
}
.test-font-body-strong-s-link {
    @include font-theme('font-body-strong-s-link');
}

// Interactive classes
.test-font-interactive-l {
    @include font-theme('font-interactive-l');
}
.test-font-interactive-s {
    @include font-theme('font-interactive-s');
}
.test-font-interactive-xs {
    @include font-theme('font-interactive-xs');
}

// Caption classes
.test-font-caption {
    @include font-theme('font-caption');
}
.test-font-caption-link {
    @include font-theme('font-caption-link');
}
.test-font-caption-strong {
    @include font-theme('font-caption-strong');
}
.test-font-caption-strong-link {
    @include font-theme('font-caption-strong-link');
}
</style>
