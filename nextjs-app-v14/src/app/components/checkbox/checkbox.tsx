'use client';

import NavigationLayout from "@/app/layout/navigation";
import { PieCheckbox } from "@justeattakeaway/pie-webc/react/checkbox.js";
import { useState } from "react";

export default function Checkbox() {
    const [checked1, setChecked1] = useState(false);
    const [checked2, setChecked2] = useState(false);
    const [checked3, setChecked3] = useState(false);
    const [checked4, setChecked4] = useState(false);

    return (
        <NavigationLayout title="Checkbox">
            <h2>Default (trailing, hug)</h2>
            <PieCheckbox
                checked={checked1}
                onChange={() => setChecked1(c => !c)}>
                {`checked: ${checked1}`}
            </PieCheckbox>

            <br />
            <h2>labelPosition=&quot;leading&quot;, labelFit=&quot;hug&quot;</h2>
            <PieCheckbox
                checked={checked2}
                onChange={() => setChecked2(c => !c)}
                labelPosition="leading">
                {`checked: ${checked2}`}
            </PieCheckbox>

            <br />
            <h2>labelPosition=&quot;leading&quot;, labelFit=&quot;fill&quot;</h2>
            <PieCheckbox
                checked={checked3}
                onChange={() => setChecked3(c => !c)}
                labelPosition="leading"
                labelFit="fill">
                {`checked: ${checked3}`}
            </PieCheckbox>

            <br />
            <h2>labelPosition=&quot;trailing&quot;, labelFit=&quot;fill&quot;</h2>
            <PieCheckbox
                checked={checked4}
                onChange={() => setChecked4(c => !c)}
                labelFit="fill">
                {`checked: ${checked4}`}
            </PieCheckbox>
        </NavigationLayout>
    );
}
