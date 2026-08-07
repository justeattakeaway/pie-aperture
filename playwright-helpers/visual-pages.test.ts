import { describe, it, expect } from 'vitest';
import { getVisualPages } from './visual-pages';

describe('getVisualPages', () => {
  it('uses .html routes and /index.html home for vanilla-app', () => {
    const pages = getVisualPages('vanilla-app');
    expect(pages[0]).toEqual({ url: '/index.html', name: 'PIE Aperture' });
    expect(pages).toContainEqual({ url: '/components/button.html', name: 'Button' });
    expect(pages).toContainEqual({ url: '/integrations/css-only-button.html', name: 'CSS Only Button' });
  });

  it('uses extensionless routes and / home for the framework apps', () => {
    const pages = getVisualPages('nextjs-app-v14');
    expect(pages[0]).toEqual({ url: '/', name: 'PIE Aperture' });
    expect(pages).toContainEqual({ url: '/components/button', name: 'Button' });
  });

  it('normalises accordion, custom-tag and data-table across every app', () => {
    for (const app of ['vanilla-app', 'nextjs-app-v14', 'nextjs-app-v15', 'nuxt-app'] as const) {
      const names = getVisualPages(app).map((p) => p.name);
      expect(names).toContain('Accordion');
      expect(names).toContain('Custom Tag');
      expect(names).toContain('Data Table');
    }
  });

  it('gives vanilla/nuxt a single Form page and the React apps the controlled/uncontrolled split', () => {
    const vanilla = getVisualPages('vanilla-app').map((p) => p.name);
    expect(vanilla).toContain('Form');
    expect(vanilla).not.toContain('Uncontrolled Form');

    const next15 = getVisualPages('nextjs-app-v15').map((p) => p.name);
    expect(next15).toContain('Uncontrolled Form');
    expect(next15).toContain('Controlled Form');
    expect(next15).not.toContain('Form');
  });
});
