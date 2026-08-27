import { type Locator, type Page } from '@playwright/test';
const { APP_NAME } = process.env;

export class ToastProviderPage {
    readonly page: Page;
    readonly infoToastBtn: Locator;
    readonly warningToastBtn: Locator;
    readonly errorToastBtn: Locator;
    readonly clearToastsBtn: Locator;
    readonly toastQueueLength: Locator;
    readonly toasts: Locator;
    readonly toastMessages: Locator;

    constructor(page: Page) {
        this.page = page;
        this.infoToastBtn = page.getByTestId('info-toast-btn');
        this.warningToastBtn = page.getByTestId('warning-toast-btn');
        this.errorToastBtn = page.getByTestId('error-toast-btn');
        this.clearToastsBtn = page.getByTestId('clear-toasts-btn');
        this.toastQueueLength = page.getByTestId('toast-queue-length');
        // The provider renders its visible toasts inside its shadow root. Playwright
        // locators pierce shadow DOM, so these match the stacked toasts on screen.
        this.toasts = page.locator('pie-toast');
        this.toastMessages = page.getByTestId('pie-toast-message');
    }

    async goto() {
        let url = 'components/toast-provider';
        const formattedUrl = APP_NAME === 'vanilla-app' ? `${url}.html` : url;
        await this.page.goto(formattedUrl);
        // The buttons are server rendered before the framework has attached its click
        // handlers, so an early click can be lost. `v` is only set once the component is
        // running on the client, which means the page is ready to be clicked.
        await this.page.waitForSelector('pie-button[v]');
    }

    async addToastsToQueue() {
        await this.infoToastBtn.click();
        await this.warningToastBtn.click();
        await this.errorToastBtn.click();
    }

    /**
     * Triggers one more toast than the provider can display at once, so the extra
     * toast has to wait in the queue.
     */
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

    /**
     * Returns the top edge of each visible toast, in DOM order (oldest first).
     * The provider stacks its toasts with `flex-direction: column-reverse`, so the
     * newest toast sits highest up the page and these values decrease.
     */
    async getToastTopPositions(): Promise<number[]> {
        return this.toasts.evaluateAll((toasts) => toasts.map((toast) => toast.getBoundingClientRect().top));
    }
}