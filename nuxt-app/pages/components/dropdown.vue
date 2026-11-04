<template>
    <div>
        <h2 class="c-dropdown-heading">PIE Dropdown - Single select</h2>
        <pie-dropdown
            data-test-id="meal-dropdown"
            label="Meal"
            name="meal"
            placeholder="Select a meal"
            assistiveText="Choose the main meal for your order"
            :options="mealOptions"
            :value="meal"
            @change="handleMealChange">
        </pie-dropdown>
        <p class="c-dropdown-selection" data-test-id="meal-selection">Your meal: {{ meal || 'nothing selected yet' }}</p>

        <h2 class="c-dropdown-heading">PIE Dropdown - Single select with option icons</h2>
        <pie-dropdown
            data-test-id="cuisine-dropdown"
            label="Cuisine"
            name="cuisine"
            placeholder="Select a cuisine"
            :options="cuisineOptions"
            :value="selectedCuisine">
            <icon-pizza slot="icon-pizza"></icon-pizza>
            <icon-curry slot="icon-curry"></icon-curry>
            <icon-noodles slot="icon-noodles"></icon-noodles>
            <icon-salad slot="icon-salad"></icon-salad>
        </pie-dropdown>

        <h2 class="c-dropdown-heading">PIE Dropdown - Multi select</h2>
        <pie-dropdown
            data-test-id="dietary-dropdown"
            label="Dietary requirements"
            name="dietary-requirements"
            isMultiselect
            selectedCountText="{count} selected"
            :options="dietaryOptions">
            <icon-vegan slot="icon-vegan"></icon-vegan>
            <icon-vegetarian slot="icon-vegetarian"></icon-vegetarian>
            <icon-nuts slot="icon-nut-free"></icon-nuts>
            <icon-halal slot="icon-halal"></icon-halal>
            <icon-spicy slot="icon-extra-spicy"></icon-spicy>
        </pie-dropdown>

        <h2 class="c-dropdown-heading">PIE Dropdown - Single select with search</h2>
        <pie-dropdown
            data-test-id="restaurant-dropdown"
            label="Restaurant"
            name="restaurant"
            placeholder="Search restaurants"
            isSearchable
            noResultsText="No restaurants found"
            :options="restaurantOptions">
            <icon-location-pin slot="leadingIcon"></icon-location-pin>
        </pie-dropdown>

        <h2 class="c-dropdown-heading">PIE Dropdown - Multi select with search</h2>
        <pie-dropdown
            data-test-id="toppings-dropdown"
            label="Toppings"
            name="toppings"
            placeholder="Search toppings"
            isMultiselect
            isSearchable
            :options="toppingOptions"
            :value="selectedToppings">
        </pie-dropdown>
    </div>
</template>

<script setup lang="ts">
import { definePageMeta } from '#imports';
import { ref } from 'vue';
import '@justeattakeaway/pie-webc/components/dropdown.js';
import '@justeattakeaway/pie-icons-webc/dist/IconLocationPin.js';
import '@justeattakeaway/pie-icons-webc/dist/IconPizza.js';
import '@justeattakeaway/pie-icons-webc/dist/IconCurry.js';
import '@justeattakeaway/pie-icons-webc/dist/IconNoodles.js';
import '@justeattakeaway/pie-icons-webc/dist/IconSalad.js';
import '@justeattakeaway/pie-icons-webc/dist/IconVegan.js';
import '@justeattakeaway/pie-icons-webc/dist/IconVegetarian.js';
import '@justeattakeaway/pie-icons-webc/dist/IconNuts.js';
import '@justeattakeaway/pie-icons-webc/dist/IconHalal.js';
import '@justeattakeaway/pie-icons-webc/dist/IconSpicy.js';

definePageMeta({
    title: 'Dropdown',
});

const meal = ref('');

const handleMealChange = (event: Event) => {
    meal.value = (event.target as HTMLInputElement).value;
};

const selectedCuisine = 'pizza';

const selectedToppings = ['mozzarella'];

const mealOptions = [
    { value: 'pizza', primaryText: 'Wood-fired margherita', secondaryText: 'Wood-fired, with a crisp base' },
    { value: 'burger', primaryText: 'Flame-grilled burger', secondaryText: 'Served with pickles and fries' },
    { value: 'salad', primaryText: 'Seasonal salad', secondaryText: 'Fresh greens — sold out today', disabled: true },
    { value: 'pasta', primaryText: 'Creamy pasta', secondaryText: 'Made to a traditional recipe' },
    { value: 'curry', primaryText: 'Aromatic curry', secondaryText: 'Slow-cooked with aromatic spices' },
    { value: 'ramen', primaryText: 'Tonkotsu ramen', secondaryText: 'Rich broth and springy noodles' },
];

const cuisineOptions = [
    { value: 'pizza', primaryText: 'Pizza', secondaryText: 'Wood-fired classics' },
    { value: 'curry', primaryText: 'Curry', secondaryText: 'Slow-cooked and aromatic' },
    { value: 'noodles', primaryText: 'Noodles', secondaryText: 'Broths and stir-fries' },
    { value: 'salad', primaryText: 'Salad', secondaryText: 'Fresh and seasonal' },
];

const dietaryOptions = [
    { value: 'vegan', primaryText: 'Vegan', secondaryText: 'Plant-based dishes only' },
    { value: 'vegetarian', primaryText: 'Vegetarian', secondaryText: 'No meat or fish' },
    { value: 'nut-free', primaryText: 'Nut allergy', secondaryText: 'Dishes prepared without nuts' },
    { value: 'halal', primaryText: 'Halal', secondaryText: 'Halal-certified kitchens only' },
    { value: 'extra-spicy', primaryText: 'Extra spicy', secondaryText: 'I can handle the heat' },
];

const restaurantOptions = [
    { value: 'bella-napoli', primaryText: 'Bella Napoli', secondaryText: 'Italian · 25–35 min' },
    { value: 'golden-wok', primaryText: 'Golden Wok', secondaryText: 'Chinese · 20–30 min' },
    { value: 'taco-fiesta', primaryText: 'Taco Fiesta', secondaryText: 'Mexican · 30–40 min' },
    { value: 'the-curry-house', primaryText: 'The Curry House', secondaryText: 'Indian · 35–45 min' },
    { value: 'sushi-sakura', primaryText: 'Sushi Sakura', secondaryText: 'Japanese · 20–30 min' },
    { value: 'burger-barn', primaryText: 'Burger Barn', secondaryText: 'American · 15–25 min' },
    { value: 'le-petit-bistro', primaryText: 'Le Petit Bistro', secondaryText: 'French · 30–40 min' },
    { value: 'kebab-king', primaryText: 'Kebab King', secondaryText: 'Turkish · 20–30 min' },
    { value: 'thai-orchid', primaryText: 'Thai Orchid', secondaryText: 'Thai · 30–40 min' },
    { value: 'greek-gyro', primaryText: 'Greek Gyro', secondaryText: 'Greek · 25–35 min' },
    { value: 'pizza-palace', primaryText: 'Pizza Palace', secondaryText: 'Italian · 20–25 min' },
    { value: 'noodle-nirvana', primaryText: 'Noodle Nirvana', secondaryText: 'Vietnamese · 30–40 min' },
];

const toppingOptions = [
    { value: 'mozzarella', primaryText: 'Mozzarella', secondaryText: '+ £0.80' },
    { value: 'pepperoni', primaryText: 'Pepperoni', secondaryText: '+ £1.20' },
    { value: 'mushrooms', primaryText: 'Mushrooms', secondaryText: '+ £0.60' },
    { value: 'jalapenos', primaryText: 'Jalapeños', secondaryText: '+ £0.50' },
    { value: 'olives', primaryText: 'Olives', secondaryText: '+ £0.70' },
    { value: 'extra-cheese', primaryText: 'Extra cheese', secondaryText: '+ £1.00' },
    { value: 'basil', primaryText: 'Fresh basil', secondaryText: '+ £0.40' },
    { value: 'onions', primaryText: 'Red onions', secondaryText: '+ £0.40' },
    { value: 'peppers', primaryText: 'Roasted peppers', secondaryText: '+ £0.70' },
    { value: 'anchovies', primaryText: 'Anchovies', secondaryText: '+ £1.00' },
];
</script>

<style>
.c-dropdown-heading {
    padding: var(--dt-spacing-b) 0;
}

pie-dropdown {
    width: min(420px, 100%);
}

.c-dropdown-selection {
    padding: var(--dt-spacing-b) 0;
    color: var(--dt-color-content-subdued);
}
</style>
