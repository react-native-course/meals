import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {CATEGORIES} from "../data/dummy-data";

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

const CategoryMealsScreen = ({navigation: {navigate, pop, goBack, getParam}}) => {
    const catId = getParam('categoryId'),
        selectedCategory = CATEGORIES.find(cat => cat.id === catId);

    const goToMealDetail = () => {
        navigate('MealDetail')
    };

    const goBackToPreviousScreen = () => {
        pop();
        // goBack();
    };

    return (
        <View style={styles.screen}>
            <Text>The category meal screen</Text>
            <Text>{selectedCategory.title}</Text>
            <Button title="Go to details!" onPress={goToMealDetail}/>
            <Button title="Go back" onPress={goBackToPreviousScreen}/>
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
