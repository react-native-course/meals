import React from 'react';
import {connect} from "react-redux";
//selectors
import {getFilteredMeals} from "../store/selectors/mealsSelectors";
//components
import MealList from "../Components/MealList";
//dummy
import {CATEGORIES} from "../data/dummy-data";
import DefaultText from "../Components/DefaultText";
import {StyleSheet, View} from "react-native";

const styles = StyleSheet.create({
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

const CategoryMealsScreen = ({navigation: {navigate, getParam}, filteredMeals}) => {
    const catId = getParam('categoryId'),
        displayMeals = filteredMeals.filter(meal => meal.categoryIds.indexOf(catId) >= 0);

    if(displayMeals.length === 0) {
        return (
            <View style={styles.content}>
                <DefaultText>No meals found, maybe check your filters?</DefaultText>
            </View>
        );
    }
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
