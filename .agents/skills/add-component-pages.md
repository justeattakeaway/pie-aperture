---
name: add-component-pages
description: Use this skill to add a new component page across all four applications in pie-aperture, and register it in the shared tests.
---

## Step 1: Gather inputs

Use AskUserQuestion to collect these inputs if they were not provided with the skill invocation:

1. **Component name** - e.g. `pie-accordion`. Derive from this:
  - kebab-case tag name: `pie-accordion`
  - kebab-case without prefix for URL/file paths: `accordion`
  - PascalCase component name: `PieAccordion`
  - Title for display: `Accordion`
  - Import path segment: `accordion`

If the provided component name is not prefixed with `pie-`, ask a confirmation question on the component name.

2. **pie-webc version** - e.g. `0.11.0`

Ask for the version of the `pie-webc` package.

If provided, update all four `package.json` files. If not, use the current version.

If the current version doesn't contains the component, inform the user.

## Step 2: Update pie-webc version (if provided)

If a version was given, update `@justeattakeaway/pie-webc` in these four files using `sed` or Edit:

- `nextjs-app-v14/package.json`
- `nextjs-app-v15/package.json`
- `nuxt-app/package.json`
- `vanilla-app/package.json`

Use the Edit tool to replace the version string exactly, e.g. replace `"@justeattakeaway/pie-webc": "0.10.8"` with the new version.

## Step 3: Create files for NextJS v14 and v15

Repeat for **both** `nextjs-app-v14` and `nextjs-app-v15`.

### Component file
Create `src/app/components/<component-slug>/<component-slug>.tsx`:

```tsx
'use client';

import NavigationLayout from "@/app/layout/navigation";
import { <PascalCase> } from '@justeattakeaway/pie-webc/react/<import-segment>.js';

export default function <PascalCase>Page() {
    return (
        <NavigationLayout title="<Title>">
            <<PascalCase>></<PascalCase>>
        </NavigationLayout>
    );
}
```

### Page file
Create `src/app/components/<component-slug>/page.tsx`:

```tsx
import <PascalCase>Page from './<component-slug>';
import { type Metadata } from 'next';

export const metadata: Metadata = {
    title: '<Title>',
}

export default function <PascalCase>() {
    return <<PascalCase>Page />;
}
```

### Register in home-page.tsx
Edit `src/app/components/home-page.tsx` - insert in alphabetical order inside the list:

```tsx
<li><PieLink onClick={() => router.push('/components/<component-slug>')} tag="button"><Title></PieLink></li>
```

### Add visual test entry
Edit `test/visual/nextjs.spec.js` - insert in alphabetical order:

```js
{ url: '/components/<component-slug>', name: '<Title>' },
```

## Step 4: Create files for Nuxt

### Page file
Create `nuxt-app/pages/components/<component-slug>.vue`:

```vue
<template>
  <div>
    <pie-<tag-name>></pie-<tag-name>>
  </div>
</template>

<script setup lang="ts">
import { definePageMeta } from '#imports';
import '@justeattakeaway/pie-webc/components/<import-segment>.js';

definePageMeta({
    title: '<Title>',
});
</script>
```

### Register in Nuxt index
Edit `nuxt-app/pages/index.vue` - insert in alphabetical order:

```html
<li><pie-link href="/components/<component-slug>"><Title></pie-link></li>
```

### Add visual test entry
Edit `nuxt-app/test/visual/nuxt.spec.js` - insert in alphabetical order:

```js
{ url: '/components/<component-slug>', name: '<Title>' },
```

## Step 5: Create files for Vanilla

### HTML template
Create `vanilla-app/components/<component-slug>.html`:

```html
<load
    src="partials/page.html"
    title="<Title>"
    module="../js/<component-slug>.js"
/>
```

### JS module
Create `vanilla-app/js/<component-slug>.js`:

```js
import '@justeattakeaway/pie-webc/components/<import-segment>.js';
import './shared.js';
import './utils/navigation.js';

document.querySelector('#app').innerHTML = `
    <pie-<tag-name>></pie-<tag-name>>`;
```

### Register in Vanilla index
Edit `vanilla-app/js/index.js` - insert in alphabetical order:

```js
<li><pie-link href="/components/<component-slug>.html"><Title></pie-link></li>
```

## Step 6: Register SSR test

Edit `test/ssr/ssr.spec.ts` - insert in alphabetical order:

```ts
{ selector: '<tag-name>', page: '<component-slug>' },
```

Where `selector` is the web component tag name without the `pie-` prefix (e.g. `pie-accordion` → `accordion`), and `page` is the URL path segment.

## Step 7: Run yarn
To install new package versions and update the `yarn.lock` file.

## Step 8: Report completion

List all files created or modified.

## Step 9: Suggest one of the alternatives for the next step

- `cd nextjs-app-v15 && yarn dev`
- `cd nextjs-app-v14 && yarn dev`
- `cd nuxt-app && yarn dev`
- `cd vanilla-app && yarn dev`
