import {SET_FILTERS, TOGGLE_FAVORITE} from "../actionTypes";

export const toggleFavorite = (mealId) => ({
    type: TOGGLE_FAVORITE,
    mealId: mealId
});

export const setFilters = (filters) => ({
    type: SET_FILTERS,
    filters: filters,
});
