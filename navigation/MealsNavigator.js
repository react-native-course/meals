import React from 'react';
import {Platform} from "react-native";
import {Ionicons} from '@expo/vector-icons';
//react navigation
import {createAppContainer} from 'react-navigation';
//stack navigator
import {createStackNavigator} from 'react-navigation-stack';
//tab navigator
import {createBottomTabNavigator} from 'react-navigation-tabs';
//material tab navigator
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
//drawer navigator
import {createDrawerNavigator} from 'react-navigation-drawer';
//components
import CategoriesScreen from "../Screens/CategoriesScreen";
import CategoryMealsScreen from "../Screens/CategoryMealsScreen";
import MealDetailScreen from "../Screens/MealDetailScreen";
import FavoritesScreen from "../Screens/FavoritesScreen";
//constants
import Colors from "../constants/Colors";
import FiltersScreen from "../Screens/FiltersScreen";

const defaultStackNavOptions = {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
};

const MealsNavigator = createStackNavigator({
        Categories: CategoriesScreen,
        CategoryMeals: {
            screen: CategoryMealsScreen,
        },
        MealDetail: MealDetailScreen,
    }, {
        defaultNavigationOptions: defaultStackNavOptions
    }
);

const FavNavigator = createStackNavigator({
        Favorites: FavoritesScreen,
        MealDetail: MealDetailScreen,
    },
    {
        defaultNavigationOptions: defaultStackNavOptions
    }
);

const tabScreenConfig = {
    Meals: {
        screen: MealsNavigator,
        navigationOptions: {
            tabBarIcon: (tabInfo) => <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor}/>,
            tabBarColor: Colors.primaryColor
        }
    },
    Favorites: {
        screen: FavNavigator,
        navigationOptions: {
            tabBarIcon: (tabInfo) => <Ionicons name="ios-star" size={25} color={tabInfo.tintColor}/>,
            tabBarColor: Colors.accentColor
        }
    },
};

const MealsFavTabNavigator = Platform.OS === 'android'
    ? createMaterialBottomTabNavigator(
        tabScreenConfig,
        {
            activeColor: 'white',
            shifting: true
        })
    : createBottomTabNavigator(
        tabScreenConfig,
        {
            tabBarOptions: {
                activeTintColor: Colors.accentColor,
            }
        });

const FiltersNavigator = createStackNavigator({
        Filters: FiltersScreen
    },
    {
        defaultNavigationOptions: defaultStackNavOptions
    }
);

const MainNavigator = createDrawerNavigator({
    MealsFavs: MealsFavTabNavigator,
    Filters: FiltersNavigator,
});

export default createAppContainer(MainNavigator);
