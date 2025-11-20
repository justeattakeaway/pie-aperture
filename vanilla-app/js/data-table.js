import '@justeattakeaway/pie-webc/components/data-table.js';
import '@justeattakeaway/pie-webc/components/data-table-header.js';
import '@justeattakeaway/pie-webc/components/button.js';
import { sampleColumns, sampleData } from '../data/sampleTableData.js';
import './utils/navigation.js';
import './shared.js';

document.querySelector('#app').innerHTML = `
<pie-data-table data-test-id="pie-data-table"></pie-data-table>

<pie-divider></pie-divider>


<pie-data-table columns={sampleColumns} data={sampleData} data-test-id="PieDataTable">
    <pie-data-table-header slot="table-header" heading="PIE Data Table – Table with header" subHeading="Optional subtitle text">
        <pie-button slot="action-button" variant="secondary" size="xsmall">Action</pie-button>
        <pie-button slot="action-button" variant="secondary" size="xsmall">Action</pie-button>
        <pie-button slot="action-button" variant="secondary" size="xsmall">Action</pie-button>
    </pie-data-table-header>
</pie-data-table>
`;

const dataTables = document.querySelectorAll('pie-data-table');
dataTables.forEach(dt => {
    dt.columns = sampleColumns;
    dt.data = sampleData;
});
