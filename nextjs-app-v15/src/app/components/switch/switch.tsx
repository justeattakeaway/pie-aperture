'use client';

import NavigationLayout from "@/app/layout/navigation";
import { PieDivider } from '@justeattakeaway/pie-webc/react/divider.js';
import { PieSwitch } from '@justeattakeaway/pie-webc/react/switch.js';
import { useState } from "react";

export default function Switch() {
    const [switchStates, setSwitchStates] = useState<Record<string, boolean>>({
        'story-switch': false,
        'external-switch': false,
        'wrapping-switch': false,
        'multi-label-switch': false,
    });

    const handleSwitchChange = (event: CustomEvent) => {
        const switchId = (event.currentTarget as HTMLElement).id;

        setSwitchStates(current => ({
            ...current,
            [switchId]: !current[switchId],
        }));
    };

    return (
        <NavigationLayout title="Switch">
            <PieSwitch
                id="story-switch"
                label={`checked: ${switchStates['story-switch']}`}
                checked={switchStates['story-switch']}
                onChange={handleSwitchChange}>
            </PieSwitch>

            <PieDivider label="External labels" />


            <label className="switch-label" htmlFor="external-switch">Toggle via for attribute</label>
            <PieSwitch
                id="external-switch"
                checked={switchStates['external-switch']}
                onChange={handleSwitchChange}>
            </PieSwitch>

            <PieDivider />

            <label style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <span className="switch-label">Toggle via wrapping label</span>
                <PieSwitch
                    id="wrapping-switch"
                    checked={switchStates['wrapping-switch']}
                    onChange={handleSwitchChange}>
                </PieSwitch>
            </label>

            <PieDivider />

            <label className="switch-label" htmlFor="multi-label-switch">First label</label>
            <label className="switch-label" htmlFor="multi-label-switch">Second label</label>
            <PieSwitch
                id="multi-label-switch"
                checked={switchStates['multi-label-switch']}
                onChange={handleSwitchChange}>
            </PieSwitch>
        </NavigationLayout>
    );
}
