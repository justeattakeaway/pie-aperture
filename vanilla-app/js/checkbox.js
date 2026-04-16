import '@justeattakeaway/pie-webc/components/checkbox.js';
import '@justeattakeaway/pie-webc/components/button.js';
import '@justeattakeaway/pie-webc/components/divider.js';
import './shared.js';
import './utils/navigation.js';

let checked = false;
let forLabelChecked = false;
let wrappingLabelChecked = false;

const styles = `
    <style>
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
    </style>
`;

document.querySelector('#app').innerHTML = `
    ${styles}

    <!-- Slotted label -->
    <div class="section">
        <h2 class="section__heading">Slotted label</h2>
        <pie-checkbox id="slotted-checkbox">checked: ${checked}</pie-checkbox>
    </div>

    <pie-divider></pie-divider>

    <!-- Native label with for attribute -->
    <div class="section">
        <h2 class="section__heading">Native label (for attribute)</h2>
        <div class="native-label-row">
            <pie-checkbox id="native-for-checkbox" name="native-for"></pie-checkbox>
            <label for="native-for-checkbox" class="native-label">
                Click this native label to toggle the checkbox
            </label>
        </div>
    </div>

    <pie-divider></pie-divider>

    <!-- Wrapping label -->
    <div class="section">
        <h2 class="section__heading">Wrapping native label</h2>
        <label class="wrapping-label">
            <pie-checkbox id="wrapping-checkbox" name="wrapping"></pie-checkbox>
            Click anywhere in this label to toggle
        </label>
    </div>

    <pie-divider></pie-divider>

    <!-- Card selection -->
    <div class="section">
        <h2 class="section__heading">Card selection</h2>
        <form>
            <fieldset class="card-selection">
                <legend class="card-selection__legend">Customise your order</legend>
                <p class="card-selection__description">Select any extras you would like to add.</p>

                <label class="selection-card">
                    <pie-checkbox name="extras" value="extra-cheese" checked></pie-checkbox>
                    <span class="selection-card__content">
                        <span class="selection-card__title">Extra cheese</span>
                        <span class="selection-card__subtitle">Generous portion of mozzarella</span>
                    </span>
                    <span class="selection-card__price">+£1.50</span>
                </label>

                <label class="selection-card">
                    <pie-checkbox name="extras" value="bacon"></pie-checkbox>
                    <span class="selection-card__content">
                        <span class="selection-card__title">Crispy bacon</span>
                        <span class="selection-card__subtitle">Smoked and crispy streaky bacon</span>
                    </span>
                    <span class="selection-card__price">+£2.00</span>
                </label>

                <label class="selection-card">
                    <pie-checkbox name="extras" value="jalapenos"></pie-checkbox>
                    <span class="selection-card__content">
                        <span class="selection-card__title">Jalapeños</span>
                        <span class="selection-card__subtitle">Sliced green jalapeños</span>
                    </span>
                    <span class="selection-card__price">+£0.75</span>
                </label>

                <label class="selection-card">
                    <pie-checkbox name="extras" value="truffle-oil" disabled></pie-checkbox>
                    <span class="selection-card__content">
                        <span class="selection-card__title">Truffle oil drizzle</span>
                        <span class="selection-card__subtitle">Currently unavailable</span>
                    </span>
                    <span class="selection-card__price">+£3.00</span>
                </label>

                <div class="card-selection__actions">
                    <pie-button type="submit" isFullWidth>Add to basket</pie-button>
                </div>
            </fieldset>
        </form>
    </div>
`;

// Slotted label checkbox
document.querySelector('#slotted-checkbox').addEventListener('change', () => {
    checked = !checked;
    const el = document.querySelector('#slotted-checkbox');
    el.innerHTML = `checked: ${checked}`;
    el.checked = checked;
});

// Native for-label checkbox
document.querySelector('#native-for-checkbox').addEventListener('change', () => {
    forLabelChecked = !forLabelChecked;
    document.querySelector('#native-for-checkbox').checked = forLabelChecked;
});

// Wrapping label checkbox
document.querySelector('#wrapping-checkbox').addEventListener('change', () => {
    wrappingLabelChecked = !wrappingLabelChecked;
    document.querySelector('#wrapping-checkbox').checked = wrappingLabelChecked;
});
