import '@justeattakeaway/pie-webc/components/card.js';
import '@justeattakeaway/pie-webc/components/icon-button.js';
import '@justeattakeaway/pie-webc/components/link.js';
import '@justeattakeaway/pie-webc/components/modal.js';
import '@justeattakeaway/pie-icons-webc/dist/IconHeart.js';
import '@justeattakeaway/pie-icons-webc/dist/IconHeartFilled.js';
import '@justeattakeaway/pie-icons-webc/dist/IconShare.js';
import './utils/navigation.js';
import './shared.js';

document.querySelector('#app').innerHTML = `
    <pie-card
        id="restaurant-card"
        tag="button"
        padding="c">
        <div
            data-test-id="slot-content"
            style="font-size: calc(var(--dt-font-body-l-size) * 1px); font-family: var(--dt-font-interactive-l-family);">
            <h2 style="margin-top: 0"> Card title </h2>
            <p style="margin-bottom: 8px"> Card content with an action </p>
            <div style="display: flex; align-items: center; gap: 8px;">
                <pie-icon-button
                    data-test-id="card-action"
                    variant="ghost-secondary"
                    style="position: relative; z-index: calc(var(--card-overlay-z-index) + 1);">
                    <icon-heart data-test-id="icon-heart-outline"></icon-heart>
                    <icon-heart-filled
                        data-test-id="icon-heart-filled"
                        style="color: var(--dt-color-content-error); display: none;"></icon-heart-filled>
                </pie-icon-button>
                <pie-icon-button
                    data-test-id="card-action-capture"
                    variant="ghost-secondary"
                    style="position: relative; z-index: calc(var(--card-overlay-z-index) + 1);">
                    <icon-share data-test-id="icon-share"></icon-share>
                </pie-icon-button>
                <pie-link
                    href="https://pie.design"
                    target="_blank"
                    style="position: relative; z-index: calc(var(--card-overlay-z-index) + 1);">
                    View menu
                </pie-link>
            </div>
            <p aria-live="polite" data-test-id="share-count" style="margin-bottom: 0;">
                Shared 0 times
            </p>
        </div>
    </pie-card>
    <pie-modal
        id="restaurant-modal"
        heading="Restaurant details"
        isDismissible>
        <p>This modal was opened by clicking the card, showing that the card's own click interaction remains independent of the slotted controls.</p>
    </pie-modal>`;

const card = document.querySelector('#restaurant-card');
const modal = document.querySelector('#restaurant-modal');
const favouriteButton = document.querySelector('[data-test-id="card-action"]');
const shareButton = document.querySelector('[data-test-id="card-action-capture"]');
const shareCount = document.querySelector('[data-test-id="share-count"]');
const outlineIcon = favouriteButton.querySelector('[data-test-id="icon-heart-outline"]');
const filledIcon = favouriteButton.querySelector('[data-test-id="icon-heart-filled"]');
let isFavourited = false;
let shareTotal = 0;

card.aria = {
    label: 'View restaurant',
    description: 'Opens the restaurant details',
    haspopup: 'dialog',
};

card.addEventListener('click', () => {
    modal.isOpen = true;
});

modal.addEventListener('pie-modal-close', () => {
    modal.isOpen = false;
});

favouriteButton.addEventListener('click', () => {
    isFavourited = !isFavourited;
    outlineIcon.style.display = isFavourited ? 'none' : '';
    filledIcon.style.display = isFavourited ? '' : 'none';
    favouriteButton.aria = { label: isFavourited ? 'Remove from favourites' : 'Add to favourites' };
});

shareButton.addEventListener('click', () => {
    shareTotal += 1;
    shareCount.textContent = `Shared ${shareTotal} ${shareTotal === 1 ? 'time' : 'times'}`;
}, true);
