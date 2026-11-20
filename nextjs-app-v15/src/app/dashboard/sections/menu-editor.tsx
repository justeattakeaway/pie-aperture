'use client';

import { useRef, useState, type ComponentRef, type FormEvent } from 'react';
import { PieAssistiveText } from '@justeattakeaway/pie-webc/react/assistive-text.js';
import { PieButton } from '@justeattakeaway/pie-webc/react/button.js';
import { PieCheckbox } from '@justeattakeaway/pie-webc/react/checkbox.js';
import { PieCheckboxGroup } from '@justeattakeaway/pie-webc/react/checkbox-group.js';
import { PieDivider } from '@justeattakeaway/pie-webc/react/divider.js';
import { PieFormLabel } from '@justeattakeaway/pie-webc/react/form-label.js';
import { PieRadio } from '@justeattakeaway/pie-webc/react/radio.js';
import { PieRadioGroup } from '@justeattakeaway/pie-webc/react/radio-group.js';
import { PieSelect } from '@justeattakeaway/pie-webc/react/select.js';
import { PieSwitch } from '@justeattakeaway/pie-webc/react/switch.js';
import { PieTextInput } from '@justeattakeaway/pie-webc/react/text-input.js';
import { PieTextarea } from '@justeattakeaway/pie-webc/react/textarea.js';
import { toaster } from '@justeattakeaway/pie-webc/components/toast-provider.js';
import { IconClock } from '@justeattakeaway/pie-icons-webc/dist/react/IconClock.js';
import { IconPercentage } from '@justeattakeaway/pie-icons-webc/dist/react/IconPercentage.js';
import { IconBakery } from '@justeattakeaway/pie-icons-webc/dist/react/IconBakery.js';
import { IconPie } from '@justeattakeaway/pie-icons-webc/dist/react/IconPie.js';
import { categoryOptions, prepTimeOptions } from '../state/dashboard-data';
import { useDashboard } from '../state/dashboard-context';
import type { MenuFormErrors, MenuForm } from '../state/dashboard-types';
import styles from '../dashboard.module.scss';

const dietaryOptions = [
    { value: 'vegan', label: 'Vegan' },
    { value: 'vegetarian', label: 'Vegetarian' },
    { value: 'gluten-free', label: 'Gluten free' },
    { value: 'spicy', label: 'Spicy' },
];

const availabilityOptions: Array<{ value: MenuForm['availability']; label: string }> = [
    { value: 'all', label: 'Delivery and collection' },
    { value: 'delivery', label: 'Delivery only' },
    { value: 'collection', label: 'Collection only' },
];

/**
 * The "add a pie" form.
 *
 * A fully controlled form covering the input components as the fields require them:
 * `pie-text-input` for name/price/SKU/hotline, `pie-select` for the menu section
 * and prep time, `pie-textarea` for the description and notes, and
 * `pie-checkbox-group` / `pie-radio-group` / `pie-switch` for the options.
 *
 * `novalidate` is set on the form so the browser's own validation bubbles do not
 * appear. Validity is read from each component's constraint-validation `validity`
 * getter and surfaced through `status` + `assistiveText`, which is what the PIE
 * docs recommend.
 */
export default function MenuEditor () {
    const { state, dispatch } = useDashboard();
    const { menuForm } = state;

    // These two fields are not needed anywhere else on the page, so they stay as
    // local component state rather than going into the shared reducer.
    const [hotline, setHotline] = useState('0117 496 0000');
    const [bakeryNotes, setBakeryNotes] = useState('');

    // Refs point at the PIE custom elements, which expose a `validity` getter
    // backed by the constraint validation API.
    const nameRef = useRef<ComponentRef<typeof PieTextInput>>(null);
    const priceRef = useRef<ComponentRef<typeof PieTextInput>>(null);
    const descriptionRef = useRef<ComponentRef<typeof PieTextarea>>(null);

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const errors: MenuFormErrors = {};

        // The components expose the native `validity` object, so validation is
        // read straight off the elements rather than duplicated in application code.
        if (nameRef.current && !nameRef.current.validity.valid) {
            errors.itemName = nameRef.current.validity.tooShort
                ? 'Pie names need at least three characters.'
                : 'Please give the pie a name.';
        }

        if (priceRef.current && !priceRef.current.validity.valid) {
            errors.price = priceRef.current.validity.rangeOverflow
                ? 'Prices above £99.99 need approval from your account manager.'
                : 'Enter a price between £0.50 and £99.99.';
        }

        if (descriptionRef.current && !descriptionRef.current.validity.valid) {
            errors.description = 'Add a short description so customers know what is in the pie.';
        }

        if (!menuForm.category) {
            errors.category = 'Choose the menu section this pie belongs to.';
        }

        if (Object.keys(errors).length > 0) {
            dispatch({ type: 'menuForm/setErrors', errors });
            toaster.create({
                message: 'Some fields need attention before this pie can be saved.',
                variant: 'error',
                isDismissible: true,
            });
            return;
        }

        dispatch({ type: 'menuForm/setSubmitting', isSubmitting: true });

        window.setTimeout(() => {
            dispatch({
                type: 'menuForm/submitted',
                payload: JSON.stringify({
                    itemName: menuForm.itemName,
                    price: menuForm.price,
                    prepTime: menuForm.prepTime,
                    category: menuForm.category,
                    description: menuForm.description,
                    dietary: menuForm.dietary,
                    availability: menuForm.availability,
                    isFeatured: menuForm.isFeatured,
                    acceptsSubstitutions: menuForm.acceptsSubstitutions,
                }, null, 2),
            });
            toaster.create({
                message: `“${menuForm.itemName}” saved as a draft.`,
                variant: 'success',
                isDismissible: true,
            });
        }, 1200);
    };

    // Demonstrates `indeterminate`: true when some (but not all) options are ticked.
    const allDietarySelected = menuForm.dietary.length === dietaryOptions.length;
    const someDietarySelected = menuForm.dietary.length > 0 && !allDietarySelected;

    const handleDietarySelectAll = () => {
        const shouldSelect = !allDietarySelected;

        dietaryOptions
            .filter((option) => menuForm.dietary.includes(option.value) !== shouldSelect)
            .forEach((option) => dispatch({ type: 'menuForm/toggleDietary', value: option.value }));
    };

    return (
        <section className={styles.section} aria-labelledby="menu-editor-heading">
            <div className={styles.sectionHeader}>
                <div>
                    <h2 id="menu-editor-heading" className={`u-font-heading-m ${styles.sectionHeading}`}>Add a pie to the menu</h2>
                    <p className={`u-font-body-s ${styles.sectionIntro}`}>
                        A controlled form. Validation is read from each component&rsquo;s native
                        validity state and shown through <code>status</code> and{' '}
                        <code>assistiveText</code>.
                    </p>
                </div>
            </div>

            <div className={styles.panel}>
                <form
                    className={styles.form}
                    id="menuItemForm"
                    noValidate
                    data-test-id="menu-editor-form"
                    onSubmit={handleSubmit}
                    onReset={() => dispatch({ type: 'menuForm/reset' })}
                >
                    <div className={styles.formGrid}>
                        <div className={styles.formField}>
                            <PieFormLabel id="itemNameLabel" for="itemName" trailing={`${menuForm.itemName.length} of 60`}>
                                Pie name
                            </PieFormLabel>
                            <PieTextInput
                                ref={nameRef}
                                id="itemName"
                                name="itemName"
                                type="text"
                                size="large"
                                required
                                minlength={3}
                                maxlength={60}
                                autocomplete="off"
                                placeholder="e.g. Steak and ale pie"
                                aria-labelledby="itemNameLabel"
                                data-test-id="menu-item-name"
                                value={menuForm.itemName}
                                status={menuForm.errors.itemName ? 'error' : 'default'}
                                assistiveText={menuForm.errors.itemName}
                                onInput={(event: InputEvent) => dispatch({
                                    type: 'menuForm/setField',
                                    field: 'itemName',
                                    value: (event.target as HTMLInputElement).value,
                                })}
                            >
                                <IconPie slot="leadingIcon" />
                            </PieTextInput>
                        </div>

                        <div className={styles.formField}>
                            <PieFormLabel id="itemPriceLabel" for="itemPrice">
                                Price
                            </PieFormLabel>
                            {/*
                              * `leadingText` and `trailingText` must be wrapped in a span, and
                              * cannot be combined with the icon slot on the same side.
                              */}
                            <PieTextInput
                                ref={priceRef}
                                id="itemPrice"
                                name="itemPrice"
                                type="number"
                                size="large"
                                required
                                min={0.5}
                                max={99.99}
                                step={0.05}
                                inputmode="decimal"
                                placeholder="0.00"
                                aria-labelledby="itemPriceLabel"
                                data-test-id="menu-item-price"
                                value={menuForm.price}
                                status={menuForm.errors.price ? 'error' : 'default'}
                                assistiveText={menuForm.errors.price}
                                onInput={(event: InputEvent) => dispatch({
                                    type: 'menuForm/setField',
                                    field: 'price',
                                    value: (event.target as HTMLInputElement).value,
                                })}
                            >
                                <span slot="leadingText">£</span>
                                <span slot="trailingText">GBP</span>
                            </PieTextInput>
                        </div>

                        <div className={styles.formField}>
                            <PieFormLabel id="itemCategoryLabel" for="itemCategory">
                                Menu section
                            </PieFormLabel>
                            {/*
                              * `options` accepts a mix of option and optgroup objects, and one
                              * option here is disabled to show that state.
                              */}
                            <PieSelect
                                id="itemCategory"
                                name="itemCategory"
                                size="large"
                                options={categoryOptions}
                                aria-labelledby="itemCategoryLabel"
                                data-test-id="menu-item-category"
                                value={menuForm.category}
                                status={menuForm.errors.category ? 'error' : 'default'}
                                assistiveText={menuForm.errors.category}
                                onChange={(event: CustomEvent) => dispatch({
                                    type: 'menuForm/setField',
                                    field: 'category',
                                    value: (event.target as HTMLSelectElement).value,
                                })}
                            >
                                <IconBakery slot="leadingIcon" />
                            </PieSelect>
                        </div>

                        <div className={styles.formField}>
                            <PieFormLabel id="itemPrepLabel" for="itemPrep" optional="optional">
                                Preparation time
                            </PieFormLabel>
                            <PieSelect
                                id="itemPrep"
                                name="itemPrep"
                                size="medium"
                                options={prepTimeOptions}
                                aria-labelledby="itemPrepLabel"
                                data-test-id="menu-item-prep"
                                value={menuForm.prepTime}
                                onChange={(event: CustomEvent) => dispatch({
                                    type: 'menuForm/setField',
                                    field: 'prepTime',
                                    value: (event.target as HTMLSelectElement).value,
                                })}
                            >
                                <IconClock slot="leadingIcon" />
                            </PieSelect>
                        </div>

                        <div className={`${styles.formField} ${styles.formFieldWide}`}>
                            <PieFormLabel
                                id="itemDescriptionLabel"
                                for="itemDescription"
                                trailing={`${menuForm.description.length} of 240`}
                            >
                                Description
                            </PieFormLabel>
                            <PieTextarea
                                ref={descriptionRef}
                                id="itemDescription"
                                name="itemDescription"
                                required
                                maxlength={240}
                                resize="auto"
                                size="large"
                                placeholder="Tell customers what makes this pie good."
                                aria={{ label: 'Item description' }}
                                data-test-id="menu-item-description"
                                value={menuForm.description}
                                status={menuForm.errors.description ? 'error' : 'default'}
                                assistiveText={menuForm.errors.description}
                                onInput={(event: InputEvent) => dispatch({
                                    type: 'menuForm/setField',
                                    field: 'description',
                                    value: (event.target as HTMLTextAreaElement).value,
                                })}
                            />
                        </div>
                    </div>

                    <PieDivider label="Options" />

                    <div className={styles.formGrid}>
                        <div className={styles.stackTight}>
                            {/*
                              * "Select all" checkbox showing the `indeterminate` state. Note the
                              * indeterminate flag is purely visual — the checked state still
                              * decides what a form submits.
                              */}
                            <PieCheckbox
                                name="dietarySelectAll"
                                data-test-id="menu-dietary-select-all"
                                checked={allDietarySelected}
                                indeterminate={someDietarySelected}
                                onChange={handleDietarySelectAll}
                            >
                                Select all dietary labels
                            </PieCheckbox>

                            <PieCheckboxGroup
                                name="dietary"
                                data-test-id="menu-dietary-group"
                                status={menuForm.dietary.length > 0 ? 'success' : 'default'}
                                assistiveText={
                                    menuForm.dietary.length > 0
                                        ? `${menuForm.dietary.length} dietary label(s) will be shown to customers.`
                                        : 'Dietary labels help customers filter your menu.'
                                }
                            >
                                <PieFormLabel slot="label" optional="optional">Dietary labels</PieFormLabel>
                                {dietaryOptions.map((option) => (
                                    <PieCheckbox
                                        key={option.value}
                                        name={option.value}
                                        value={option.value}
                                        labelFit="fill"
                                        data-test-id={`menu-dietary-${option.value}`}
                                        checked={menuForm.dietary.includes(option.value)}
                                        onChange={() => dispatch({ type: 'menuForm/toggleDietary', value: option.value })}
                                    >
                                        {option.label}
                                    </PieCheckbox>
                                ))}
                            </PieCheckboxGroup>
                        </div>

                        <div className={styles.stackTight}>
                            <PieRadioGroup
                                name="availability"
                                isInline
                                data-test-id="menu-availability-group"
                                value={menuForm.availability}
                                assistiveText="You can change this at any time."
                                onChange={(event: CustomEvent) => dispatch({
                                    type: 'menuForm/setAvailability',
                                    availability: (event.target as HTMLInputElement).value as MenuForm['availability'],
                                })}
                            >
                                <PieFormLabel slot="label">Where is it available?</PieFormLabel>
                                {availabilityOptions.map((option) => (
                                    <PieRadio key={option.value} value={option.value}>
                                        {option.label}
                                    </PieRadio>
                                ))}
                            </PieRadioGroup>

                            {/* `pie-switch` renders its own label via the `label` prop. */}
                            <PieSwitch
                                name="isFeatured"
                                label="Feature on the shop front"
                                labelPlacement="trailing"
                                data-test-id="menu-featured-switch"
                                checked={menuForm.isFeatured}
                                onChange={() => dispatch({ type: 'menuForm/toggleFeatured' })}
                            />
                            <PieSwitch
                                name="acceptsSubstitutions"
                                label="Allow ingredient substitutions"
                                labelPlacement="leading"
                                data-test-id="menu-substitutions-switch"
                                checked={menuForm.acceptsSubstitutions}
                                onChange={() => dispatch({ type: 'menuForm/toggleSubstitutions' })}
                            />

                            {/*
                              * A rich checkbox label. The docs allow HTML in the default slot as
                              * long as the consumer verifies screen reader narration; PIE tokens
                              * and typography utilities are used for the styling.
                              */}
                            <PieCheckbox name="upsell" value="upsell" labelFit="fill" data-test-id="menu-upsell-checkbox">
                                <span
                                    style={{
                                        display: 'flex',
                                        flexWrap: 'wrap',
                                        gap: 'var(--dt-spacing-a)',
                                        justifyContent: 'space-between',
                                    }}
                                >
                                    <span className="u-font-body-strong-s">Add to the &ldquo;Goes well with mash&rdquo; upsell</span>
                                    <span className="u-font-body-strong-s">+£1.50</span>
                                    <span
                                        className="u-font-caption"
                                        style={{ width: '100%', color: 'var(--dt-color-content-subdued)' }}
                                    >
                                        Shown at checkout to customers who have not added mash or peas.
                                    </span>
                                </span>
                            </PieCheckbox>

                            {/* Leading label position, and a disabled checkbox for completeness. */}
                            <PieCheckbox
                                name="ageRestricted"
                                value="ageRestricted"
                                labelPosition="leading"
                                data-test-id="menu-age-checkbox"
                            >
                                Age restricted (contains alcohol)
                            </PieCheckbox>
                        </div>
                    </div>

                    <PieDivider label="Reference fields" />

                    <div className={styles.formGrid}>
                        <div className={styles.formField}>
                            <PieFormLabel id="itemSkuLabel" for="itemSku">Internal SKU</PieFormLabel>
                            <PieTextInput
                                id="itemSku"
                                name="itemSku"
                                type="text"
                                size="small"
                                readonly
                                value="PIE-2026-0187"
                                aria-labelledby="itemSkuLabel"
                                assistiveText="Generated automatically and cannot be edited."
                                data-test-id="menu-item-sku"
                            />
                        </div>

                        <div className={styles.formField}>
                            <PieFormLabel id="itemHotlineLabel" for="itemHotline" optional="optional">
                                Pastry supplier hotline
                            </PieFormLabel>
                            <PieTextInput
                                id="itemHotline"
                                name="itemHotline"
                                type="tel"
                                size="medium"
                                inputmode="tel"
                                autocomplete="tel"
                                placeholder="0117 000 0000"
                                aria-labelledby="itemHotlineLabel"
                                status="success"
                                assistiveText="Verified with the supplier in July."
                                data-test-id="menu-item-hotline"
                                value={hotline}
                                onInput={(event: InputEvent) => setHotline((event.target as HTMLInputElement).value)}
                            >
                                <IconPercentage slot="trailingIcon" />
                            </PieTextInput>
                        </div>

                        <div className={`${styles.formField} ${styles.formFieldWide}`}>
                            <PieFormLabel id="bakeryNotesLabel" for="bakeryNotes" optional="optional">
                                Bakery notes
                            </PieFormLabel>
                            {/* `resize="manual"` lets the user drag, but never auto-grows. */}
                            <PieTextarea
                                id="bakeryNotes"
                                name="bakeryNotes"
                                resize="manual"
                                rows={3}
                                size="small"
                                maxlength={120}
                                placeholder="Anything the bakery should know."
                                aria={{ label: 'Bakery notes' }}
                                assistiveText="Only visible to your team."
                                data-test-id="menu-bakery-notes"
                                value={bakeryNotes}
                                onInput={(event: InputEvent) => setBakeryNotes((event.target as HTMLTextAreaElement).value)}
                            />
                        </div>

                        <div className={`${styles.formField} ${styles.formFieldWide}`}>
                            <PieFormLabel id="allergenNotesLabel" for="allergenNotes">Allergen statement</PieFormLabel>
                            {/* `resize="none"` is fixed at the given row count. */}
                            <PieTextarea
                                id="allergenNotes"
                                name="allergenNotes"
                                resize="none"
                                rows={2}
                                readonly
                                value="Prepared in a bakery that handles gluten, milk, eggs, soya and sesame."
                                aria={{ label: 'Allergen statement' }}
                                data-test-id="menu-allergen-notes"
                            />
                        </div>
                    </div>

                    <div className={styles.formFooter}>
                        <div className={styles.formStatus}>
                            {Object.keys(menuForm.errors).length > 0 ? (
                                <PieAssistiveText
                                    variant="error"
                                    message={`${Object.keys(menuForm.errors).length} field(s) need attention.`}
                                    data-test-id="menu-form-error-summary"
                                />
                            ) : (
                                <PieAssistiveText
                                    variant="default"
                                    message="Draft pies are not visible to customers until published."
                                />
                            )}
                        </div>

                        <PieButton type="reset" variant="ghost" size="small-productive" data-test-id="menu-form-reset">
                            Reset
                        </PieButton>
                        <PieButton
                            type="button"
                            variant="destructive-ghost"
                            size="small-productive"
                            data-test-id="menu-form-discard"
                            onClick={() => {
                                dispatch({ type: 'menuForm/reset' });
                                toaster.create({ message: 'Draft discarded.', variant: 'warning', isDismissible: true });
                            }}
                        >
                            Discard draft
                        </PieButton>
                        <PieButton
                            type="submit"
                            variant="primary"
                            size="small-productive"
                            isResponsive
                            isLoading={menuForm.isSubmitting}
                            data-test-id="menu-form-submit"
                        >
                            Save pie
                        </PieButton>
                    </div>
                </form>

                {menuForm.submittedPayload && (
                    <div className={styles.stackTight}>
                        <h3 className="u-font-heading-xs">Submitted payload</h3>
                        <pre className={`u-font-caption ${styles.payload}`} data-test-id="menu-form-payload">
                            {menuForm.submittedPayload}
                        </pre>
                    </div>
                )}
            </div>
        </section>
    );
}
