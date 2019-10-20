import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {CATEGORIES, MEALS} from "../data/dummy-data";
import MealItem from "../Components/MealItem";

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15
    }
});

const CategoryMealsScreen = ({navigation: {navigate, getParam}}) => {
    const catId = getParam('categoryId'),
        displayMeals = MEALS.filter(meal => meal.categoryIds.indexOf(catId) >= 0);

    const goToMealDetailScreen = (id) => {
        navigate('MealDetail', {mealId: id})
    };

    const renderMealItem = (itemData) => (
        <MealItem
            title={itemData.item.title}
            image={itemData.item.imageUrl}
            duration={itemData.item.duration}
            complexity={itemData.item.complexity}
            affordability={itemData.item.affordability}
            onSelectMeal={() => goToMealDetailScreen(itemData.item.id)}/>
    );

    return (
        <View style={styles.screen}>
            <FlatList
                data={displayMeals}
                keyExtractor={(item, index) => item.id}
                renderItem={renderMealItem}
                style={{width: '100%'}}
            />
        </View>
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
