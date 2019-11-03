import React from 'react';
import {connect} from "react-redux";
//react navigation
import {HeaderButtons, Item} from "react-navigation-header-buttons";
//selectors
import {getFavoriteMeals} from "../store/selectors/mealsSelectors";
//components
import HeaderButton from '../Components/HeaderButton';
import MealList from "../Components/MealList";

const FavoritesScreen = ({navigation: {navigate}, favoriteMeals}) => (
    <MealList listData={favoriteMeals} navigate={navigate}/>
);

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

const mapStateToProps = (state) => ({
    favoriteMeals: getFavoriteMeals({state}),
});

export default connect(mapStateToProps)(FavoritesScreen);
