import { PieButton } from "@justeattakeaway/pie-button/dist/react";
import { useState } from "react";

export default function Button() {
    const [counter, setCounter] = useState(0);

    return (
        <>
        <PieButton onClick={() => setCounter(counter + 1)}>Counter: {counter}</PieButton>
        </>
    );
}
