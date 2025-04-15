// @ts-nocheck
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
import { IconEmail } from '@justeattakeaway/pie-icons-webc/dist/react/IconEmail.js';
import { IconLaptop } from '@justeattakeaway/pie-icons-webc/dist/react/IconLaptop.js';
import { IconPhone } from '@justeattakeaway/pie-icons-webc/dist/react/IconPhone.js';
import { IconUser } from '@justeattakeaway/pie-icons-webc/dist/react/IconUser.js';
import { IconNumberSymbol } from '@justeattakeaway/pie-icons-webc/dist/react/IconNumberSymbol.js';
import { IconKey } from '@justeattakeaway/pie-icons-webc/dist/react/IconKey.js';
import { PieSelect, SelectProps } from '@justeattakeaway/pie-webc/react/select.js';
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

export default function UnControlledForm() {
    const [formDataDisplay, setFormDataDisplay] = useState<string | null>(null);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formDataObj = Object.fromEntries(
            new FormData(event.currentTarget).entries()
        );

        Object.entries(formDataObj).forEach(([key, value]) => {
            if (value === 'on') formDataObj[key] = true;
        });

        setFormDataDisplay(JSON.stringify(formDataObj, null, 2));
    };

    return (
        <NavigationLayout title="Uncontrolled Form">
            <form className="form" onSubmit={handleSubmit}>
                <PieFormLabel for="username">
                    Username:
                </PieFormLabel>
                <PieTextInput
                    className="form-field"
                    id="username"
                    data-test-id="username"
                    name="username">
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
                    type="number"
                    min="-5"
                    max="200">
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
                    type="email">
                    <IconEmail slot="leadingIcon"></IconEmail>
                </PieTextInput>

                <PieFormLabel for="url">
                    URL:
                </PieFormLabel>
                <PieTextInput
                    className="form-field"
                    id="url"
                    data-test-id="url"
                    name="url"
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
                    placeholder="Write something about yourself..." />

                <div className="form-controls">
                    <PieFormLabel for="approveSettings">
                        Approve settings
                    </PieFormLabel>
                    <PieSwitch
                        id="approveSettings"
                        data-test-id="approveSettings"
                        name="approveSettings"
                    />

                    <PieFormLabel for="enableNotifications">
                        Enable Notifications
                    </PieFormLabel>
                    <PieSwitch
                        id="enableNotifications"
                        data-test-id="enableNotifications"
                        name="enableNotifications"
                    />

                    <PieCheckbox
                        id="newsletterSignup"
                        data-test-id="newsletterSignup"
                        name="newsletterSignup">
                        Receive discounts, loyalty offers and other updates via email
                    </PieCheckbox>

                    <PieCheckboxGroup>
                        <PieFormLabel slot="label">Choose the way we can contact you:</PieFormLabel>
                        <PieCheckbox
                            id="contactByEmail"
                            data-test-id="contactByEmail"
                            name="contactByEmail">
                            Contact By Email
                        </PieCheckbox>
                        <PieCheckbox
                            id="contactByPhone"
                            data-test-id="contactByPhone"
                            name="contactByPhone">
                            Contact By Phone
                        </PieCheckbox>
                    </PieCheckboxGroup>

                    <PieRadioGroup name="favouriteTakeaway">
                        <PieFormLabel slot="label">Choose a radio button:</PieFormLabel>
                        <PieRadio value="chinese">Chinese</PieRadio>
                        <PieRadio data-test-id="shawarma" value="shawarma">Shawarma</PieRadio>
                    </PieRadioGroup>

                    <PieFormLabel for="favouriteFood">
                        Favourite Food:
                    </PieFormLabel>
                    <PieSelect
                        className="form-field"
                        id="favouriteFood"
                        data-test-id="favouriteFood"
                        name="favouriteFood"
                        options={foodOptions}
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