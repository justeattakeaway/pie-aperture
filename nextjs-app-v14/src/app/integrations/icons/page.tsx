'use client';

import NavigationLayout from '@/layout/navigation';
import * as icons from '@justeattakeaway/pie-icons-webc/dist/react';

export default function Icons() {
    return (
        <NavigationLayout title="Icons Test Page">
            <div className={"icon-container"}>
                {Object.entries(icons).map(([iconName, IconComponent]) => (
                    <IconComponent key={iconName} />
                ))}
            </div>
        </NavigationLayout>
    );
}
