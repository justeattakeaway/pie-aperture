'use client';

import { useState } from "react";
import NavigationLayout from "@/app/layout/navigation";
import { PieCheckboxGroup } from "@justeattakeaway/pie-webc/react/checkbox-group.js";
import { PieCheckbox } from "@justeattakeaway/pie-webc/react/checkbox.js";
import { PieListItem } from "@justeattakeaway/pie-webc/react/list-item.js";
import { PieFormLabel } from "@justeattakeaway/pie-webc/react/form-label.js";
import { PieButton } from "@justeattakeaway/pie-webc/react/button.js";
import { PieTag } from "@justeattakeaway/pie-webc/react/tag.js";
import { PieThumbnail } from "@justeattakeaway/pie-webc/react/thumbnail.js";

type Toppings = Record<string, boolean>;

// Each checkbox's `checked` is driven from state and updated on change, so it is genuinely
// controlled: a pre-checked row (Pepperoni) can be unchecked. Hardcoding `checked` instead would
// let React re-apply the original value on every re-render and lock the row.
const initial: Toppings = { cheese: false, pepperoni: true, mushrooms: false, olives: false };

const selectedLabel = (toppings: Toppings) => Object.keys(toppings).filter((value) => toppings[value]).join(', ') || 'none';

export default function ListItemCheckboxSelection() {
    const [leading, setLeading] = useState<Toppings>(initial);
    const [trailing, setTrailing] = useState<Toppings>(initial);
    const [media, setMedia] = useState<Toppings>(initial);

    const handleChange = (setter: React.Dispatch<React.SetStateAction<Toppings>>) => (event: React.ChangeEvent<HTMLFieldSetElement>) => {
        const checkbox = event.target as unknown as HTMLInputElement;
        setter((current) => ({ ...current, [checkbox.value]: checkbox.checked }));
    };

    return (
        <NavigationLayout title="List Item Checkbox Selection">

            <h2 id="checkbox-leading-heading" style={{ padding: '8px 0' }}>Checkbox group - leading control (Pepperoni pre-selected)</h2>
            <PieCheckboxGroup onChange={handleChange(setLeading)}>
                <PieFormLabel slot="label">Selected toppings: {selectedLabel(leading)}</PieFormLabel>
                <PieListItem interactionType="checkbox" primaryText="Cheese" secondaryText="Extra mature" metaText="Free" hasDivider>
                    <PieCheckbox slot="leading" name="cheese" value="cheese" checked={leading.cheese} />
                </PieListItem>
                <PieListItem interactionType="checkbox" primaryText="Pepperoni" secondaryText="Spicy" hasDivider>
                    <PieCheckbox slot="leading" name="pepperoni" value="pepperoni" checked={leading.pepperoni} />
                </PieListItem>
                <PieListItem interactionType="checkbox" disabled primaryText="Mushrooms" secondaryText="Out of season" hasDivider>
                    <PieCheckbox slot="leading" name="mushrooms" value="mushrooms" disabled checked={leading.mushrooms} />
                    <PieTag slot="trailing" isDimmed>Out of stock</PieTag>
                </PieListItem>
                <PieListItem interactionType="checkbox" primaryText="Olives" metaText="£0.50">
                    <PieCheckbox slot="leading" name="olives" value="olives" checked={leading.olives} />
                </PieListItem>
            </PieCheckboxGroup>

            <PieButton>Some focusable element after leading checkbox list</PieButton>

            <h2 id="checkbox-trailing-heading" style={{ padding: '8px 0' }}>Checkbox group - trailing control (Pepperoni pre-selected)</h2>
            <PieCheckboxGroup onChange={handleChange(setTrailing)}>
                <PieFormLabel slot="label">Selected toppings: {selectedLabel(trailing)}</PieFormLabel>
                <PieListItem interactionType="checkbox" primaryText="Cheese" secondaryText="Extra mature" hasDivider>
                    <PieCheckbox slot="trailing" name="cheese" value="cheese" checked={trailing.cheese} />
                </PieListItem>
                <PieListItem interactionType="checkbox" primaryText="Pepperoni" secondaryText="Spicy" hasDivider>
                    <PieCheckbox slot="trailing" name="pepperoni" value="pepperoni" checked={trailing.pepperoni} />
                </PieListItem>
                <PieListItem interactionType="checkbox" disabled primaryText="Mushrooms" secondaryText="Out of season" hasDivider>
                    <PieTag slot="leading" isDimmed>Out of stock</PieTag>
                    <PieCheckbox slot="trailing" name="mushrooms" value="mushrooms" disabled checked={trailing.mushrooms} />
                </PieListItem>
                <PieListItem interactionType="checkbox" primaryText="Olives" metaText="£0.50">
                    <PieCheckbox slot="trailing" name="olives" value="olives" checked={trailing.olives} />
                </PieListItem>
            </PieCheckboxGroup>

            <PieButton>Some focusable element after trailing checkbox list</PieButton>

            <h2 id="checkbox-media-heading" style={{ padding: '8px 0' }}>Checkbox group - slotted thumbnails</h2>
            <PieCheckboxGroup onChange={handleChange(setMedia)}>
                <PieFormLabel slot="label">Selected toppings: {selectedLabel(media)}</PieFormLabel>
                <PieListItem hasDivider hasMedia interactionType="checkbox" primaryText="Cheese" secondaryText="Extra mature">
                    <PieCheckbox slot="leading" name="cheese" value="cheese" checked={media.cheese} />
                    <PieThumbnail slot="trailing" size={40} backgroundColor="strong" variant="outline" />
                </PieListItem>
                <PieListItem hasDivider hasMedia interactionType="checkbox" primaryText="Pepperoni" secondaryText="Spicy">
                    <PieCheckbox slot="leading" name="pepperoni" value="pepperoni" checked={media.pepperoni} />
                    <PieThumbnail slot="trailing" size={40} backgroundColor="strong" variant="outline" />
                </PieListItem>
                <PieListItem hasDivider hasMedia interactionType="checkbox" primaryText="Mushrooms" secondaryText="In season">
                    <PieCheckbox slot="leading" name="mushrooms" value="mushrooms" checked={media.mushrooms} />
                    <PieThumbnail slot="trailing" size={40} backgroundColor="strong" variant="outline" />
                </PieListItem>
                <PieListItem hasMedia interactionType="checkbox" primaryText="Olives" secondaryText="Pitted">
                    <PieCheckbox slot="leading" name="olives" value="olives" checked={media.olives} />
                    <PieThumbnail slot="trailing" size={40} backgroundColor="strong" variant="outline" />
                </PieListItem>
            </PieCheckboxGroup>

            <PieButton>Some focusable element after slotted thumbnail checkbox list</PieButton>

            {/*
              * Only the group is disabled here. It propagates its disabled state to every row, its
              * slotted checkbox, and any slotted `pie-tag` or `pie-thumbnail`, so none of them set
              * `disabled` or `isDimmed` themselves.
              */}
            <h2 id="checkbox-group-disabled-heading" style={{ padding: '8px 0' }}>Disabled checkbox group - propagated to slotted content</h2>
            <PieCheckboxGroup disabled>
                <PieFormLabel slot="label">Toppings (group disabled)</PieFormLabel>
                <PieListItem hasDivider interactionType="checkbox" primaryText="Cheese" secondaryText="Extra mature" metaText="Free">
                    <PieCheckbox slot="leading" name="cheese" value="cheese" />
                    <PieTag slot="trailing">Available</PieTag>
                </PieListItem>
                <PieListItem hasDivider hasMedia interactionType="checkbox" primaryText="Pepperoni" secondaryText="Spicy">
                    <PieCheckbox slot="leading" name="pepperoni" value="pepperoni" />
                    <PieThumbnail slot="trailing" size={40} backgroundColor="strong" variant="outline" />
                </PieListItem>
                <PieListItem hasDivider interactionType="checkbox" primaryText="Mushrooms" secondaryText="Out of season">
                    <PieCheckbox slot="leading" name="mushrooms" value="mushrooms" />
                    <PieTag slot="trailing">Out of stock</PieTag>
                </PieListItem>
                <PieListItem hasMedia interactionType="checkbox" primaryText="Olives" secondaryText="Pitted">
                    <PieCheckbox slot="leading" name="olives" value="olives" />
                    <PieThumbnail slot="trailing" size={40} backgroundColor="strong" variant="outline" />
                </PieListItem>
            </PieCheckboxGroup>

            <PieButton>Some focusable element after group-disabled checkbox list</PieButton>

            {/*
              * Group propagation happens at runtime through Lit context, so it is not reflected in
              * server-rendered markup. Setting `disabled` on the group, every row and every slotted
              * control, plus `disabled` on each thumbnail and `isDimmed` on each tag, gives the
              * disabled styles on first paint.
              */}
            <h2 id="checkbox-group-disabled-ssr-heading" style={{ padding: '8px 0' }}>Disabled checkbox group - explicit on every part (SSR safe)</h2>
            <PieCheckboxGroup disabled>
                <PieFormLabel slot="label">Toppings (group and rows disabled)</PieFormLabel>
                <PieListItem hasDivider interactionType="checkbox" disabled primaryText="Cheese" secondaryText="Extra mature" metaText="Free">
                    <PieCheckbox slot="leading" name="cheese" value="cheese" disabled />
                    <PieTag slot="trailing" isDimmed>Available</PieTag>
                </PieListItem>
                <PieListItem hasDivider hasMedia interactionType="checkbox" disabled primaryText="Pepperoni" secondaryText="Spicy">
                    <PieCheckbox slot="leading" name="pepperoni" value="pepperoni" disabled />
                    <PieThumbnail slot="trailing" size={40} backgroundColor="strong" variant="outline" disabled />
                </PieListItem>
                <PieListItem hasDivider interactionType="checkbox" disabled primaryText="Mushrooms" secondaryText="Out of season">
                    <PieCheckbox slot="leading" name="mushrooms" value="mushrooms" disabled />
                    <PieTag slot="trailing" isDimmed>Out of stock</PieTag>
                </PieListItem>
                <PieListItem hasMedia interactionType="checkbox" disabled primaryText="Olives" secondaryText="Pitted">
                    <PieCheckbox slot="leading" name="olives" value="olives" disabled />
                    <PieThumbnail slot="trailing" size={40} backgroundColor="strong" variant="outline" disabled />
                </PieListItem>
            </PieCheckboxGroup>

            <PieButton>Some focusable element after SSR-safe group-disabled checkbox list</PieButton>

        </NavigationLayout>
    );
}
