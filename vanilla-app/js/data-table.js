import '@justeattakeaway/pie-webc/components/link.js';
import './utils/navigation.js';
import './shared.js';

document.querySelector('#app').innerHTML = `
<h2>Data Table Variants</h2>
<ul>
    <li><pie-link href="/components/data-table/table-noheader.html">Table - No Header</pie-link></li>
    <li><pie-link href="/components/data-table/table-withheader.html">Table - With Header</pie-link></li>
</ul>
`;
