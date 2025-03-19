import '@justeattakeaway/pie-webc/components/select.js';
import '@justeattakeaway/pie-webc/components/option.js';
import '@justeattakeaway/pie-webc/components/option-group.js';
import './shared.js';
import './utils/navigation.js';

// Set initial HTML structure
document.querySelector('#app').innerHTML = `
    <pie-select>
        <pie-option-group label="Animal">
            <pie-option value="cat">Cat</pie-option>
            <pie-option value="dog">Dog</pie-option>
        </pie-option-group>
    </pie-select>
`;