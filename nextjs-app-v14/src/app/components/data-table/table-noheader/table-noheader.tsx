'use client';

import NavigationLayout from "@/app/layout/navigation";
import { PieDataTable } from '@justeattakeaway/pie-webc/react/data-table.js';
import { sampleColumns, sampleData } from '../sample-table-data';

export default function TableNoHeader() {
    return (
        <NavigationLayout
            title="DataTable - No Header"
            parentLink={{ href: '/components/data-table', label: 'Back to Data Table variants' }}
        >
            <h2>Table with no header</h2>
            <PieDataTable columns={sampleColumns} data={sampleData}
                data-test-id="PieDataTable"
            ></PieDataTable>
        </NavigationLayout>
    );
}
