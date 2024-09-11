import '@justeattakeaway/pie-lottie-player';
import '@justeattakeaway/pie-webc/components/button.js';
import './shared.js';
import './utils/navigation.js';

let animationIndex = 0;
const animations = [
    "/animations/preparing.json",
    "/animations/courier.json",
    "/animations/order-confirmed.json",
]

function handleLoadAnimationClick() {
    animationIndex++;
    const animationPath = animations[animationIndex% animations.length];
    document.querySelector('pie-lottie-player')
        .animationSrc = animationPath;
}

// Set initial HTML structure
const rowStyle = 'display:flex; margin: 1rem 0;';
document.querySelector('#app').innerHTML = `
    <div>
        <pie-button class="load" size="xsmall">load another animation</pie-button>
    </div>
    <pie-lottie-player animationSrc="${animations[animationIndex% animations.length]}"></pie-lottie-player>
`;

document.querySelector('.load').addEventListener('click', handleLoadAnimationClick);
