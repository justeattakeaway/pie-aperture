import { type Locator, type Page } from '@playwright/test';
const { APP_NAME } = process.env;

export class ListItemSelectionPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async gotoRadio() {
        const url = 'components/list-item-radio-selection';
        await this.page.goto(APP_NAME === 'vanilla-app' ? `${url}.html` : url);
    }

    async gotoCheckbox() {
        const url = 'components/list-item-checkbox-selection';
        await this.page.goto(APP_NAME === 'vanilla-app' ? `${url}.html` : url);
    }

    listItem(primaryText: string): Locator {
        return this.page.locator('pie-list-item').filter({ hasText: primaryText }).first();
    }

    radio(primaryText: string): Locator {
        return this.listItem(primaryText).locator('pie-radio');
    }

    checkbox(primaryText: string): Locator {
        return this.listItem(primaryText).locator('pie-checkbox');
    }
}
