import React from 'react';
import MealList from "../Components/MealList";
import {MEALS} from "../data/dummy-data";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import HeaderButton from '../Components/HeaderButton';

const FavoritesScreen = ({navigation: {navigate, getParam}}) => {
    const favMeals = MEALS.filter(meal => meal.id === 'm1' || meal.id === 'm2');

    return (
       <MealList listData={favMeals} navigate={navigate} />
    );
};

FavoritesScreen.navigationOptions = ({navigation: {toggleDrawer}}) => {
    return {
        headerTitle: 'Your Favourites',
        headerLeft: (
            <HeaderButtons HeaderButtonComponent={HeaderButton} title="categories-screen">
                <Item
                    title="Menu"
                    label="Menu"
                    iconName="ios-menu"
                    onPress={() => toggleDrawer()}/>
            </HeaderButtons>
        )
    }
};

export default FavoritesScreen;
