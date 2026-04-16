'use client';

import NavigationLayout from "@/app/layout/navigation";
import { PieCheckbox } from "@justeattakeaway/pie-webc/react/checkbox.js";
import { PieButton } from "@justeattakeaway/pie-webc/react/button.js";
import { PieDivider } from "@justeattakeaway/pie-webc/react/divider.js";
import { useState } from "react";

const cardStyles = `
    .card-selection {
        border: none;
        margin: 0;
        padding: 0;
        min-width: 0;
        display: flex;
        flex-direction: column;
        gap: var(--dt-spacing-d);
        font-family: var(--dt-font-family-primary);
        max-width: 500px;
    }

    .card-selection__legend {
        font-size: calc(var(--dt-font-heading-s-size--narrow) * 1px);
        font-weight: var(--dt-font-heading-s-weight);
        line-height: calc(var(--dt-font-heading-s-line-height--narrow) * 1px);
        color: var(--dt-color-content-default);
        margin-bottom: var(--dt-spacing-b);
    }

    .card-selection__description {
        margin: 0 0 var(--dt-spacing-d) 0;
        font-size: var(--dt-font-body-s-size);
        line-height: calc(var(--dt-font-body-s-line-height) * 1px);
        color: var(--dt-color-content-subdued);
    }

    .selection-card {
        display: flex;
        align-items: center;
        gap: var(--dt-spacing-d);
        padding: var(--dt-spacing-d) var(--dt-spacing-e);
        border: 2px solid var(--dt-color-border-default);
        border-radius: var(--dt-radius-rounded-c);
        background-color: var(--dt-color-container-default);
        cursor: pointer;
        transition: all var(--dt-motion-timing-200) var(--dt-motion-easing-out);
    }

    .selection-card:hover {
        border-color: var(--dt-color-border-strong);
        background-color: var(--dt-color-container-subtle);
    }

    .selection-card:has(pie-checkbox[checked]) {
        border-color: var(--dt-color-interactive-brand);
        background-color: var(--dt-color-support-info-tonal);
    }

    .selection-card:has(pie-checkbox[disabled]) {
        opacity: 0.5;
        cursor: not-allowed;
    }

    .selection-card__content {
        display: flex;
        flex-direction: column;
        gap: var(--dt-spacing-a);
        flex: 1;
        min-width: 0;
    }

    .selection-card__title {
        font-weight: var(--dt-font-body-strong-l-weight);
        font-size: var(--dt-font-body-strong-l-size);
        line-height: calc(var(--dt-font-body-strong-l-line-height) * 1px);
        color: var(--dt-color-content-default);
    }

    .selection-card__subtitle {
        font-size: var(--dt-font-body-s-size);
        line-height: calc(var(--dt-font-body-s-line-height) * 1px);
        color: var(--dt-color-content-subdued);
    }

    .selection-card__price {
        font-weight: var(--dt-font-body-strong-l-weight);
        font-size: var(--dt-font-body-strong-l-size);
        line-height: calc(var(--dt-font-body-strong-l-line-height) * 1px);
        color: var(--dt-color-content-default);
        flex-shrink: 0;
    }

    .card-selection__actions {
        display: flex;
        flex-direction: column;
        gap: var(--dt-spacing-c);
        margin-top: var(--dt-spacing-d);
    }

    .section {
        margin-bottom: var(--dt-spacing-f);
    }

    .section__heading {
        font-family: var(--dt-font-family-primary);
        font-size: calc(var(--dt-font-heading-s-size--narrow) * 1px);
        font-weight: var(--dt-font-heading-s-weight);
        color: var(--dt-color-content-default);
        margin: 0 0 var(--dt-spacing-d) 0;
    }

    .native-label-row {
        display: flex;
        align-items: center;
        gap: var(--dt-spacing-c);
        font-family: var(--dt-font-family-primary);
    }

    .native-label {
        cursor: pointer;
        font-family: var(--dt-font-family-primary);
        font-size: var(--dt-font-body-l-size);
        line-height: calc(var(--dt-font-body-l-line-height) * 1px);
        color: var(--dt-color-content-default);
    }

    .wrapping-label {
        display: flex;
        align-items: center;
        gap: var(--dt-spacing-c);
        cursor: pointer;
        font-family: var(--dt-font-family-primary);
        font-size: var(--dt-font-body-l-size);
        line-height: calc(var(--dt-font-body-l-line-height) * 1px);
        color: var(--dt-color-content-default);
    }
`;

export default function Checkbox() {
    const [isCheckboxChecked, setIsCheckboxCheck] = useState(false);
    const [forLabelChecked, setForLabelChecked] = useState(false);
    const [wrappingLabelChecked, setWrappingLabelChecked] = useState(false);

    return (
        <NavigationLayout title="Checkbox">
            <style>{cardStyles}</style>

            {/* Slotted label */}
            <div className="section">
                <h2 className="section__heading">Slotted label</h2>
                <PieCheckbox
                    checked={isCheckboxChecked}
                    onChange={() => setIsCheckboxCheck(c => !c)}>
                    {`checked: ${isCheckboxChecked}`}
                </PieCheckbox>
            </div>

            <PieDivider />

            {/* Native label with for attribute */}
            <div className="section">
                <h2 className="section__heading">Native label (for attribute)</h2>
                <div className="native-label-row">
                    <PieCheckbox
                        id="native-for-checkbox"
                        name="native-for"
                        checked={forLabelChecked}
                        onChange={() => setForLabelChecked(c => !c)}
                    />
                    <label htmlFor="native-for-checkbox" className="native-label">
                        Click this native label to toggle the checkbox
                    </label>
                </div>
            </div>

            <PieDivider />

            {/* Wrapping label */}
            <div className="section">
                <h2 className="section__heading">Wrapping native label</h2>
                <label className="wrapping-label">
                    <PieCheckbox
                        name="wrapping"
                        checked={wrappingLabelChecked}
                        onChange={() => setWrappingLabelChecked(c => !c)}
                    />
                    Click anywhere in this label to toggle
                </label>
            </div>

            <PieDivider />

            {/* Card selection */}
            <div className="section">
                <h2 className="section__heading">Card selection</h2>
                <form>
                    <fieldset className="card-selection">
                        <legend className="card-selection__legend">Customise your order</legend>
                        <p className="card-selection__description">Select any extras you would like to add.</p>

                        <label className="selection-card">
                            <PieCheckbox name="extras" value="extra-cheese" checked />
                            <span className="selection-card__content">
                                <span className="selection-card__title">Extra cheese</span>
                                <span className="selection-card__subtitle">Generous portion of mozzarella</span>
                            </span>
                            <span className="selection-card__price">+£1.50</span>
                        </label>

                        <label className="selection-card">
                            <PieCheckbox name="extras" value="bacon" />
                            <span className="selection-card__content">
                                <span className="selection-card__title">Crispy bacon</span>
                                <span className="selection-card__subtitle">Smoked and crispy streaky bacon</span>
                            </span>
                            <span className="selection-card__price">+£2.00</span>
                        </label>

                        <label className="selection-card">
                            <PieCheckbox name="extras" value="jalapenos" />
                            <span className="selection-card__content">
                                <span className="selection-card__title">Jalapeños</span>
                                <span className="selection-card__subtitle">Sliced green jalapeños</span>
                            </span>
                            <span className="selection-card__price">+£0.75</span>
                        </label>

                        <label className="selection-card">
                            <PieCheckbox name="extras" value="truffle-oil" disabled />
                            <span className="selection-card__content">
                                <span className="selection-card__title">Truffle oil drizzle</span>
                                <span className="selection-card__subtitle">Currently unavailable</span>
                            </span>
                            <span className="selection-card__price">+£3.00</span>
                        </label>

                        <div className="card-selection__actions">
                            <PieButton type="submit" isFullWidth>Add to basket</PieButton>
                        </div>
                    </fieldset>
                </form>
            </div>
        </NavigationLayout>
    );
}
