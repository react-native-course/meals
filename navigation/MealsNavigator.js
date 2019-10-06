import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
//components
import CategoriesScreen from "../Screens/CategoriesScreen";
import CategoryMealsScreen from "../Screens/CategoryMealsScreen";
import MealDetailScreen from "../Screens/MealDetailScreen";

const MealsNavigator = createStackNavigator({
    Categories: CategoriesScreen,
    CategoryMeals: {
        screen: CategoryMealsScreen,
    },
    MealDetail: MealDetailScreen,
});

export default createAppContainer(MealsNavigator);
