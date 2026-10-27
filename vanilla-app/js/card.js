import '@justeattakeaway/pie-webc/components/card.js';
import '@justeattakeaway/pie-webc/components/icon-button.js';
import '@justeattakeaway/pie-webc/components/link.js';
import '@justeattakeaway/pie-webc/components/modal.js';
import '@justeattakeaway/pie-icons-webc/dist/IconHeart.js';
import '@justeattakeaway/pie-icons-webc/dist/IconHeartFilled.js';
import './utils/navigation.js';
import './shared.js';

document.querySelector('#app').innerHTML = `
    <h2>Single interaction</h2>
    <pie-card
        id="default-card"
        data-test-id="single-interaction-card"
        tag="button"
        padding="a">
        <h2 style="margin-top: 0">Default Card</h2>
        <p style="margin-bottom: 0">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Fugiat dolore dolorem maxime, quod, in minima esse fugit
            distinctio, officia et soluta dicta consequuntur commodi
            officiis tempora asperiores aspernatur atque quas.
        </p>
    </pie-card>

    <h2>Slotted controls</h2>
    <pie-card
        id="restaurant-card"
        data-test-id="slotted-controls-card"
        tag="button"
        padding="c">
        <div
            data-test-id="slot-content"
            style="font-size: calc(var(--dt-font-body-l-size) * 1px); font-family: var(--dt-font-interactive-l-family);">
            <h2 style="margin-top: 0"> Card title </h2>
            <p style="margin-bottom: var(--dt-spacing-b)"> Card content with an action </p>
            <div style="display: flex; align-items: center; gap: var(--dt-spacing-b);">
                <pie-icon-button
                    data-test-id="card-action"
                    variant="ghost-secondary"
                    style="position: relative; z-index: calc(var(--card-overlay-z-index) + 1);">
                    <icon-heart data-test-id="icon-heart-outline"></icon-heart>
                    <icon-heart-filled
                        data-test-id="icon-heart-filled"
                        style="color: var(--dt-color-content-error); display: none;"></icon-heart-filled>
                </pie-icon-button>
                <pie-link
                    id="view-menu"
                    href="https://pie.design"
                    target="_blank"
                    style="position: relative; z-index: calc(var(--card-overlay-z-index) + 1);">
                    View menu
                </pie-link>
            </div>
        </div>
    </pie-card>

    <pie-modal
        id="default-card-modal"
        heading="Card details"
        isDismissible>
        <p>This modal was opened by a single interaction card, where the whole card is one click target.</p>
    </pie-modal>
    <pie-modal
        id="restaurant-modal"
        heading="Restaurant details"
        isDismissible>
        <p>This modal was opened by clicking the card, showing that the card's own click interaction remains independent of the slotted controls.</p>
    </pie-modal>`;

const defaultCard = document.querySelector('#default-card');
const defaultCardModal = document.querySelector('#default-card-modal');
const card = document.querySelector('#restaurant-card');
const modal = document.querySelector('#restaurant-modal');
const favouriteButton = document.querySelector('[data-test-id="card-action"]');
const viewMenuLink = document.querySelector('#view-menu');
const outlineIcon = favouriteButton.querySelector('[data-test-id="icon-heart-outline"]');
const filledIcon = favouriteButton.querySelector('[data-test-id="icon-heart-filled"]');
let isFavourited = false;

defaultCard.aria = {
    label: 'View card details',
    description: 'Opens the card details',
    haspopup: 'dialog',
};

card.aria = {
    label: 'View restaurant',
    description: 'Opens the restaurant details',
    haspopup: 'dialog',
};

defaultCard.addEventListener('click', () => {
    defaultCardModal.isOpen = true;
});

defaultCardModal.addEventListener('pie-modal-close', () => {
    defaultCardModal.isOpen = false;
});

card.addEventListener('click', () => {
    modal.isOpen = true;
});

modal.addEventListener('pie-modal-close', () => {
    modal.isOpen = false;
});

favouriteButton.addEventListener('click', (event) => {
    // Slotted children must stop propagation so their clicks do not also trigger the card interaction.
    event.stopPropagation();
    isFavourited = !isFavourited;
    outlineIcon.style.display = isFavourited ? 'none' : '';
    filledIcon.style.display = isFavourited ? '' : 'none';
    favouriteButton.aria = { label: isFavourited ? 'Remove from favourites' : 'Add to favourites' };
});

viewMenuLink.addEventListener('click', (event) => {
    event.stopPropagation();
});
