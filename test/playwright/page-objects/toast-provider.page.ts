import { type Locator, type Page } from '@playwright/test';
const { APP_NAME } = process.env;

export class ToastProviderPage {
    readonly page: Page;
    readonly infoToastBtn: Locator;
    readonly warningToastBtn: Locator;
    readonly errorToastBtn: Locator;
    readonly clearToastsBtn: Locator;
    readonly toastQueueLength: Locator;

    constructor(page: Page) {
        this.page = page;
        this.infoToastBtn = page.getByTestId('info-toast-btn');
        this.warningToastBtn = page.getByTestId('warning-toast-btn');
        this.errorToastBtn = page.getByTestId('error-toast-btn');
        this.clearToastsBtn = page.getByTestId('clear-toasts-btn');
        this.toastQueueLength = page.getByTestId('toast-queue-length');
    }

    async goto() {
        let url = 'components/toast-provider';
        const formattedUrl = APP_NAME === 'vanilla-app' ? `${url}.html` : url;
        await this.page.goto(formattedUrl);
    }

    async addToastsToQueue() {
        await this.infoToastBtn.click();
        await this.warningToastBtn.click();
        await this.errorToastBtn.click();

        // Wait for the toasts to be added to the queue
        await this.page.waitForTimeout(2000);
    }

    async clearAllToasts() {
        await this.clearToastsBtn.click();
    }

    async getQueueLengthMessage() {
       return await this.toastQueueLength.textContent();
    }
}