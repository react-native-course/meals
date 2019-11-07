import React, {useEffect, useCallback} from 'react';
import {connect} from "react-redux";
//react native
import {StyleSheet, Text, View, ScrollView, Image} from "react-native";
//react navigation
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
//selectors
import {getFavoriteMeals, getMeals} from "../store/selectors/mealsSelectors";
//components
import HeaderButton from '../Components/HeaderButton';
import DefaultText from "../Components/DefaultText";
import {toggleFavorite} from "../store/actions/mealsActions";

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
    listItem: {
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

const MealDetailScreen = ({navigation: {getParam, setParams}, meals, favoriteMeals, dispatch}) => {
    const mealId = getParam('mealId'),
        selectedMeal = meals.find(meal => meal.id === mealId),
        currentMealIsFavorite = favoriteMeals.some(meal => meal.id === mealId);

    const toggleFavoriteHandler = useCallback(() => {
        dispatch(toggleFavorite(mealId));
    }, [mealId]);

    useEffect(() => {
        setParams({toggleFav: toggleFavoriteHandler})
    }, [toggleFavoriteHandler]);

    useEffect(() => {
        setParams({isFavorite: currentMealIsFavorite})
    }, [currentMealIsFavorite]);

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
    const title = getParam('mealTitle'),
        isFavorite = getParam('isFavorite');
    return {
        headerTitle: title,
        headerRight: (
            <HeaderButtons HeaderButtonComponent={HeaderButton} title="meal-detail-screen">
                <Item
                    title="Favorite"
                    label="Favorite"
                    iconName={isFavorite ? "ios-star" : "ios-star-outline"}
                    onPress={getParam('toggleFav')}
                />
            </HeaderButtons>
        )
    }
};

const mapStateToProps = (state) => ({
    meals: getMeals({state}),
    favoriteMeals: getFavoriteMeals({state}),
});

export default connect(mapStateToProps)(MealDetailScreen);
