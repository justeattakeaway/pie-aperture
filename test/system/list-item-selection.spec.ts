import { test, expect } from '@playwright/test';
import { ListItemSelectionPage } from '../playwright/page-objects/list-item-selection.page';

test.describe(`List Item Selection - ${process.env.APP_NAME}`, () => {

    test.describe('radio', () => {
        test('clicking a list item checks the slotted radio', async ({ page }) => {
            // Arrange
            const selectionPage = new ListItemSelectionPage(page);
            await selectionPage.gotoRadio();

            // Act — Standard is not pre-selected (Express is)
            await selectionPage.listItem('Standard').click();

            // Assert
            await expect(selectionPage.radio('Standard')).toHaveJSProperty('checked', true);
        });
    });

    test.describe('checkbox', () => {
        test('clicking an unchecked list item checks the slotted checkbox', async ({ page }) => {
            // Arrange
            const selectionPage = new ListItemSelectionPage(page);
            await selectionPage.gotoCheckbox();

            // Act — Cheese starts unchecked
            await selectionPage.listItem('Cheese').click();

            // Assert
            await expect(selectionPage.checkbox('Cheese')).toHaveJSProperty('checked', true);
        });

        test('clicking a checked list item unchecks the slotted checkbox', async ({ page }) => {
            // Arrange
            const selectionPage = new ListItemSelectionPage(page);
            await selectionPage.gotoCheckbox();

            // Act — Pepperoni starts pre-checked
            await selectionPage.listItem('Pepperoni').click();

            // Assert
            await expect(selectionPage.checkbox('Pepperoni')).toHaveJSProperty('checked', false);
        });
    });
});
