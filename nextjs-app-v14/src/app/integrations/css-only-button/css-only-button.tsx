'use client';

import React from 'react';
import NavigationLayout from '@/app/layout/navigation';
import { PieDivider } from '@justeattakeaway/pie-webc/react/divider.js';
import { IconPlusCircle } from '@justeattakeaway/pie-icons-webc/dist/react/IconPlusCircle.js';
import '@justeattakeaway/pie-css/dist/components/button.css';
import '@/styles/css-only-button.scss';

export default function CssOnlyButton() {
    return (
        <NavigationLayout title="CSS Only Button">
            <div className="button-examples">
                <h2 className="u-font-heading-l">Variants</h2>
                <div className="button-group">
                    <div className="c-button c-button--primary c-button--medium">Primary</div>
                    <div className="c-button c-button--primary-alternative c-button--medium">Primary Alternative</div>
                    <div className="c-button c-button--primary-alternative-dark c-button--medium">Primary Alternative Dark</div>
                    <div className="c-button c-button--secondary c-button--medium">Secondary</div>
                    <div className="c-button c-button--outline c-button--medium">Outline</div>
                    <div className="c-button c-button--ghost c-button--medium">Ghost</div>
                    <div className="c-button c-button--ghost-dark c-button--medium">Ghost Dark</div>
                    <div className="c-button c-button--destructive c-button--medium">Destructive</div>
                    <div className="c-button c-button--destructive-ghost c-button--medium">Destructive Ghost</div>
                </div>
                <div className="button-group button-group--inverse">
                    <div className="c-button c-button--inverse c-button--medium">Inverse</div>
                    <div className="c-button c-button--outline-inverse c-button--medium">Outline Inverse</div>
                    <div className="c-button c-button--ghost-inverse c-button--medium">Ghost Inverse</div>
                    <div className="c-button c-button--ghost-inverse-light c-button--medium">Ghost Inverse Light</div>
                </div>

                <PieDivider />

                <h2 className="u-font-heading-l">Sizes</h2>
                <div className="button-group">
                    <div className="c-button c-button--primary c-button--xsmall">Xsmall</div>
                    <div className="c-button c-button--primary c-button--small-productive">Small Productive</div>
                    <div className="c-button c-button--primary c-button--small-expressive">Small Expressive</div>
                    <div className="c-button c-button--primary c-button--medium">Medium</div>
                    <div className="c-button c-button--primary c-button--large">Large</div>
                </div>

                <PieDivider />

                <h2 className="u-font-heading-l">Disabled</h2>
                <div className="button-group">
                    <div className="c-button c-button--primary c-button--medium is-disabled">Primary Disabled</div>
                    <div className="c-button c-button--secondary c-button--medium is-disabled">Secondary Disabled</div>
                    <div className="c-button c-button--outline c-button--medium is-disabled">Outline Disabled</div>
                    <div className="c-button c-button--ghost c-button--medium is-disabled">Ghost Disabled</div>
                    <div className="c-button c-button--destructive c-button--medium is-disabled">Destructive Disabled</div>
                </div>

                <PieDivider />

                <h2 className="u-font-heading-l">Full Width</h2>
                <div className="button-group">
                    <div className="c-button c-button--primary c-button--medium c-button--fullWidth">Full Width Primary</div>
                    <div className="c-button c-button--secondary c-button--medium c-button--fullWidth">Full Width Secondary</div>
                </div>

                <PieDivider />

                <h2 className="u-font-heading-l">Truncated</h2>
                <div className="button-group">
                    <div style={{ maxWidth: '200px' }}>
                        <div className="c-button c-button--primary c-button--medium c-button--fullWidth c-button--truncate">
                            <span>This label is too long and will be truncated with an ellipsis</span>
                        </div>
                    </div>
                </div>

                <PieDivider />

                <h2 className="u-font-heading-l">Icons</h2>
                <div className="button-group">
                    <div className="c-button c-button--primary c-button--medium">
                        <IconPlusCircle></IconPlusCircle>
                        Leading icon
                    </div>
                    <div className="c-button c-button--primary c-button--medium">
                        Trailing icon
                        <IconPlusCircle></IconPlusCircle>
                    </div>
                </div>

                <PieDivider />

                <h2 className="u-font-heading-l">Responsive</h2>
                <div className="button-group">
                    <div className="c-button c-button--primary c-button--xsmall c-button--responsive">Responsive</div>
                    <div className="c-button c-button--primary c-button--xsmall c-button--responsive c-button--expressive">Responsive Expressive</div>
                </div>
            </div>
        </NavigationLayout>
    );
}
