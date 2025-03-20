import '@justeattakeaway/pie-webc/components/select.js';
import './shared.js';
import './utils/navigation.js';

const options = [
    {
        tag: 'optgroup',
        label: 'Animal',
        options: [
            {
                tag: 'option',
                text: 'Cat',
                value: 'cat',
            },
            {
                tag: 'option',
                text: 'Dog',
                value: 'dog',
            },
        ],
    },
];

document.querySelector('#app').innerHTML = `
    <pie-select id="animal-select"></pie-select>
`;

document.querySelector('#animal-select').options = options;