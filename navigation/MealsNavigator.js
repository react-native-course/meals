import React from 'react';
import {Platform} from "react-native";
import {Ionicons} from '@expo/vector-icons';
//react navigation
import {createAppContainer} from 'react-navigation';
//stack navigator
import {createStackNavigator} from 'react-navigation-stack';
//tab navigator
import {createBottomTabNavigator} from 'react-navigation-tabs';
//components
import CategoriesScreen from "../Screens/CategoriesScreen";
import CategoryMealsScreen from "../Screens/CategoryMealsScreen";
import MealDetailScreen from "../Screens/MealDetailScreen";
import FavoritesScreen from "../Screens/FavoritesScreen";
//constants
import Colors from "../constants/Colors";

const MealsNavigator = createStackNavigator({
        Categories: {
            screen: CategoriesScreen,
            navigationOptions: {
                title: 'Meal Categories'
            }
        },
        CategoryMeals: {
            screen: CategoryMealsScreen,
        },
        MealDetail: MealDetailScreen,
    }, {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
            },
            headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
        }
    }
);

const MealsFavTabNavigator = createBottomTabNavigator({
        Meals: {
            screen: MealsNavigator,
            navigationOptions: {
                tabBarIcon: (tabInfo) => <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor}/>
            }
        },
        Favorites: {
            screen: FavoritesScreen,
            navigationOptions: {
                tabBarIcon: (tabInfo) => <Ionicons name="ios-star" size={25} color={tabInfo.tintColor}/>
            }
        },
    },
    {
        tabBarOptions: {
            activeTintColor: Colors.accentColor,
        }
    });

export default createAppContainer(MealsFavTabNavigator);
