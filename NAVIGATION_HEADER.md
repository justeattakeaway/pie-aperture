# Cross-App Navigation Header Implementation

This implementation adds a navigation header to all PIE Aperture applications that provides links to switch between different framework implementations.

## Features

- **Environment-aware URL detection**: Automatically detects and generates correct URLs for:
  - Local development (localhost with different ports)
  - PR preview environments (pr{number}-aperture-{app}-app.pie.design format)
  - Production environments (aperture-{app}.pie.design format)
- **Current app highlighting**: The current app is highlighted and not clickable
- **Framework-specific components**: Each framework has its own navigation component implementation
- **Shared logic**: Common URL logic is shared across all apps

## Implementation Details

### Shared Logic (`/shared/navigation-urls.js`)
Contains the core logic for:
- Detecting the current environment
- Generating appropriate URLs for all apps
- Determining which app is currently active

### Framework-Specific Components

#### NextJS (v14 & v15)
- **Component**: `src/components/navigation-header.tsx`
- **Integration**: Added to `src/app/layout.tsx`
- **Features**: React hooks for client-side navigation detection

#### Nuxt
- **Component**: `components/NavigationHeader.vue`
- **Integration**: Added to `layouts/default.vue`
- **Features**: Vue 3 Composition API with reactive navigation data

#### Vanilla JavaScript
- **Component**: `js/navigation-header.js`
- **Integration**: Added to `js/shared.js` and `partials/page.html`
- **Features**: DOM manipulation with hover effects

### Environment Detection

#### Local Development
- Vanilla app: `localhost:3001`
- Nuxt app: `localhost:3002`
- NextJS v14: `localhost:3003`
- NextJS v15: `localhost:3004`

#### Production
- Vanilla: `https://aperture-vanilla.pie.design/`
- Nuxt: `https://aperture-nuxt.pie.design/`
- NextJS v14: `https://aperture-nextjs-v14.pie.design/`
- NextJS v15: `https://aperture-nextjs-v15.pie.design/`

#### PR Preview
- Format: `https://pr{number}-aperture-{app}-app.pie.design/`
- Example: `https://pr370-aperture-nextjs-app-v14.pie.design/`

## Usage

The navigation header is automatically included in all apps and requires no additional configuration. It will:

1. Detect the current environment
2. Generate appropriate URLs for all other apps
3. Highlight the current app
4. Provide clickable links to switch between apps

## Testing

To test the implementation:

1. **Local Development**: Start multiple apps locally and verify cross-navigation works
2. **PR Previews**: Create a PR and test navigation between preview URLs
3. **Production**: Verify navigation works on live production URLs

## Styling

The navigation header uses inline styles for simplicity and consistency across frameworks. Key styling includes:

- Light gray background (`#f5f5f5`)
- Border bottom (`1px solid #ddd`)
- Flexbox layout with responsive wrapping
- Blue accent color (`#007acc`) for links
- Bold text for current app indicator
