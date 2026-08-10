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
        await this.page.waitForSelector('pie-list-item[v]');
    }

    async gotoCheckbox() {
        const url = 'components/list-item-checkbox-selection';
        await this.page.goto(APP_NAME === 'vanilla-app' ? `${url}.html` : url);
        await this.page.waitForSelector('pie-list-item[v]');
    }

    async gotoLink() {
        const url = 'components/list-item-link';
        await this.page.goto(APP_NAME === 'vanilla-app' ? `${url}.html` : url);
        await this.page.waitForSelector('pie-list-item[v]');
    }

    async gotoSwitch() {
        const url = 'components/list-item-switch-selection';
        await this.page.goto(APP_NAME === 'vanilla-app' ? `${url}.html` : url);
        await this.page.waitForSelector('pie-list-item[v]');
    }

    async gotoButton() {
        const url = 'components/list-item-button';
        await this.page.goto(APP_NAME === 'vanilla-app' ? `${url}.html` : url);
        await this.page.waitForSelector('pie-list-item[v]');
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

    link(primaryText: string): Locator {
        return this.listItem(primaryText).locator('a[slot="link"]');
    }

    // The link page renders two lists: the first uses a raw `<a slot="link">`, the second uses the
    // framework's router link component (`next/link` / `NuxtLink`). It is always the second
    // `pie-list`, so scope by index rather than the per-framework `aria-label`. vanilla-app has no
    // router, so it renders only the raw-anchor list and this locator does not apply there.
    routerLinkItem(primaryText: string): Locator {
        return this.page.locator('pie-list').nth(1).locator('pie-list-item').filter({ hasText: primaryText }).first();
    }

    routerLink(primaryText: string): Locator {
        return this.routerLinkItem(primaryText).locator('a[slot="link"]');
    }

    switchControl(primaryText: string): Locator {
        return this.listItem(primaryText).locator('pie-switch');
    }

    buttonListItem(primaryText: string, listTestId = 'button-list'): Locator {
        return this.page.locator(`pie-list[data-test-id="${listTestId}"]`).locator('pie-list-item').filter({ hasText: primaryText }).first();
    }

    activationStatus(): Locator {
        return this.page.locator('[data-test-id="button-activation-status"]');
    }

    async focusButtonAction(primaryText: string, listTestId = 'button-list') {
        await this.page.evaluate(({ itemPrimaryText, listId }) => {
            const list = document.querySelector(`pie-list[data-test-id="${listId}"]`);
            const item = Array.from(list?.querySelectorAll('pie-list-item') ?? []).find(
                (entry) => (entry as HTMLElement & { primaryText?: string }).primaryText === itemPrimaryText,
            ) as HTMLElement | null;

            (item?.shadowRoot?.querySelector('.c-listItem-action') as HTMLElement | null)?.focus();
        }, { itemPrimaryText: primaryText, listId: listTestId });

        await this.page.waitForFunction(({ itemPrimaryText, listId }) => {
            const list = document.querySelector(`pie-list[data-test-id="${listId}"]`);
            const item = Array.from(list?.querySelectorAll('pie-list-item') ?? []).find(
                (entry) => (entry as HTMLElement & { primaryText?: string }).primaryText === itemPrimaryText,
            ) as HTMLElement | null;

            return item?.shadowRoot?.activeElement?.classList.contains('c-listItem-action') ?? false;
        }, { itemPrimaryText: primaryText, listId: listTestId });
    }
}
