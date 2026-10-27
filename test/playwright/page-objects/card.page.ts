import { type Locator, type Page } from '@playwright/test';

const { APP_NAME } = process.env;

type CardElement = HTMLElement & {
    aria?: { label?: string };
    isOpen?: boolean;
};

export class CardPage {
    readonly page: Page;
    readonly singleInteractionCard: Locator;
    readonly slottedControlsCard: Locator;
    readonly cardDetailsModal: Locator;
    readonly restaurantModal: Locator;
    readonly favouriteButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.singleInteractionCard = page.getByTestId('single-interaction-card');
        this.slottedControlsCard = page.getByTestId('slotted-controls-card');
        this.cardDetailsModal = page.getByTestId('card-details-modal');
        this.restaurantModal = page.getByTestId('restaurant-modal');
        this.favouriteButton = page.getByTestId('card-action');
    }

    async goto() {
        const url = APP_NAME === 'vanilla-app' ? 'components/card.html' : 'components/card';
        await this.page.goto(url, { waitUntil: 'networkidle' });
    }

    getCardButton(card: Locator) {
        return card.getByTestId('pie-card-button');
    }

    async clickSingleInteractionCard() {
        await this.getCardButton(this.singleInteractionCard).click();
    }

    async clickSlottedControlsCard() {
        await this.getCardButton(this.slottedControlsCard).click();
    }

    async toggleFavourite() {
        await this.favouriteButton.click();
    }

    async getFavouriteLabel() {
        return this.favouriteButton.evaluate((element) => (element as CardElement).aria?.label);
    }

    async isModalOpen(modal: Locator) {
        return modal.evaluate((element) => (element as CardElement).isOpen === true);
    }

    async closeModal() {
        await this.page.keyboard.press('Escape');
    }
}
