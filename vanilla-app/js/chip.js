import '@justeattakeaway/pie-webc/components/chip.js';
import './utils/navigation.js';
import './shared.js';

document.querySelector('#app').innerHTML = `
    <pie-chip>PIE Chip</pie-chip>

    <pie-divider></pie-divider>
    <pie-chip variant="outline">PIE Chip</pie-chip>

    <pie-divider></pie-divider>
    <pie-chip variant="ghost">PIE Chip</pie-chip>`;