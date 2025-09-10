import { test, expect } from '@playwright/test';
import { FormPage, type TestFormData } from '../playwright/page-objects/form.page';

const { APP_NAME } = process.env;

const sampleFormData: TestFormData = {
    username: 'John Doe',
    favouriteNumber: '42',
    email: 'foo@bar.com',
    url: 'https://example.com',
    tel: '1234567890',
    password: 'foo',
    favouriteTakeaway: 'shawarma',
    approveSettings: true,
    enableNotifications: true,
    favouriteFood: "burger",
    newsletterSignup: true,
    description: 'foo',
    contactByEmail: true,
    contactByPhone: true,
};

const getFormUrls = (): string[] => {
    switch (APP_NAME) {
        case 'vanilla-app':
            return ['integrations/form.html'];
        case 'nextjs-app-v14':
            return ['integrations/uncontrolled-form', 'integrations/controlled-form'];
        case 'nuxt-app':
            return ['integrations/form'];
        default:
            return ['integrations/form'];
    }
};

test.describe(`Form Page - ${APP_NAME}`, () => {
    const formUrls = getFormUrls();
    
    formUrls.forEach(url => {
        test(`should submit the correct data for ${APP_NAME} / ${url}`, async ({ page }) => {
            // Arrange
            const expectFormData = { ...sampleFormData };
            const formPage = new FormPage(page);

            // Act
            await formPage.goto(url);
            await formPage.fillForm(expectFormData);
            await formPage.submitForm();

            // Assert
            const outputData = await formPage.getOutputData();
            expect(outputData).toEqual(expectFormData);
        });

        test.describe(`when favourite food is selected once`, () => {
            test(`it should fire an event with the expected value for ${APP_NAME} / ${url}`, async ({page}) => {
                // Arrange
                const formPage = new FormPage(page);

                // Act
                await formPage.goto(url);
                await formPage.favouriteFood.evaluate((el) => {
                    el.addEventListener('change', (event) => {
                        window['eventTargetValue'] = (event.target as HTMLInputElement).value;
                    });
                });
                await formPage.selectFavouriteFood('burger');
                
                // Assert
                const eventTargetValue = await formPage.page.evaluate((element) => window['eventTargetValue']);
                expect(eventTargetValue).toBe('burger');
            })
        })

        test.describe(`when favourite food is selected twice`, () => {
            test(`it should fire an event with the expected value for ${APP_NAME} / ${url}`, async ({page}) => {
                // Arrange
                const formPage = new FormPage(page);

                // Act
                await formPage.goto(url);
                await formPage.favouriteFood.evaluate((el) => {
                    el.addEventListener('change', (event) => {
                        window['eventTargetValue'] = (event.target as HTMLInputElement).value;
                    });
                });
                await formPage.selectFavouriteFood('burger');
                await formPage.selectFavouriteFood('pizza');
                
                // Assert
                const eventTargetValue = await formPage.page.evaluate((element) => window['eventTargetValue']);
                expect(eventTargetValue).toBe('pizza');
            })
        })
    });
});