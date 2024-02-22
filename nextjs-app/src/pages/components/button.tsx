import NavigationLayout from "@/layout/navigation";
import { PieButton } from "@justeattakeaway/pie-button/dist/react";
import { PieDivider } from "@justeattakeaway/pie-divider/dist/react";
import { IconSearch } from "@justeattakeaway/pie-icons-webc/dist/react/IconSearch"
import { useState } from "react";

export default function Button() {

    const [counter, setCounter] = useState(0)
    return (
        <NavigationLayout title="Button">
        <PieButton onClick={() => setCounter(counter + 1)}>Counter: {counter}</PieButton>
        <PieDivider />
        <h2>PIE Button - with Icon and text</h2>
        <PieButton>
            <IconSearch slot="icon"></IconSearch>
            Search
        </PieButton>
        </NavigationLayout>
    );
}
