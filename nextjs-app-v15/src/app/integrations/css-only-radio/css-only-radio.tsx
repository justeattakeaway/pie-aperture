'use client';

import React, { useState } from 'react';
import NavigationLayout from '@/app/layout/navigation';
import { PieDivider } from '@justeattakeaway/pie-webc/react/divider.js';
import '@justeattakeaway/pie-css/dist/components/radio.css';
import '@/styles/css-only-radio.scss';

export default function CssOnlyRadio() {
    const [selectedPlan, setSelectedPlan] = useState('extend');
    const [selectedPlanError, setSelectedPlanError] = useState('express');

    return (
        <NavigationLayout title="CSS Only Radio">
            <div>
                <fieldset className="delivery-options">
                    <label className="delivery-card">
                        <div className="card-main">
                            <input 
                                type="radio" 
                                name="delivery_plan" 
                                value="free" 
                                className="c-radio"
                                checked={selectedPlan === 'free'}
                                onChange={(e) => setSelectedPlan(e.target.value)}
                            />
                            <div className="card-content">
                                <span className="card-title">Lorem ipsum dolor</span>
                                <span className="card-subtitle">Donec id justo sed nulla amet</span>
                            </div>
                        </div>
                    </label>

                    <label className="delivery-card">
                        <div className="card-main">
                            <input 
                                type="radio" 
                                name="delivery_plan" 
                                value="extend" 
                                className="c-radio"
                                checked={selectedPlan === 'extend'}
                                onChange={(e) => setSelectedPlan(e.target.value)}
                            />
                            <div className="card-content">
                                <span className="card-title">Lorem ipsum dolor et amet</span>
                                <span className="card-subtitle">Aenean eu leo quam ornare</span>
                                <span className="card-subtitle">Donec id justo sed nulla amet</span>
                            </div>
                        </div>

                        <div className="card-expanded">
                            <p>Nulla vitae <strong>ipsum fermentum</strong> elit cras justo vehicula! Cras mattis consectetur purus sit amet <strong>purus</strong></p>
                        </div>
                    </label>

                    <label className="delivery-card">
                        <div className="card-main">
                            <input 
                                type="radio" 
                                name="delivery_plan" 
                                value="extend-2" 
                                className="c-radio"
                                checked={selectedPlan === 'extend-2'}
                                onChange={(e) => setSelectedPlan(e.target.value)}
                            />
                            <div className="card-content">
                                <span className="card-title">Lorem ipsum dolor et</span>
                                <span className="card-subtitle">Aenean eu leo quam ornare</span>
                                <span className="card-subtitle">Donec id justo sed nulla amet</span>
                            </div>
                        </div>

                        <div className="card-expanded">
                            <p>Nulla vitae <strong>ipsum fermentum</strong> elit vehicula! Cras mattis purus sit <strong>purus</strong></p>
                        </div>
                    </label>

                    <label className="delivery-card">
                        <div className="card-main">
                            <input 
                                type="radio" 
                                name="delivery_plan" 
                                value="premium" 
                                className="c-radio"
                                disabled
                            />
                            <div className="card-content">
                                <span className="card-title">Lorem ipsum premium (Disabled)</span>
                                <span className="card-subtitle">Sed posuere consectetur est</span>
                                <span className="card-subtitle">Maecenas sed diam eget risus</span>
                            </div>
                        </div>

                        <div className="card-expanded">
                            <p>Vestibulum id <strong>ligula porta</strong> felis euismod semper!</p>
                        </div>
                    </label>
                </fieldset>

                <PieDivider />

                <h2 className="u-font-heading-l">Error State</h2>
                <fieldset className="delivery-options has-error">
                    <label className="delivery-card">
                        <div className="card-main">
                            <input 
                                type="radio" 
                                name="delivery_plan_error" 
                                value="standard" 
                                className="c-radio c-radio--error"
                                checked={selectedPlanError === 'standard'}
                                onChange={(e) => setSelectedPlanError(e.target.value)}
                            />
                            <div className="card-content">
                                <span className="card-title">Nullam quis risus eget</span>
                                <span className="card-subtitle">Cras justo odio dapibus</span>
                            </div>
                        </div>
                    </label>

                    <label className="delivery-card">
                        <div className="card-main">
                            <input 
                                type="radio" 
                                name="delivery_plan_error" 
                                value="express" 
                                className="c-radio c-radio--error"
                                checked={selectedPlanError === 'express'}
                                onChange={(e) => setSelectedPlanError(e.target.value)}
                            />
                            <div className="card-content">
                                <span className="card-title">Vestibulum id ligula porta</span>
                                <span className="card-subtitle">Praesent commodo cursus magna</span>
                                <span className="card-subtitle">Vivamus sagittis lacus vel</span>
                            </div>
                        </div>

                        <div className="card-expanded">
                            <p>Cras mattis consectetur <strong>purus sit</strong> amet fermentum. Donec sed odio dui.</p>
                        </div>
                    </label>
                </fieldset>
            </div>
        </NavigationLayout>
    );
}
