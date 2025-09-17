'use client';

import NavigationLayout from "@/app/layout/navigation";
import { PieChip } from '@justeattakeaway/pie-chip/dist/react';
import { PieDivider } from '@justeattakeaway/pie-divider/dist/react';
import { IconHeartFilled } from '@justeattakeaway/pie-icons-webc/dist/react/IconHeartFilled';

export default function Chip() {
    const selectAction = (e: Event) => {
        console.log('Chip was selected', e);
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
                        <PieChip type="checkbox" onChange={selectAction as any}>Chip 1</PieChip>
                        <PieChip type="checkbox" isSelected onChange={selectAction as any}>Chip 2</PieChip>
                        <PieChip type="checkbox" disabled onChange={selectAction as any}>Chip 3 (Disabled)</PieChip>
                        <PieChip type="checkbox" disabled isSelected onChange={selectAction as any}>Chip 4 (Disabled and Selected)</PieChip>
                        <PieChip type="checkbox" onChange={selectAction as any}>
                            <IconHeartFilled slot="icon"></IconHeartFilled>
                            Chip 5
                        </PieChip>
                        <PieChip type="checkbox" isSelected onChange={selectAction as any}>
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
                    <PieChip type="button" onChange={selectAction as any}>Chip 1</PieChip>
                    <PieChip type="button" onChange={selectAction as any}>Chip 2</PieChip>
                    <PieChip type="button" disabled onChange={selectAction as any}>Chip 3 (Disabled)</PieChip>
                    <PieChip type="button" onChange={selectAction as any}>
                        <IconHeartFilled slot="icon"></IconHeartFilled>
                        Chip 4
                    </PieChip>
                    <PieChip type="button" onChange={selectAction as any}>
                        <IconHeartFilled slot="icon"></IconHeartFilled>
                        Chip 5
                    </PieChip>
                </div>
            </section>
        </div>
    </NavigationLayout>
    );
}

