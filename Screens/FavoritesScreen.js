import React from 'react';
import MealList from "../Components/MealList";
import {MEALS} from "../data/dummy-data";

const FavoritesScreen = ({navigation: {navigate, getParam}}) => {
    const favMeals = MEALS.filter(meal => meal.id === 'm1' || meal.id === 'm2');

    return (
       <MealList listData={favMeals} navigate={navigate} />
    );
};

export default FavoritesScreen;
