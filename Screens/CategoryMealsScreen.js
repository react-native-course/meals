import React from 'react';
import {connect} from "react-redux";
//selectors
import {getFilteredMeals} from "../store/selectors/mealsSelectors";
//components
import MealList from "../Components/MealList";
//dummy
import {CATEGORIES} from "../data/dummy-data";

const CategoryMealsScreen = ({navigation: {navigate, getParam}, filteredMeals}) => {
    const catId = getParam('categoryId'),
        displayMeals = filteredMeals.filter(meal => meal.categoryIds.indexOf(catId) >= 0);

    return (
        <MealList listData={displayMeals} navigate={navigate} />
    );
};

CategoryMealsScreen.navigationOptions = ({navigation: {getParam}}) => {
    const catId = getParam('categoryId'),
        selectedCategory = CATEGORIES.find(cat => cat.id === catId);

    return {
        headerTitle: selectedCategory.title,
    };
};

const mapStateToProps = (state) => ({
    filteredMeals: getFilteredMeals({state}),
});

export default connect(mapStateToProps)(CategoryMealsScreen);
