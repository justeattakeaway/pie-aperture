'use client';
import NavigationLayout from "@/app/layout/navigation";
import { PieButton } from "@justeattakeaway/pie-webc/react/button";
import { PieCard } from '@justeattakeaway/pie-webc/react/card.js';

export default function Card() {
    return (
        <NavigationLayout title="Card">
            <PieCard padding="a" onClick={() => console.log('hey')}>
                <h2>Default Card</h2>
                <p>Lorem ipsum dolor sit amet
                    consectetur adipisicing elit.
                    Fugiat dolore dolorem maxime,
                    quod, in minima esse fugit
                    distinctio, officia et soluta
                    dicta consequuntur commodi officiis
                    tempora asperiores aspernatur atque quas.
                </p>
                <PieButton
                    onClick={() => console.log("button")}
                    style={{ position: 'relative', zIndex: 'calc(var(--card-overlay-z-index) + 1)' }}>Meh</PieButton>
            </PieCard>
        </NavigationLayout>
    );
}
