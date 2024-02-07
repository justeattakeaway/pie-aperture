import { test, expect } from '@playwright/test';

test.describe('Form Page', () => {
    test('should submit the correct form data', async ({ page }) => {
        // Arrange
        const expectFormData = {
            username: 'John Doe',
            email: 'foo@bar.com',
            password: 'foo',
            passwordConfirmation: 'bar',
            approveSettings: true,
            notifications: true
        };

        // Act
        await page.goto('/form');

        await page.fill('#username', expectFormData.username);
        await page.fill('#email', expectFormData.email);
        await page.fill('#password', expectFormData.password);
        await page.fill('#passwordConfirmation', expectFormData.passwordConfirmation);

        // Move down to the approveSettings switch and enable it (click method won't work)
        await page.keyboard.press('Tab');
        await page.keyboard.press('Space');

        // Move down to the notifications switch and enable it (click method won't work)
        await page.keyboard.press('Tab');
        await page.keyboard.press('Space');

        await page.click('#submit');

        // Assert
        const output = await page.textContent('#outputData');
        const outputData = JSON.parse(output || '');

        expect(outputData).toEqual(expectFormData);
    });
});
