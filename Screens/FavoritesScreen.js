import React from 'react';
import {connect} from "react-redux";
//react native
import {View, StyleSheet} from 'react-native';
//react navigation
import {HeaderButtons, Item} from "react-navigation-header-buttons";
//selectors
import {getFavoriteMeals} from "../store/selectors/mealsSelectors";
//components
import HeaderButton from '../Components/HeaderButton';
import MealList from "../Components/MealList";
import DefaultText from "../Components/DefaultText";

const styles = StyleSheet.create({
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

const FavoritesScreen = ({navigation: {navigate}, favoriteMeals}) => {
    if (favoriteMeals.length === 0) {
        return (
            <View style={styles.content}>
                <DefaultText>No favorite meals Found. Start adding some!</DefaultText>
            </View>
        );
    }
    return (
        <MealList listData={favoriteMeals} navigate={navigate}/>
    );
};

FavoritesScreen.navigationOptions = ({navigation: {toggleDrawer}}) => {
    return {
        headerTitle: 'Your Favourites',
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

const mapStateToProps = (state) => ({
    favoriteMeals: getFavoriteMeals({state}),
});

export default connect(mapStateToProps)(FavoritesScreen);
