import '@justeattakeaway/pie-webc/components/button.js';
import '@justeattakeaway/pie-webc/components/icon-button.js';
import '@justeattakeaway/pie-webc/components/tooltip.js';
import '@justeattakeaway/pie-icons-webc/dist/IconInfoCircle.js';
import './shared.js';
import './utils/navigation.js';

const positions = ['top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end', 'left', 'left-start', 'left-end', 'right', 'right-start', 'right-end'];

document.querySelector('#app').innerHTML = `
    <div class="tooltip-showcase">
    <h2 class="u-font-heading-xl">Tooltip examples</h2>
    <section class="tooltip-default">
        <h3 class="u-font-heading-l">Default</h3>
        <pie-button id="default-tooltip-trigger">Delivery times</pie-button>
        <pie-tooltip trigger="default-tooltip-trigger" isOpen>
            <span slot="content">Arrives today.</span>
        </pie-tooltip>
    </section>

    <section>
        <h3 class="u-font-heading-l">Dismissible</h3>
        <pie-button id="dismissible-tooltip-trigger">Delivery times</pie-button>
        <pie-tooltip
            id="dismissible-tooltip"
            trigger="dismissible-tooltip-trigger"
            heading="Delivery times"
            isDismissible>
            <span slot="content">Orders placed before 6pm arrive today.</span>
        </pie-tooltip>
    </section>

    <section>
        <h3 class="u-font-heading-l">With action</h3>
        <pie-button id="action-tooltip-trigger">Delivery times</pie-button>
        <pie-tooltip trigger="action-tooltip-trigger" isOpen heading="Delivery times">
            <span slot="content">Orders placed before 6pm arrive today.</span>
            <pie-button slot="action" size="xsmall">Next</pie-button>
        </pie-tooltip>
    </section>

    <section class="tooltip-sizing-variants">
        <h3 class="u-font-heading-l">Sizing and variants</h3>
        <pie-button id="fit-tooltip-trigger">Fit to content</pie-button>
        <pie-tooltip trigger="fit-tooltip-trigger" isOpen size="fit-to-content">
            <span slot="content">Arrives today.</span>
        </pie-tooltip>
        <div style="margin-top: var(--dt-spacing-j);">
            <pie-button id="fill-tooltip-trigger" isFullWidth style="margin-top: 150px;">Fill container</pie-button>
            <pie-tooltip trigger="fill-tooltip-trigger" isOpen size="fill-container">
                <span slot="content">Orders placed before 6pm arrive today. Orders placed after 6pm arrive the next working day.</span>
            </pie-tooltip>
        </div>
        <div class="tooltip-inverse">
            <pie-button id="inverse-tooltip-trigger" variant="inverse">Inverse</pie-button>
            <pie-tooltip trigger="inverse-tooltip-trigger" isOpen variant="inverse">
                <span slot="content">Arrives today.</span>
            </pie-tooltip>
        </div>
        <div style="margin-top: var(--dt-spacing-j);">
            <pie-icon-button id="icon-tooltip-trigger" aria='${JSON.stringify({ label: 'Delivery times' })}'>
                <icon-info-circle></icon-info-circle>
            </pie-icon-button>
            <pie-tooltip trigger="icon-tooltip-trigger" isOpen type="icon">
                <span slot="content">Arrives today.</span>
            </pie-tooltip>
        </div>
    </section>

    <section>
        <h3 class="u-font-heading-l">Positions</h3>
        <div class="tooltip-positions">
            ${positions.map((position) => `
                <div style="grid-area: ${position};">
                    <button id="tooltip-${position}" class="tooltip-placement-anchor" type="button" aria-label="${position}"></button>
                    <pie-tooltip trigger="tooltip-${position}" isOpen position="${position}" size="fit-to-content">
                        <span slot="content">${position}</span>
                    </pie-tooltip>
                </div>`).join('')}
        </div>
    </section>
    </div>
    <style>
        .tooltip-inverse {
            align-items: center;
            background-color: var(--dt-color-container-dark);
            display: flex;
            justify-content: center;
            margin-top: var(--dt-spacing-j);
            min-block-size: 160px;
            padding: var(--dt-spacing-e);
        }

        .tooltip-sizing-variants h3 {
            margin-block-end: 100px;
        }

        .tooltip-default h3 {
            margin-block-end: 100px;
        }

        .tooltip-positions {
            display: grid;
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
            row-gap: var(--dt-spacing-e);
        }

        .tooltip-showcase {
            display: grid;
            gap: var(--dt-spacing-j);
            max-inline-size: 100%;
        }

        .tooltip-placement-anchor {
            background-color: var(--dt-color-container-default);
            block-size: 56px;
            border: 1px solid var(--dt-color-border-strong);
            border-radius: var(--dt-radius-rounded-b);
            cursor: pointer;
            inline-size: 56px;
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
    </style>`;

const dismissibleTooltip = document.querySelector('#dismissible-tooltip');

document.querySelector('#dismissible-tooltip-trigger').addEventListener('click', () => {
    dismissibleTooltip.isOpen = true;
});

dismissibleTooltip.addEventListener('pie-tooltip-close', () => {
    dismissibleTooltip.isOpen = false;
});
