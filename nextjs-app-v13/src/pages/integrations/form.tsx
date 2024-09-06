import React, { useState } from 'react';
import NavigationLayout from '@/layout/navigation';
import { PieFormLabel } from '@justeattakeaway/pie-webc/react/form-label.js';
import { PieSwitch } from '@justeattakeaway/pie-webc/react/switch.js';
import { PieButton } from '@justeattakeaway/pie-webc/react/button.js';
import { PieTextInput } from '@justeattakeaway/pie-webc/react/text-input.js';
import { PieTextarea } from '@justeattakeaway/pie-webc/react/textarea.js';
import { PieCheckbox } from '@justeattakeaway/pie-webc/react/checkbox.js';
import { PieCheckboxGroup } from "@justeattakeaway/pie-webc/react/checkbox-group.js";
import { IconEmail } from '@justeattakeaway/pie-icons-webc/dist/react/IconEmail.js';
import { IconLaptop } from '@justeattakeaway/pie-icons-webc/dist/react/IconLaptop.js';
import { IconPhone } from '@justeattakeaway/pie-icons-webc/dist/react/IconPhone.js';
import { IconUser } from '@justeattakeaway/pie-icons-webc/dist/react/IconUser.js';
import { IconNumberSymbol } from '@justeattakeaway/pie-icons-webc/dist/react/IconNumberSymbol.js';
import { IconKey } from '@justeattakeaway/pie-icons-webc/dist/react/IconKey.js';
import styles from '@/styles/form.module.scss';

export default function Form() {
    const [approveSettings, setApproveSettings] = useState(false);
    const [enableNotifications, setNotifications] = useState(false);
    const [newsletterSignup, setNewsletterSignup] = useState(false);
    const [contactByPhone, setContactByPhone] = useState(false);
    const [contactByEmail, setContactByEmail] = useState(false);
    const [favouriteNumber, setFavouriteNumber] = useState('');
    const [favouriteNumberValidationMessage, setFavouriteNumberValidationMessage] = useState('');

    const [formDataDisplay, setFormDataDisplay] = useState<string | null>(null);

    const [username, setUsername] = useState('');
    const [url, setUrl] = useState('');
    const [tel, setTel] = useState('');

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [description, setDescription] = useState('');

    const handleUsernameInput = (event: InputEvent) => {
        setUsername((event.target as HTMLInputElement).value);
    }

    const handleFavouriteNumberInput = (event: InputEvent) => {
        const inputElement = event.target as HTMLInputElement;
        const value = inputElement.value;

        // Set the state based on the input. If the input is empty, value will be '', effectively clearing the input field.
        setFavouriteNumber(value);

        let validationMessage = '';

        if (value && inputElement.validity.rangeUnderflow) {
            validationMessage = 'The favourite number is too low. Please pick a number between -5 and 200.';
        } else if (value && inputElement.validity.rangeOverflow) {
            validationMessage = 'The favourite number is too high. Please pick a number between -5 and 200.';
        }

        setFavouriteNumberValidationMessage(validationMessage);
    };

    const handleEmailInput = (event: InputEvent) => {
        setEmail((event.target as HTMLInputElement).value);
    }

    const handleUrlInput = (event: InputEvent) => {
        setUrl((event.target as HTMLInputElement).value);
    }

    const handleTelInput = (event: InputEvent) => {
        setTel((event.target as HTMLInputElement).value);
    }

    const handlePasswordInput = (event: InputEvent) => {
        setPassword((event.target as HTMLInputElement).value);
    }

    const handleApproveSettingsChange = () => {
        setApproveSettings(current => !current);
    };

    const handleNotificationsChange = () => {
        setNotifications(current => !current);
    };

    const handleNewsletterSignup = () => {
        setNewsletterSignup(current => !current);
    };

    const handleDescriptionTextarea = (event: InputEvent) => {
        setDescription((event.target as HTMLTextAreaElement).value);
    }

    const handleContactByPhone = () => {
        setContactByPhone(current => !current);
    };

    const handleContactByEmail = () => {
        setContactByEmail(current => !current);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const data = {
            approveSettings,
            enableNotifications,
            newsletterSignup,
            username,
            favouriteNumber,
            contactByEmail,
            contactByPhone,
            email,
            url,
            tel,
            password,
            description
        };

        setFormDataDisplay(JSON.stringify(data, null, 2));
    };

    return (
        <NavigationLayout title="Form Test Page">
            <form className={styles.form} id="testForm" onSubmit={handleSubmit}>
                <PieFormLabel for="username">
                    Username:
                </PieFormLabel>
                <PieTextInput
                    className={styles.formField}
                    id="username"
                    data-test-id="username"
                    name="username"
                    value={username}
                    onInput={handleUsernameInput as any}
                    type="text">
                    <IconUser slot="leadingIcon"></IconUser>
                </PieTextInput>

                <PieFormLabel for="favouriteNumber">
                    Favourite Number:
                </PieFormLabel>
                <PieTextInput
                    className={styles.formField}
                    id="favouriteNumber"
                    data-test-id="favouriteNumber"
                    name="favouriteNumber"
                    min={-5}
                    max={200}
                    value={favouriteNumber}
                    onInput={handleFavouriteNumberInput as any} // Ensure type compatibility
                    type="number"
                    assistiveText={favouriteNumberValidationMessage}
                    status={favouriteNumberValidationMessage ? 'error' : undefined}
                >
                    <IconNumberSymbol slot="leadingIcon"></IconNumberSymbol>
                </PieTextInput>

                <PieFormLabel for="email">
                    Email:
                </PieFormLabel>
                <PieTextInput
                    className={styles.formField}
                    id="email"
                    data-test-id="email"
                    name="email"
                    value={email}
                    onInput={handleEmailInput as any}
                    type="email">
                    <IconEmail slot="leadingIcon"></IconEmail>
                </PieTextInput>

                <PieFormLabel for="url">
                    Website:
                </PieFormLabel>
                <PieTextInput
                    className={styles.formField}
                    id="url"
                    data-test-id="url"
                    name="url"
                    value={url}
                    onInput={handleUrlInput as any}
                    type="url">
                    <IconLaptop slot="leadingIcon"></IconLaptop>
                </PieTextInput>

                <PieFormLabel for="tel">
                    Telephone:
                </PieFormLabel>
                <PieTextInput
                    className={styles.formField}
                    id="tel"
                    data-test-id="tel"
                    name="tel"
                    value={tel}
                    onInput={handleTelInput as any}
                    type="tel">
                    <IconPhone slot="leadingIcon"></IconPhone>
                </PieTextInput>

                <PieFormLabel for="password">
                    Password:
                </PieFormLabel>
                <PieTextInput
                    className={styles.formField}
                    id="password"
                    data-test-id="password"
                    name="password"
                    value={password}
                    onInput={handlePasswordInput as any}
                    type="password">
                    <IconKey slot="leadingIcon"></IconKey>
                </PieTextInput>

                <PieFormLabel for="description">
                    Description:
                </PieFormLabel>
                <PieTextarea
                    className={styles.formField}
                    id="description"
                    data-test-id="description"
                    name="description"
                    placeholder="Write something about yourself..."
                    value={description}
                    onInput={handleDescriptionTextarea as any}/>

                <div className={styles.formControls}>
                    <PieFormLabel for="approveSettings">
                        Approve settings
                    </PieFormLabel>
                    <PieSwitch
                        id="approveSettings"
                        data-test-id="approveSettings"
                        name="approveSettings"
                        checked={approveSettings}
                        onChange={handleApproveSettingsChange}
                    />
                    <PieSwitch
                        label="Enable Notifications"
                        id="enableNotifications"
                        data-test-id="enableNotifications"
                        name="enableNotifications"
                        checked={enableNotifications}
                        onChange={handleNotificationsChange}
                    />
                    <PieCheckbox
                        id="newsletterSignup"
                        data-test-id="newsletterSignup"
                        name="newsletterSignup"
                        checked={newsletterSignup}
                        onChange={handleNewsletterSignup}>
                        Receive discounts, loyalty offers and other updates via email
                    </PieCheckbox>

                    <PieCheckboxGroup>
                        <PieFormLabel slot="label">Choose the way we can contact you:</PieFormLabel>
                        <PieCheckbox
                            id="contactByEmail"
                            data-test-id="contactByEmail"
                            checked={contactByEmail}
                            name="contactByEmail"
                            onChange={handleContactByEmail}>
                            Contact By Email
                        </PieCheckbox>
                        <PieCheckbox
                            id="contactByPhone"
                            data-test-id="contactByPhone"
                            checked={contactByPhone}
                            name="contactByPhone"
                            onChange={handleContactByPhone}>
                            Contact By Phone
                        </PieCheckbox>
                    </PieCheckboxGroup>
                </div>
                <div className={styles.formBtns}>
                    <PieButton className={styles.formBtn} data-test-id="reset-btn" variant="secondary" type="reset">Reset</PieButton>
                    <PieButton className={styles.formBtn} data-test-id="submit-btn" type="submit">Submit</PieButton>
                </div>
            </form>
            {formDataDisplay && (
                <div id="output">
                    <h2>Form Data</h2>
                    <pre data-test-id="outputData">{formDataDisplay}</pre>
                </div>
            )}
        </NavigationLayout>
    );
}
