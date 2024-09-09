import NavigationLayout from "@/app/layout/navigation";
import  LottiePlayer  from './lottie-player';
import { Metadata } from 'next'

const title = 'Lottie Player'
export const metadata: Metadata = {
    title,
}

export default function Page() {
    return (
        <NavigationLayout title={title}>
            <LottiePlayer/>
        </NavigationLayout>
    )
}
