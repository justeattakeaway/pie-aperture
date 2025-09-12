import '@justeattakeaway/pie-webc/components/chip.js';
import '@justeattakeaway/pie-webc/components/divider.js';
import '@justeattakeaway/pie-icons-webc/dist/IconHeartFilled.js';
import './utils/navigation.js';
import './shared.js';

const selectAction = (e) => {
    console.log('Chip was selected', e);
};

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
            <pie-chip isSelected isDismissible>Close me</pie-chip>
        </div>
    </section>

    <pie-divider></pie-divider>

    <!-- Checkbox Group Example -->
    <section>
        <h2 style="font-size: 1.25rem; font-weight: bold; margin-bottom: 8px;">Checkbox Group</h2>
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

    <!-- Button Group Example -->
    <section>
        <h2 style="font-size: 1.25rem; font-weight: bold; margin-bottom: 8px;">Button Group</h2>
        <div style="display: flex; flex-wrap: wrap; gap: 8px;" id="button-group">
            <pie-chip type="button">Chip 1</pie-chip>
            <pie-chip type="button">Chip 2</pie-chip>
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

document.querySelectorAll('#checkbox-group pie-chip').forEach(chip => {
    chip.addEventListener('change', selectAction);
});

document.querySelectorAll('#button-group pie-chip').forEach(chip => {
    chip.addEventListener('change', selectAction);
});