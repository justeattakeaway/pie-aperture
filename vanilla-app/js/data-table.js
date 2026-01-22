import '@justeattakeaway/pie-webc/components/link.js';
import './utils/navigation.js';
import './shared.js';

document.querySelector('#app').innerHTML = `
<h2>Data Table Variants</h2>
<ul>
    <li><pie-link href="/components/data-table/table-noheader.html">Data Table - No Header</pie-link></li>
    <li><pie-link href="/components/data-table/table-withheader.html">Data Table - With Header</pie-link></li>
    <li><pie-link href="/components/data-table/table-additionalrows.html">Data Table - Additional Rows</pie-link></li>
    <li><pie-link href="/components/data-table/table-additionalrows-withheader.html">Data Table - Additional Rows with Header</pie-link></li>
    <li><pie-link href="/components/data-table/table-usessubcomponents.html">Data Table - Uses Subcomponents</pie-link></li>
</ul>
`;
