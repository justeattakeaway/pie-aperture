'use client';

import NavigationLayout from "@/app/layout/navigation";
import { PieCard } from '@justeattakeaway/pie-webc/react/card.js';
import { PieIconButton } from '@justeattakeaway/pie-webc/react/icon-button.js';
import { PieLink } from '@justeattakeaway/pie-webc/react/link.js';
import { PieModal } from '@justeattakeaway/pie-webc/react/modal.js';
import { IconHeart } from '@justeattakeaway/pie-icons-webc/dist/react/IconHeart.js';
import { IconHeartFilled } from '@justeattakeaway/pie-icons-webc/dist/react/IconHeartFilled.js';
import { useState } from 'react';

const overlayStyle = { position: 'relative', zIndex: 'calc(var(--card-overlay-z-index) + 1)' } as const;

export default function Card({ disabled = false }: { disabled?: boolean }) {
    const [isDefaultModalOpen, setIsDefaultModalOpen] = useState(false);
    const [isRestaurantModalOpen, setIsRestaurantModalOpen] = useState(false);
    const [isFavourited, setIsFavourited] = useState(false);

    return (
        <NavigationLayout title="Card">
            <h2>Single interaction</h2>
            <PieCard
                data-test-id="single-interaction-card"
                tag="button"
                padding="a"
                disabled={disabled}
                aria={{
                    label: 'View card details',
                    description: 'Opens the card details',
                    haspopup: 'dialog',
                }}
                onClick={() => setIsDefaultModalOpen(true)}
            >
                <h2 style={{ marginTop: 0 }}>Default Card</h2>
                <p style={{ marginBottom: 0 }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Fugiat dolore dolorem maxime, quod, in minima esse fugit
                    distinctio, officia et soluta dicta consequuntur commodi
                    officiis tempora asperiores aspernatur atque quas.
                </p>
            </PieCard>

            <h2>Slotted controls</h2>
            <PieCard
                data-test-id="slotted-controls-card"
                tag="button"
                padding="c"
                disabled={disabled}
                aria={{
                    label: 'View restaurant',
                    description: 'Opens the restaurant details',
                    haspopup: 'dialog',
                }}
                onClick={() => setIsRestaurantModalOpen(true)}
            >
                <div
                    data-test-id="slot-content"
                    style={{
                        fontSize: 'calc(var(--dt-font-body-l-size) * 1px)',
                        fontFamily: 'var(--dt-font-interactive-l-family)',
                    }}
                >
                    <h2 style={{ marginTop: 0 }}> Card title </h2>
                    <p style={{ marginBottom: 'var(--dt-spacing-b)' }}> Card content with an action </p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--dt-spacing-b)' }}>
                        <PieIconButton
                            data-test-id="card-action"
                            variant="ghost-secondary"
                            aria={{ label: isFavourited ? 'Remove from favourites' : 'Add to favourites' }}
                            style={overlayStyle}
                            onClick={(event) => {
                                // Slotted children must stop propagation so their clicks do not also trigger the card interaction.
                                event.stopPropagation();
                                setIsFavourited((favourited) => !favourited);
                            }}
                        >
                            {isFavourited
                                ? <IconHeartFilled data-test-id="icon-heart-filled" style={{ color: 'var(--dt-color-content-error)' }} />
                                : <IconHeart data-test-id="icon-heart-outline" />}
                        </PieIconButton>
                        <PieLink
                            href="https://pie.design"
                            target="_blank"
                            style={overlayStyle}
                            onClick={(event) => event.stopPropagation()}
                        >
                            View menu
                        </PieLink>
                    </div>
                </div>
            </PieCard>

            <PieModal
                data-test-id="card-details-modal"
                isOpen={isDefaultModalOpen}
                heading="Card details"
                isDismissible
                onPieModalClose={() => setIsDefaultModalOpen(false)}
            >
                <p>This modal was opened by a single interaction card, where the whole card is one click target.</p>
            </PieModal>
            <PieModal
                data-test-id="restaurant-modal"
                isOpen={isRestaurantModalOpen}
                heading="Restaurant details"
                isDismissible
                onPieModalClose={() => setIsRestaurantModalOpen(false)}
            >
                <p>This modal was opened by clicking the card, showing that the card&apos;s own click interaction remains independent of the slotted controls.</p>
            </PieModal>
        </NavigationLayout>
    );
}
