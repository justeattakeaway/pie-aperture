import '@justeattakeaway/pie-webc/components/data-table.js';
import '@justeattakeaway/pie-webc/components/data-table-header.js';
import '@justeattakeaway/pie-webc/components/data-table-contents.js';
import '@justeattakeaway/pie-webc/components/data-table-head.js';
import '@justeattakeaway/pie-webc/components/data-table-body.js';
import '@justeattakeaway/pie-webc/components/data-table-row.js';
import '@justeattakeaway/pie-webc/components/data-table-head-cell.js';
import '@justeattakeaway/pie-webc/components/data-table-cell.js';
import '@justeattakeaway/pie-webc/components/button.js';
import { setParentLink } from '../utils/navigation.js';
import '../shared.js';

setParentLink({ href: '/components/data-table.html', label: 'Back to Data Table variants' });

document.querySelector('#app').innerHTML = `
<h2>Table using subcomponents</h2>
<p>This example shows how to construct a data table using subcomponents instead of passing <code>columns</code> and <code>data</code> props.</p>
<pie-data-table data-test-id="PieDataTable">
    <pie-data-table-header
        slot="table-header"
        heading="Employee Directory"
        subHeading="Current team members"
    >
        <pie-button slot="action-button" variant="secondary" size="xsmall">Action</pie-button>
        <pie-button slot="action-button" variant="secondary" size="xsmall">Action</pie-button>
        <pie-button slot="action-button" variant="secondary" size="xsmall">Action</pie-button>
    </pie-data-table-header>
    <pie-data-table-contents>
        <pie-data-table-head>
            <pie-data-table-row>
                <pie-data-table-head-cell>Name</pie-data-table-head-cell>
                <pie-data-table-head-cell textAlign="right">Age</pie-data-table-head-cell>
                <pie-data-table-head-cell textAlign="center">Department</pie-data-table-head-cell>
                <pie-data-table-head-cell textAlign="center">Action</pie-data-table-head-cell>
            </pie-data-table-row>
        </pie-data-table-head>
        <pie-data-table-body>
            <pie-data-table-row>
                <pie-data-table-cell>John Doe</pie-data-table-cell>
                <pie-data-table-cell textAlign="right">30</pie-data-table-cell>
                <pie-data-table-cell textAlign="center">Engineering</pie-data-table-cell>
                <pie-data-table-cell textAlign="center">
                    <pie-button id="action-btn-1" variant="secondary" size="xsmall">Action</pie-button>
                </pie-data-table-cell>
            </pie-data-table-row>
            <pie-data-table-row>
                <pie-data-table-cell>Jose Smith</pie-data-table-cell>
                <pie-data-table-cell textAlign="right">28</pie-data-table-cell>
                <pie-data-table-cell textAlign="center">Design</pie-data-table-cell>
                <pie-data-table-cell textAlign="center">
                    <pie-button variant="secondary" size="xsmall">Action</pie-button>
                </pie-data-table-cell>
            </pie-data-table-row>
            <pie-data-table-row>
                <pie-data-table-cell>Bob Johnson</pie-data-table-cell>
                <pie-data-table-cell textAlign="right">35</pie-data-table-cell>
                <pie-data-table-cell textAlign="center">Product</pie-data-table-cell>
                <pie-data-table-cell textAlign="center">
                    <pie-button variant="secondary" size="xsmall">Action</pie-button>
                </pie-data-table-cell>
            </pie-data-table-row>
        </pie-data-table-body>
    </pie-data-table-contents>
</pie-data-table>
`;

// Add click handler for the first action button
document.querySelector('#action-btn-1').addEventListener('click', () => {
    alert('Action clicked');
});
