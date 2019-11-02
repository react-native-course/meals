import React, {useState} from 'react';
import {StyleSheet, Text, View, Switch, Platform} from "react-native";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import HeaderButton from '../Components/HeaderButton';
import Colors from "../constants/Colors";

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center'
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 22,
        margin: 20,
        textAlign: 'center'
    },
    filterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '80%',
        marginVertical: 10
    }
});

const FilterSwitch = ({label, value, onChange}) => (
    <View style={styles.filterContainer}>
        <Text>{label}</Text>
        <Switch
            trackColor={{true: Colors.primaryColor}}
            thumbColor={Platform.OS === 'android' ? Colors.primaryColor : ''}
            value={value}
            onValueChange={onChange}/>
    </View>
);

const FiltersScreen = () => {
    const [isGlutenFree, setIsGlutenFree] = useState(false),
    [isLactoseFree, setIsLactoseFree] = useState(false),
    [isVegan, setIsVeganFree] = useState(false),
    [isVegetarian, setIsVegetarianFree] = useState(false);

    const isGlutenFreeHandler = (newValue) => {
        setIsGlutenFree(newValue)
    };

    const isLactoseFreeHandler = (newValue) => {
        setIsLactoseFree(newValue);
    };

    const isVeganHandler = (newValue) => {
        setIsVeganFree(newValue);
    };

    const isVegetarianHandler = (newValue) => {
        setIsVegetarianFree(newValue);
    };


    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Available Filters / Restrictions</Text>
            <FilterSwitch
                label="Gluten-Free"
                value={isGlutenFree}
                onChange={isGlutenFreeHandler}/>
            <FilterSwitch
                label="Lactose-Free"
                value={isLactoseFree}
                onChange={isLactoseFreeHandler}/>
            <FilterSwitch
                label="Vegan"
                value={isVegan}
                onChange={isVeganHandler}/>
            <FilterSwitch
                label="Vegetarian"
                value={isVegetarian}
                onChange={isVegetarianHandler}/>
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
