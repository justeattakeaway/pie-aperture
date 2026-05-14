<template>
  <div>
    <h2>Default (trailing, hug)</h2>
    <pie-checkbox :checked="checked1" @change="() => checked1 = !checked1">
      {{ `checked: ${checked1}` }}
    </pie-checkbox>

    <br />
    <h2>labelPosition="leading", labelFit="hug"</h2>
    <pie-checkbox :checked="checked2" @change="() => checked2 = !checked2" labelPosition="leading">
      {{ `checked: ${checked2}` }}
    </pie-checkbox>

    <br />
    <h2>labelPosition="leading", labelFit="fill"</h2>
    <pie-checkbox :checked="checked3" @change="() => checked3 = !checked3" labelPosition="leading" labelFit="fill">
      {{ `checked: ${checked3}` }}
    </pie-checkbox>

    <br />
    <h2>labelPosition="trailing", labelFit="fill"</h2>
    <pie-checkbox :checked="checked4" @change="() => checked4 = !checked4" labelFit="fill">
      {{ `checked: ${checked4}` }}
    </pie-checkbox>

    <br />
    <h2>Default (trailing, hug) - Checked</h2>
    <pie-checkbox :checked="checked5" @change="() => checked5 = !checked5">
      {{ `checked: ${checked5}` }}
    </pie-checkbox>

    <br />
    <h2>labelPosition="leading", labelFit="hug" - Checked</h2>
    <pie-checkbox :checked="checked6" @change="() => checked6 = !checked6" labelPosition="leading">
      {{ `checked: ${checked6}` }}
    </pie-checkbox>

    <br />
    <h2>labelPosition="leading", labelFit="fill" - Checked</h2>
    <pie-checkbox :checked="checked7" @change="() => checked7 = !checked7" labelPosition="leading" labelFit="fill">
      {{ `checked: ${checked7}` }}
    </pie-checkbox>

    <br />
    <h2>labelPosition="trailing", labelFit="fill" - Checked</h2>
    <pie-checkbox :checked="checked8" @change="() => checked8 = !checked8" labelFit="fill">
      {{ `checked: ${checked8}` }}
    </pie-checkbox>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { definePageMeta } from '#imports';
import '@justeattakeaway/pie-webc/components/checkbox.js';

definePageMeta({
    title: 'Checkbox',
});

let checked1 = ref(false);
let checked2 = ref(false);
let checked3 = ref(false);
let checked4 = ref(false);
let checked5 = ref(true);
let checked6 = ref(true);
let checked7 = ref(true);
let checked8 = ref(true);

</script>
