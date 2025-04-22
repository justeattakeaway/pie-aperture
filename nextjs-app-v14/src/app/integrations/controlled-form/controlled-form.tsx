'use client';

import React, { useState } from 'react';
import NavigationLayout from '@/app/layout/navigation';
import { PieFormLabel } from '@justeattakeaway/pie-webc/react/form-label.js';
import { PieRadio } from '@justeattakeaway/pie-webc/react/radio.js';
import { PieRadioGroup } from '@justeattakeaway/pie-webc/react/radio-group.js';
import { PieSwitch } from '@justeattakeaway/pie-webc/react/switch.js';
import { PieButton } from '@justeattakeaway/pie-webc/react/button.js';
import { PieTextInput } from '@justeattakeaway/pie-webc/react/text-input.js';
import { PieTextarea } from '@justeattakeaway/pie-webc/react/textarea.js';
import { PieCheckbox } from '@justeattakeaway/pie-webc/react/checkbox.js';
import { PieCheckboxGroup } from '@justeattakeaway/pie-webc/react/checkbox-group.js';
import { PieSelect, SelectProps } from '@justeattakeaway/pie-webc/react/select.js';
import { IconEmail } from '@justeattakeaway/pie-icons-webc/dist/react/IconEmail.js';
import { IconLaptop } from '@justeattakeaway/pie-icons-webc/dist/react/IconLaptop.js';
import { IconPhone } from '@justeattakeaway/pie-icons-webc/dist/react/IconPhone.js';
import { IconUser } from '@justeattakeaway/pie-icons-webc/dist/react/IconUser.js';
import { IconNumberSymbol } from '@justeattakeaway/pie-icons-webc/dist/react/IconNumberSymbol.js';
import { IconKey } from '@justeattakeaway/pie-icons-webc/dist/react/IconKey.js';
import '@/styles/form.scss';

const foodOptions: SelectProps['options'] = [
    {
        tag: 'option',
        text: 'Select a value',
        value: '',
    },
    {
        tag: 'option',
        text: 'Burger',
        value: 'burger',
    }
];

export default function ControlledForm() {
    const [approveSettings, setApproveSettings] = useState(false);
    const [enableNotifications, setNotifications] = useState(false);
    const [newsletterSignup, setNewsletterSignup] = useState(false);
    const [contactByPhone, setContactByPhone] = useState(false);
    const [contactByEmail, setContactByEmail] = useState(false);
    const [favouriteNumber, setFavouriteNumber] = useState('');
    const [favouriteNumberValidationMessage, setFavouriteNumberValidationMessage] = useState('');
    const [favouriteTakeaway, setFavouriteTakeaway] = useState('');
    const [favouriteFood, setFavouriteFood] = useState('');

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

    const handleFavouriteTakeaway = (event: CustomEvent) => {
        const newFavourite = (event.target as HTMLInputElement).value;
        setFavouriteTakeaway(newFavourite);
    }

    const handleFavouriteFoodChange = (event: CustomEvent) => {
        setFavouriteFood(event.detail.sourceEvent.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = {
            approveSettings,
            enableNotifications,
            newsletterSignup,
            contactByEmail,
            contactByPhone,
            username,
            favouriteNumber,
            email,
            url,
            tel,
            password,
            favouriteTakeaway,
            favouriteFood,
            description,
        };

        setFormDataDisplay(JSON.stringify(data, null, 2));
    };

    return (
        <NavigationLayout title="Form Test Page">
            <form className="form" id="testForm" onSubmit={handleSubmit}>
                <PieFormLabel for="username">
                    Username:
                </PieFormLabel>
                <PieTextInput
                    className="form-field"
                    id="username"
                    data-test-id="username"
                    name="username"
                    value={username}
                    onInput={handleUsernameInput}
                    type="text">
                    <IconUser slot="leadingIcon"></IconUser>
                </PieTextInput>

                <PieFormLabel for="favouriteNumber">
                    Favourite Number:
                </PieFormLabel>
                <PieTextInput
                    className="form-field"
                    id="favouriteNumber"
                    data-test-id="favouriteNumber"
                    name="favouriteNumber"
                    min={-5}
                    max={200}
                    value={favouriteNumber}
                    onInput={handleFavouriteNumberInput}
                    type="number"
                    assistiveText={favouriteNumberValidationMessage}
                    status={favouriteNumberValidationMessage ? 'error' : 'default'}
                >
                    <IconNumberSymbol slot="leadingIcon"></IconNumberSymbol>
                </PieTextInput>

                <PieFormLabel for="email">
                    Email:
                </PieFormLabel>
                <PieTextInput
                    className="form-field"
                    id="email"
                    data-test-id="email"
                    name="email"
                    value={email}
                    onInput={handleEmailInput}
                    type="email">
                    <IconEmail slot="leadingIcon"></IconEmail>
                </PieTextInput>

                <PieFormLabel for="url">
                    Website:
                </PieFormLabel>
                <PieTextInput
                    className="form-field"
                    id="url"
                    data-test-id="url"
                    name="url"
                    value={url}
                    onInput={handleUrlInput}
                    type="url">
                    <IconLaptop slot="leadingIcon"></IconLaptop>
                </PieTextInput>

                <PieFormLabel for="tel">
                    Telephone:
                </PieFormLabel>
                <PieTextInput
                    className="form-field"
                    id="tel"
                    data-test-id="tel"
                    name="tel"
                    value={tel}
                    onInput={handleTelInput}
                    type="tel">
                    <IconPhone slot="leadingIcon"></IconPhone>
                </PieTextInput>

                <PieFormLabel for="password">
                    Password:
                </PieFormLabel>
                <PieTextInput
                    className="form-field"
                    id="password"
                    data-test-id="password"
                    name="password"
                    value={password}
                    onInput={handlePasswordInput}
                    type="password">
                    <IconKey slot="leadingIcon"></IconKey>
                </PieTextInput>

                <PieFormLabel for="description">
                    Description:
                </PieFormLabel>
                <PieTextarea
                    className="form-field"
                    id="description"
                    data-test-id="description"
                    name="description"
                    placeholder="Write something about yourself..."
                    value={description}
                    onInput={handleDescriptionTextarea} />

                <PieFormLabel for="favouriteFood">
                    Favourite Food:
                </PieFormLabel>
                <PieSelect
                    className="form-field"
                    id="favouriteFood"
                    data-test-id="favouriteFood"
                    name="favouriteFood"
                    options={foodOptions}
                    onChange={handleFavouriteFoodChange}
                />

                <div className="form-controls">
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

                    <PieRadioGroup name="favouriteTakeaway" onChange={handleFavouriteTakeaway}>
                        <PieFormLabel slot="label">Choose a radio button:</PieFormLabel>
                        <PieRadio value="chinese">Chinese</PieRadio>
                        <PieRadio data-test-id="shawarma" value="shawarma">Shawarma</PieRadio>
                    </PieRadioGroup>
                </div>
                <div className='form-btns'>
                    <PieButton className="form-btn" data-test-id="reset-btn" variant="secondary" type="reset">Reset</PieButton>
                    <PieButton className="form-btn" data-test-id="submit-btn" type="submit">Submit</PieButton>
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
