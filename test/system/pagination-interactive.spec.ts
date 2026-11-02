import { test, expect } from '@playwright/test';
import { PaginationInteractivePage } from '../playwright/page-objects/pagination-interactive.page';

const PAGE_SIZE = 10;
const TOTAL_PAGES = 10;

// Mirrors the fake dataset rendered by the demo page.
const expectedItems = (pageNumber: number) =>
    Array.from(
        { length: PAGE_SIZE },
        (_, index) => `Item ${(pageNumber - 1) * PAGE_SIZE + index + 1}`,
    );

test.describe(`Pagination Interactive Page - ${process.env.APP_NAME}`, () => {

    test('should render the first page of mock data and disable "previous"', async ({ page }) => {
        // Arrange
        const paginationPage = new PaginationInteractivePage(page);

        // Act
        await paginationPage.goto();

        // Assert
        await expect(paginationPage.status).toHaveText(`Page 1 of ${TOTAL_PAGES}`);
        await expect(paginationPage.items).toHaveText(expectedItems(1));
        await expect(paginationPage.previousButton).toBeDisabled();
        await expect(paginationPage.nextButton).toBeEnabled();
    });

    test('should move forward through pages using the "next" control', async ({ page }) => {
        // Arrange
        const paginationPage = new PaginationInteractivePage(page);
        await paginationPage.goto();

        // Act
        await paginationPage.goNext();

        // Assert
        await expect(paginationPage.status).toHaveText(`Page 2 of ${TOTAL_PAGES}`);
        await expect(paginationPage.items).toHaveText(expectedItems(2));

        // Act
        await paginationPage.goNext();

        // Assert
        await expect(paginationPage.status).toHaveText(`Page 3 of ${TOTAL_PAGES}`);
        await expect(paginationPage.items).toHaveText(expectedItems(3));
    });

    test('should jump directly to a specific page number', async ({ page }) => {
        // Arrange
        const paginationPage = new PaginationInteractivePage(page);
        await paginationPage.goto();

        // Act
        await paginationPage.goToPage(5);

        // Assert
        await expect(paginationPage.status).toHaveText(`Page 5 of ${TOTAL_PAGES}`);
        await expect(paginationPage.items).toHaveText(expectedItems(5));
    });

    test('should move backward through pages using the "previous" control', async ({ page }) => {
        // Arrange
        const paginationPage = new PaginationInteractivePage(page);
        await paginationPage.goto();
        await paginationPage.goToPage(5);

        // Act
        await paginationPage.goPrevious();

        // Assert
        await expect(paginationPage.status).toHaveText(`Page 4 of ${TOTAL_PAGES}`);
        await expect(paginationPage.items).toHaveText(expectedItems(4));
    });

    test('should render the last page and disable "next"', async ({ page }) => {
        // Arrange
        const paginationPage = new PaginationInteractivePage(page);
        await paginationPage.goto();

        // Act
        await paginationPage.goToPage(TOTAL_PAGES);

        // Assert
        await expect(paginationPage.status).toHaveText(`Page ${TOTAL_PAGES} of ${TOTAL_PAGES}`);
        await expect(paginationPage.items).toHaveText(expectedItems(TOTAL_PAGES));
        await expect(paginationPage.nextButton).toBeDisabled();
        await expect(paginationPage.previousButton).toBeEnabled();
    });

    test('should keep the current data when the active page is clicked', async ({ page }) => {
        // Arrange
        const paginationPage = new PaginationInteractivePage(page);
        await paginationPage.goto();
        await paginationPage.goToPage(2);

        // Act
        await paginationPage.goToPage(2);

        // Assert
        await expect(paginationPage.status).toHaveText(`Page 2 of ${TOTAL_PAGES}`);
        await expect(paginationPage.items).toHaveText(expectedItems(2));
    });
});
