import { type Locator, type Page } from '@playwright/test';

export class FormPage {
    readonly page: Page;
    readonly usernameField: Locator;
    readonly emailField: Locator;
    readonly passwordField: Locator;
    readonly passwordConfirmationField: Locator;
    readonly approveSettingsBtn: Locator;
    readonly enableNotificationsBtn: Locator;
    readonly resetBtn: Locator;
    readonly submitBtn: Locator;
    readonly outputData: Locator;

    constructor(page: Page) {
        this.page = page;
        this.usernameField = page.getByTestId('username');
        this.emailField = page.getByTestId('email');
        this.passwordField = page.getByTestId('password');
        this.passwordConfirmationField = page.getByTestId('passwordConfirmation');
        this.approveSettingsBtn = page.getByTestId('approveSettings').getByTestId('switch-component');
        this.enableNotificationsBtn = page.getByTestId('enableNotifications').getByTestId('switch-component');
        this.resetBtn = page.getByTestId('reset-btn');
        this.submitBtn = page.getByTestId('submit-btn');

        this.outputData = page.getByTestId('outputData');
    }

    async goto() {
        const url = process.env.APP_NAME === 'vanilla-app' ? '/form.html' : '/form';
        await this.page.goto(url);
    }

    async fillForm(formData: any) {
        await this.usernameField.fill(formData.username);
        await this.emailField.fill(formData.email);
        await this.passwordField.fill(formData.password);
        await this.passwordConfirmationField.fill(formData.passwordConfirmation);

        if (formData.approveSettings) {
            await this.approveSettingsBtn.click();
        }

        if (formData.enableNotifications) {
            await this.enableNotificationsBtn.click();
        }
    }

    async submitForm() {
        await this.submitBtn.click();
    }

    async resetForm() {
        await this.resetBtn.click();
    }

    async getOutputData() {
        const output = await this.outputData.textContent();
        return JSON.parse(output || '');
    }
}