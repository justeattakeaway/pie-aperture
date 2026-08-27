import { test, expect } from '@playwright/test';
import { ToastProviderPage } from '../playwright/page-objects/toast-provider.page';

// The provider displays a vertical stack of up to three toasts at once. Any extra
// toast waits in the queue, which is what the queue length tag reports.
const MAX_VISIBLE_TOASTS = 3;

test.describe(`Toast Provider Page - ${process.env.APP_NAME}`, () => {

    test('should display up to three toasts at the same time', async ({ page }) => {
        // Arrange
        const toastProviderPage = new ToastProviderPage(page);

        // Act
        await toastProviderPage.goto();
        await toastProviderPage.addToastsToQueue();

        // Assert
        await expect(toastProviderPage.toasts).toHaveCount(MAX_VISIBLE_TOASTS);
        await expect(toastProviderPage.toastQueueLength).toHaveText('Toast Queue Length: 0');
    });

    test('should stack the visible toasts vertically, newest on top', async ({ page }) => {
        // Arrange
        const toastProviderPage = new ToastProviderPage(page);

        // Act
        await toastProviderPage.goto();
        await toastProviderPage.addToastsToQueue();
        await expect(toastProviderPage.toasts).toHaveCount(MAX_VISIBLE_TOASTS);

        // Assert - each toast sits above the one created before it, so they are stacked
        // rather than drawn on top of each other.
        const topPositions = await toastProviderPage.getToastTopPositions();
        const positionsNewestOnTop = [...topPositions].sort((a, b) => b - a);

        expect(topPositions).toEqual(positionsNewestOnTop);
        expect(new Set(topPositions).size).toEqual(MAX_VISIBLE_TOASTS);
    });

    test('should only display three toasts and queue the rest', async ({ page }) => {
        // Arrange
        const toastProviderPage = new ToastProviderPage(page);

        // Act
        await toastProviderPage.goto();
        await toastProviderPage.overflowToastQueue();

        // Assert
        await expect(toastProviderPage.toasts).toHaveCount(MAX_VISIBLE_TOASTS);
        await expect(toastProviderPage.toastQueueLength).toHaveText('Toast Queue Length: 1');
    });

    test('should clear all toasts from the queue', async ({ page }) => {
        // Arrange
        const toastProviderPage = new ToastProviderPage(page);

        // Act
        await toastProviderPage.goto();
        await toastProviderPage.overflowToastQueue();
        await toastProviderPage.clearAllToasts();

        // Assert
        await expect(toastProviderPage.toasts).toHaveCount(0);
        await expect(toastProviderPage.toastQueueLength).toHaveText('Toast Queue Length: 0');
    });
});
