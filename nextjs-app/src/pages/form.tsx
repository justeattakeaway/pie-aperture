import React, { useState } from 'react';
import { PieSwitch } from '@justeattakeaway/pie-switch/dist/react';
import { PieButton } from '@justeattakeaway/pie-button/dist/react';

export default function Form() {
    const [approveSettings, setApproveSettings] = useState(false);
    const [notifications, setNotifications] = useState(false);
    const [formDataDisplay, setFormDataDisplay] = useState<string | null>(null);

    const handleApproveSettingsChange = () => {
        setApproveSettings(current => !current);
    };

    const handleNotificationsChange = () => {
        setNotifications(current => !current);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = { approveSettings, notifications };
        setFormDataDisplay(JSON.stringify(data, null, 2));
    };

    return (
        <>
            <h1>PIE Form Test Page</h1>
            <form id="testForm" onSubmit={handleSubmit}>
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
                <PieButton type="submit">Submit</PieButton>
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
