import React from 'react';
import {connect} from "react-redux";
//react native
import {View, StyleSheet, FlatList} from 'react-native';
//selectors
import {getFavoriteMeals} from "../store/selectors/mealsSelectors";
//components
import MealItem from "./MealItem";

const styles = StyleSheet.create({
    list: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15
    }
});

const MealList = ({navigate, listData, favoriteMeals}) => {
    const goToMealDetailScreen = (id, title) => {
        navigate('MealDetail', {
            mealId: id,
            mealTitle: title,
            isFavorite: favoriteMeals.some(meal => meal.id === id)
        })
    };

    const renderMealItem = (itemData) => (
        <MealItem
            title={itemData.item.title}
            image={itemData.item.imageUrl}
            duration={itemData.item.duration}
            complexity={itemData.item.complexity}
            affordability={itemData.item.affordability}
            onSelectMeal={() => goToMealDetailScreen(itemData.item.id, itemData.item.title)}/>
    );

    return (
        <View style={styles.list}>
            <FlatList
                data={listData}
                keyExtractor={(item, index) => item.id}
                renderItem={renderMealItem}
                style={{width: '100%'}}
            />
        </View>
    );
};

const mapStateToProps = (state) => ({
    favoriteMeals: getFavoriteMeals({state}),
});

export default connect(mapStateToProps)(MealList);
