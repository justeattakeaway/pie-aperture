import * as icons from '@justeattakeaway/pie-icons-webc/dist/react';

export default function Icons() {
    return (
        <>
            <h1>PIE Icons Test Page</h1>
            <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: 'var(--dt-spacing-c)' }}>
                {Object.entries(icons).map(([iconName, IconComponent]) => (
                    <IconComponent key={iconName} />
                ))}
            </div>
        </>
    );
}
