import React from 'react';
import {StyleSheet, Text, View} from "react-native";
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import {MEALS} from "../data/dummy-data";
import HeaderButton from '../Components/HeaderButton';

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
const MealDetailScreen = ({navigation: {getParam}}) => {
    const mealId = getParam('mealId'),
        selectedMeal = MEALS.find(meal => meal.id === mealId);

    return (
        <View style={styles.screen}>
            <Text>{selectedMeal.title}</Text>
        </View>
    );
};

MealDetailScreen.navigationOptions = ({navigation: {getParam}}) => {
    const mealId = getParam('mealId'),
        selectedMeal = MEALS.find(meal => meal.id === mealId);
    return {
        headerTitle: selectedMeal.title,
        headerRight: (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                    title="Favorite"
                    iconName="ios-star"
                    onPress={() => {
                        console.log('Mark as favorite!');
                    }}
                />
                <Item
                    title="Favorite2"
                    iconName="ios-star-outline"
                    onPress={() => {
                        console.log('Mark as favorite!');
                    }}
                />
            </HeaderButtons>
        )
    }
};

export default MealDetailScreen;
