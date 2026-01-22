'use client';

import NavigationLayout from "@/app/layout/navigation";
import { PieDataTable } from '@justeattakeaway/pie-webc/react/data-table.js';
import { PieDataTableHeader } from '@justeattakeaway/pie-webc/react/data-table-header.js';
import { PieButton } from '@justeattakeaway/pie-webc/react/button.js';
import { sampleColumns, sampleData } from '../sample-table-data';

export default function TableWithHeader() {
    return (
        <NavigationLayout
            title="DataTable - With Header"
            parentLink={{ href: '/components/data-table', label: 'Back to Data Table variants' }}
        >
            <PieDataTable columns={sampleColumns} data={sampleData}
                data-test-id="PieDataTable"
            >
                <PieDataTableHeader slot="table-header" heading="Table with header"
                    subHeading="Optional subtitle text"
                >
                    <PieButton slot="action-button" variant="secondary" size="xsmall">Action</PieButton>
                    <PieButton slot="action-button" variant="secondary" size="xsmall">Action</PieButton>
                    <PieButton slot="action-button" variant="secondary" size="xsmall">Action</PieButton>
                </PieDataTableHeader>
            </PieDataTable>
        </NavigationLayout>
    );
}
