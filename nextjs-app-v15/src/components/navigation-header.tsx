'use client';

import React, { useEffect, useState } from 'react';
import { getNavigationData } from '../../../shared/navigation-urls.js';

// Declare pie-link as a valid JSX element
declare global {
    namespace JSX {
        interface IntrinsicElements {
            'pie-link': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
                href?: string;
            };
        }
    }
}

interface NavigationItem {
    name: string;
    url: string;
    key: string;
    isCurrent: boolean;
}

const NavigationHeader = () => {
    const [navigationData, setNavigationData] = useState<NavigationItem[]>([]);

    useEffect(() => {
        // Import pie-link component
        import('@justeattakeaway/pie-webc/components/link.js');
        setNavigationData(getNavigationData());
    }, []);

    return (
        <header style={{ padding: '1rem 0', borderBottom: '1px solid #ddd' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                <strong>PIE Aperture:</strong>
                {navigationData.map((item) => (
                    item.isCurrent ? (
                        <span key={item.key} style={{ fontWeight: 'bold' }}>
                            {item.name}
                        </span>
                    ) : (
                        <pie-link key={item.key} href={item.url}>
                            {item.name}
                        </pie-link>
                    )
                ))}
            </div>
        </header>
    );
};

export default NavigationHeader;
