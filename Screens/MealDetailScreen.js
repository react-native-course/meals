import React from 'react';
import {StyleSheet, Text, View, ScrollView, Image} from "react-native";
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import {MEALS} from "../data/dummy-data";
import HeaderButton from '../Components/HeaderButton';
import DefaultText from "../Components/DefaultText";

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200,
    },
    details: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 15
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 22,
        textAlign: 'center'
    },
    listItem:  {
        marginVertical: 10,
        marginHorizontal: 20,
        borderColor: "#ccc",
        borderWidth: 1,
        padding: 10,
    }
});

const ListItem = ({children}) => (
  <View style={styles.listItem}>
      <DefaultText>{children}</DefaultText>
  </View>
);

const MealDetailScreen = ({navigation: {getParam}}) => {
    const mealId = getParam('mealId'),
        selectedMeal = MEALS.find(meal => meal.id === mealId);

    return (
        <ScrollView>
            <Image source={{uri: selectedMeal.imageUrl}} style={styles.image}/>
            <View style={styles.details}>
                <DefaultText>{selectedMeal.duration}</DefaultText>
                <DefaultText>{selectedMeal.complexity.toUpperCase()}</DefaultText>
                <DefaultText>{selectedMeal.affordability.toUpperCase()}</DefaultText>
            </View>
            <Text style={styles.title}>Ingredients</Text>
            {selectedMeal.ingredients.map((ingredient) => (
                <ListItem key={ingredient}>{ingredient}</ListItem>
            ))}
            <Text style={styles.title}>Steps</Text>
            {selectedMeal.steps.map((step) => (
                <ListItem key={step}>{step}</ListItem>
            ))}
        </ScrollView>
    );
};

MealDetailScreen.navigationOptions = ({navigation: {getParam}}) => {
    const mealId = getParam('mealId'),
        selectedMeal = MEALS.find(meal => meal.id === mealId);
    return {
        headerTitle: selectedMeal.title,
        headerRight: (
            <HeaderButtons HeaderButtonComponent={HeaderButton} title="meal-detail-screen">
                <Item
                    title="Favorite"
                    label="Favorite"
                    iconName="ios-star"
                    onPress={() => {
                        console.log('Mark as favorite!');
                    }}
                />
            </HeaderButtons>
        )
    }
};

export default MealDetailScreen;
