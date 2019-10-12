import {Platform} from "react-native";
//react navigation
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
//components
import CategoriesScreen from "../Screens/CategoriesScreen";
import CategoryMealsScreen from "../Screens/CategoryMealsScreen";
import MealDetailScreen from "../Screens/MealDetailScreen";
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

export default createAppContainer(MealsNavigator);
