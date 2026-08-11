'use client';

import { useState } from "react";
import NavigationLayout from "@/app/layout/navigation";
import { PieRadioGroup } from "@justeattakeaway/pie-webc/react/radio-group.js";
import { PieRadio } from "@justeattakeaway/pie-webc/react/radio.js";
import { PieListItem } from "@justeattakeaway/pie-webc/react/list-item.js";
import { PieFormLabel } from "@justeattakeaway/pie-webc/react/form-label.js";
import { PieButton } from "@justeattakeaway/pie-webc/react/button.js";
import { PieTag } from "@justeattakeaway/pie-webc/react/tag.js";

export default function ListItemRadioSelection() {
    const [deliveryLeading, setDeliveryLeading] = useState('express');
    const [deliveryTrailing, setDeliveryTrailing] = useState('locker');

    const handleDeliveryLeadingChange = (event: CustomEvent) => {
        setDeliveryLeading((event.target as HTMLInputElement).value);
    };

    const handleDeliveryTrailingChange = (event: CustomEvent) => {
        setDeliveryTrailing((event.target as HTMLInputElement).value);
    };

    return (
        <NavigationLayout title="List Item Radio Selection">

            <h2 id="radio-leading-heading" style={{ padding: '8px 0' }}>Radio group - leading control (pre-selected)</h2>
            <PieRadioGroup name="deliveryLeading" value={deliveryLeading} onChange={handleDeliveryLeadingChange}>
                <PieFormLabel slot="label">Select a delivery option: {deliveryLeading}</PieFormLabel>
                <PieListItem interactionType="radio" primaryText="Standard" secondaryText="3 to 5 days" metaText="Free" hasDivider>
                    <PieRadio slot="leading" value="standard" />
                </PieListItem>
                <PieListItem interactionType="radio" primaryText="Express" secondaryText="Next day" metaText="£2.99" hasDivider>
                    <PieRadio slot="leading" value="express" />
                </PieListItem>
                <PieListItem interactionType="radio" disabled primaryText="Collection" secondaryText="Pick up in store" hasDivider>
                    <PieRadio slot="leading" value="collection" disabled />
                    <PieTag slot="trailing" isDimmed>Unavailable</PieTag>
                </PieListItem>
                <PieListItem interactionType="radio" primaryText="Locker" secondaryText="Collect at your convenience" metaText="Free">
                    <PieRadio slot="leading" value="locker" />
                </PieListItem>
            </PieRadioGroup>

            <PieButton>Some focusable element after leading radio list</PieButton>

            <h2 id="radio-trailing-heading" style={{ padding: '8px 0' }}>Radio group - trailing control (pre-selected)</h2>
            <PieRadioGroup name="deliveryTrailing" value={deliveryTrailing} onChange={handleDeliveryTrailingChange}>
                <PieFormLabel slot="label">Select a delivery option: {deliveryTrailing}</PieFormLabel>
                <PieListItem interactionType="radio" primaryText="Standard" secondaryText="3 to 5 days" hasDivider>
                    <PieRadio slot="trailing" value="standard" />
                </PieListItem>
                <PieListItem interactionType="radio" primaryText="Express" secondaryText="Next day" hasDivider>
                    <PieRadio slot="trailing" value="express" />
                </PieListItem>
                <PieListItem interactionType="radio" disabled primaryText="Collection" secondaryText="Pick up in store" hasDivider>
                    <PieTag slot="leading" isDimmed>Unavailable</PieTag>
                    <PieRadio slot="trailing" value="collection" disabled />
                </PieListItem>
                <PieListItem interactionType="radio" primaryText="Locker" secondaryText="Collect at your convenience">
                    <PieRadio slot="trailing" value="locker" />
                </PieListItem>
            </PieRadioGroup>

            <PieButton>Some focusable element after trailing radio list</PieButton>

            <h2 id="radio-group-disabled-heading" style={{ padding: '8px 0' }}>Disabled radio group with tags</h2>
            <PieRadioGroup name="deliveryGroupDisabled" disabled>
                <PieFormLabel slot="label">Delivery options (group disabled)</PieFormLabel>
                <PieListItem hasDivider interactionType="radio" disabled primaryText="Standard" secondaryText="3 to 5 days">
                    <PieRadio slot="leading" value="standard" disabled />
                    <PieTag slot="trailing" isDimmed>Free</PieTag>
                </PieListItem>
                <PieListItem hasDivider interactionType="radio" disabled primaryText="Express" secondaryText="Next day">
                    <PieRadio slot="leading" value="express" disabled />
                    <PieTag slot="trailing" isDimmed>£2.99</PieTag>
                </PieListItem>
                <PieListItem hasDivider interactionType="radio" disabled primaryText="Collection" secondaryText="Pick up in store">
                    <PieRadio slot="leading" value="collection" disabled />
                    <PieTag slot="trailing" isDimmed>Free</PieTag>
                </PieListItem>
                <PieListItem interactionType="radio" disabled primaryText="Locker" secondaryText="Collect at your convenience">
                    <PieRadio slot="leading" value="locker" disabled />
                    <PieTag slot="trailing" isDimmed>Free</PieTag>
                </PieListItem>
            </PieRadioGroup>

            <PieButton>Some focusable element after group-disabled radio list</PieButton>

        </NavigationLayout>
    );
}
