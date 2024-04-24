import NavigationLayout from '@/layout/navigation';
import * as icons from '@justeattakeaway/pie-icons-webc/dist/react';

export default function Icons() {
    return (
        <NavigationLayout title="Icons Test Page">
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(40px, 1fr))',
                gap: 'var(--dt-spacing-c)',
                justifyItems: 'center',
                alignItems: 'center',
                marginTop: 'var(--dt-spacing-c)'
            }}>
                {Object.entries(icons).map(([iconName, IconComponent]) => (
                    <IconComponent key={iconName} />
                ))}
            </div>
        </NavigationLayout>
    );
}
