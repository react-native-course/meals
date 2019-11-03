import { combineReducers } from 'redux';
import mealsReducer from './reducers/mealsReducer';

const rootReducer = combineReducers({
    mealsReducer: mealsReducer,
});

export default rootReducer;
