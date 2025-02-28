'use client';

import NavigationLayout from "@/app/layout/navigation";
import { PieButton } from '@justeattakeaway/pie-webc/react/button.js';
import { PieDivider } from '@justeattakeaway/pie-webc/react/divider.js';
import { IconSearch } from '@justeattakeaway/pie-icons-webc/dist/react/IconSearch.js';
import { useState } from "react";

export default function Button() {
    const [counter, setCounter] = useState(0);

    return (
        <NavigationLayout title="Button">
        <PieButton variant="primary-alternative" onClick={() => setCounter(counter + 1)}>Counter: {counter}</PieButton>

        <PieDivider />

        <h2>PIE Button - with Icon and text</h2>
        <PieButton>
            <IconSearch slot="icon"></IconSearch>
            Search
        </PieButton>

        <PieDivider />

        <h2>PIE Button - multi-line content</h2>
        <PieButton>
            This button has a long text that will wrap to the next line. It‘s very long
        </PieButton>

        <PieDivider />

        <h2>PIE Button - truncated content</h2>
        <PieButton isFullWidth>
            Thisisawordthatdoesntactuallyexistsothatwecanseehowthecontentistruncated
        </PieButton>
        </NavigationLayout>
    );
}
