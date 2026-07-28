'use client';

import { useState } from "react";
import NavigationLayout from "@/app/layout/navigation";
import { PieCheckboxGroup } from "@justeattakeaway/pie-webc/react/checkbox-group.js";
import { PieCheckbox } from "@justeattakeaway/pie-webc/react/checkbox.js";
import { PieListItem } from "@justeattakeaway/pie-webc/react/list-item.js";
import { PieFormLabel } from "@justeattakeaway/pie-webc/react/form-label.js";
import { PieButton } from "@justeattakeaway/pie-webc/react/button.js";

type Toppings = Record<string, boolean>;

// Each checkbox's `checked` is driven from state and updated on change, so it is genuinely
// controlled: a pre-checked row (Pepperoni) can be unchecked. Hardcoding `checked` instead would
// let React re-apply the original value on every re-render and lock the row.
const initial: Toppings = { cheese: false, pepperoni: true, mushrooms: false, olives: false };

const selectedLabel = (toppings: Toppings) => Object.keys(toppings).filter((value) => toppings[value]).join(', ') || 'none';

export default function ListItemCheckboxSelection() {
    const [leading, setLeading] = useState<Toppings>(initial);
    const [trailing, setTrailing] = useState<Toppings>(initial);

    const handleChange = (setter: React.Dispatch<React.SetStateAction<Toppings>>) => (event: CustomEvent) => {
        const checkbox = event.target as HTMLInputElement;
        setter((current) => ({ ...current, [checkbox.value]: checkbox.checked }));
    };

    return (
        <NavigationLayout title="List Item Checkbox Selection">

            <h2 id="checkbox-leading-heading" style={{ padding: '8px 0' }}>Checkbox group - leading control (Pepperoni pre-selected)</h2>
            <PieCheckboxGroup onChange={handleChange(setLeading)}>
                <PieFormLabel slot="label">Selected toppings: {selectedLabel(leading)}</PieFormLabel>
                <PieListItem selectionType="checkbox" primaryText="Cheese" secondaryText="Extra mature" metaText="Free">
                    <PieCheckbox slot="leading" name="cheese" value="cheese" checked={leading.cheese} />
                </PieListItem>
                <PieListItem selectionType="checkbox" primaryText="Pepperoni" secondaryText="Spicy">
                    <PieCheckbox slot="leading" name="pepperoni" value="pepperoni" checked={leading.pepperoni} />
                </PieListItem>
                <PieListItem selectionType="checkbox" disabled primaryText="Mushrooms" secondaryText="Out of season">
                    <PieCheckbox slot="leading" name="mushrooms" value="mushrooms" disabled checked={leading.mushrooms} />
                </PieListItem>
                <PieListItem selectionType="checkbox" primaryText="Olives" metaText="£0.50">
                    <PieCheckbox slot="leading" name="olives" value="olives" checked={leading.olives} />
                </PieListItem>
            </PieCheckboxGroup>

            <PieButton>Some focusable element after leading checkbox list</PieButton>

            <h2 id="checkbox-trailing-heading" style={{ padding: '8px 0' }}>Checkbox group - trailing control (Pepperoni pre-selected)</h2>
            <PieCheckboxGroup onChange={handleChange(setTrailing)}>
                <PieFormLabel slot="label">Selected toppings: {selectedLabel(trailing)}</PieFormLabel>
                <PieListItem selectionType="checkbox" primaryText="Cheese" secondaryText="Extra mature">
                    <PieCheckbox slot="trailing" name="cheese" value="cheese" checked={trailing.cheese} />
                </PieListItem>
                <PieListItem selectionType="checkbox" primaryText="Pepperoni" secondaryText="Spicy">
                    <PieCheckbox slot="trailing" name="pepperoni" value="pepperoni" checked={trailing.pepperoni} />
                </PieListItem>
                <PieListItem selectionType="checkbox" disabled primaryText="Mushrooms" secondaryText="Out of season">
                    <PieCheckbox slot="trailing" name="mushrooms" value="mushrooms" disabled checked={trailing.mushrooms} />
                </PieListItem>
                <PieListItem selectionType="checkbox" primaryText="Olives" metaText="£0.50">
                    <PieCheckbox slot="trailing" name="olives" value="olives" checked={trailing.olives} />
                </PieListItem>
            </PieCheckboxGroup>

            <PieButton>Some focusable element after trailing checkbox list</PieButton>

        </NavigationLayout>
    );
}
