'use client';

import { PieLink } from '@justeattakeaway/pie-link/dist/react';
import { useRouter } from 'next/navigation'

export default function Home() {
    const router = useRouter();

    const handleButtonClick = () => {
        router.push('/pages/assistive-text' );
    };

    return (
        <div>
            <PieLink onClick={handleButtonClick} tag="button">Assistive Text</PieLink>
        </div>
    );
}
