import React from 'react';
//react native
import {FlatList, StyleSheet} from 'react-native';
//react navigation
import {HeaderButtons, Item} from "react-navigation-header-buttons";
//components
import CategoryGridTile from "../Components/CategoryGridTile";
import HeaderButton from '../Components/HeaderButton';
//dummy
import {CATEGORIES} from "../data/dummy-data";

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

CategoriesScreen.navigationOptions = ({navigation: {toggleDrawer}}) => {
    return {
        headerTitle: 'Meal Categories',
        headerLeft: (
            <HeaderButtons HeaderButtonComponent={HeaderButton} title="categories-screen">
                <Item
                    title="Menu"
                    label="Menu"
                    iconName="ios-menu"
                    onPress={() => toggleDrawer()}/>
            </HeaderButtons>
        )
    }
};

export default CategoriesScreen;
