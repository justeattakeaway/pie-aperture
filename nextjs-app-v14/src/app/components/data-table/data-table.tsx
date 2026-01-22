'use client';

import NavigationLayout from "@/app/layout/navigation";
import { PieLink } from '@justeattakeaway/pie-link/dist/react';
import { useRouter } from 'next/navigation';

export default function DataTable() {
    const router = useRouter();

    return (
        <NavigationLayout title="DataTable">
            <h2>Data Table Variants</h2>
            <ul>
                <li><PieLink onClick={() => router.push('/components/data-table/table-noheader')} tag="button">Table - No Header</PieLink></li>
                <li><PieLink onClick={() => router.push('/components/data-table/table-withheader')} tag="button">Table - With Header</PieLink></li>
            </ul>
        </NavigationLayout>
    );
}
