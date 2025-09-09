'use client';

import NavigationLayout from "@/app/layout/navigation";
import { PieChip } from '@justeattakeaway/pie-chip/dist/react';
import { PieDivider } from '@justeattakeaway/pie-divider/dist/react';
import { IconHeartFilled } from '@justeattakeaway/pie-icons-webc/dist/react/IconHeartFilled';

export default function Chip() {
    // Action handlers to log events in the console
    const selectAction = (e: CustomEvent) => {
        console.log('pie-chip-selected', e);
    };

    const clickAction = (e: CustomEvent) => {
        console.log('pie-chip-clicked', e);
    };

    // Toggles the isSelected state of a chip when clicked
    const toggleSelected = (e: Event) => {
        clickAction(e as CustomEvent); // Log the base click event
        const chip = e.target as HTMLElement & { isSelected: boolean };
        if (chip) {
            chip.isSelected = !chip.isSelected;
        }
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
                        <PieChip isSelected isDismissible>Close me</PieChip>
                    </div>
                </section>

            <PieDivider />

            {/* Checkbox Group Example */}
            <section>
                <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '8px' }}>Checkbox Group</h2>
                <fieldset style={{ border: 'none', padding: 0 }}>
                    <legend style={{ paddingBottom: '8px', fontWeight: 'bold' }}>Select your interests</legend>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                        <PieChip type="checkbox" onPieChipSelected={selectAction}>Chip 1</PieChip>
                        <PieChip type="checkbox" isSelected onPieChipSelected={selectAction}>Chip 2</PieChip>
                        <PieChip type="checkbox" disabled onPieChipSelected={selectAction}>Chip 3 (Disabled)</PieChip>
                        <PieChip type="checkbox" disabled isSelected onPieChipSelected={selectAction}>Chip 4 (Disabled and Selected)</PieChip>
                        <PieChip type="checkbox" onPieChipSelected={selectAction}>
                            <IconHeartFilled slot="icon"></IconHeartFilled>
                            Chip 5
                        </PieChip>
                        <PieChip type="checkbox" isSelected onPieChipSelected={selectAction}>
                            <IconHeartFilled slot="icon"></IconHeartFilled>
                            Chip 6
                        </PieChip>
                    </div>
                </fieldset>
            </section>

            <PieDivider />

            {/* Button Group Example */}
            <section>
                <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '8px' }}>Button Group</h2>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    <PieChip type="button" onPieChipClicked={toggleSelected}>Chip 1</PieChip>
                    <PieChip type="button" onPieChipClicked={toggleSelected}>Chip 2</PieChip>
                    <PieChip type="button" disabled onPieChipClicked={clickAction}>Chip 3 (Disabled)</PieChip>
                    <PieChip type="button" onPieChipClicked={toggleSelected}>
                        <IconHeartFilled slot="icon"></IconHeartFilled>
                        Chip 4
                    </PieChip>
                    <PieChip type="button" onPieChipClicked={toggleSelected}>
                        <IconHeartFilled slot="icon"></IconHeartFilled>
                        Chip 5
                    </PieChip>
                </div>
            </section>
        </div>
    </NavigationLayout>
    );
}

