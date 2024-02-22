import NavigationLayout from "@/layout/navigation";
import { PieCard } from "@justeattakeaway/pie-card/dist/react";

export default function Card() {
    return (
        <NavigationLayout title="Card">
        <PieCard padding="a">
            <h2>Default Card</h2>
            <p>Lorem ipsum dolor sit amet
                consectetur adipisicing elit.
                Fugiat dolore dolorem maxime,
                quod, in minima esse fugit
                distinctio, officia et soluta
                dicta consequuntur commodi officiis
                tempora asperiores aspernatur atque quas.
            </p>
        </PieCard>
        </NavigationLayout>
    );
}
