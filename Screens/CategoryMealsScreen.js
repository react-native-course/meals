import React from 'react';
import {CATEGORIES, MEALS} from "../data/dummy-data";
import MealList from "../Components/MealList";

const CategoryMealsScreen = ({navigation: {navigate, getParam}}) => {
    const catId = getParam('categoryId'),
        displayMeals = MEALS.filter(meal => meal.categoryIds.indexOf(catId) >= 0);

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

export default CategoryMealsScreen;
