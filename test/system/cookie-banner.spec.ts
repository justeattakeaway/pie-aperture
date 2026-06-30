import { test, expect, type Page } from '@playwright/test';

const { APP_NAME } = process.env;
const isNextJsAppV15 = APP_NAME === 'nextjs-app-v15';

test.describe('Cookie Banner personalized content', () => {
    test.skip(!isNextJsAppV15, 'Runs only against nextjs-app-v15');

    async function openManagePreferences(page: Page) {
        await page.getByTestId('actions-manage-prefs').click();
        await expect(page.getByRole('dialog')).toBeVisible();
    }

    test('uses built-in copy when no override props are provided', async ({ page }) => {
        await page.goto('components/cookie-banner');
        await openManagePreferences(page);

        await expect(page.getByTestId('personalized-label')).toHaveText('Personlige (målretning og annoncering)');
        await expect(page.getByTestId('personalized-description')).toContainText('Disse markedsføringscookier bruges til at skræddersy leveringen af oplysninger');
    });

    test('supports overriding the personalized label', async ({ page }) => {
        await page.goto('components/cookie-banner/personalized-label');
        await openManagePreferences(page);

        await expect(page.getByTestId('personalized-label')).toHaveText('Custom personalized label');
        await expect(page.getByTestId('personalized-description')).toContainText('Disse markedsføringscookier bruges til at skræddersy leveringen af oplysninger');
    });

    test('supports overriding the personalized description with HTML content', async ({ page }) => {
        await page.goto('components/cookie-banner/personalized-description');
        await openManagePreferences(page);

        const personalizedDescription = page.getByTestId('personalized-description');

        await expect(page.getByTestId('personalized-label')).toHaveText('Personlige (målretning og annoncering)');
        await expect(personalizedDescription).toContainText('Read our privacy policy for more info.');
        await expect(personalizedDescription.getByRole('link', { name: 'privacy policy' })).toHaveAttribute('href', 'https://example.com/privacy');
    });
});
