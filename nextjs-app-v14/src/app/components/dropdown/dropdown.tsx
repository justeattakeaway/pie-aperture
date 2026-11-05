'use client';

import { useState } from 'react';
import NavigationLayout from "@/app/layout/navigation";
import { PieDropdown, type DropdownOption } from "@justeattakeaway/pie-webc/react/dropdown.js";
import { IconLocationPin } from '@justeattakeaway/pie-icons-webc/dist/react/IconLocationPin.js';
import { IconPizza } from '@justeattakeaway/pie-icons-webc/dist/react/IconPizza.js';
import { IconCurry } from '@justeattakeaway/pie-icons-webc/dist/react/IconCurry.js';
import { IconNoodles } from '@justeattakeaway/pie-icons-webc/dist/react/IconNoodles.js';
import { IconSalad } from '@justeattakeaway/pie-icons-webc/dist/react/IconSalad.js';
import { IconVegan } from '@justeattakeaway/pie-icons-webc/dist/react/IconVegan.js';
import { IconVegetarian } from '@justeattakeaway/pie-icons-webc/dist/react/IconVegetarian.js';
import { IconNuts } from '@justeattakeaway/pie-icons-webc/dist/react/IconNuts.js';
import { IconHalal } from '@justeattakeaway/pie-icons-webc/dist/react/IconHalal.js';
import { IconSpicy } from '@justeattakeaway/pie-icons-webc/dist/react/IconSpicy.js';
import '@/styles/dropdown.scss';

const mealOptions: DropdownOption[] = [
    { value: 'pizza', primaryText: 'Wood-fired margherita', secondaryText: 'Wood-fired, with a crisp base' },
    { value: 'burger', primaryText: 'Flame-grilled burger', secondaryText: 'Served with pickles and fries' },
    { value: 'salad', primaryText: 'Seasonal salad', secondaryText: 'Fresh greens — sold out today', disabled: true },
    { value: 'pasta', primaryText: 'Creamy pasta', secondaryText: 'Made to a traditional recipe' },
    { value: 'curry', primaryText: 'Aromatic curry', secondaryText: 'Slow-cooked with aromatic spices' },
    { value: 'ramen', primaryText: 'Tonkotsu ramen', secondaryText: 'Rich broth and springy noodles' },
];

const cuisineOptions: DropdownOption[] = [
    { value: 'pizza', primaryText: 'Pizza', secondaryText: 'Wood-fired classics' },
    { value: 'curry', primaryText: 'Curry', secondaryText: 'Slow-cooked and aromatic' },
    { value: 'noodles', primaryText: 'Noodles', secondaryText: 'Broths and stir-fries' },
    { value: 'salad', primaryText: 'Salad', secondaryText: 'Fresh and seasonal' },
];

const dietaryOptions: DropdownOption[] = [
    { value: 'vegan', primaryText: 'Vegan', secondaryText: 'Plant-based dishes only' },
    { value: 'vegetarian', primaryText: 'Vegetarian', secondaryText: 'No meat or fish' },
    { value: 'nut-free', primaryText: 'Nut allergy', secondaryText: 'Dishes prepared without nuts' },
    { value: 'halal', primaryText: 'Halal', secondaryText: 'Halal-certified kitchens only' },
    { value: 'extra-spicy', primaryText: 'Extra spicy', secondaryText: 'I can handle the heat' },
];

const restaurantOptions: DropdownOption[] = [
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

const toppingOptions: DropdownOption[] = [
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

export default function Dropdown() {
    const [meal, setMeal] = useState('');

    const handleMealChange = (event: CustomEvent) => {
        setMeal((event.target as HTMLInputElement).value);
    };

    return (
        <NavigationLayout title="Dropdown">
            <h2 className="c-dropdown-heading">PIE Dropdown - Single select</h2>
            <PieDropdown
                data-test-id="meal-dropdown"
                label="Meal"
                name="meal"
                placeholder="Select a meal"
                assistiveText="Choose the main meal for your order"
                options={mealOptions}
                value={meal}
                onChange={handleMealChange} />
            <p className="c-dropdown-selection" data-test-id="meal-selection">Your meal: {meal || 'nothing selected yet'}</p>

            <h2 className="c-dropdown-heading">PIE Dropdown - Single select with option icons</h2>
            <PieDropdown
                data-test-id="cuisine-dropdown"
                label="Cuisine"
                name="cuisine"
                placeholder="Select a cuisine"
                options={cuisineOptions}
                value="pizza">
                <IconPizza slot="icon-pizza" />
                <IconCurry slot="icon-curry" />
                <IconNoodles slot="icon-noodles" />
                <IconSalad slot="icon-salad" />
            </PieDropdown>

            <h2 className="c-dropdown-heading">PIE Dropdown - Multi select</h2>
            <PieDropdown
                data-test-id="dietary-dropdown"
                label="Dietary requirements"
                name="dietary-requirements"
                isMultiselect
                selectedCountText="{count} selected"
                options={dietaryOptions}>
                <IconVegan slot="icon-vegan" />
                <IconVegetarian slot="icon-vegetarian" />
                <IconNuts slot="icon-nut-free" />
                <IconHalal slot="icon-halal" />
                <IconSpicy slot="icon-extra-spicy" />
            </PieDropdown>

            <h2 className="c-dropdown-heading">PIE Dropdown - Single select with search</h2>
            <PieDropdown
                data-test-id="restaurant-dropdown"
                label="Restaurant"
                name="restaurant"
                placeholder="Search restaurants"
                isSearchable
                noResultsText="No restaurants found"
                options={restaurantOptions}>
                <IconLocationPin slot="leadingIcon" />
            </PieDropdown>

            <h2 className="c-dropdown-heading">PIE Dropdown - Multi select with search</h2>
            <PieDropdown
                data-test-id="toppings-dropdown"
                label="Toppings"
                name="toppings"
                placeholder="Search toppings"
                isMultiselect
                isSearchable
                options={toppingOptions}
                value={['mozzarella']} />
        </NavigationLayout>
    );
}
