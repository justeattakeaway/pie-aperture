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
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isFavourited, setIsFavourited] = useState(false);

    return (
        <NavigationLayout title="Card">
            <PieCard
                tag="button"
                padding="c"
                disabled={disabled}
                aria={{
                    label: 'View restaurant',
                    description: 'Opens the restaurant details',
                    haspopup: 'dialog',
                }}
                onClick={() => setIsModalOpen(true)}
            >
                <div
                    data-test-id="slot-content"
                    style={{
                        fontSize: 'calc(var(--dt-font-body-l-size) * 1px)',
                        fontFamily: 'var(--dt-font-interactive-l-family)',
                    }}
                >
                    <h2 style={{ marginTop: 0 }}> Card title </h2>
                    <p style={{ marginBottom: 8 }}> Card content with an action </p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        <PieIconButton
                            data-test-id="card-action"
                            variant="ghost-secondary"
                            aria={{ label: isFavourited ? 'Remove from favourites' : 'Add to favourites' }}
                            style={overlayStyle}
                            onClick={() => setIsFavourited((favourited) => !favourited)}
                        >
                            {isFavourited
                                ? <IconHeartFilled data-test-id="icon-heart-filled" style={{ color: 'var(--dt-color-content-error)' }} />
                                : <IconHeart data-test-id="icon-heart-outline" />}
                        </PieIconButton>
                        <PieLink
                            href="https://pie.design"
                            target="_blank"
                            style={overlayStyle}
                        >
                            View menu
                        </PieLink>
                    </div>
                </div>
            </PieCard>
            <PieModal
                isOpen={isModalOpen}
                heading="Restaurant details"
                isDismissible
                onPieModalClose={() => setIsModalOpen(false)}
            >
                <p>This modal was opened by clicking the card, showing that the card&apos;s own click interaction remains independent of the slotted controls.</p>
            </PieModal>
        </NavigationLayout>
    );
}
