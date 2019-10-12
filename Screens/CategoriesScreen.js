import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {CATEGORIES} from "../data/dummy-data";
import CategoryGridTile from "../Components/CategoryGridTile";

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
});

const CategoriesScreen = ({navigation: {navigate}}) => {
    const goToCategoryMealsScreen = (itemData) => {
        navigate('CategoryMeals', {
            categoryId: itemData.item.id
        });
    };

    const renderGridItem = (itemData) => {
        return <CategoryGridTile
            title={itemData.item.title}
            color={itemData.item.color}
            onSelect={() => goToCategoryMealsScreen(itemData)}/>
    };

    return (
        <FlatList data={CATEGORIES}
                  renderItem={renderGridItem}
                  keyExtractor={(item, index) => item.id}
                  numColumns={2}/>
    )
};

export default CategoriesScreen;
