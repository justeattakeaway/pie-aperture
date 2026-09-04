'use client';

import NavigationLayout from "@/app/layout/navigation";
import { PieButton } from '@justeattakeaway/pie-webc/react/button.js';
import { PieIconButton } from '@justeattakeaway/pie-webc/react/icon-button.js';
import { PieTooltip } from '@justeattakeaway/pie-webc/react/tooltip.js';
import { IconInfoCircle } from '@justeattakeaway/pie-icons-webc/dist/react/IconInfoCircle.js';
import { useState } from 'react';

const positions = ['top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end', 'left', 'left-start', 'left-end', 'right', 'right-start', 'right-end'] as const;

export default function Tooltip() {
    const [isDismissibleOpen, setIsDismissibleOpen] = useState(false);

    return (
        <NavigationLayout title="Tooltip">
            <div className="tooltip-showcase">
            <h2 className="u-font-heading-xl">Tooltip examples</h2>
            <section className="tooltip-default">
                <h3 className="u-font-heading-l">Default</h3>
                <PieButton id="default-tooltip-trigger">Delivery times</PieButton>
                <PieTooltip trigger="default-tooltip-trigger" isOpen>
                    <span slot="content">Arrives today.</span>
                </PieTooltip>
            </section>

            <section>
                <h3 className="u-font-heading-l">Dismissible</h3>
                <PieButton id="dismissible-tooltip-trigger" onClick={() => setIsDismissibleOpen(true)}>Delivery times</PieButton>
                <PieTooltip
                    trigger="dismissible-tooltip-trigger"
                    isOpen={isDismissibleOpen}
                    isDismissible
                    heading="Delivery times"
                    aria={{ close: 'Close' }}
                    onPieTooltipClose={() => setIsDismissibleOpen(false)}>
                    <span slot="content">Orders placed before 6pm arrive today.</span>
                </PieTooltip>
            </section>

            <section>
                <h3 className="u-font-heading-l">With action</h3>
                <PieButton id="action-tooltip-trigger">Delivery times</PieButton>
                <PieTooltip trigger="action-tooltip-trigger" isOpen heading="Delivery times">
                    <span slot="content">Orders placed before 6pm arrive today.</span>
                    <PieButton slot="action" size="xsmall">Next</PieButton>
                </PieTooltip>
            </section>

            <section className="tooltip-sizing-variants">
                <h3 className="u-font-heading-l">Sizing and variants</h3>
                <PieButton id="fit-tooltip-trigger">Fit to content</PieButton>
                <PieTooltip trigger="fit-tooltip-trigger" isOpen size="fit-to-content">
                    <span slot="content">Arrives today.</span>
                </PieTooltip>
                <div style={{ marginTop: 'var(--dt-spacing-j)' }}>
                    <PieButton id="fill-tooltip-trigger" isFullWidth style={{ marginTop: '150px' }}>Fill container</PieButton>
                    <PieTooltip trigger="fill-tooltip-trigger" isOpen size="fill-container">
                        <span slot="content">Orders placed before 6pm arrive today. Orders placed after 6pm arrive the next working day.</span>
                    </PieTooltip>
                </div>
                <div className="tooltip-inverse">
                    <PieButton id="inverse-tooltip-trigger" variant="inverse">Inverse</PieButton>
                    <PieTooltip trigger="inverse-tooltip-trigger" isOpen variant="inverse">
                        <span slot="content">Arrives today.</span>
                    </PieTooltip>
                </div>
                <div style={{ marginTop: 'var(--dt-spacing-j)' }}>
                    <PieIconButton id="icon-tooltip-trigger" aria={{ label: 'Delivery times' }}>
                        <IconInfoCircle />
                    </PieIconButton>
                    <PieTooltip trigger="icon-tooltip-trigger" isOpen type="icon">
                        <span slot="content">Arrives today.</span>
                    </PieTooltip>
                </div>
            </section>

            <section>
                <h3 className="u-font-heading-l">Positions</h3>
                <div className="tooltip-positions">
                    {positions.map((position) => (
                        <div key={position} style={{ gridArea: position }}>
                            <button
                                id={`tooltip-${position}`}
                                type="button"
                                aria-label={position}
                                style={{
                                    backgroundColor: 'var(--dt-color-container-default)',
                                    border: '1px solid var(--dt-color-border-strong)',
                                    borderRadius: 'var(--dt-radius-rounded-b)',
                                    blockSize: '56px',
                                    cursor: 'pointer',
                                    inlineSize: '56px',
                                }} />
                            <PieTooltip trigger={`tooltip-${position}`} isOpen position={position} size="fit-to-content">
                                <span slot="content">{position}</span>
                            </PieTooltip>
                        </div>
                    ))}
                </div>
            </section>
            </div>
            <style jsx>{`
                .tooltip-showcase {
                    display: grid;
                    gap: var(--dt-spacing-j);
                    max-inline-size: 100%;
                }

                .tooltip-sizing-variants h3 {
                    margin-block-end: 100px;
                }

                .tooltip-default h3 {
                    margin-block-end: 100px;
                }

                .tooltip-inverse {
                    align-items: center;
                    background-color: var(--dt-color-container-dark);
                    display: flex;
                    justify-content: center;
                    margin-top: var(--dt-spacing-j);
                    min-block-size: 160px;
                    padding: var(--dt-spacing-e);
                }

                .tooltip-positions {
                    display: grid;
                    row-gap: var(--dt-spacing-e);
                    column-gap: var(--dt-spacing-j);
                    grid-template-areas:
                        '. top-start top top-end .'
                        'left-start . . . right-start'
                        'left . . . right'
                        'left-end . . . right-end'
                        '. bottom-start bottom bottom-end .';
                    justify-content: center;
                    max-inline-size: 100%;
                    padding: var(--dt-spacing-h) var(--dt-spacing-j);
                }

                @media (max-width: 599px) {
                    .tooltip-showcase {
                        text-align: center;
                    }

                    .tooltip-positions {
                        column-gap: var(--dt-spacing-c);
                        grid-template-areas:
                            'top-start'
                            'top'
                            'top-end'
                            'left-start'
                            'left'
                            'left-end'
                            'right-start'
                            'right'
                            'right-end'
                            'bottom-start'
                            'bottom'
                            'bottom-end';
                        padding-inline: var(--dt-spacing-c);
                        row-gap: var(--dt-spacing-j);
                    }
                }
            `}</style>
        </NavigationLayout>
    );
}
