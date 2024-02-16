import '@justeattakeaway/pie-chip';
import '@justeattakeaway/pie-css';
import '../css/style.css';

document.querySelector('#app').innerHTML = `
    <pie-chip>PIE Chip Default</pie-chip>

    <pie-divider></pie-divider>
    <pie-chip variant="outline">PIE Chip Outline</pie-chip>

    <pie-divider></pie-divider>
    <pie-chip variant="ghost">PIE Chip Ghost</pie-chip>`;