'use client';

import { useState } from 'react';
import NavigationLayout from "@/app/layout/navigation";
import { PieChip } from '@justeattakeaway/pie-webc/react/chip.js';
import { PieDivider } from '@justeattakeaway/pie-webc/react/divider.js';
import { IconHeartFilled } from '@justeattakeaway/pie-icons-webc/dist/react/IconHeartFilled';

// Initial state for the multi-select checkbox group
const initialCheckboxChips = [
    { id: 'c1', label: 'Chip 1', isSelected: false, hasIcon: false },
    { id: 'c2', label: 'Chip 2', isSelected: true, hasIcon: false },
    { id: 'c3', label: 'Chip 3 (Disabled)', isSelected: false, hasIcon: false, disabled: true },
    { id: 'c4', label: 'Chip 4 (Disabled and Selected)', isSelected: true, hasIcon: false, disabled: true },
    { id: 'c5', label: 'Chip 5', isSelected: false, hasIcon: true },
    { id: 'c6', label: 'Chip 6', isSelected: true, hasIcon: true },
];

// Data for the single-select button group
const buttonChipsData = [
    { id: 'b1', label: 'Chip 1', hasIcon: false },
    { id: 'b2', label: 'Chip 2', hasIcon: false },
    { id: 'b3', label: 'Chip 3 (Disabled)', hasIcon: false, disabled: true },
    { id: 'b4', label: 'Chip 4', hasIcon: true },
    { id: 'b5', label: 'Chip 5', hasIcon: true },
];

export default function Chip() {
    const [checkboxChips, setCheckboxChips] = useState(initialCheckboxChips);
    const [selectedButtonId, setSelectedButtonId] = useState<string | null>('b2'); // 'Chip 2' is initially selected

    /**
     * Handles the state change for the multi-select checkbox group.
     * Toggles the `isSelected` state of the clicked chip.
     */
    const handleCheckboxChange = (chipIdToToggle: string) => {
        setCheckboxChips(prevChips =>
            prevChips.map(chip =>
                chip.id === chipIdToToggle
                    ? { ...chip, isSelected: !chip.isSelected }
                    : chip
            )
        );
        console.log(`Checkbox chip with id "${chipIdToToggle}" was changed.`);
    };

    /**
     * Handles the state change for the single-select button group.
     * If the clicked chip is already selected, it deselects it.
     * Otherwise, it selects the clicked chip.
     */
    const handleButtonClick = (chipIdToSelect: string) => {
        const newSelectedId = selectedButtonId === chipIdToSelect ? null : chipIdToSelect;
        setSelectedButtonId(newSelectedId);
        console.log(`Button chip with id "${chipIdToSelect}" was clicked. New selection: ${newSelectedId}`);
    };

    return (
        <NavigationLayout title="Chip">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {/* Default Chip Variants */}
                <section>
                    <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '8px' }}>Variants</h2>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
                        <PieChip>PIE Chip Default</PieChip>
                        <PieChip variant="outline">PIE Chip Outline</PieChip>
                        <PieChip variant="ghost">PIE Chip Ghost</PieChip>
                        <PieChip isLoading>PIE Chip Ghost</PieChip>
                        <PieChip isSelected isDismissible onClose={() => console.log('Dismissible chip closed!')}>Close me</PieChip>
                    </div>
                </section>

            <PieDivider />

            {/* Interactive Checkbox Group Example */}
            <section>
                <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '8px' }}>Checkbox Group (Multi-select)</h2>
                <fieldset style={{ border: 'none', padding: 0 }}>
                    <legend style={{ paddingBottom: '8px', fontWeight: 'bold' }}>Select your interests</legend>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                        {checkboxChips.map((chip) => (
                            <PieChip
                                key={chip.id}
                                type="checkbox"
                                isSelected={chip.isSelected}
                                disabled={chip.disabled}
                                onChange={() => handleCheckboxChange(chip.id)}
                            >
                                {chip.hasIcon && <IconHeartFilled slot="icon" />}
                                {chip.label}
                            </PieChip>
                        ))}
                    </div>
                </fieldset>
            </section>

            <PieDivider />

            {/* Interactive Button Group Example */}
            <section>
                <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '8px' }}>Button Group (Single-select)</h2>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {buttonChipsData.map((chip) => (
                        <PieChip
                            key={chip.id}
                            type="button"
                            isSelected={selectedButtonId === chip.id}
                            disabled={chip.disabled}
                            onClick={() => handleButtonClick(chip.id)}
                        >
                            {chip.hasIcon && <IconHeartFilled slot="icon" />}
                            {chip.label}
                        </PieChip>
                    ))}
                </div>
            </section>
        </div>
    </NavigationLayout>
    );
}

