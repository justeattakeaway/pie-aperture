import NavigationLayout from "@/layout/navigation";
import { PieLottiePlayer } from '@justeattakeaway/pie-lottie-player/dist/react.js';

export default function Page() {
    return (
        <NavigationLayout title="Lottie Player">
            <PieLottiePlayer animationSrc="/animations/courier.json" />
        </NavigationLayout>
    );
}
