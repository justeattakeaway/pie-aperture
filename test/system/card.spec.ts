import { test, expect } from '@playwright/test';
import { CardPage } from '../playwright/page-objects/card.page';

const { APP_NAME } = process.env;

test.describe(`Card Page - ${APP_NAME}`, () => {
    test('should open and close the card details modal from the single interaction card', async ({ page }) => {
        // Arrange
        const cardPage = new CardPage(page);
        await cardPage.goto();

        // Act
        await cardPage.clickSingleInteractionCard();

        // Assert
        await expect.poll(() => cardPage.isModalOpen(cardPage.cardDetailsModal)).toBe(true);

        // Act
        await cardPage.closeModal();

        // Assert
        await expect.poll(() => cardPage.isModalOpen(cardPage.cardDetailsModal)).toBe(false);
    });

    test('should open and close the restaurant modal from the slotted controls card', async ({ page }) => {
        // Arrange
        const cardPage = new CardPage(page);
        await cardPage.goto();

        // Act
        await cardPage.clickSlottedControlsCard();

        // Assert
        await expect.poll(() => cardPage.isModalOpen(cardPage.restaurantModal)).toBe(true);

        // Act
        await cardPage.closeModal();

        // Assert
        await expect.poll(() => cardPage.isModalOpen(cardPage.restaurantModal)).toBe(false);
    });

    test('should toggle the slotted icon button without activating the card', async ({ page }) => {
        // Arrange
        const cardPage = new CardPage(page);
        await cardPage.goto();

        // Act
        await cardPage.toggleFavourite();

        // Assert
        await expect.poll(() => cardPage.getFavouriteLabel()).toBe('Remove from favourites');
        expect(await cardPage.isModalOpen(cardPage.restaurantModal)).toBe(false);

        // Act
        await cardPage.toggleFavourite();

        // Assert
        await expect.poll(() => cardPage.getFavouriteLabel()).toBe('Add to favourites');
        expect(await cardPage.isModalOpen(cardPage.restaurantModal)).toBe(false);
    });

    test('should apply the configured ARIA attributes to the card interactive element', async ({ page }) => {
        // Arrange
        const cardPage = new CardPage(page);
        await cardPage.goto();

        // Assert
        const singleCardButton = cardPage.getCardButton(cardPage.singleInteractionCard);
        await expect(singleCardButton).toHaveAttribute('aria-label', 'View card details');
        await expect(singleCardButton).toHaveAttribute('aria-description', 'Opens the card details');
        await expect(singleCardButton).toHaveAttribute('aria-haspopup', 'dialog');

        const slottedCardButton = cardPage.getCardButton(cardPage.slottedControlsCard);
        await expect(slottedCardButton).toHaveAttribute('aria-label', 'View restaurant');
        await expect(slottedCardButton).toHaveAttribute('aria-description', 'Opens the restaurant details');
        await expect(slottedCardButton).toHaveAttribute('aria-haspopup', 'dialog');
    });
});
