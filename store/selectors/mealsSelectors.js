export const getMeals = ({state}) => state.mealsReducer.meals;

export const getFilteredMeals = ({state}) => state.mealsReducer.filteredMeals;

export const getFavoriteMeals = ({state}) => state.mealsReducer.favoriteMeals;
