import { test, expect } from '@playwright/test';
import { FormPage } from '../playwright/page-objects/form.page';

test.describe(`Form Page - ${process.env.APP_NAME}`, () => {
    test('should submit the correct form data', async ({ page }) => {
        // Arrange
        const expectFormData = {
            username: 'John Doe',
            email: 'foo@bar.com',
            password: 'foo',
            passwordConfirmation: 'bar',
            approveSettings: true,
            enableNotifications: true,
        };

        const formPage = new FormPage(page);

        // Act
        await formPage.goto();
        await formPage.fillForm(expectFormData);

        await formPage.submitForm();

        // Assert
        const outputData = await formPage.getOutputData();

        expect(outputData).toEqual(expectFormData);
    });
});
