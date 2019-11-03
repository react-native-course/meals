import { combineReducers } from 'redux';
import meals from './reducers/mealsReducer';

const rootReducer = combineReducers({
    meals: meals,
});

export default rootReducer;
