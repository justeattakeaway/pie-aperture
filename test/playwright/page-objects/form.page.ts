import { type Locator, type Page } from '@playwright/test';
const { APP_NAME } = process.env;

export type TestFormData = {
    username: string;
    favouriteNumber: string;
    email: string;
    url: string;
    tel: string;
    password: string;
    favouriteTakeaway: string;
    approveSettings: boolean;
    enableNotifications: boolean;
    favouriteFood: string;
    newsletterSignup: boolean;
    description: string;
    contactByEmail: boolean;
    contactByPhone: boolean;
};

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
    readonly favouriteFood: Locator;
    readonly resetBtn: Locator;
    readonly submitBtn: Locator;
    readonly outputData: Locator;
    readonly newsletterSignupCheckbox: Locator;
    readonly contactByEmailCheckbox: Locator;
    readonly contactByPhoneCheckbox: Locator;
    readonly favouriteTakeaway: Locator;

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
        this.favouriteFood = page.getByTestId('favouriteFood');
        this.newsletterSignupCheckbox = page.getByTestId('newsletterSignup').getByTestId('pie-checkbox-label');
        this.contactByEmailCheckbox = page.getByTestId('contactByEmail').getByTestId('pie-checkbox-label');
        this.contactByPhoneCheckbox = page.getByTestId('contactByPhone').getByTestId('pie-checkbox-label');
        this.favouriteTakeaway = page.getByTestId('shawarma').getByTestId('pie-radio-input');
        this.resetBtn = page.getByTestId('reset-btn');
        this.submitBtn = page.getByTestId('submit-btn');

        this.outputData = page.getByTestId('outputData');
    }

    async goto(urlPath: string) {
        await this.page.goto(urlPath);
    }

    async fillForm(formData: TestFormData) {
        await this.usernameField.locator('input').fill(formData.username);
        await this.favouriteNumberField.locator('input').fill(formData.favouriteNumber);
        await this.emailField.locator('input').fill(formData.email);
        await this.urlField.locator('input').fill(formData.url);
        await this.telField.locator('input').fill(formData.tel);
        await this.passwordField.locator('input').fill(formData.password);
        await this.descriptionField.locator('textarea').fill(formData.description);
        await this.approveSettingsSwitch.click();
        await this.enableNotificationsSwitch.click();
        await this.favouriteFood.locator('select').selectOption('burger');
        await this.newsletterSignupCheckbox.click();
        await this.favouriteTakeaway.click();
        await this.contactByEmailCheckbox.click();
        await this.contactByPhoneCheckbox.click();
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