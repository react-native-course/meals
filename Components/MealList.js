import React from 'react';
//react native
import {View, StyleSheet, FlatList} from 'react-native';
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

const MealList = ({navigate, listData}) => {
    const goToMealDetailScreen = (id, title) => {
        navigate('MealDetail', {mealId: id, mealTitle: title})
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

export default MealList;
