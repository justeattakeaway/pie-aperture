'use client';

import NavigationLayout from "@/app/layout/navigation";
import { PieDataTable } from '@justeattakeaway/pie-webc/react/data-table.js';
import { PieDataTableHeader } from '@justeattakeaway/pie-webc/react/data-table-header.js';
import { PieButton } from '@justeattakeaway/pie-webc/react/button.js';
import { PieDivider } from '@justeattakeaway/pie-webc/react/divider.js';
import { sampleColumns, sampleData } from './sample-table-data';

export default function DataTable() {
    return (
        <NavigationLayout title="DataTable">
            <h2>PIE Data Table – Table with no header</h2>
            <PieDataTable columns={sampleColumns} data={sampleData}
                data-test-id="PieDataTable"
            ></PieDataTable>

            <PieDivider />

            <PieDataTable columns={sampleColumns} data={sampleData}
                data-test-id="PieDataTable"
            >
                <PieDataTableHeader slot="table-header" heading="PIE Data Table – Table with header"
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
