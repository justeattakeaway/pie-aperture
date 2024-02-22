import NavigationLayout from '@/layout/navigation';
import * as icons from '@justeattakeaway/pie-icons-webc/dist/react';

export default function Icons() {
    return (
        <NavigationLayout title="Icons Test Page">
            <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: 'var(--dt-spacing-c)' }}>
                {Object.entries(icons).map(([iconName, IconComponent]) => (
                    <IconComponent key={iconName} />
                ))}
            </div>
        </NavigationLayout>
    );
}
