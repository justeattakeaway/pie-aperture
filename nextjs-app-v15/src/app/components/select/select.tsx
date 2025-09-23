'use client';

import NavigationLayout from "@/app/layout/navigation";
import { PieSelect, type SelectProps } from "@justeattakeaway/pie-webc/react/select.js";

export default function Select() {
    const options: SelectProps['options'] = [
        {
            tag: 'optgroup',
            label: 'Animals',
            options: [
                {
                    tag: 'option',
                    text: 'Cat',
                    value: 'cat',
                },
                {
                    tag: 'option',
                    text: 'Dog',
                    value: 'dog',
                },
            ],
        },
    ];

    return (
        <NavigationLayout title="Select">
            <PieSelect options={options} />
        </NavigationLayout>
    );
}
