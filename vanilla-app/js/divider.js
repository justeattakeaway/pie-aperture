import '@justeattakeaway/pie-webc/components/divider.js';
import './utils/navigation.js';
import './shared.js';

document.querySelector('#app').innerHTML = `
<style>
.divider-container {
    height: 200px;
    margin: 100px 0;
}

.divider-container-flex {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--dt-spacing-d);
}
</style>
<div class="divider-container">
  <span>Span before divider</span>
  <pie-divider label="Horizontal Divider"/>
  <span>Span after divider</span>
</div>
<div class="divider-container divider-container-flex">
  <span>Span before divider</span>
  <pie-divider orientation="vertical"/>
  <span>Span after divider</span>
</div>`;