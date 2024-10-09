import { type Locator, type Page } from '@playwright/test';
const { APP_NAME } = process.env;

export class FormPage {
    readonly page: Page;
    readonly usernameField: Locator;
    readonly favouriteNumberField: Locator;
    readonly emailField: Locator;
    readonly urlField: Locator;
    readonly telField: Locator;
    readonly passwordField: Locator;
    readonly descriptionField: Locator;
    readonly approveSettingsSwitch: Locator;
    readonly enableNotificationsSwitch: Locator;
    readonly resetBtn: Locator;
    readonly submitBtn: Locator;
    readonly outputData: Locator;
    readonly newsletterSignupCheckbox: Locator;
    readonly contactByEmailCheckbox: Locator;
    readonly contactByPhoneCheckbox: Locator;
    readonly radioButton2: Locator;

    constructor(page: Page) {
        this.page = page;
        this.usernameField = page.getByTestId('username');
        this.favouriteNumberField = page.getByTestId('favouriteNumber');
        this.emailField = page.getByTestId('email');
        this.urlField = page.getByTestId('url');
        this.telField = page.getByTestId('tel');
        this.passwordField = page.getByTestId('password');
        this.descriptionField = page.getByTestId('description');
        this.approveSettingsSwitch = page.getByTestId('approveSettings').getByTestId('switch-component');
        this.enableNotificationsSwitch = page.getByTestId('enableNotifications').getByTestId('switch-component');
        this.newsletterSignupCheckbox = page.getByTestId('newsletterSignup').getByTestId('checkbox-component');
        this.contactByEmailCheckbox = page.getByTestId('contactByEmail').getByTestId('checkbox-component');
        this.contactByPhoneCheckbox = page.getByTestId('contactByPhone').getByTestId('checkbox-component');
        this.radioButton2 = page.getByTestId('radio-2').getByTestId('pie-radio');
        this.resetBtn = page.getByTestId('reset-btn');
        this.submitBtn = page.getByTestId('submit-btn');

        this.outputData = page.getByTestId('outputData');
    }

    async goto() {
        let url = 'integrations/form';
        const formattedUrl = APP_NAME === 'vanilla-app' ? `${url}.html` : url;
        await this.page.goto(formattedUrl);
    }

    async fillForm(formData: any) {
        await this.usernameField.locator('input').fill(formData.username);
        await this.favouriteNumberField.locator('input').fill(formData.favouriteNumber);
        await this.emailField.locator('input').fill(formData.email);
        await this.urlField.locator('input').fill(formData.url);
        await this.telField.locator('input').fill(formData.tel);
        await this.passwordField.locator('input').fill(formData.password);
        await this.descriptionField.locator('textarea').fill(formData.description);
        await this.approveSettingsSwitch.click();
        await this.enableNotificationsSwitch.click();
        await this.newsletterSignupCheckbox.click();
        await this.contactByEmailCheckbox.click();
        await this.contactByPhoneCheckbox.click();
        await this.radioButton2.click();
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