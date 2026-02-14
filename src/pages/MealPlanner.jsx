import { useState, useEffect } from 'react';
import { Calendar as CalendarIcon, Plus, X, ChefHat } from 'lucide-react';
import Navbar from '../components/Navbar';
import toast from 'react-hot-toast';
import { format, startOfWeek, addDays } from 'date-fns';
import { dummyMealPlans, dummyRecipes } from '../data/dummyData';

const MEAL_TYPES = ['breakfast', 'lunch', 'dinner'];
const DAYS_OF_WEEK = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const MealPlanner = () => {
    const [weekStart, setWeekStart] = useState(startOfWeek(new Date()));
    const [mealPlan, setMealPlan] = useState({});
    const [recipes, setRecipes] = useState([]);
    const [showAddModal, setShowAddModal] = useState(false);
    const [selectedSlot, setSelectedSlot] = useState(null);

    useEffect(() => {
        loadMealPlan();
        setRecipes(dummyRecipes);
    }, [weekStart]);

    const loadMealPlan = () => {
        // Organize dummy meals by date and meal type
        const organized = {};
        dummyMealPlans.forEach(meal => {
            const dateKey = meal.meal_date;
            if (!organized[dateKey]) {
                organized[dateKey] = {};
            }
            organized[dateKey][meal.meal_type] = meal;
        });
        setMealPlan(organized);
    };

    const handleAddMeal = (date, mealType) => {
        setSelectedSlot({ date, mealType });
        setShowAddModal(true);
    };

    const handleRemoveMeal = (mealId) => {
        if (!confirm('Remove this meal from your plan?')) return;

        // UI-only remove
        const updatedPlan = { ...mealPlan };
        Object.keys(updatedPlan).forEach(date => {
            Object.keys(updatedPlan[date]).forEach(type => {
                if (updatedPlan[date][type].id === mealId) {
                    delete updatedPlan[date][type];
                }
            });
        });
        setMealPlan(updatedPlan);
        toast.success('Meal removed');
    };

    const getDayMeals = (dayIndex) => {
        const date = format(addDays(weekStart, dayIndex), 'yyyy-MM-dd');
        return mealPlan[date] || {};
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">Meal Planner</h1>
                        <p className="text-gray-600 mt-1">Plan your weekly meals</p>
                    </div>

                    {/* Week Navigation */}
                    <div className="flex items-center gap-3">
                        <button
                            onClick={() => setWeekStart(addDays(weekStart, -7))}
                            className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-medium transition-colors"
                        >
                            Previous Week
                        </button>
                        <button
                            onClick={() => setWeekStart(startOfWeek(new Date()))}
                            className="px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg font-medium transition-colors"
                        >
                            This Week
                        </button>
                        <button
                            onClick={() => setWeekStart(addDays(weekStart, 7))}
                            className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-medium transition-colors"
                        >
                            Next Week
                        </button>
                    </div>
                </div>

                {/* Week Display */}
                <div className="bg-white rounded-lg border border-gray-200 p-4 mb-6">
                    <div className="text-center">
                        <p className="text-sm text-gray-600">Week of</p>
                        <p className="text-lg font-semibold text-gray-900">
                            {format(weekStart, 'MMMM d')} - {format(addDays(weekStart, 6), 'MMMM d, yyyy')}
                        </p>
                    </div>
                </div>

                {/* Calendar Grid */}
                <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                    {/* Header Row */}
                    <div className="grid grid-cols-8 border-b border-gray-200 bg-gray-50">
                        <div className="p-4 font-semibold text-gray-700 border-r border-gray-200">
                            Meal
                        </div>
                        {DAYS_OF_WEEK.map((day, index) => (
                            <div key={day} className="p-4 text-center border-r border-gray-200 last:border-r-0">
                                <div className="font-semibold text-gray-900">{day}</div>
                                <div className="text-sm text-gray-500">
                                    {format(addDays(weekStart, index), 'MMM d')}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Meal Rows */}
                    {MEAL_TYPES.map(mealType => (
                        <div key={mealType} className="grid grid-cols-8 border-b border-gray-200 last:border-b-0">
                            <div className="p-4 font-medium text-gray-700 capitalize border-r border-gray-200 bg-gray-50">
                                {mealType}
                            </div>
                            {DAYS_OF_WEEK.map((_, dayIndex) => {
                                const date = format(addDays(weekStart, dayIndex), 'yyyy-MM-dd');
                                const dayMeals = getDayMeals(dayIndex);
                                const meal = dayMeals[mealType];

                                return (
                                    <div
                                        key={dayIndex}
                                        className="p-3 border-r border-gray-200 last:border-r-0 min-h-[100px] hover:bg-gray-50 transition-colors"
                                    >
                                        {meal ? (
                                            <div className="relative group">
                                                <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-3">
                                                    <p className="text-sm font-medium text-emerald-900 line-clamp-2">
                                                        {meal.recipe_name}
                                                    </p>
                                                    <button
                                                        onClick={() => handleRemoveMeal(meal.id)}
                                                        className="absolute top-1 right-1 p-1 bg-white rounded hover:bg-red-50 text-gray-400 hover:text-red-600 opacity-0 group-hover:opacity-100 transition-opacity"
                                                    >
                                                        <X className="w-4 h-4" />
                                                    </button>
                                                </div>
                                            </div>
                                        ) : (
                                            <button
                                                onClick={() => handleAddMeal(date, mealType)}
                                                className="w-full h-full flex items-center justify-center text-gray-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors group"
                                            >
                                                <Plus className="w-6 h-6" />
                                            </button>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    ))}
                </div>

                {/* Stats */}
                <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white rounded-lg border border-gray-200 p-4">
                        <p className="text-sm text-gray-600">Meals Planned</p>
                        <p className="text-2xl font-bold text-gray-900">
                            {Object.values(mealPlan).reduce((acc, day) => acc + Object.keys(day).length, 0)}
                        </p>
                    </div>
                    <div className="bg-white rounded-lg border border-gray-200 p-4">
                        <p className="text-sm text-gray-600">Total Recipes</p>
                        <p className="text-2xl font-bold text-gray-900">{recipes.length}</p>
                    </div>
                    <div className="bg-white rounded-lg border border-gray-200 p-4">
                        <p className="text-sm text-gray-600">This Week</p>
                        <p className="text-2xl font-bold text-gray-900">
                            {format(weekStart, 'MMM d')} - {format(addDays(weekStart, 6), 'MMM d')}
                        </p>
                    </div>
                </div>
            </div>

            {/* Add Meal Modal */}
            {showAddModal && selectedSlot && (
                <AddMealModal
                    date={selectedSlot.date}
                    mealType={selectedSlot.mealType}
                    recipes={recipes}
                    onClose={() => {
                        setShowAddModal(false);
                        setSelectedSlot(null);
                    }}
                    onSuccess={(newMeal) => {
                        // Add to local state
                        const updatedPlan = { ...mealPlan };
                        const date = selectedSlot.date;
                        if (!updatedPlan[date]) {
                            updatedPlan[date] = {};
                        }
                        updatedPlan[date][selectedSlot.mealType] = newMeal;
                        setMealPlan(updatedPlan);
                        setShowAddModal(false);
                        setSelectedSlot(null);
                    }}
                />
            )}
        </div>
    );
};

const AddMealModal = ({ date, mealType, recipes, onClose, onSuccess }) => {
    const [selectedRecipe, setSelectedRecipe] = useState('');
    const [loading, setLoading] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    const filteredRecipes = recipes.filter(recipe =>
        recipe.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!selectedRecipe) {
            toast.error('Please select a recipe');
            return;
        }

        // UI-only add
        const recipe = recipes.find(r => r.id == selectedRecipe);
        const newMeal = {
            id: Date.now(),
            recipe_id: selectedRecipe,
            recipe_name: recipe.name,
            meal_date: date,
            meal_type: mealType,
            created_at: new Date().toISOString()
        };

        toast.success('Meal added to plan');
        onSuccess(newMeal);
    };

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl max-w-md w-full p-6">
                <div className="flex items-center justify-between mb-6">
                    <div>
                        <h2 className="text-xl font-bold text-gray-900">Add Meal</h2>
                        <p className="text-sm text-gray-600 capitalize">
                            {format(new Date(date), 'EEEE, MMM d')} - {mealType}
                        </p>
                    </div>
                    <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
                        <X className="w-6 h-6" />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Search */}
                    <div>
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search recipes..."
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none"
                        />
                    </div>

                    {/* Recipe List */}
                    <div className="max-h-64 overflow-y-auto space-y-2 custom-scrollbar">
                        {filteredRecipes.length > 0 ? (
                            filteredRecipes.map(recipe => (
                                <label
                                    key={recipe.id}
                                    className={`flex items-center gap-3 p-3 border rounded-lg cursor-pointer transition-colors ${selectedRecipe === recipe.id
                                        ? 'border-emerald-500 bg-emerald-50'
                                        : 'border-gray-200 hover:bg-gray-50'
                                        }`}
                                >
                                    <input
                                        type="radio"
                                        name="recipe"
                                        value={recipe.id}
                                        checked={selectedRecipe === recipe.id}
                                        onChange={(e) => setSelectedRecipe(e.target.value)}
                                        className="w-4 h-4 text-emerald-500 border-gray-300 focus:ring-emerald-500"
                                    />
                                    <div className="flex-1">
                                        <p className="font-medium text-gray-900">{recipe.name}</p>
                                        {recipe.cuisine_type && (
                                            <p className="text-xs text-gray-500">{recipe.cuisine_type}</p>
                                        )}
                                    </div>
                                </label>
                            ))
                        ) : (
                            <div className="text-center py-8">
                                <ChefHat className="w-12 h-12 text-gray-300 mx-auto mb-2" />
                                <p className="text-gray-500">No recipes found</p>
                            </div>
                        )}
                    </div>

                    <div className="flex gap-3 pt-4">
                        <button
                            type="button"
                            onClick={onClose}
                            className="flex-1 px-4 py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-medium transition-colors"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            disabled={loading || !selectedRecipe}
                            className="flex-1 px-4 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg font-medium transition-colors disabled:opacity-50"
                        >
                            {loading ? 'Adding...' : 'Add Meal'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default MealPlanner;
