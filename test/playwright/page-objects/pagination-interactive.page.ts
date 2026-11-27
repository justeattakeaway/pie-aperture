import { type Locator, type Page } from '@playwright/test';
const { APP_NAME } = process.env;

export class PaginationInteractivePage {
    readonly page: Page;
    readonly status: Locator;
    readonly items: Locator;
    readonly previousButton: Locator;
    readonly nextButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.status = page.getByTestId('pagination-status');
        this.items = page.getByTestId('pagination-item');
        this.previousButton = page.getByRole('button', { name: 'Previous page' });
        this.nextButton = page.getByRole('button', { name: 'Next page' });
    }

    async goto() {
        let url = 'components/pagination-interactive';
        const formattedUrl = APP_NAME === 'vanilla-app' ? `${url}.html` : url;
        await this.page.goto(formattedUrl);
    }

    async goToPage(pageNumber: number) {
        await this.page.getByRole('button', { name: `Page ${pageNumber}`, exact: true }).click();
    }

    async goNext() {
        await this.nextButton.click();
    }

    async goPrevious() {
        await this.previousButton.click();
    }
}
