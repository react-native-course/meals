import React from 'react';
import {StyleSheet, Text, View} from "react-native";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import HeaderButton from '../Components/HeaderButton';

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

const FiltersScreen = () => {
    return (
        <View style={styles.screen}>
            <Text>The filters screen</Text>
        </View>
    );
};

FiltersScreen.navigationOptions = ({navigation: {toggleDrawer}}) => {
    return {
        headerTitle: 'Filter Meals',
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

export default FiltersScreen;
