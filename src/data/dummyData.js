export const dummyUser = {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com',
    created_at: '2024-01-15T10:30:00Z'
};

export const dummyPreferences = {
    user_id: 1,
    dietary_restrictions: ['Vegetarian'],
    preferred_cuisines: ['Italian', 'Mediterranean'],
    default_servings: 4,
    measurement_unit: 'metric'
};


export const dummyRecipes = [
    {
        id: 1,
        user_id: 1,
        name: 'Creamy Tomato Basil Pasta',
        description: 'A delicious and creamy pasta dish with fresh tomatoes and basil',
        cuisine_type: 'Italian',
        difficulty: 'easy',
        prep_time: 10,
        cook_time: 20,
        servings: 4,
        instructions: [
            'Bring a large pot of salted water to boil and cook pasta according to package directions',
            'While pasta cooks, heat olive oil in a large skillet over medium heat',
            'Add minced garlic and cook until fragrant, about 1 minute',
            'Add diced tomatoes and cook for 5-7 minutes until they start to break down',
            'Stir in heavy cream and bring to a simmer',
            'Add fresh basil, salt, and pepper to taste',
            'Drain pasta and toss with the sauce',
            'Serve hot with grated Parmesan cheese'
        ],
        dietary_tags: ['Vegetarian'],
        user_notes: null,
        image_url: null,
        created_at: '2024-02-01T14:20:00Z',
        calories: 450,
        ingredients: [
            { name: 'Pasta', quantity: 400, unit: 'g' },
            { name: 'Tomatoes', quantity: 4, unit: 'pieces' },
            { name: 'Garlic', quantity: 3, unit: 'cloves' },
            { name: 'Heavy Cream', quantity: 200, unit: 'ml' },
            { name: 'Fresh Basil', quantity: 1, unit: 'cup' },
            { name: 'Olive Oil', quantity: 2, unit: 'tbsp' },
            { name: 'Parmesan Cheese', quantity: 50, unit: 'g' }
        ],
        nutrition: {
            calories: 450,
            protein: 15,
            carbs: 55,
            fats: 18,
            fiber: 4
        }
    },
    {
        id: 2,
        user_id: 1,
        name: 'Spicy Thai Vegetable Stir-Fry',
        description: 'A vibrant and spicy stir-fry packed with colorful vegetables',
        cuisine_type: 'Thai',
        difficulty: 'medium',
        prep_time: 15,
        cook_time: 15,
        servings: 4,
        instructions: [
            'Prepare all vegetables by cutting them into bite-sized pieces',
            'Heat vegetable oil in a wok or large skillet over high heat',
            'Add garlic and ginger, stir-fry for 30 seconds',
            'Add bell peppers and broccoli, stir-fry for 3-4 minutes',
            'Add remaining vegetables and stir-fry for another 3 minutes',
            'Mix soy sauce, lime juice, and chili paste in a small bowl',
            'Pour sauce over vegetables and toss to coat',
            'Garnish with fresh cilantro and serve over rice'
        ],
        dietary_tags: ['Vegan', 'Gluten-Free'],
        user_notes: 'Adjust chili paste to taste',
        image_url: null,
        created_at: '2024-02-03T09:15:00Z',
        calories: 220,
        ingredients: [
            { name: 'Bell Peppers', quantity: 2, unit: 'pieces' },
            { name: 'Broccoli', quantity: 200, unit: 'g' },
            { name: 'Carrots', quantity: 2, unit: 'pieces' },
            { name: 'Snap Peas', quantity: 150, unit: 'g' },
            { name: 'Garlic', quantity: 4, unit: 'cloves' },
            { name: 'Ginger', quantity: 2, unit: 'tbsp' },
            { name: 'Soy Sauce', quantity: 3, unit: 'tbsp' },
            { name: 'Lime Juice', quantity: 2, unit: 'tbsp' },
            { name: 'Chili Paste', quantity: 1, unit: 'tbsp' }
        ],
        nutrition: {
            calories: 220,
            protein: 8,
            carbs: 35,
            fats: 6,
            fiber: 8
        }
    },
    {
        id: 3,
        user_id: 1,
        name: 'Mediterranean Quinoa Bowl',
        description: 'A healthy and filling quinoa bowl with Mediterranean flavors',
        cuisine_type: 'Mediterranean',
        difficulty: 'easy',
        prep_time: 10,
        cook_time: 20,
        servings: 2,
        instructions: [
            'Rinse quinoa and cook according to package directions',
            'While quinoa cooks, dice cucumber, tomatoes, and red onion',
            'Crumble feta cheese',
            'Make dressing by whisking olive oil, lemon juice, and oregano',
            'Fluff cooked quinoa with a fork and let cool slightly',
            'Combine quinoa with vegetables in a large bowl',
            'Drizzle with dressing and toss to combine',
            'Top with feta cheese and olives',
            'Serve warm or chilled'
        ],
        dietary_tags: ['Vegetarian', 'Gluten-Free'],
        user_notes: null,
        image_url: null,
        created_at: '2024-02-05T11:30:00Z',
        calories: 380,
        ingredients: [
            { name: 'Quinoa', quantity: 200, unit: 'g' },
            { name: 'Cucumber', quantity: 1, unit: 'pieces' },
            { name: 'Cherry Tomatoes', quantity: 200, unit: 'g' },
            { name: 'Red Onion', quantity: 0.5, unit: 'pieces' },
            { name: 'Feta Cheese', quantity: 100, unit: 'g' },
            { name: 'Kalamata Olives', quantity: 50, unit: 'g' },
            { name: 'Olive Oil', quantity: 3, unit: 'tbsp' },
            { name: 'Lemon Juice', quantity: 2, unit: 'tbsp' },
            { name: 'Dried Oregano', quantity: 1, unit: 'tsp' }
        ],
        nutrition: {
            calories: 380,
            protein: 14,
            carbs: 42,
            fats: 18,
            fiber: 6
        }
    },
    {
        id: 4,
        user_id: 1,
        name: 'Classic Margherita Pizza',
        description: 'Traditional Italian pizza with fresh mozzarella and basil',
        cuisine_type: 'Italian',
        difficulty: 'medium',
        prep_time: 90,
        cook_time: 15,
        servings: 4,
        instructions: [
            'Prepare pizza dough and let it rise for 1 hour',
            'Preheat oven to 475°F (245°C)',
            'Roll out dough into a 12-inch circle',
            'Spread tomato sauce evenly over dough',
            'Tear fresh mozzarella and distribute over sauce',
            'Drizzle with olive oil and season with salt',
            'Bake for 12-15 minutes until crust is golden',
            'Remove from oven and top with fresh basil leaves',
            'Slice and serve immediately'
        ],
        dietary_tags: ['Vegetarian'],
        user_notes: 'Use a pizza stone for best results',
        image_url: null,
        created_at: '2024-02-07T16:45:00Z',
        calories: 520,
        ingredients: [
            { name: 'Pizza Dough', quantity: 500, unit: 'g' },
            { name: 'Tomato Sauce', quantity: 200, unit: 'ml' },
            { name: 'Fresh Mozzarella', quantity: 250, unit: 'g' },
            { name: 'Fresh Basil', quantity: 1, unit: 'cup' },
            { name: 'Olive Oil', quantity: 2, unit: 'tbsp' },
            { name: 'Salt', quantity: 1, unit: 'tsp' }
        ],
        nutrition: {
            calories: 520,
            protein: 22,
            carbs: 65,
            fats: 18,
            fiber: 3
        }
    },
    {
        id: 5,
        user_id: 1,
        name: 'Chickpea Curry',
        description: 'A warming and aromatic Indian-style chickpea curry',
        cuisine_type: 'Indian',
        difficulty: 'easy',
        prep_time: 10,
        cook_time: 25,
        servings: 4,
        instructions: [
            'Heat oil in a large pot over medium heat',
            'Add onions and cook until softened, about 5 minutes',
            'Add garlic, ginger, and spices, cook for 1 minute',
            'Add diced tomatoes and cook for 5 minutes',
            'Add chickpeas and coconut milk',
            'Bring to a simmer and cook for 15 minutes',
            'Season with salt and pepper to taste',
            'Garnish with fresh cilantro',
            'Serve over rice or with naan bread'
        ],
        dietary_tags: ['Vegan', 'Gluten-Free'],
        user_notes: null,
        image_url: null,
        created_at: '2024-02-09T13:20:00Z',
        calories: 340,
        ingredients: [
            { name: 'Chickpeas', quantity: 400, unit: 'g' },
            { name: 'Coconut Milk', quantity: 400, unit: 'ml' },
            { name: 'Onion', quantity: 1, unit: 'pieces' },
            { name: 'Tomatoes', quantity: 2, unit: 'pieces' },
            { name: 'Garlic', quantity: 4, unit: 'cloves' },
            { name: 'Ginger', quantity: 2, unit: 'tbsp' },
            { name: 'Curry Powder', quantity: 2, unit: 'tbsp' },
            { name: 'Cumin', quantity: 1, unit: 'tsp' },
            { name: 'Fresh Cilantro', quantity: 0.5, unit: 'cup' }
        ],
        nutrition: {
            calories: 340,
            protein: 12,
            carbs: 38,
            fats: 16,
            fiber: 10
        }
    }
];


export const dummyPantryItems = [
    {
        id: 1,
        user_id: 1,
        name: 'Tomatoes',
        quantity: 6,
        unit: 'pieces',
        category: 'Vegetables',
        expiry_date: '2024-02-20',
        is_running_low: false,
        created_at: '2024-02-01T10:00:00Z'
    },
    {
        id: 2,
        user_id: 1,
        name: 'Pasta',
        quantity: 1,
        unit: 'kg',
        category: 'Grains',
        expiry_date: null,
        is_running_low: false,
        created_at: '2024-02-01T10:05:00Z'
    },
    {
        id: 3,
        user_id: 1,
        name: 'Garlic',
        quantity: 1,
        unit: 'pieces',
        category: 'Vegetables',
        expiry_date: '2024-02-15',
        is_running_low: true,
        created_at: '2024-02-01T10:10:00Z'
    },
    {
        id: 4,
        user_id: 1,
        name: 'Olive Oil',
        quantity: 500,
        unit: 'ml',
        category: 'Other',
        expiry_date: '2024-06-30',
        is_running_low: false,
        created_at: '2024-02-01T10:15:00Z'
    },
    {
        id: 5,
        user_id: 1,
        name: 'Fresh Basil',
        quantity: 1,
        unit: 'cups',
        category: 'Spices',
        expiry_date: '2024-02-12',
        is_running_low: false,
        created_at: '2024-02-05T09:00:00Z'
    },
    {
        id: 6,
        user_id: 1,
        name: 'Parmesan Cheese',
        quantity: 200,
        unit: 'g',
        category: 'Dairy',
        expiry_date: '2024-03-01',
        is_running_low: false,
        created_at: '2024-02-01T10:20:00Z'
    },
    {
        id: 7,
        user_id: 1,
        name: 'Bell Peppers',
        quantity: 3,
        unit: 'pieces',
        category: 'Vegetables',
        expiry_date: '2024-02-18',
        is_running_low: false,
        created_at: '2024-02-03T11:00:00Z'
    },
    {
        id: 8,
        user_id: 1,
        name: 'Quinoa',
        quantity: 500,
        unit: 'g',
        category: 'Grains',
        expiry_date: null,
        is_running_low: false,
        created_at: '2024-02-01T10:25:00Z'
    },
    {
        id: 9,
        user_id: 1,
        name: 'Chickpeas',
        quantity: 800,
        unit: 'g',
        category: 'Grains',
        expiry_date: '2024-12-31',
        is_running_low: false,
        created_at: '2024-02-01T10:30:00Z'
    },
    {
        id: 10,
        user_id: 1,
        name: 'Coconut Milk',
        quantity: 400,
        unit: 'ml',
        category: 'Dairy',
        expiry_date: '2024-04-15',
        is_running_low: false,
        created_at: '2024-02-01T10:35:00Z'
    },
    {
        id: 11,
        user_id: 1,
        name: 'Onions',
        quantity: 4,
        unit: 'pieces',
        category: 'Vegetables',
        expiry_date: null,
        is_running_low: false,
        created_at: '2024-02-01T10:40:00Z'
    },
    {
        id: 12,
        user_id: 1,
        name: 'Carrots',
        quantity: 5,
        unit: 'pieces',
        category: 'Vegetables',
        expiry_date: '2024-02-25',
        is_running_low: false,
        created_at: '2024-02-01T10:45:00Z'
    },
    {
        id: 13,
        user_id: 1,
        name: 'Soy Sauce',
        quantity: 250,
        unit: 'ml',
        category: 'Other',
        expiry_date: '2025-01-01',
        is_running_low: true,
        created_at: '2024-02-01T10:50:00Z'
    },
    {
        id: 14,
        user_id: 1,
        name: 'Ginger',
        quantity: 100,
        unit: 'g',
        category: 'Spices',
        expiry_date: '2024-02-22',
        is_running_low: false,
        created_at: '2024-02-01T10:55:00Z'
    },
    {
        id: 15,
        user_id: 1,
        name: 'Feta Cheese',
        quantity: 150,
        unit: 'g',
        category: 'Dairy',
        expiry_date: '2024-02-28',
        is_running_low: false,
        created_at: '2024-02-05T12:00:00Z'
    }
];


export const dummyMealPlans = [
    {
        id: 1,
        user_id: 1,
        recipe_id: 1,
        meal_date: '2024-02-12',
        meal_type: 'dinner',
        recipe_name: 'Creamy Tomato Basil Pasta',
        image_url: null,
        prep_time: 10,
        cook_time: 20,
        created_at: '2024-02-10T14:00:00Z'
    },
    {
        id: 2,
        user_id: 1,
        recipe_id: 3,
        meal_date: '2024-02-13',
        meal_type: 'lunch',
        recipe_name: 'Mediterranean Quinoa Bowl',
        image_url: null,
        prep_time: 10,
        cook_time: 20,
        created_at: '2024-02-10T14:05:00Z'
    },
    {
        id: 3,
        user_id: 1,
        recipe_id: 2,
        meal_date: '2024-02-13',
        meal_type: 'dinner',
        recipe_name: 'Spicy Thai Vegetable Stir-Fry',
        image_url: null,
        prep_time: 15,
        cook_time: 15,
        created_at: '2024-02-10T14:10:00Z'
    },
    {
        id: 4,
        user_id: 1,
        recipe_id: 5,
        meal_date: '2024-02-14',
        meal_type: 'dinner',
        recipe_name: 'Chickpea Curry',
        image_url: null,
        prep_time: 10,
        cook_time: 25,
        created_at: '2024-02-10T14:15:00Z'
    },
    {
        id: 5,
        user_id: 1,
        recipe_id: 4,
        meal_date: '2024-02-15',
        meal_type: 'dinner',
        recipe_name: 'Classic Margherita Pizza',
        image_url: null,
        prep_time: 90,
        cook_time: 15,
        created_at: '2024-02-10T14:20:00Z'
    },
    {
        id: 6,
        user_id: 1,
        recipe_id: 1,
        meal_date: '2024-02-16',
        meal_type: 'lunch',
        recipe_name: 'Creamy Tomato Basil Pasta',
        image_url: null,
        prep_time: 10,
        cook_time: 20,
        created_at: '2024-02-10T14:25:00Z'
    }
];

export const dummyShoppingListItems = [
    {
        id: 1,
        user_id: 1,
        ingredient_name: 'Heavy Cream',
        quantity: 200,
        unit: 'ml',
        category: 'Dairy',
        is_checked: false,
        from_meal_plan: true,
        created_at: '2024-02-10T15:00:00Z'
    },
    {
        id: 2,
        user_id: 1,
        ingredient_name: 'Fresh Mozzarella',
        quantity: 250,
        unit: 'g',
        category: 'Dairy',
        is_checked: false,
        from_meal_plan: true,
        created_at: '2024-02-10T15:05:00Z'
    },
    {
        id: 3,
        user_id: 1,
        ingredient_name: 'Pizza Dough',
        quantity: 500,
        unit: 'g',
        category: 'Grains',
        is_checked: true,
        from_meal_plan: true,
        created_at: '2024-02-10T15:10:00Z'
    },
    {
        id: 4,
        user_id: 1,
        ingredient_name: 'Broccoli',
        quantity: 200,
        unit: 'g',
        category: 'Vegetables',
        is_checked: false,
        from_meal_plan: true,
        created_at: '2024-02-10T15:15:00Z'
    },
    {
        id: 5,
        user_id: 1,
        ingredient_name: 'Snap Peas',
        quantity: 150,
        unit: 'g',
        category: 'Vegetables',
        is_checked: false,
        from_meal_plan: true,
        created_at: '2024-02-10T15:20:00Z'
    },
    {
        id: 6,
        user_id: 1,
        ingredient_name: 'Lime',
        quantity: 2,
        unit: 'pieces',
        category: 'Fruits',
        is_checked: false,
        from_meal_plan: false,
        created_at: '2024-02-10T15:25:00Z'
    },
    {
        id: 7,
        user_id: 1,
        ingredient_name: 'Cucumber',
        quantity: 1,
        unit: 'pieces',
        category: 'Vegetables',
        is_checked: true,
        from_meal_plan: true,
        created_at: '2024-02-10T15:30:00Z'
    },
    {
        id: 8,
        user_id: 1,
        ingredient_name: 'Kalamata Olives',
        quantity: 50,
        unit: 'g',
        category: 'Other',
        is_checked: false,
        from_meal_plan: true,
        created_at: '2024-02-10T15:35:00Z'
    }
];

export const dummyStats = {
    recipes: {
        total_recipes: 5,
        cuisine_types_count: 4,
        avg_cook_time: 19
    },
    pantry: {
        total_items: 15,
        total_categories: 5,
        running_low_count: 2,
        expiring_soon_count: 2
    },
    mealPlans: {
        total_planned_meals: 6,
        this_week_count: 6
    }
};


export const dummyGeneratedRecipe = {
    name: 'Garlic Herb Roasted Vegetables',
    description: 'A colorful medley of roasted vegetables with aromatic herbs and garlic',
    cuisineType: 'Mediterranean',
    difficulty: 'easy',
    prepTime: 15,
    cookTime: 30,
    servings: 4,
    ingredients: [
        { name: 'Bell Peppers', quantity: 2, unit: 'pieces' },
        { name: 'Zucchini', quantity: 2, unit: 'pieces' },
        { name: 'Red Onion', quantity: 1, unit: 'pieces' },
        { name: 'Cherry Tomatoes', quantity: 200, unit: 'g' },
        { name: 'Garlic', quantity: 4, unit: 'cloves' },
        { name: 'Olive Oil', quantity: 3, unit: 'tbsp' },
        { name: 'Fresh Rosemary', quantity: 2, unit: 'tbsp' },
        { name: 'Fresh Thyme', quantity: 1, unit: 'tbsp' }
    ],
    instructions: [
        'Preheat oven to 425°F (220°C)',
        'Cut all vegetables into similar-sized pieces',
        'Place vegetables in a large bowl',
        'Mince garlic and chop fresh herbs',
        'Drizzle vegetables with olive oil and add garlic and herbs',
        'Season with salt and pepper, toss to coat evenly',
        'Spread vegetables in a single layer on a baking sheet',
        'Roast for 25-30 minutes, stirring halfway through',
        'Vegetables should be tender and slightly caramelized',
        'Serve hot as a side dish or over quinoa'
    ],
    dietaryTags: ['Vegan', 'Gluten-Free'],
    nutrition: {
        calories: 180,
        protein: 4,
        carbs: 22,
        fats: 10,
        fiber: 6
    },
    cookingTips: [
        'Cut vegetables into uniform sizes for even cooking',
        'Don\'t overcrowd the baking sheet - use two if needed',
        'For extra flavor, add a splash of balsamic vinegar before serving',
        'These vegetables taste great the next day in salads or wraps'
    ]
};


// Get expiring items (within 7 days)
export const getExpiringItems = () => {
    const today = new Date();
    const sevenDaysFromNow = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);

    return dummyPantryItems.filter(item => {
        if (!item.expiry_date) return false;
        const expiryDate = new Date(item.expiry_date);
        return expiryDate >= today && expiryDate <= sevenDaysFromNow;
    });
};

// Get recent recipes (last 5)
export const getRecentRecipes = (limit = 5) => {
    return [...dummyRecipes]
        .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
        .slice(0, limit);
};

// Get upcoming meals (next 5)
export const getUpcomingMeals = (limit = 5) => {
    const today = new Date().toISOString().split('T')[0];
    return dummyMealPlans
        .filter(meal => meal.meal_date >= today)
        .sort((a, b) => new Date(a.meal_date) - new Date(b.meal_date))
        .slice(0, limit);
};

// Get recipe by ID
export const getRecipeById = (id) => {
    return dummyRecipes.find(recipe => recipe.id === parseInt(id));
};

// Simulate async data fetching
export const simulateApiCall = (data, delay = 500) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ data: { data } });
        }, delay);
    });
};
