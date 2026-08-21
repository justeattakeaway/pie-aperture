'use client';

import { useState } from "react";
import NavigationLayout from "@/app/layout/navigation";
import { PieRadioGroup } from "@justeattakeaway/pie-webc/react/radio-group.js";
import { PieRadio } from "@justeattakeaway/pie-webc/react/radio.js";
import { PieListItem } from "@justeattakeaway/pie-webc/react/list-item.js";
import { PieFormLabel } from "@justeattakeaway/pie-webc/react/form-label.js";
import { PieButton } from "@justeattakeaway/pie-webc/react/button.js";
import { PieTag } from "@justeattakeaway/pie-webc/react/tag.js";
import { PieThumbnail } from "@justeattakeaway/pie-webc/react/thumbnail.js";

export default function ListItemRadioSelection() {
    const [deliveryLeading, setDeliveryLeading] = useState('express');
    const [deliveryTrailing, setDeliveryTrailing] = useState('locker');
    const [deliveryMedia, setDeliveryMedia] = useState('standard');

    const handleDeliveryLeadingChange = (event: CustomEvent) => {
        setDeliveryLeading((event.target as HTMLInputElement).value);
    };

    const handleDeliveryTrailingChange = (event: CustomEvent) => {
        setDeliveryTrailing((event.target as HTMLInputElement).value);
    };

    const handleDeliveryMediaChange = (event: CustomEvent) => {
        setDeliveryMedia((event.target as HTMLInputElement).value);
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

            <h2 id="radio-media-heading" style={{ padding: '8px 0' }}>Radio group - slotted thumbnails</h2>
            <PieRadioGroup name="deliveryMedia" value={deliveryMedia} onChange={handleDeliveryMediaChange}>
                <PieFormLabel slot="label">Select a delivery option: {deliveryMedia}</PieFormLabel>
                <PieListItem hasDivider hasMedia interactionType="radio" primaryText="Standard" secondaryText="3 to 5 days">
                    <PieRadio slot="leading" value="standard" />
                    <PieThumbnail slot="trailing" size={40} backgroundColor="strong" variant="outline" />
                </PieListItem>
                <PieListItem hasDivider hasMedia interactionType="radio" primaryText="Express" secondaryText="Next day">
                    <PieRadio slot="leading" value="express" />
                    <PieThumbnail slot="trailing" size={40} backgroundColor="strong" variant="outline" />
                </PieListItem>
                <PieListItem hasDivider hasMedia interactionType="radio" primaryText="Collection" secondaryText="Pick up in store">
                    <PieRadio slot="leading" value="collection" />
                    <PieThumbnail slot="trailing" size={40} backgroundColor="strong" variant="outline" />
                </PieListItem>
                <PieListItem hasMedia interactionType="radio" primaryText="Locker" secondaryText="Collect at your convenience">
                    <PieRadio slot="leading" value="locker" />
                    <PieThumbnail slot="trailing" size={40} backgroundColor="strong" variant="outline" />
                </PieListItem>
            </PieRadioGroup>

            <PieButton>Some focusable element after slotted thumbnail radio list</PieButton>

            {/*
              * Only the group is disabled here. It propagates its disabled state to every row, its
              * slotted radio, and any slotted `pie-tag` or `pie-thumbnail`, so none of them set
              * `disabled` or `isDimmed` themselves.
              */}
            <h2 id="radio-group-disabled-heading" style={{ padding: '8px 0' }}>Disabled radio group - propagated to slotted content</h2>
            <PieRadioGroup name="deliveryGroupDisabled" disabled>
                <PieFormLabel slot="label">Delivery options (group disabled)</PieFormLabel>
                <PieListItem hasDivider interactionType="radio" primaryText="Standard" secondaryText="3 to 5 days">
                    <PieRadio slot="leading" value="standard" />
                    <PieTag slot="trailing">Free</PieTag>
                </PieListItem>
                <PieListItem hasDivider hasMedia interactionType="radio" primaryText="Express" secondaryText="Next day">
                    <PieRadio slot="leading" value="express" />
                    <PieThumbnail slot="trailing" size={40} backgroundColor="strong" variant="outline" />
                </PieListItem>
                <PieListItem hasDivider interactionType="radio" primaryText="Collection" secondaryText="Pick up in store">
                    <PieRadio slot="leading" value="collection" />
                    <PieTag slot="trailing">Free</PieTag>
                </PieListItem>
                <PieListItem hasMedia interactionType="radio" primaryText="Locker" secondaryText="Collect at your convenience">
                    <PieRadio slot="leading" value="locker" />
                    <PieThumbnail slot="trailing" size={40} backgroundColor="strong" variant="outline" />
                </PieListItem>
            </PieRadioGroup>

            <PieButton>Some focusable element after group-disabled radio list</PieButton>

            {/*
              * Group propagation happens at runtime through Lit context, so it is not reflected in
              * server-rendered markup. Setting `disabled` on the group, every row and every slotted
              * control, plus `disabled` on each thumbnail and `isDimmed` on each tag, gives the
              * disabled styles on first paint.
              */}
            <h2 id="radio-group-disabled-ssr-heading" style={{ padding: '8px 0' }}>Disabled radio group - explicit on every part (SSR safe)</h2>
            <PieRadioGroup name="deliveryGroupDisabledSsr" disabled>
                <PieFormLabel slot="label">Delivery options (group and rows disabled)</PieFormLabel>
                <PieListItem hasDivider interactionType="radio" disabled primaryText="Standard" secondaryText="3 to 5 days">
                    <PieRadio slot="leading" value="standard" disabled />
                    <PieTag slot="trailing" isDimmed>Free</PieTag>
                </PieListItem>
                <PieListItem hasDivider hasMedia interactionType="radio" disabled primaryText="Express" secondaryText="Next day">
                    <PieRadio slot="leading" value="express" disabled />
                    <PieThumbnail slot="trailing" size={40} backgroundColor="strong" variant="outline" disabled />
                </PieListItem>
                <PieListItem hasDivider interactionType="radio" disabled primaryText="Collection" secondaryText="Pick up in store">
                    <PieRadio slot="leading" value="collection" disabled />
                    <PieTag slot="trailing" isDimmed>Free</PieTag>
                </PieListItem>
                <PieListItem hasMedia interactionType="radio" disabled primaryText="Locker" secondaryText="Collect at your convenience">
                    <PieRadio slot="leading" value="locker" disabled />
                    <PieThumbnail slot="trailing" size={40} backgroundColor="strong" variant="outline" disabled />
                </PieListItem>
            </PieRadioGroup>

            <PieButton>Some focusable element after SSR-safe group-disabled radio list</PieButton>

        </NavigationLayout>
    );
}
