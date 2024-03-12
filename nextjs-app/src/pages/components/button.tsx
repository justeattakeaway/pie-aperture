import { PieButton } from "@justeattakeaway/pie-button/dist/react";
import { IconSearch } from "@justeattakeaway/pie-icons-webc/dist/react/IconSearch";
import { useState } from "react";

export default function Button() {
    const [counter, setCounter] = useState(0);

    return (
        <>
        <PieButton onClick={() => setCounter(counter + 1)}>Counter: {counter}</PieButton>
        <h2>PIE Button - with Icon and text</h2>
        <PieButton>
            <IconSearch slot="icon"></IconSearch>
            Search
        </PieButton>
        </>
    );
}
