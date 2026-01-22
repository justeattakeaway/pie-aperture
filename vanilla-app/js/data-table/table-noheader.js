import '@justeattakeaway/pie-webc/components/data-table.js';
import { sampleColumns, sampleData } from '../../data/sampleTableData.js';
import { setParentLink } from '../utils/navigation.js';
import '../shared.js';

setParentLink({ href: '/components/data-table.html', label: 'Back to Data Table variants' });

document.querySelector('#app').innerHTML = `
<h2>PIE Data Table – Table with no header</h2>
<pie-data-table data-test-id="PieDataTable"></pie-data-table>
`;

const dataTable = document.querySelector('pie-data-table');
dataTable.columns = sampleColumns;
dataTable.data = sampleData;
