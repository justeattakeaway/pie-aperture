import { type Locator, type Page } from '@playwright/test';
const { APP_NAME } = process.env;

export class ToastProviderPage {
    readonly page: Page;
    readonly infoToastBtn: Locator;
    readonly warningToastBtn: Locator;
    readonly errorToastBtn: Locator;
    readonly clearToastsBtn: Locator;
    readonly toastQueueLength: Locator;
    readonly toastProvider: Locator;
    readonly toasts: Locator;
    readonly toastMessages: Locator;

    constructor(page: Page) {
        this.page = page;
        this.infoToastBtn = page.getByTestId('info-toast-btn');
        this.warningToastBtn = page.getByTestId('warning-toast-btn');
        this.errorToastBtn = page.getByTestId('error-toast-btn');
        this.clearToastsBtn = page.getByTestId('clear-toasts-btn');
        this.toastQueueLength = page.getByTestId('toast-queue-length');
        this.toastProvider = page.locator('pie-toast-provider');
        this.toasts = page.locator('pie-toast');
        this.toastMessages = page.getByTestId('pie-toast-message');
    }

    async goto() {
        let url = 'components/toast-provider';
        const formattedUrl = APP_NAME === 'vanilla-app' ? `${url}.html` : url;
        await this.page.goto(formattedUrl);
        await this.page.waitForSelector('pie-button[v]');
    }

    async enableStacking() {
        await this.toastProvider.evaluate((provider) => {
            (provider as HTMLElement & { isStacked: boolean }).isStacked = true;
        });
    }

    async addToastsToQueue() {
        await this.infoToastBtn.click();
        await this.warningToastBtn.click();
        await this.errorToastBtn.click();
    }

    async overflowToastQueue() {
        await this.addToastsToQueue();
        await this.errorToastBtn.click();
    }

    async clearAllToasts() {
        await this.clearToastsBtn.click();
    }

    async getQueueLengthMessage() {
       return await this.toastQueueLength.textContent();
    }

    async getToastTopPositions(): Promise<number[]> {
        return this.toasts.evaluateAll((toasts) => toasts.map((toast) => toast.getBoundingClientRect().top));
    }
}
