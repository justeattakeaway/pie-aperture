import React, { useState } from 'react';
import { PieSwitch } from '@justeattakeaway/pie-switch/dist/react';
import { PieButton } from '@justeattakeaway/pie-button/dist/react';

export default function Form() {
    const [approveSettings, setApproveSettings] = useState(false);
    const [enableNotifications, setNotifications] = useState(false);
    const [formDataDisplay, setFormDataDisplay] = useState<string | null>(null);

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');

    const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);   
    };

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);   
    }

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);   
    }

    const handlePasswordConfirmationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPasswordConfirmation(event.target.value);   
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
            email, 
            password, 
            passwordConfirmation
        };
        
        setFormDataDisplay(JSON.stringify(data, null, 2));
    };

    return (
        <>
            <h1>NextJS - PIE Form Test Page</h1>
            <form className="form" id="testForm" onSubmit={handleSubmit}>
                <label htmlFor="username">
                    Username:
                </label>
                <input
                    className="form-field"
                    id="username"
                    data-test-id="username"
                    name="username"
                    value={username}
                    onChange={handleUsernameChange}
                    type="text" />

                <label htmlFor="email">
                    Email:
                </label>
                <input
                    className="form-field"
                    id="email"
                    data-test-id="email"
                    name="email"
                    onChange={handleEmailChange}
                    type="email" />
                
                <label htmlFor="password">
                    Password:
                </label>
                <input
                    className="form-field"
                    id="password"
                    data-test-id="password"
                    name="password"
                    onChange={handlePasswordChange}
                    type="password" />

                <label htmlFor="passwordConfirmation">
                    Confirm Password:
                </label>
                <input
                    className="form-field"
                    id="passwordConfirmation"
                    data-test-id="passwordConfirmation"
                    name="passwordConfirmation"
                    onChange={handlePasswordConfirmationChange}
                    type="password" />

                <div className="form-controls">
                    <PieSwitch
                        label="Approve settings"
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
        </>
    );
}
