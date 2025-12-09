'use client';

import React, { useEffect, useState } from 'react';
import { getNavigationData } from '../../../shared/navigation-urls.js';

// Type for pie-link custom element
type PieLinkProps = {
    href?: string;
    children: React.ReactNode;
} & React.HTMLAttributes<HTMLElement>;

// Create a typed component wrapper
const PieLink = (props: PieLinkProps) => {
    return React.createElement('pie-link', props, props.children);
};

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
                        <PieLink key={item.key} href={item.url}>
                            {item.name}
                        </PieLink>
                    )
                ))}
            </div>
        </header>
    );
};

export default NavigationHeader;
