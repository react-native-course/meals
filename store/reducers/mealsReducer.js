import {MEALS} from "../../data/dummy-data";
import {SET_FILTERS, TOGGLE_FAVORITE} from "../actionTypes";
import {updateObject} from "../utility";

const initialState = {
    meals: MEALS,
    filteredMeals: MEALS,
    favoriteMeals: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FAVORITE: {
            const meal = state.meals.find((meal) => meal.id === action.mealId),
                existingIndex = state.favoriteMeals.findIndex((meal) =>
                    meal.id === action.mealId
                );
            if (existingIndex >= 0) {
                const updatedFavMeals = [...state.favoriteMeals];
                updatedFavMeals.splice(existingIndex, 1);
                return updateObject(state, {favoriteMeals: updatedFavMeals});
            }
            return updateObject(state, {
                favoriteMeals: state.favoriteMeals.concat(meal)
            });
        }
        case SET_FILTERS: {
            const appliedFilters = action.filters,
                filteredMeals = state.meals.filter((meal) => {
                    if ((appliedFilters.glutenFree && !meal.isGlutenFree) ||
                        (appliedFilters.lactoseFree && !meal.isLactoseFree) ||
                        (appliedFilters.vegetarian && !meal.isVegetarian) ||
                        (appliedFilters.vegan && !meal.isVegan)) {
                        return false;
                    }
                    return true;
                });
            return updateObject(state, {
                filteredMeals: filteredMeals
            });
        }
        default:
            return state;
    }
};

export default reducer;
