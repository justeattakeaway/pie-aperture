'use client';

import NavigationLayout from "@/app/layout/navigation";
import { PieDataTable } from '@justeattakeaway/pie-webc/react/data-table.js';
import { PieDataTableHeader } from '@justeattakeaway/pie-webc/react/data-table-header.js';
import { PieDataTableContents } from '@justeattakeaway/pie-webc/react/data-table-contents.js';
import { PieDataTableHead } from '@justeattakeaway/pie-webc/react/data-table-head.js';
import { PieDataTableBody } from '@justeattakeaway/pie-webc/react/data-table-body.js';
import { PieDataTableRow } from '@justeattakeaway/pie-webc/react/data-table-row.js';
import { PieDataTableHeadCell } from '@justeattakeaway/pie-webc/react/data-table-head-cell.js';
import { PieDataTableCell } from '@justeattakeaway/pie-webc/react/data-table-cell.js';
import { PieButton } from '@justeattakeaway/pie-webc/react/button.js';

export default function TableUsesSubcomponents() {
    return (
        <NavigationLayout
            title="DataTable - Uses Subcomponents"
            parentLink={{ href: '/components/data-table', label: 'Back to Data Table variants' }}
        >
            <h2>Table using subcomponents</h2>
            <p>This example shows how to construct a data table using subcomponents instead of passing <code>columns</code> and <code>data</code> props.</p>
            <PieDataTable data-test-id="PieDataTable">
                <PieDataTableHeader
                    slot="table-header"
                    heading="Employee Directory"
                    subHeading="Current team members"
                >
                    <PieButton slot="action-button" variant="secondary" size="xsmall">Action</PieButton>
                    <PieButton slot="action-button" variant="secondary" size="xsmall">Action</PieButton>
                    <PieButton slot="action-button" variant="secondary" size="xsmall">Action</PieButton>
                </PieDataTableHeader>
                <PieDataTableContents>
                    <PieDataTableHead>
                        <PieDataTableRow>
                            <PieDataTableHeadCell>Name</PieDataTableHeadCell>
                            <PieDataTableHeadCell textAlign="right">Age</PieDataTableHeadCell>
                            <PieDataTableHeadCell textAlign="center">Department</PieDataTableHeadCell>
                            <PieDataTableHeadCell textAlign="center">Action</PieDataTableHeadCell>
                        </PieDataTableRow>
                    </PieDataTableHead>
                    <PieDataTableBody>
                        <PieDataTableRow>
                            <PieDataTableCell>John Doe</PieDataTableCell>
                            <PieDataTableCell textAlign="right">30</PieDataTableCell>
                            <PieDataTableCell textAlign="center">Engineering</PieDataTableCell>
                            <PieDataTableCell textAlign="center">
                                <PieButton onClick={() => alert('Action clicked')} variant="secondary" size="xsmall">Action</PieButton>
                            </PieDataTableCell>
                        </PieDataTableRow>
                        <PieDataTableRow>
                            <PieDataTableCell>Jose Smith</PieDataTableCell>
                            <PieDataTableCell textAlign="right">28</PieDataTableCell>
                            <PieDataTableCell textAlign="center">Design</PieDataTableCell>
                            <PieDataTableCell textAlign="center">
                                <PieButton variant="secondary" size="xsmall">Action</PieButton>
                            </PieDataTableCell>
                        </PieDataTableRow>
                        <PieDataTableRow>
                            <PieDataTableCell>Bob Johnson</PieDataTableCell>
                            <PieDataTableCell textAlign="right">35</PieDataTableCell>
                            <PieDataTableCell textAlign="center">Product</PieDataTableCell>
                            <PieDataTableCell textAlign="center">
                                <PieButton variant="secondary" size="xsmall">Action</PieButton>
                            </PieDataTableCell>
                        </PieDataTableRow>
                    </PieDataTableBody>
                </PieDataTableContents>
            </PieDataTable>
        </NavigationLayout>
    );
}
