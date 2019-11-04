import {TOGGLE_FAVORITE} from "../actionTypes";

export const toggleFavorite = (mealId) => ({
    type: TOGGLE_FAVORITE,
    mealId: mealId
});
