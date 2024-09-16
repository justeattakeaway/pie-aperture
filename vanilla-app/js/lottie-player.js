import '@justeattakeaway/pie-webc/components/lottie-player.js';
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

const isRunningInPercy = document.location.search.indexOf('PERCY=true') > -1;
const autoplay = isRunningInPercy ? 'autoPlayDisabled' : '';

// Set initial HTML structure
document.querySelector('#app').innerHTML = `
    <div>
        <pie-button class="load" size="xsmall">load another animation</pie-button>
    </div>
    <pie-lottie-player animationSrc="${animations[animationIndex% animations.length]}" ${autoplay}></pie-lottie-player>
`;

document.querySelector('.load').addEventListener('click', handleLoadAnimationClick);
