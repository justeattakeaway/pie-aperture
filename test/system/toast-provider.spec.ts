import { test, expect } from '@playwright/test';
import { ToastProviderPage } from '../playwright/page-objects/toast-provider.page';

test.describe(`Toast Provider Page - ${process.env.APP_NAME}`, () => {
  
    test('should add toasts to the queue', async ({ page }) => {
        // Arrange
        const toastProviderPage = new ToastProviderPage(page);

        // Act
        await toastProviderPage.goto();
        await toastProviderPage.addToastsToQueue();

        // Assert
        const queueLengthMessage = await toastProviderPage.getQueueLengthMessage();
        expect(queueLengthMessage?.trim()).toEqual('Toast Queue Length: 2');
    });

    test('should clear all toasts from the queue', async ({ page }) => {
        // Arrange
        const toastProviderPage = new ToastProviderPage(page);

        // Act
        await toastProviderPage.goto();
        await toastProviderPage.addToastsToQueue();
        await toastProviderPage.clearAllToasts();

        // Assert
        const queueLengthMessage = await toastProviderPage.getQueueLengthMessage();
        expect(queueLengthMessage?.trim()).toEqual('Toast Queue Length: 0');
    });
});
