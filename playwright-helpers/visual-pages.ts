export type App = 'vanilla-app' | 'nextjs-app-v14' | 'nextjs-app-v15' | 'nuxt-app';

export interface VisualPage {
  url: string;
  name: string;
}

interface PageDef {
  path: string;
  name: string;
  apps?: App[];
}

const PAGES: PageDef[] = [
  { path: '/components/accordion', name: 'Accordion' },
  { path: '/components/assistive-text', name: 'Assistive Text' },
  { path: '/components/avatar', name: 'Avatar' },
  { path: '/components/breadcrumb', name: 'Breadcrumb' },
  { path: '/components/button', name: 'Button' },
  { path: '/components/card', name: 'Card' },
  { path: '/components/checkbox', name: 'Checkbox' },
  { path: '/components/checkbox-group', name: 'Checkbox Group' },
  { path: '/components/chip', name: 'Chip' },
  { path: '/components/cookie-banner', name: 'Cookie Banner' },
  { path: '/components/custom-tag', name: 'Custom Tag' },
  { path: '/components/data-table', name: 'Data Table' },
  { path: '/components/divider', name: 'Divider' },
  { path: '/components/form-label', name: 'Form Label' },
  { path: '/components/icon', name: 'Icon' },
  { path: '/components/icon-button', name: 'Icon Button' },
  { path: '/components/icon-with-background', name: 'Icon With Background' },
  { path: '/components/link', name: 'Link' },
  { path: '/components/list', name: 'List' },
  { path: '/components/list-item-button', name: 'List Item Button' },
  { path: '/components/list-item-checkbox-selection', name: 'List Item Checkbox Selection' },
  { path: '/components/list-item-link', name: 'List Item Link' },
  { path: '/components/list-item-radio-selection', name: 'List Item Radio Selection' },
  { path: '/components/list-item-switch-selection', name: 'List Item Switch Selection' },
  { path: '/components/lottie-player', name: 'Lottie Player' },
  { path: '/components/modal', name: 'Modal' },
  { path: '/components/notification', name: 'Notification' },
  { path: '/components/radio', name: 'Radio' },
  { path: '/components/radio-group', name: 'Radio Group' },
  { path: '/components/select', name: 'Select' },
  { path: '/components/spinner', name: 'Spinner' },
  { path: '/components/switch', name: 'Switch' },
  { path: '/components/tag', name: 'Tag' },
  { path: '/components/text-input', name: 'Text Input' },
  { path: '/components/textarea', name: 'Textarea' },
  { path: '/components/thumbnail', name: 'Thumbnail' },
  { path: '/components/toast', name: 'Toast' },

  { path: '/integrations/css-only-button', name: 'CSS Only Button' },
  { path: '/integrations/css-only-radio', name: 'CSS Only Radio' },
  { path: '/integrations/typography-classes', name: 'Typography Demo (CSS Classes)' },
  { path: '/integrations/typography-mixins', name: 'Typography Demo (Mixins)' },

  // These pages are different for each app. The vanilla and nuxt apps have one Form page.
  // The React apps have separate Uncontrolled Form and Controlled Form pages.
  { path: '/integrations/form', name: 'Form', apps: ['vanilla-app', 'nuxt-app'] },
  { path: '/integrations/uncontrolled-form', name: 'Uncontrolled Form', apps: ['nextjs-app-v14', 'nextjs-app-v15'] },
  { path: '/integrations/controlled-form', name: 'Controlled Form', apps: ['nextjs-app-v14', 'nextjs-app-v15'] },
];

export function getVisualPages(app: App): VisualPage[] {
  const isVanilla = app === 'vanilla-app';
  const home: VisualPage = { url: isVanilla ? '/index.html' : '/', name: 'PIE Aperture' };
  const pages = PAGES
    .filter((page) => page.apps?.includes(app) ?? true)
    .map((page) => ({ url: isVanilla ? `${page.path}.html` : page.path, name: page.name }));
  return [home, ...pages];
}
