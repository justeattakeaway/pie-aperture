import React, { useState } from 'react';
import { PieSwitch } from '@justeattakeaway/pie-switch/dist/react';
import { PieButton } from '@justeattakeaway/pie-button/dist/react';

export default function Form() {
    const [approveSettings, setApproveSettings] = useState(false);
    const [notifications, setNotifications] = useState(false);
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
            notifications, 
            username, 
            email, 
            password, 
            passwordConfirmation
        };
        
        setFormDataDisplay(JSON.stringify(data, null, 2));
    };

    return (
        <>
            <h1>PIE Form Test Page</h1>
            <form className="form" id="testForm" onSubmit={handleSubmit}>
                <label htmlFor="username">
                    Username:
                </label>
                <input
                    className="form-field"
                    id="username"
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
                    name="email"
                    onChange={handleEmailChange}
                    type="email" />
                
                <label htmlFor="password">
                    Password:
                </label>
                <input
                    className="form-field"
                    id="password"
                    name="password"
                    onChange={handlePasswordChange}
                    type="password" />

                <label htmlFor="passwordConfirmation">
                    Confirm Password:
                </label>
                <input
                    className="form-field"
                    id="passwordConfirmation"
                    name="passwordConfirmation"
                    onChange={handlePasswordConfirmationChange}
                    type="password" />

                <div className="form-controls">
                    <PieSwitch
                        label="Approve settings"
                        id="approveSettings"
                        name="approveSettings"
                        checked={approveSettings}
                        required
                        onChange={handleApproveSettingsChange}
                    />
                    <PieSwitch
                        label="Enable Notifications"
                        id="notifications"
                        name="notifications"
                        checked={notifications}
                        onChange={handleNotificationsChange}
                    />
                </div>
                <div className='form-btns'>
                    <PieButton className="form-btn" variant="secondary" type="reset">Reset</PieButton>
                    <PieButton className="form-btn" type="submit">Submit</PieButton>
                </div>
            </form>
            {formDataDisplay && (
                <div id="output">
                    <h2>Form Data</h2>
                    <pre>{formDataDisplay}</pre>
                </div>
            )}
        </>
    );
}
