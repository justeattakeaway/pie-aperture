import '@justeattakeaway/pie-webc/components/data-table.js';
import '@justeattakeaway/pie-webc/components/data-table-header.js';
import '@justeattakeaway/pie-webc/components/button.js';
import { sampleColumns, sampleData } from '../../data/sampleTableData.js';
import { setParentLink } from '../utils/navigation.js';
import '../shared.js';

setParentLink({ href: '/components/data-table.html', label: 'Back to Data Table variants' });

document.querySelector('#app').innerHTML = `
<pie-data-table data-test-id="PieDataTable">
    <pie-data-table-header slot="table-header" heading="PIE Data Table – Table with header" subHeading="Optional subtitle text">
        <pie-button slot="action-button" variant="secondary" size="xsmall">Action</pie-button>
        <pie-button slot="action-button" variant="secondary" size="xsmall">Action</pie-button>
        <pie-button slot="action-button" variant="secondary" size="xsmall">Action</pie-button>
    </pie-data-table-header>
</pie-data-table>
`;

const dataTable = document.querySelector('pie-data-table');
dataTable.columns = sampleColumns;
dataTable.data = sampleData;
