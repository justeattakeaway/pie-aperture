'use client';

import { PieLottiePlayer } from '@justeattakeaway/pie-webc/react/lottie-player.js';
import { PieButton } from '@justeattakeaway/pie-webc/react/button.js';
import { useState } from "react";
import { isServer } from 'lit';

const animations = [
    "/animations/preparing.json",
    "/animations/courier.json",
    "/animations/order-confirmed.json",
]

export default function Page() {
    const [animationIndex, setAnimationIndex] = useState(0);

    function handleLoadAnimationClick() {
        setAnimationIndex(animationIndex + 1);
    }

    const animationPath = animations[animationIndex% animations.length];

    const isRunningInPercy = isServer ? false : document.location.search.indexOf('PERCY=true') > -1;

    return (
        <>
            <div>
                <PieButton size="xsmall" onClick={handleLoadAnimationClick}>load another animation</PieButton>
            </div>
            <PieLottiePlayer animationSrc={animationPath} autoPlayDisabled={isRunningInPercy} />
        </>
    );
}
