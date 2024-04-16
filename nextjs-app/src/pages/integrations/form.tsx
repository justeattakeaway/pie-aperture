import React, { useState } from 'react';
import NavigationLayout from '@/layout/navigation';
import { PieFormLabel } from '@justeattakeaway/pie-form-label/dist/react';
import { PieSwitch } from '@justeattakeaway/pie-switch/dist/react';
import { PieButton } from '@justeattakeaway/pie-button/dist/react';
import { PieInput } from '@justeattakeaway/pie-input/dist/react';
import { IconEmail } from '@justeattakeaway/pie-icons-webc/dist/react/IconEmail';
import { IconLaptop } from '@justeattakeaway/pie-icons-webc/dist/react/IconLaptop';
import { IconPhone } from '@justeattakeaway/pie-icons-webc/dist/react/IconPhone';
import { IconUser } from '@justeattakeaway/pie-icons-webc/dist/react/IconUser';
import { IconNumberSymbol } from '@justeattakeaway/pie-icons-webc/dist/react/IconNumberSymbol';
import { IconKey } from '@justeattakeaway/pie-icons-webc/dist/react/IconKey';

export default function Form() {
    const [approveSettings, setApproveSettings] = useState(false);
    const [enableNotifications, setNotifications] = useState(false);
    const [favouriteNumber, setFavouriteNumber] = useState('');
    const [favouriteNumberValidationMessage, setFavouriteNumberValidationMessage] = useState('');

    const [formDataDisplay, setFormDataDisplay] = useState<string | null>(null);

    const [username, setUsername] = useState('');
    const [url, setUrl] = useState('');
    const [tel, setTel] = useState('');

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');

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

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = {
            approveSettings,
            enableNotifications,
            username,
            favouriteNumber,
            email,
            url,
            tel,
            password
        };

        setFormDataDisplay(JSON.stringify(data, null, 2));
    };

    return (
        <NavigationLayout title="Form Test Page">
            <form className="form" id="testForm" onSubmit={handleSubmit}>
                <PieFormLabel for="username">
                    Username:
                </PieFormLabel>
                <PieInput
                    className="form-field"
                    id="username"
                    data-test-id="username"
                    name="username"
                    value={username}
                    onInput={handleUsernameInput as any}
                    type="text">
                    <IconUser slot="leading"></IconUser>
                </PieInput>

                <PieFormLabel for="favouriteNumber">
                    Favourite Number:
                </PieFormLabel>
                <PieInput
                    className="form-field"
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
                    <IconNumberSymbol slot="leading"></IconNumberSymbol>
                </PieInput>

                <PieFormLabel for="email">
                    Email:
                </PieFormLabel>
                <PieInput
                    className="form-field"
                    id="email"
                    data-test-id="email"
                    name="email"
                    value={email}
                    onInput={handleEmailInput as any}
                    type="email">
                    <IconEmail slot="leading"></IconEmail>
                </PieInput>

                <PieFormLabel for="url">
                    Website:
                </PieFormLabel>
                <PieInput
                    className="form-field"
                    id="url"
                    data-test-id="url"
                    name="url"
                    value={url}
                    onInput={handleUrlInput as any}
                    type="url">
                    <IconLaptop slot="leading"></IconLaptop>
                </PieInput>

                <PieFormLabel for="tel">
                    Telephone:
                </PieFormLabel>
                <PieInput
                    className="form-field"
                    id="tel"
                    data-test-id="tel"
                    name="tel"
                    value={tel}
                    onInput={handleTelInput as any}
                    type="tel">
                    <IconPhone slot="leading"></IconPhone>
                </PieInput>

                <PieFormLabel for="password">
                    Password:
                </PieFormLabel>
                <PieInput
                    className="form-field"
                    id="password"
                    data-test-id="password"
                    name="password"
                    value={password}
                    onInput={handlePasswordInput as any}
                    type="password">
                    <IconKey slot="leading"></IconKey>
                </PieInput>

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
