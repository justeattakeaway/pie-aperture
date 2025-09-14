'use client';

import { PieHeadlessRadioButton, PieHeadlessRadioGroup } from "@justeattakeaway/pie-headless-radio-group/dist/react";
import { PieRadio } from "@justeattakeaway/pie-webc/react/radio.js";
import { PieRadioGroup } from "@justeattakeaway/pie-webc/react/radio-group.js";
import { PieFormLabel } from "@justeattakeaway/pie-webc/react/form-label.js";
import { PieButton } from "@justeattakeaway/pie-webc/react/button.js";

import { useState, useEffect } from "react";

export default function RadioGroupPage() {
    // State to manage client-side only rendering and prevent hydration errors.
    const [isClient, setIsClient] = useState(false);

    // State for original radio group (used in the controlled form)
    const [favouriteTakeaway, setFavouriteTakeaway] = useState('');

    // State for controlled headless radio group demos
    const [selectedSize, setSelectedSize] = useState('m');
    const [selectedView, setSelectedView] = useState('grid');
    const [selectedPlan, setSelectedPlan] = useState('startup');
    const [controlledSubmittedData, setControlledSubmittedData] = useState('');

    // State for uncontrolled form
    const [uncontrolledSubmittedData, setUncontrolledSubmittedData] = useState('');

    useEffect(() => {
        // This effect runs only on the client, after the initial render.
        setIsClient(true);
    }, []);


    const handleControlledSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.target as HTMLFormElement);
        const data: { [key: string]: any } = {};
        formData.forEach((value, key) => { data[key] = value; });
        setControlledSubmittedData(JSON.stringify(data, null, 2));
    };

    const handleControlledReset = () => {
        setFavouriteTakeaway('');
        setSelectedSize('m');
        setSelectedView('grid');
        setSelectedPlan('startup');
        setControlledSubmittedData('');
    };

    const handleUncontrolledSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.target as HTMLFormElement);
        const data: { [key: string]: any } = {};
        formData.forEach((value, key) => { data[key] = value; });
        setUncontrolledSubmittedData(JSON.stringify(data, null, 2));
    };

    const componentStyles = `
        /* Scoped styles would not work on slotted web component content, so we use a global style block. */
        .p-8 {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
            color: #1a202c;
        }

        .card {
            background-color: white;
            padding: 1.5rem;
            border-radius: 0.5rem;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
            max-width: 500px;
        }

        /* Base styles for labels and indicators */
        .radio-label, .button-label, .card-radio-label {
            cursor: pointer;
            transition: all 0.2s ease-in-out;
        }

        pie-headless-radio-button[disabled] .radio-label,
        pie-headless-radio-button[disabled] .button-label,
        pie-headless-radio-button[disabled] .card-radio-label {
            opacity: 0.5;
            cursor: not-allowed;
            background-color: #edf2f7;
        }

        pie-headless-radio-button:not([disabled]):focus-within {
            outline: 2px solid #4299e1;
            outline-offset: 2px;
            border-radius: 4px;
        }

        /* Vertical Layout */
        .vertical-group pie-headless-radio-button:not(:last-child) {
            display: block;
            margin-bottom: 0.5rem;
        }

        .radio-label {
            display: flex;
            align-items: center;
            padding: 0.75rem 1rem;
            border: 2px solid #e2e8f0;
            border-radius: 0.375rem;
            gap: 0.75rem;
        }

        pie-headless-radio-button[checked] .radio-label {
            border-color: #3182ce;
            background-color: #ebf8ff;
        }

        .custom-radio-indicator {
            width: 1.25rem;
            height: 1.25rem;
            border-radius: 50%;
            border: 2px solid #cbd5e0;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
        }

        .custom-radio-indicator::after {
            content: '';
            display: block;
            width: 0.75rem;
            height: 0.75rem;
            border-radius: 50%;
            background-color: #3182ce;
            transform: scale(0);
            transition: transform 0.15s ease-in-out;
        }

        pie-headless-radio-button[checked] .custom-radio-indicator {
            border-color: #3182ce;
        }

        pie-headless-radio-button[checked] .custom-radio-indicator::after {
            transform: scale(1);
        }

        /* Button Group Layout */
        .button-group {
            display: flex;
            width: fit-content;
            align-items: start;
        }

        .button-group pie-headless-radio-button:not(:first-child) {
            margin-left: -1px;
        }

        .button-group .button-label {
            padding: 0.75rem 1rem;
            text-align: center;
            background-color: #fff;
            border: 1px solid #cbd5e0;
        }

        .button-group pie-headless-radio-button:first-child .button-label {
            border-top-left-radius: 0.375rem;
            border-bottom-left-radius: 0.375rem;
        }

        .button-group pie-headless-radio-button:last-child .button-label {
            border-top-right-radius: 0.375rem;
            border-bottom-right-radius: 0.375rem;
        }

        .button-group pie-headless-radio-button[checked] .button-label {
            background-color: #3182ce;
            color: white;
            border-color: #3182ce;
            z-index: 2;
        }

        /* Card Layout */
        .card-radio-label {
            display: flex;
            padding: 1rem;
            border: 2px solid #e2e8f0;
            border-radius: 0.5rem;
            gap: 1rem;
            align-items: flex-start;
        }

        pie-headless-radio-button[checked] .card-radio-label {
            border-color: #3182ce;
            background-color: #ebf8ff;
        }

        .card-radio-label .content {
            flex-grow: 1;
        }

        .card-radio-label h4 {
            margin: 0 0 0.25rem 0;
            color: #2d3748;
            font-weight: 600;
        }

        .card-radio-label p {
            margin: 0;
            color: #718096;
            font-size: 0.875rem;
        }

        .card-radio-label .price {
            font-weight: 600;
            color: #2d3748;
        }

        .form-output {
            margin-top: 1.5rem;
            background-color: #f7fafc;
            border: 1px solid #e2e8f0;
            padding: 1rem;
            border-radius: 0.375rem;
            white-space: pre-wrap;
            max-width: 500px;
        }
    `;

    return (
        <main title="Radio Group">
            <div className="p-8">
                <style dangerouslySetInnerHTML={{ __html: componentStyles }} />
                <h2 className="text-3xl font-bold mb-8">Controlled Form Example</h2>
                <p className="mb-8 max-w-2xl">In this form, the state of every radio group is &quot;controlled&quot; by React. The `value` is explicitly set from `useState`, and `onChange` handlers are used to update the state. This gives you full control over the component&apos;s state at all times.</p>
                <form onSubmit={handleControlledSubmit} onReset={handleControlledReset}>
                    {/* Original Non-Headless Component */}
                    <h3 className="text-2xl font-bold mb-4">Original Radio Group</h3>
                    <div className="card mb-8">
                        <PieRadioGroup name="favouriteTakeaway" value={favouriteTakeaway} onChange={(e: any) => setFavouriteTakeaway(e.target.value)}>
                            <PieFormLabel slot="label">
                                Your favourite takeaway is: {favouriteTakeaway || 'not selected'}
                            </PieFormLabel>
                            <PieRadio value="chinese">Chinese</PieRadio>
                            <PieRadio value="shawarma">Shawarma</PieRadio>
                            <PieRadio value="pizza">Pizza</PieRadio>
                        </PieRadioGroup>
                    </div>

                    <PieButton className="my-8">Some focusable element</PieButton>

                    <hr className="my-16 border-t border-gray-200" />

                    {/* New Headless Component Demos */}
                    <h3 className="text-2xl font-bold mb-4">Headless Radio Group Demos</h3>

                    {/* Demo 1: Vertical Layout */}
                    <div className="card mb-8">
                        <h4 className="text-xl font-semibold mb-2">Standard Layout (Vertical)</h4>
                        <p className="text-gray-600 mb-4">Selected size: <strong className="text-blue-600">{selectedSize || 'none'}</strong></p>
                        <PieHeadlessRadioGroup
                            name="size"
                            label="T-shirt Size"
                            value={selectedSize}
                            onChange={(e: any) => setSelectedSize(e.target.value)}
                            className="vertical-group">
                            <PieHeadlessRadioButton value="s">
                                <span className="radio-label">
                                    <span className="custom-radio-indicator"></span>
                                    Small
                                </span>
                            </PieHeadlessRadioButton>
                            <PieHeadlessRadioButton value="m">
                                <span className="radio-label">
                                    <span className="custom-radio-indicator"></span>
                                    Medium
                                </span>
                            </PieHeadlessRadioButton>
                            <PieHeadlessRadioButton value="l">
                                <span className="radio-label">
                                    <span className="custom-radio-indicator"></span>
                                    Large
                                </span>
                            </PieHeadlessRadioButton>
                            <PieHeadlessRadioButton value="xl" disabled>
                                <span className="radio-label">
                                    <span className="custom-radio-indicator"></span>
                                    X-Large (out of stock)
                                </span>
                            </PieHeadlessRadioButton>
                        </PieHeadlessRadioGroup>
                    </div>

                    {/* Demo 2: Button Group Layout */}
                    <div className="card mb-8">
                        <h4 className="text-xl font-semibold mb-2">Button Group Layout (Horizontal)</h4>
                        <p className="text-gray-600 mb-4">Selected view: <strong className="text-blue-600">{selectedView || 'none'}</strong></p>
                        <PieHeadlessRadioGroup
                            name="view"
                            label="View Mode"
                            value={selectedView}
                            onChange={(e: any) => setSelectedView(e.target.value)}
                            className="button-group">
                            <PieHeadlessRadioButton value="list">
                                <span className="button-label">List</span>
                            </PieHeadlessRadioButton>
                            <PieHeadlessRadioButton value="grid">
                                <span className="button-label">Grid</span>
                            </PieHeadlessRadioButton>
                            <PieHeadlessRadioButton value="map">
                                <span className="button-label">Map</span>
                            </PieHeadlessRadioButton>
                        </PieHeadlessRadioGroup>
                    </div>

                    {/* Demo 3: Card Layout */}
                    <div className="card mb-8">
                         <h4 className="text-xl font-semibold mb-2">Card Layout</h4>
                         <p className="text-gray-600 mb-4">Selected plan: <strong className="text-blue-600">{selectedPlan || 'none'}</strong></p>
                         <PieHeadlessRadioGroup
                            name="plan"
                            label="Subscription Plan"
                            value={selectedPlan}
                            onChange={(e: any) => setSelectedPlan(e.target.value)}
                            className="vertical-group">
                            <PieHeadlessRadioButton value="startup">
                                <div className="card-radio-label">
                                    <span className="custom-radio-indicator"></span>
                                    <div className="content">
                                        <h4>Startup</h4>
                                        <p>A plan that scales with your rapidly growing business.</p>
                                    </div>
                                    <span className="price">$25</span>
                                </div>
                            </PieHeadlessRadioButton>
                            <PieHeadlessRadioButton value="business">
                                <div className="card-radio-label">
                                    <span className="custom-radio-indicator"></span>
                                    <div className="content">
                                        <h4>Business</h4>
                                        <p>A plan that sets your business up for success.</p>
                                    </div>
                                    <span className="price">$50</span>
                                </div>
                            </PieHeadlessRadioButton>
                        </PieHeadlessRadioGroup>
                    </div>

                    <div className="form-actions mt-8 flex">
                        <PieButton type="submit">Submit Controlled Form</PieButton>
                        <PieButton type="reset" variant="secondary" className="ml-4">Reset Controlled Form</PieButton>
                    </div>

                    {controlledSubmittedData && <pre className="form-output">{controlledSubmittedData}</pre>}
                </form>

                <hr className="my-16 border-t-4 border-gray-300" />

                <h2 className="text-3xl font-bold mb-8">Uncontrolled Form Example</h2>
                <p className="mb-8 max-w-2xl">In this form, the radio group is &quot;uncontrolled&quot;. We provide a `defaultValue` but do not manage its state with `useState`. The component handles its own state internally. We only read the value from the form when it is submitted.</p>

                <form onSubmit={handleUncontrolledSubmit}>
                    <div className="card mb-8">
                        <h4 className="text-xl font-semibold mb-2">Standard Layout (Uncontrolled)</h4>
                        <PieHeadlessRadioGroup
                            name="uncontrolled-size"
                            label="T-shirt Size"
                            defaultValue="m"
                            className="vertical-group">
                            <PieHeadlessRadioButton value="s">
                                <span className="radio-label">
                                    <span className="custom-radio-indicator"></span>
                                    Small
                                </span>
                            </PieHeadlessRadioButton>
                            <PieHeadlessRadioButton value="m">
                                <span className="radio-label">
                                    <span className="custom-radio-indicator"></span>
                                    Medium
                                </span>
                            </PieHeadlessRadioButton>
                            <PieHeadlessRadioButton value="l">
                                <span className="radio-label">
                                    <span className="custom-radio-indicator"></span>
                                    Large
                                </span>
                            </PieHeadlessRadioButton>
                        </PieHeadlessRadioGroup>
                    </div>

                    <div className="card mb-8">
                        <h4 className="text-xl font-semibold mb-2">Card Layout (Uncontrolled)</h4>
                         <PieHeadlessRadioGroup
                            name="uncontrolled-plan"
                            label="Subscription Plan"
                            defaultValue="business"
                            className="vertical-group">
                            <PieHeadlessRadioButton value="startup">
                                <div className="card-radio-label">
                                    <span className="custom-radio-indicator"></span>
                                    <div className="content">
                                        <h4>Startup</h4>
                                        <p>A plan that scales with your business.</p>
                                    </div>
                                    <span className="price">$25</span>
                                </div>
                            </PieHeadlessRadioButton>
                            <PieHeadlessRadioButton value="business">
                                <div className="card-radio-label">
                                    <span className="custom-radio-indicator"></span>
                                    <div className="content">
                                        <h4>Business</h4>
                                        <p>A plan that sets your business up for success.</p>
                                    </div>
                                    <span className="price">$50</span>
                                </div>
                            </PieHeadlessRadioButton>
                        </PieHeadlessRadioGroup>
                    </div>

                    <div className="form-actions mt-8 flex">
                        <PieButton type="submit">Submit Uncontrolled Form</PieButton>
                    </div>
                    {uncontrolledSubmittedData && <pre className="form-output">{uncontrolledSubmittedData}</pre>}
                </form>

            </div>
        </main>
    );
}

