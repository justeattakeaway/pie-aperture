import '@justeattakeaway/pie-webc/components/chip.js';
import '@justeattakeaway/pie-webc/components/divider.js';
import '@justeattakeaway/pie-icons-webc/dist/IconHeartFilled.js';
import './utils/navigation.js';
import './shared.js';

document.querySelector('#app').innerHTML = `
<div style="display: flex; flex-direction: column; gap: 16px;">
    <!-- Default Chip Variants -->
    <section>
        <h2 style="font-size: 1.25rem; font-weight: bold; margin-bottom: 8px;">Variants</h2>
        <div style="display: flex; align-items: center; gap: 16px; flex-wrap: wrap;">
            <pie-chip>PIE Chip Default</pie-chip>
            <pie-chip variant="outline">PIE Chip Outline</pie-chip>
            <pie-chip variant="ghost">PIE Chip Ghost</pie-chip>
            <pie-chip isLoading>PIE Chip Loading</pie-chip>
            <pie-chip isSelected isDismissible id="dismissible-chip">Close me</pie-chip>
        </div>
    </section>

    <pie-divider></pie-divider>

    <!-- Interactive Checkbox Group Example -->
    <section>
        <h2 style="font-size: 1.25rem; font-weight: bold; margin-bottom: 8px;">Checkbox Group (Multi-select)</h2>
        <fieldset style="border: none; padding: 0;">
            <legend style="padding-bottom: 8px; font-weight: bold;">Select your interests</legend>
            <div style="display: flex; flex-wrap: wrap; gap: 8px;" id="checkbox-group">
                <pie-chip type="checkbox">Chip 1</pie-chip>
                <pie-chip type="checkbox" isSelected>Chip 2</pie-chip>
                <pie-chip type="checkbox" disabled>Chip 3 (Disabled)</pie-chip>
                <pie-chip type="checkbox" disabled isSelected>Chip 4 (Disabled and Selected)</pie-chip>
                <pie-chip type="checkbox">
                    <icon-heart-filled slot="icon"></icon-heart-filled>
                    Chip 5
                </pie-chip>
                <pie-chip type="checkbox" isSelected>
                    <icon-heart-filled slot="icon"></icon-heart-filled>
                    Chip 6
                </pie-chip>
            </div>
        </fieldset>
    </section>

    <pie-divider></pie-divider>

    <!-- Interactive Button Group Example -->
    <section>
        <h2 style="font-size: 1.25rem; font-weight: bold; margin-bottom: 8px;">Button Group (Single-select)</h2>
        <div style="display: flex; flex-wrap: wrap; gap: 8px;" id="button-group">
            <pie-chip type="button">Chip 1</pie-chip>
            <pie-chip type="button" isSelected>Chip 2</pie-chip>
            <pie-chip type="button" disabled>Chip 3 (Disabled)</pie-chip>
            <pie-chip type="button">
                <icon-heart-filled slot="icon"></icon-heart-filled>
                Chip 4
            </pie-chip>
            <pie-chip type="button">
                <icon-heart-filled slot="icon"></icon-heart-filled>
                Chip 5
            </pie-chip>
        </div>
    </section>
</div>
`;

// --- Event Listeners for Interactive Examples ---

// Dismissible Chip
const dismissibleChip = document.querySelector('#dismissible-chip');
dismissibleChip.addEventListener('close', () => console.log('Dismissible chip closed!'));

// Checkbox Group (Multi-select)
const checkboxGroup = document.querySelector('#checkbox-group');
checkboxGroup.addEventListener('change', (event) => {
    // The chip is a controlled component, so we toggle its state here.
    const chip = event.target;
    if (chip.nodeName === 'PIE-CHIP') {
        chip.isSelected = !chip.isSelected;
        console.log(`Checkbox chip "${chip.textContent.trim()}" was changed. New state: ${chip.isSelected}`);
    }
});

// Button Group (Single-select)
const buttonGroup = document.querySelector('#button-group');
buttonGroup.addEventListener('click', (event) => {
    const clickedChip = event.target.closest('pie-chip');

    // Ignore clicks that are not on a chip or if the chip is disabled
    if (!clickedChip || clickedChip.disabled) {
        return;
    }

    const wasSelected = clickedChip.isSelected;
    const allChips = buttonGroup.querySelectorAll('pie-chip');

    // 1. Deselect all chips in the group
    allChips.forEach(chip => {
        chip.isSelected = false;
    });

    // 2. Toggle the selected state of the clicked chip
    clickedChip.isSelected = !wasSelected;
    console.log(`Button chip "${clickedChip.textContent.trim()}" was clicked. New state: ${clickedChip.isSelected}`);
});
