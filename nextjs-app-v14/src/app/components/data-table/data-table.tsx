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
                <li><PieLink onClick={() => router.push('/components/data-table/table-noheader')} tag="button">Data Table - No Header</PieLink></li>
                <li><PieLink onClick={() => router.push('/components/data-table/table-withheader')} tag="button">Data Table - With Header</PieLink></li>
                <li><PieLink onClick={() => router.push('/components/data-table/table-additionalrows')} tag="button">Data Table - Additional Rows</PieLink></li>
                <li><PieLink onClick={() => router.push('/components/data-table/table-additionalrows-withheader')} tag="button">Data Table - Additional Rows with Header</PieLink></li>
                <li><PieLink onClick={() => router.push('/components/data-table/table-usessubcomponents')} tag="button">Data Table - Uses Subcomponents</PieLink></li>
            </ul>
        </NavigationLayout>
    );
}
