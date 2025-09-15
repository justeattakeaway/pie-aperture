'use client';

import NavigationLayout from "@/app/layout/navigation";
import { PieDivider } from '@justeattakeaway/pie-webc/react/divider.js';
import '@/styles/divider.scss';

export default function Divider() {
    return (
        <NavigationLayout title="Divider">
            <div className="divider-container">
                <span>Span before divider</span>
                <PieDivider label="Horizontal Divider"/>
                <span>Span after divider</span>
            </div>
            <div className="divider-container divider-container-flex">
                <span>Span before divider</span>
                <PieDivider orientation="vertical"/>
                <span>Span after divider</span>
            </div>
        </NavigationLayout>
    );
}
