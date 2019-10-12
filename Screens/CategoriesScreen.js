import React from 'react';
import {View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import {CATEGORIES} from "../data/dummy-data";

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150,
    }
});

const CategoriesScreen = ({navigation: {navigate}}) => {
    const goToCategoryMealsScreen = (itemData) => {
        navigate('CategoryMeals', {
            categoryId: itemData.item.id
        });
    };

    const renderGridItem = (itemData) => (
        <TouchableOpacity  style={styles.gridItem} onPress={() => goToCategoryMealsScreen (itemData)}>
            <View>
                <Text>{itemData.item.title}</Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <FlatList data={CATEGORIES}
                  renderItem={renderGridItem}
                  keyExtractor={(item, index) => item.id}
                  numColumns={2}/>
    )
};

export default CategoriesScreen;
