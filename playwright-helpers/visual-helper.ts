import { test, type Page } from '@playwright/test';
import percySnapshot from '@percy/playwright';
import type { VisualPage } from './visual-pages';

/**
 * Go to the URL. Then wait for the page to become stable and hydrated before the snapshot.
 */
export async function gotoAndSettle(page: Page, url: string): Promise<void> {
  await page.goto(url, { waitUntil: 'load' });

  await page.waitForLoadState('networkidle', { timeout: 10_000 }).catch(() => {});

  // Wait for the PIE web components (pie-* and icon-*) to upgrade before the snapshot.
  await page
    .waitForFunction(
      () =>
        !Array.from(document.querySelectorAll(':not(:defined)')).some(
          (el) => el.localName.startsWith('pie-') || el.localName.startsWith('icon-'),
        ),
      undefined,
      { timeout: 5000 },
    )
    .catch(() => {});

  await page.evaluate(async () => {
    await document.fonts.ready;

    // Wait until each Lit element completes its update.
    const elements = Array.from(document.querySelectorAll('*')).filter(
      (el) => el.localName.includes('-') && 'updateComplete' in el,
    ) as unknown as Array<{ updateComplete: Promise<unknown> }>;
    await Promise.all(elements.map((el) => el.updateComplete.catch(() => {})));

    // Wait for the images that are not yet complete.
    await Promise.all(
      Array.from(document.images)
        .filter((img) => !img.complete)
        .map(
          (img) =>
            new Promise<void>((resolve) => {
              img.onload = () => resolve();
              img.onerror = () => resolve();
            }),
        ),
    );

    // Stop all CSS animations and transitions, also in the shadow DOM.
    // The reducedMotion option and Percy do not stop the animations in the shadow DOM.
    const freezeCss = '*, *::before, *::after { animation: none !important; transition: none !important; }';
    const injectFreeze = (root: Document | ShadowRoot) => {
      const style = document.createElement('style');
      style.textContent = freezeCss;
      (root instanceof Document ? root.head : root).appendChild(style);
      root.querySelectorAll('*').forEach((el) => {
        if (el.shadowRoot) injectFreeze(el.shadowRoot);
      });
    };
    injectFreeze(document);

    // Wait for two animation frames.
    // This lets the browser paint the stopped state before the snapshot.
    await new Promise<void>((resolve) =>
      requestAnimationFrame(() => requestAnimationFrame(() => resolve())),
    );
  });
}

export function registerVisualTests(appName: string, pages: VisualPage[]): void {
  test.describe(`Visual snapshots - ${appName}`, () => {
    for (const visualPage of pages) {
      test(`should navigate to the ${visualPage.name} page.`, async ({ page }) => {
        await gotoAndSettle(page, `${visualPage.url}?PERCY=true`);
        await percySnapshot(page, visualPage.name);
      });
    }
  });
}
