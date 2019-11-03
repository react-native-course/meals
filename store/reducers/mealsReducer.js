import {MEALS} from "../../data/dummy-data";

const initialState = {
    meals: MEALS,
    filteredMeals: MEALS,
    favoriteMeals: [],
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'mango':
            return state;
        default:
            return state;
    }
};

export default reducer;
