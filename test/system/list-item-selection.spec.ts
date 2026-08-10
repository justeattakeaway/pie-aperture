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

    test.describe('link', () => {
        test('names the slotted anchor from the item text', async ({ page }) => {
            // Arrange
            const selectionPage = new ListItemSelectionPage(page);
            await selectionPage.gotoLink();

            // Assert: the item supplies the empty anchor's accessible name from primaryText.
            await expect(selectionPage.link('Orders')).toHaveAttribute('aria-label', 'Orders');
        });

        test('clicking anywhere on a list item follows the slotted link', async ({ page }) => {
            // Arrange
            const selectionPage = new ListItemSelectionPage(page);
            await selectionPage.gotoLink();

            // Act: the empty anchor is stretched over the row, so clicking the row body navigates.
            await selectionPage.listItem('Orders').click();

            // Assert
            await expect.poll(() => new URL(page.url()).hash).toBe('#orders');
        });

        // The second list slots a framework router link component (`next/link` / `NuxtLink`) instead
        // of a raw anchor. This is the most framework-divergent link path: the component must render
        // an `<a slot="link">` that `pie-list-item` can find, name and stretch, exactly as it does a
        // raw anchor. vanilla-app has no router, so it renders only the raw-anchor list.
        test.describe('framework router link component', () => {
            test.beforeEach(() => {
                test.skip(process.env.APP_NAME === 'vanilla-app', 'vanilla-app has no framework router link variant');
            });

            test('names the router link anchor from the item text', async ({ page }) => {
                // Arrange
                const selectionPage = new ListItemSelectionPage(page);
                await selectionPage.gotoLink();

                // Assert: the item names the anchor the router component rendered, from primaryText.
                await expect(selectionPage.routerLink('Orders')).toHaveAttribute('aria-label', 'Orders');
            });

            test('clicking anywhere on a router link row follows the link', async ({ page }) => {
                // Arrange
                const selectionPage = new ListItemSelectionPage(page);
                await selectionPage.gotoLink();

                // Act: click the row body of the router-link list, not the raw-anchor list.
                await selectionPage.routerLinkItem('Orders').click();

                // Assert
                await expect.poll(() => new URL(page.url()).hash).toBe('#orders');
            });
        });
    });

    test.describe('switch', () => {
        test('clicking an off list item turns the slotted switch on', async ({ page }) => {
            // Arrange
            const selectionPage = new ListItemSelectionPage(page);
            await selectionPage.gotoSwitch();

            // Act: Post starts off
            await selectionPage.listItem('Post').click();

            // Assert
            await expect(selectionPage.switchControl('Post')).toHaveJSProperty('checked', true);
        });

        test('clicking an on list item turns the slotted switch off', async ({ page }) => {
            // Arrange
            const selectionPage = new ListItemSelectionPage(page);
            await selectionPage.gotoSwitch();

            // Act: Email starts on
            await selectionPage.listItem('Email').click();

            // Assert
            await expect(selectionPage.switchControl('Email')).toHaveJSProperty('checked', false);
        });
    });

    test.describe('button', () => {
        test('clicking a button row triggers its action handler', async ({ page }) => {
            // Arrange
            const selectionPage = new ListItemSelectionPage(page);
            await selectionPage.gotoButton();

            // Act
            await selectionPage.buttonListItem('Edit profile').click();

            // Assert
            await expect(selectionPage.activationStatus()).toHaveText('Last action: Edit profile');
        });

        test('pressing Enter on the focused row triggers its action handler', async ({ page }) => {
            // Arrange
            const selectionPage = new ListItemSelectionPage(page);
            await selectionPage.gotoButton();
            await selectionPage.focusButtonAction('Change password');

            // Act
            await page.keyboard.press('Enter');

            // Assert
            await expect(selectionPage.activationStatus()).toHaveText('Last action: Change password');
        });

        test('clicking a disabled button row does not trigger its action handler', async ({ page }) => {
            // Arrange
            const selectionPage = new ListItemSelectionPage(page);
            await selectionPage.gotoButton();
            await selectionPage.buttonListItem('Edit profile').click();
            await expect(selectionPage.activationStatus()).toHaveText('Last action: Edit profile');

            // Act
            await selectionPage.buttonListItem('Sign out', 'button-list-disabled').click();

            // Assert
            await expect(selectionPage.activationStatus()).toHaveText('Last action: Edit profile');
        });

        test('pressing Space on a focused button row triggers its action handler', async ({ page }) => {
            // Arrange
            const selectionPage = new ListItemSelectionPage(page);
            await selectionPage.gotoButton();
            await selectionPage.focusButtonAction('Notification preferences');

            // Act
            await page.keyboard.press('Space');

            // Assert
            await expect(selectionPage.activationStatus()).toHaveText('Last action: Notification preferences');
        });

        test('pressing Enter on a focused disabled button row does not trigger its action handler', async ({ page }) => {
            // Arrange
            const selectionPage = new ListItemSelectionPage(page);
            await selectionPage.gotoButton();
            await selectionPage.buttonListItem('Edit profile').click();
            await expect(selectionPage.activationStatus()).toHaveText('Last action: Edit profile');

            // Act — force focus onto the disabled item's inner action element and attempt activation.
            // A disabled item must not fire even if focus is placed on it programmatically (e.g. via
            // assistive technology or a JS caller bypassing the tab order).
            await page.evaluate(() => {
                const list = document.querySelector('pie-list[data-test-id="button-list-disabled"]');
                const item = Array.from(list?.querySelectorAll('pie-list-item') ?? []).find(
                    (entry) => (entry as HTMLElement & { primaryText?: string }).primaryText === 'Sign out',
                ) as HTMLElement | null;
                (item?.shadowRoot?.querySelector('.c-listItem-action') as HTMLElement | null)?.focus();
            });
            await page.keyboard.press('Enter');

            // Assert
            await expect(selectionPage.activationStatus()).toHaveText('Last action: Edit profile');
        });

        test('clicking multiple button rows in sequence updates the activation status each time', async ({ page }) => {
            // Arrange
            const selectionPage = new ListItemSelectionPage(page);
            await selectionPage.gotoButton();

            // Act & Assert — each click must overwrite the previous state
            await selectionPage.buttonListItem('Edit profile').click();
            await expect(selectionPage.activationStatus()).toHaveText('Last action: Edit profile');

            await selectionPage.buttonListItem('Sign out').click();
            await expect(selectionPage.activationStatus()).toHaveText('Last action: Sign out');

            await selectionPage.buttonListItem('Change password').click();
            await expect(selectionPage.activationStatus()).toHaveText('Last action: Change password');
        });
    });
});
