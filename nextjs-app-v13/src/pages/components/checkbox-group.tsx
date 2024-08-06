'use client';

import React, { useState } from "react";
import NavigationLayout from "@/layout/navigation";
import { PieCheckbox } from "@justeattakeaway/pie-webc/react/checkbox.js";
import { PieCheckboxGroup } from "@justeattakeaway/pie-webc/react/checkbox-group.js";
import { PieFormLabel } from "@justeattakeaway/pie-webc/react/form-label.js";

export default function CheckboxGroup() {
    const [contactByPhone, setContactByPhone] = useState(false);
    const [contactByEmail, setContactByEmail] = useState(false);

    const handleContactByPhone = () => {
        setContactByPhone(current => !current);
    };

    const handleContactByEmail = () => {
        setContactByEmail(current => !current);
    };

    return (
        <NavigationLayout title="Checkbox Group">
            <PieCheckboxGroup>
                <PieFormLabel slot="label">Choose the way we can contact you:</PieFormLabel>
                <PieCheckbox
                    checked={contactByEmail}
                    onChange={handleContactByEmail}>
                    Contact By Email
                </PieCheckbox>
                <PieCheckbox
                    checked={contactByPhone}
                    onChange={handleContactByPhone}>
                    Contact By Phone
                </PieCheckbox>
            </PieCheckboxGroup>
        </NavigationLayout>
    );
}
